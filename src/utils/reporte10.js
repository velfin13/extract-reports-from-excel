import { logo } from "./logo";
import { v4 as uuidv4 } from 'uuid';

export const getPdf = (data = [], cabecera = {}) => {
  var arraydocDefinition = []
  var materias = []
  var dataFinal = [];

  materias.push(data[0][1]);
  materias.push(data[0][8]);
  materias.push(data[0][15]);
  materias.push(data[0][22]);
  materias.push(data[0][29]);
  materias.push(data[0][36]);
  materias.push(data[0][43]);


  for (let i = 0; i < data.length; i++) {
    var temp = {}
    const element = data[i];
    temp.lenguaje = {};
    temp.matematica = {};
    temp.sociales = {};
    temp.ciencia = {};
    temp.eca = {};
    temp.efisica = {};
    temp.ingles = {};

    temp.estudiante = element[0];

    temp.lenguaje.materia = materias[0];
    temp.lenguaje.trimestre1 = element[1];
    temp.lenguaje.trimestre2 = element[2];
    temp.lenguaje.trimestre3 = element[3];
    temp.lenguaje.proyecto = element[4];
    temp.lenguaje.subnivel = element[5];
    temp.lenguaje.promedioTotal = element[6];
    temp.lenguaje.estado = element[7];

    temp.matematica.materia = materias[1];
    temp.matematica.trimestre1 = element[9];
    temp.matematica.trimestre2 = element[9];
    temp.matematica.trimestre3 = element[10];
    temp.matematica.proyecto = element[11];
    temp.matematica.subnivel = element[12];
    temp.matematica.promedioTotal = element[13];
    temp.matematica.estado = element[14];

    temp.sociales.materia = materias[2];
    temp.sociales.trimestre1 = element[15];
    temp.sociales.trimestre2 = element[16];
    temp.sociales.trimestre3 = element[17];
    temp.sociales.proyecto = element[18];
    temp.sociales.subnivel = element[19];
    temp.sociales.promedioTotal = element[20];
    temp.sociales.estado = element[21];

    temp.ciencia.materia = materias[3];
    temp.ciencia.trimestre1 = element[22];
    temp.ciencia.trimestre2 = element[23];
    temp.ciencia.trimestre3 = element[24];
    temp.ciencia.proyecto = element[25];
    temp.ciencia.subnivel = element[26];
    temp.ciencia.promedioTotal = element[27];
    temp.ciencia.estado = element[28];

    temp.eca.materia = materias[4];
    temp.eca.trimestre1 = element[29];
    temp.eca.trimestre2 = element[30];
    temp.eca.trimestre3 = element[31];
    temp.eca.proyecto = element[32];
    temp.eca.subnivel = element[33];
    temp.eca.promedioTotal = element[34];
    temp.eca.estado = element[35];

    temp.efisica.materia = materias[5];
    temp.efisica.trimestre1 = element[36];
    temp.efisica.trimestre2 = element[37];
    temp.efisica.trimestre3 = element[38];
    temp.efisica.proyecto = element[39];
    temp.efisica.subnivel = element[40];
    temp.efisica.promedioTotal = element[41];
    temp.efisica.estado = element[42];

    temp.ingles.materia = materias[6];
    temp.ingles.trimestre1 = element[43];
    temp.ingles.trimestre2 = element[44];
    temp.ingles.trimestre3 = element[45];
    temp.ingles.proyecto = element[46];
    temp.ingles.subnivel = element[47];
    temp.ingles.promedioTotal = element[48];
    temp.ingles.estado = element[49];

    console.log(element);
    dataFinal.push(temp);
  }
  dataFinal.splice(0, 2);

  dataFinal.forEach(i => {
    console.log(i);

    const lenguaje = [
      { text: i.lenguaje.materia, alignment: "center" },
      { text: i.lenguaje.trimestre1, alignment: "center" },
      { text: i.lenguaje.trimestre2, alignment: "center" },
      { text: i.lenguaje.trimestre3, alignment: "center" },
      { text: i.lenguaje.proyecto, alignment: "center" },
      { text: i.lenguaje.subnivel, alignment: "center" },
      { text: i.lenguaje.promedioTotal, alignment: "center", },
      { text: i.lenguaje.estado, alignment: "center" },
    ]

    const matematica = [
      { text: i.matematica.materia, alignment: "center" },
      { text: i.matematica.trimestre1, alignment: "center" },
      { text: i.matematica.trimestre2, alignment: "center" },
      { text: i.matematica.trimestre3, alignment: "center" },
      { text: i.matematica.proyecto, alignment: "center" },
      { text: i.matematica.subnivel, alignment: "center" },
      { text: i.matematica.promedioTotal, alignment: "center", },
      { text: i.matematica.estado, alignment: "center" },
    ]

    const sociales = [
      { text: i.sociales.materia, alignment: "center" },
      { text: i.sociales.trimestre1, alignment: "center" },
      { text: i.sociales.trimestre2, alignment: "center" },
      { text: i.sociales.trimestre3, alignment: "center" },
      { text: i.sociales.proyecto, alignment: "center" },
      { text: i.sociales.subnivel, alignment: "center" },
      { text: i.sociales.promedioTotal, alignment: "center", },
      { text: i.sociales.estado, alignment: "center" },
    ]

    const ciencias = [
      { text: i.ciencia.materia, alignment: "center" },
      { text: i.ciencia.trimestre1, alignment: "center" },
      { text: i.ciencia.trimestre2, alignment: "center" },
      { text: i.ciencia.trimestre3, alignment: "center" },
      { text: i.ciencia.proyecto, alignment: "center" },
      { text: i.ciencia.subnivel, alignment: "center" },
      { text: i.ciencia.promedioTotal, alignment: "center", },
      { text: i.ciencia.estado, alignment: "center" },
    ]

    const eca = [
      { text: i.eca.materia, alignment: "center" },
      { text: i.eca.trimestre1, alignment: "center" },
      { text: i.eca.trimestre2, alignment: "center" },
      { text: i.eca.trimestre3, alignment: "center" },
      { text: i.eca.proyecto, alignment: "center" },
      { text: i.eca.subnivel, alignment: "center" },
      { text: i.eca.promedioTotal, alignment: "center", },
      { text: i.eca.estado, alignment: "center" },
    ]

    const efisica = [
      { text: i.efisica.materia, alignment: "center" },
      { text: i.efisica.trimestre1, alignment: "center" },
      { text: i.efisica.trimestre2, alignment: "center" },
      { text: i.efisica.trimestre3, alignment: "center" },
      { text: i.efisica.proyecto, alignment: "center" },
      { text: i.efisica.subnivel, alignment: "center" },
      { text: i.efisica.promedioTotal, alignment: "center", },
      { text: i.efisica.estado, alignment: "center" },
    ]

    const ingles = [
      { text: i.ingles.materia, alignment: "center" },
      { text: i.ingles.trimestre1, alignment: "center" },
      { text: i.ingles.trimestre2, alignment: "center" },
      { text: i.ingles.trimestre3, alignment: "center" },
      { text: i.ingles.proyecto, alignment: "center" },
      { text: i.ingles.subnivel, alignment: "center" },
      { text: i.ingles.promedioTotal, alignment: "center", },
      { text: i.ingles.estado, alignment: "center" },
    ]

    const raya = [
      { text: "",colSpan: 2, border: [false, false, false, false] },
      { },
      { 
        text: "__________________________________", 
        margin: [0, 80, 0, 0],
        alignment: "center", 
        colSpan: 4,
        border: [false, false, false, false] 
      },
      {},
      {},
      {},
      { text: "",colSpan: 2, border: [false, false, false, false] },
      { },
    ]
    const tutor = [
      { text: "",colSpan: 2, border: [false, false, false, false] },
      { },
      { 
        text: cabecera.tutor, 
        margin: [0, 0, 0, 0],
        alignment: "center", 
        colSpan: 4,
        border: [false, false, false, false] 
      },
      {},
      {},
      {},
      { text: "",colSpan: 2, border: [false, false, false, false] },
      { },
    ]

    var docDefinition = {
      content: [
        { image: logo, width: 350, alignment: "right" },
        { text: "", margin: [0, 10] },
        {
          text: "Reporte de Calificaciones",
          style: "header",
          alignment: "center",
        },
        { text: "", margin: [0, 10] },
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
            widths: ["25%", "*", "*", "*", "*","*", "*", "*"],
            body: [
              [
                { text: "Rendimiento Académico", bold: true, alignment: "center", },
                { text: "Trimestre 1", bold: true, alignment: "center" },
                { text: "Trimestre 2", bold: true, alignment: "center" },
                { text: "Trimestre 3", bold: true, alignment: "center" },
                { text: "Proyecto I", bold: true, alignment: "center" },
                { text: "Prueba de subnivel", bold: true, alignment: "center" },
                { text: "Promedio total", bold: true, alignment: "center", },
                { text: "Estado", bold: true, alignment: "center" },
              ],
              lenguaje,
              matematica,
              sociales,
              ciencias,
              eca,
              efisica,
              ingles,
              raya,
              tutor
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
