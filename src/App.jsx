import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { Table } from './components/Table/Table';

const ExcelReader = () => {
  const [excelData, setExcelData] = useState([]);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      // No files were dropped
      alert('Please drop a valid Excel file.');
      return;
    }
  
    const file = acceptedFiles[0];
  
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const workbook = XLSX.read(binaryData, { type: 'binary' });
  
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
    accept: '.xls, .xlsx',
  });

  const handlePrint = () => {
    // Lógica para imprimir aquí
    console.log('Imprimir datos Excel:', excelData);
    // Aquí puedes utilizar los datos de excel para generar un archivo PDF
    // y luego imprimir ese PDF.
  };

  return (
    <div className='container mt-4'>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Arrastra y suelta un archivo Excel o haz clic para seleccionar uno.</p>
      </div>

      {excelData.length > 0 && (
        <Table excelData={excelData} />
      )}

      {excelData.length > 0 && (
        <div className='d-flex align-items-center justify-content-center mb-4'>
          <button className='btn btn-primary' onClick={handlePrint}>Imprimir</button>
        </div>
      )}

    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ExcelReader;
