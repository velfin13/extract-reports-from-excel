import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import JSZip from "jszip";
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
  const [tutor, setTutor] = useState("");
  const [paralelo, setParalelo] = useState("");
  const [jornada, setJornada] = useState("");
  const [curso, setCurso] = useState("");
  const [periodo, setPeriodo] = useState("");

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

    const cabecera = {
      tutor,
      paralelo,
      curso,
      jornada,
      periodo
    }

    switch (routeCurrent) {
      case matriz_8_a_9:
        docDefinitionArray = matriz8a9(excelData,cabecera);
        zipFilename = "reportes-8-a-9.zip";
        break;
      case reporte_bgu_1_a_2:
        docDefinitionArray = reportebgu1a2(excelData,cabecera);
        zipFilename = "reportes-bgu-1-a-2.zip";
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
          <h3 className="text-center">Cabecera del pdf</h3>
          <div class="mb-3 row">
            <label for="inputTutor" class="col-12 col-form-label">
              Tutor
            </label>
            <div class="col-12">
              <input value={tutor} onChange={e=>setTutor(e.target.value)} type="text" class="form-control" name="tutor" id="inputTutor" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputCurso" class="col-12 col-form-label">
              Curso
            </label>
            <div class="col-12">
              <input value={curso} onChange={e=>setCurso(e.target.value)} type="text" class="form-control" name="curso" id="inputCurso" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputParalelo" class="col-12 col-form-label">
              Paralelo
            </label>
            <div class="col-12">
              <input value={paralelo} onChange={e=>setParalelo(e.target.value)} type="text" class="form-control" name="paralelo" id="inputParalelo" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputJornada" class="col-12 col-form-label">
              Jornada
            </label>
            <div class="col-12">
              <input value={jornada} onChange={e=>setJornada(e.target.value)} type="text" class="form-control" name="jornada" id="inputJornada" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPeriodo" class="col-12 col-form-label">
              Periodo Lectivo
            </label>
            <div class="col-12">
              <input value={periodo} onChange={e=>setPeriodo(e.target.value)} type="text" class="form-control" name="periodo" id="inputPeriodo" />
            </div>
          </div>
          <hr />
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
