import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { Table } from "../Table/Table";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export const Dropzone = () => {
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
    console.log("Imprimir datos Excel:", excelData);
    var docDefinition = {
      content: [
        { text: "This is a header", style: "header" },
        "No styling here, this is a standard paragraph",
        { text: "Another text", style: "anotherStyle" },
        { text: "Multiple styles applied", style: ["header", "anotherStyle"] },
      ],

      styles: {
        header: {
          fontSize: 22,
          bold: true,
        },
        anotherStyle: {
          italics: true,
          alignment: "right",
        },
      },
    };

    const pdf = pdfMake.createPdf(docDefinition);
    pdf.open();
    pdf.save("reporte.pdf");
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
            <div className="d-flex align-items-center justify-content-center mb-4">
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
