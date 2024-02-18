import { logo } from "./logo";
import { v4 as uuidv4 } from 'uuid';

export const getPdf = (data = [], cabecera = {}) => {
  var arraydocDefinition = []
  var materias = []
  var dataFinal = [];

  materias.push(data[0][1]);
  materias.push(data[0][4]);
  materias.push(data[0][7]);
  materias.push(data[0][10]);
  materias.push(data[0][13]);
  materias.push(data[0][16]);
  materias.push(data[0][19]);


  for (let i = 0; i < data.length; i++) {
    var temp = {}
    const element = data[i];
    temp.lenguaje = {};
    temp.matematica = {};
    temp.sociales = {};
    temp.ciencia = {};
    temp.artistica = {};
    temp.efisica = {};
    temp.ingles = {};

    temp.estudiante = element[0];
    temp.lenguaje.materia = materias[0];
    temp.lenguaje.trimestre1 = element[1];
    temp.lenguaje.trimestre2 = element[2];
    temp.lenguaje.trimestre3 = element[3];

    temp.matematica.materia = materias[1];
    temp.matematica.trimestre1 = element[4];
    temp.matematica.trimestre2 = element[5];
    temp.matematica.trimestre3 = element[6];

    temp.sociales.materia = materias[2];
    temp.sociales.trimestre1 = element[7];
    temp.sociales.trimestre2 = element[8];
    temp.sociales.trimestre3 = element[9];

    temp.ciencia.materia = materias[3];
    temp.ciencia.trimestre1 = element[10];
    temp.ciencia.trimestre2 = element[11];
    temp.ciencia.trimestre3 = element[12];

    temp.artistica.materia = materias[4];
    temp.artistica.trimestre1 = element[13];
    temp.artistica.trimestre2 = element[14];
    temp.artistica.trimestre3 = element[15];

    temp.efisica.materia = materias[5];
    temp.efisica.trimestre1 = element[16];
    temp.efisica.trimestre2 = element[17];
    temp.efisica.trimestre3 = element[18];

    temp.ingles.materia = materias[6];
    temp.ingles.trimestre1 = element[19];
    temp.ingles.trimestre2 = element[20];
    temp.ingles.trimestre3 = element[21];

    temp.subnivel = element[22];
    temp.final = element[23];
    temp.estado = element[24];

    dataFinal.push(temp);
  }
  dataFinal.splice(0, 2);

  dataFinal.forEach(i => {

    const lenguaje = [
      { text: i.lenguaje.materia, alignment: "center" },
      { text: i.lenguaje.trimestre1, alignment: "center" },
      { text: i.lenguaje.trimestre2, alignment: "center" },
      { text: i.lenguaje.trimestre3, alignment: "center" },
      { text: i.subnivel, alignment: "center", },
      { text: i.final, alignment: "center", },
      { text: i.estado, alignment: "center" },
    ]

    const matematica = [
      { text: i.matematica.materia, alignment: "center" },
      { text: i.matematica.trimestre1, alignment: "center" },
      { text: i.matematica.trimestre2, alignment: "center" },
      { text: i.matematica.trimestre3, alignment: "center" },
      { text: i.subnivel, alignment: "center", },
      { text: i.final, alignment: "center", },
      { text: i.estado, alignment: "center" },
    ]

    const sociales = [
      { text: i.sociales.materia, alignment: "center" },
      { text: i.sociales.trimestre1, alignment: "center" },
      { text: i.sociales.trimestre2, alignment: "center" },
      { text: i.sociales.trimestre3, alignment: "center" },
      { text: i.subnivel, alignment: "center", },
      { text: i.final, alignment: "center", },
      { text: i.estado, alignment: "center" },
    ]

    const ciencias = [
      { text: i.ciencia.materia, alignment: "center" },
      { text: i.ciencia.trimestre1, alignment: "center" },
      { text: i.ciencia.trimestre2, alignment: "center" },
      { text: i.ciencia.trimestre3, alignment: "center" },
      { text: i.subnivel, alignment: "center", },
      { text: i.final, alignment: "center", },
      { text: i.estado, alignment: "center" },
    ]

    const artistica = [
      { text: i.artistica.materia, alignment: "center" },
      { text: i.artistica.trimestre1, alignment: "center" },
      { text: i.artistica.trimestre2, alignment: "center" },
      { text: i.artistica.trimestre3, alignment: "center" },
      { text: i.subnivel, alignment: "center", },
      { text: i.final, alignment: "center", },
      { text: i.estado, alignment: "center" },
    ]

    const efisica = [
      { text: i.efisica.materia, alignment: "center" },
      { text: i.efisica.trimestre1, alignment: "center" },
      { text: i.efisica.trimestre2, alignment: "center" },
      { text: i.efisica.trimestre3, alignment: "center" },
      { text: i.subnivel, alignment: "center", },
      { text: i.final, alignment: "center", },
      { text: i.estado, alignment: "center" },
    ]

    const ingles = [
      { text: i.ingles.materia, alignment: "center" },
      { text: i.ingles.trimestre1, alignment: "center" },
      { text: i.ingles.trimestre2, alignment: "center" },
      { text: i.ingles.trimestre3, alignment: "center" },
      { text: i.subnivel, alignment: "center", },
      { text: i.final, alignment: "center", },
      { text: i.estado, alignment: "center" },
    ]

    var docDefinition = {
      content: [
        { image: logo, width: 260, alignment: "right" },
        {
          text: "Reporte de Calificaciones",
          style: "header",
          alignment: "center",
        },
        { text: "", margin: [0, 15] },
        {
          table: {
            widths: ["10%", "23.33%", "8%", "25.33%", "8%", "25.33%"],
            body: [
              [
                { text: "Grado/Curso", bold: true },
                cabecera.curso,
                { text: "Paralelo", bold: true },
                cabecera.paralelo,
                { text: "Jornada", bold: true },
                cabecera.jornada,
              ],
            ],
          },
        },
        {
          table: {
            widths: ["15%", "35%", "15%", "35%"],
            body: [
              [
                { text: "Estudiante", bold: true },
                i.estudiante,
                { text: "Periodo", bold: true },
                cabecera.periodo,
              ],
            ],
          },
        },
        { text: "", margin: [0, 15] },
        {
          table: {
            widths: ["25%", "*", "*", "*","*","*", "*"],

            body: [
              [
                { text: "Rendimiento Académico", bold: true, alignment: "center", },
                { text: "Trimestre 1", bold: true, alignment: "center" },
                { text: "Trimestre 2", bold: true, alignment: "center" },
                { text: "Trimestre 3", bold: true, alignment: "center" },
                { text: "Prueba de Subnivel", bold: true, alignment: "center" },
                { text: "Promedio Final", bold: true, alignment: "center", },
                { text: "Estado", bold: true, alignment: "center" },
              ],
              lenguaje,
              matematica,
              sociales,
              ciencias,
              artistica,
              efisica,
              ingles
            ],
          },
        },
      ],
      pageOrientation: "landscape",
      styles: {
        header: {
          fontSize: 22,
          bold: true,
        },
      },
      filename:i.estudiante + "-" + uuidv4().substring(0, 5) + ".pdf"
    };

    arraydocDefinition.push(docDefinition);
  });

  return arraydocDefinition;
};
