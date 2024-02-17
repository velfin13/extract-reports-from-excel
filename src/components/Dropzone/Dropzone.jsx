import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import JSZip from 'jszip';
import { Table } from "../Table/Table";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { getPdf as matriz8a9 } from "../../utils/matriz8a9";
import { getPdf as reportebgu1a2 } from "../../utils/reportebgu1a2";
import { matriz_8_a_9, reporte_bgu_1_a_2 } from "../../utils/routes";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export const Dropzone = ({ routeCurrent }) => {
  const [excelData, setExcelData] = useState([]);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      // No files were dropped
      alert("Please drop a valid Excel file.");
      return;
    }

    const file = acceptedFiles[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryData = e.target.result;
      const workbook = XLSX.read(binaryData, { type: "binary" });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log(jsonData);
      setExcelData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".xls, .xlsx",
  });

  const handlePrint = () => {
    if (routeCurrent == "/") {
      alert("selecciona un formato!");
      return;
    }
    var docDefinitionArray = [];
    var zipFilename = "documentos.zip";

    switch (routeCurrent) {
      case matriz_8_a_9:
        docDefinitionArray = matriz8a9(excelData);
        zipFilename = "reportes-8-a-9.zip"
        break;
      case reporte_bgu_1_a_2:
        docDefinitionArray = reportebgu1a2(excelData);
        zipFilename = "reportes-bgu-1-a-2.zip"
        break;

      default:
        break;
    }
    const zip = new JSZip();
    docDefinitionArray.forEach((docDefinition, index) => {
      const pdf = pdfMake.createPdf(docDefinition);

      pdf.getBlob((blob) => {
        const filename = docDefinitionArray[index].filename;
        zip.file(filename, blob, { binary: true });

        if (index === docDefinitionArray.length - 1) {
          zip.generateAsync({ type: "blob" }).then((content) => {
            saveAs(content, zipFilename);
          });
        }
      });
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div {...getRootProps()} style={dropzoneStyle}>
            <input {...getInputProps()} />
            <p>
              Arrastra y suelta un archivo Excel o haz clic para seleccionar
              uno.
            </p>
          </div>
        </div>

        {excelData.length > 0 && (
          <div className="col-md-9">
            <Table excelData={excelData} />
            <div className="d-flex align-items-center justify-content-center mt-4">
              <button className="btn btn-primary" onClick={handlePrint}>
                Imprimir
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
