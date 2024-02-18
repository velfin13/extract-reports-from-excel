import { logo } from "./logo";

export const getPdf = (data = [], cabecera = {}) => {
  var arraydocDefinition = []
  var materias = []
  var dataFinal = [];

  materias.push(data[0][1]);
  materias.push(data[0][7]);
  materias.push(data[0][13]);
  materias.push(data[0][19]);
  materias.push(data[0][25]);
  materias.push(data[0][31]);
  materias.push(data[0][37]);

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
    temp.lenguaje.promedioTotal = element[5];
    temp.lenguaje.estado = element[6];

    temp.matematica.materia = materias[1];
    temp.matematica.trimestre1 = element[7];
    temp.matematica.trimestre2 = element[8];
    temp.matematica.trimestre3 = element[9];
    temp.matematica.proyecto = element[10];
    temp.matematica.promedioTotal = element[11];
    temp.matematica.estado = element[12];

    temp.sociales.materia = materias[2];
    temp.sociales.trimestre1 = element[13];
    temp.sociales.trimestre2 = element[14];
    temp.sociales.trimestre3 = element[15];
    temp.sociales.proyecto = element[16];
    temp.sociales.promedioTotal = element[17];
    temp.sociales.estado = element[18];

    temp.ciencia.materia = materias[3];
    temp.ciencia.trimestre1 = element[19];
    temp.ciencia.trimestre2 = element[20];
    temp.ciencia.trimestre3 = element[21];
    temp.ciencia.proyecto = element[22];
    temp.ciencia.promedioTotal = element[23];
    temp.ciencia.estado = element[24];

    temp.eca.materia = materias[4];
    temp.eca.trimestre1 = element[25];
    temp.eca.trimestre2 = element[26];
    temp.eca.trimestre3 = element[27];
    temp.eca.proyecto = element[28];
    temp.eca.promedioTotal = element[29];
    temp.eca.estado = element[30];

    temp.efisica.materia = materias[5];
    temp.efisica.trimestre1 = element[31];
    temp.efisica.trimestre2 = element[32];
    temp.efisica.trimestre3 = element[33];
    temp.efisica.proyecto = element[34];
    temp.efisica.promedioTotal = element[35];
    temp.efisica.estado = element[36];

    temp.ingles.materia = materias[6];
    temp.ingles.trimestre1 = element[37];
    temp.ingles.trimestre2 = element[38];
    temp.ingles.trimestre3 = element[39];
    temp.ingles.proyecto = element[40];
    temp.ingles.promedioTotal = element[41];
    temp.ingles.estado = element[42];

    temp.final = element[43];
    temp.academico = element[44];

    dataFinal.push(temp);
  }
  dataFinal.splice(0, 2);

  dataFinal.forEach(i => {

    const lenguaje = [
      { text: i.lenguaje.materia, alignment: "center" },
      { text: i.lenguaje.trimestre1, alignment: "center" },
      { text: i.lenguaje.trimestre2, alignment: "center" },
      { text: i.lenguaje.trimestre3, alignment: "center" },
      { text: i.lenguaje.proyecto, alignment: "center" },
      { text: i.lenguaje.promedioTotal, alignment: "center", },
      { text: i.lenguaje.estado, alignment: "center" },
    ]

    const matematica = [
      { text: i.matematica.materia, alignment: "center" },
      { text: i.matematica.trimestre1, alignment: "center" },
      { text: i.matematica.trimestre2, alignment: "center" },
      { text: i.matematica.trimestre3, alignment: "center" },
      { text: i.matematica.proyecto, alignment: "center" },
      { text: i.matematica.promedioTotal, alignment: "center", },
      { text: i.matematica.estado, alignment: "center" },
    ]

    const sociales = [
      { text: i.sociales.materia, alignment: "center" },
      { text: i.sociales.trimestre1, alignment: "center" },
      { text: i.sociales.trimestre2, alignment: "center" },
      { text: i.sociales.trimestre3, alignment: "center" },
      { text: i.sociales.proyecto, alignment: "center" },
      { text: i.sociales.promedioTotal, alignment: "center", },
      { text: i.sociales.estado, alignment: "center" },
    ]

    const ciencias = [
      { text: i.ciencia.materia, alignment: "center" },
      { text: i.ciencia.trimestre1, alignment: "center" },
      { text: i.ciencia.trimestre2, alignment: "center" },
      { text: i.ciencia.trimestre3, alignment: "center" },
      { text: i.ciencia.proyecto, alignment: "center" },
      { text: i.ciencia.promedioTotal, alignment: "center", },
      { text: i.ciencia.estado, alignment: "center" },
    ]

    const eca = [
      { text: i.eca.materia, alignment: "center" },
      { text: i.eca.trimestre1, alignment: "center" },
      { text: i.eca.trimestre2, alignment: "center" },
      { text: i.eca.trimestre3, alignment: "center" },
      { text: i.eca.proyecto, alignment: "center" },
      { text: i.eca.promedioTotal, alignment: "center", },
      { text: i.eca.estado, alignment: "center" },
    ]

    const efisica = [
      { text: i.efisica.materia, alignment: "center" },
      { text: i.efisica.trimestre1, alignment: "center" },
      { text: i.efisica.trimestre2, alignment: "center" },
      { text: i.efisica.trimestre3, alignment: "center" },
      { text: i.efisica.proyecto, alignment: "center" },
      { text: i.efisica.promedioTotal, alignment: "center", },
      { text: i.efisica.estado, alignment: "center" },
    ]

    const ingles = [
      { text: i.ingles.materia, alignment: "center" },
      { text: i.ingles.trimestre1, alignment: "center" },
      { text: i.ingles.trimestre2, alignment: "center" },
      { text: i.ingles.trimestre3, alignment: "center" },
      { text: i.ingles.proyecto, alignment: "center" },
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
        colSpan: 3,
        border: [false, false, false, false] 
      },
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
        colSpan: 3,
        border: [false, false, false, false] 
      },
      {},
      {},
      { text: "",colSpan: 2, border: [false, false, false, false] },
      { },
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
            widths: ["25%", "*", "*", "*", "*", "*", "*"],

            body: [
              [
                { text: "Rendimiento Académico", bold: true, alignment: "center", },
                { text: "Trimestre 1 (3)", bold: true, alignment: "center" },
                { text: "Trimestre 2 (3)", bold: true, alignment: "center" },
                { text: "Trimestre 3 (3)", bold: true, alignment: "center" },
                { text: "Proyecto I.(1)", bold: true, alignment: "center" },
                { text: "Promedio total (T1 + T2 + T3 + PI)", bold: true, alignment: "center", },
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
      filename:i.estudiante + ".pdf"
    };

    arraydocDefinition.push(docDefinition);
  });

  return arraydocDefinition;
};
