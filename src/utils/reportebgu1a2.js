import { logo } from "./logo";
import { v4 as uuidv4 } from 'uuid';

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
  materias.push(data[0][43]);
  materias.push(data[0][49]);
  materias.push(data[0][55]);
  materias.push(data[0][61]);
  materias.push(data[0][67]);

  for (let i = 0; i < data.length; i++) {
    var temp = {}
    const element = data[i];
    temp.matematica = {};
    temp.fisica = {};
    temp.quimica = {};
    temp.biologia = {};
    temp.historia = {};
    temp.eciudadania = {};
    temp.filosofia = {};
    temp.lengua = {};
    temp.ingles = {};
    temp.eca = {};
    temp.efisica = {};
    temp.emprendimiento = {};

    temp.estudiante = element[0];
    temp.matematica.materia = materias[0];
    temp.matematica.trimestre1 = element[1];
    temp.matematica.trimestre2 = element[2];
    temp.matematica.trimestre3 = element[3];
    temp.matematica.proyecto = element[4];
    temp.matematica.promedioTotal = element[5];
    temp.matematica.estado = element[6];

    temp.fisica.materia = materias[1];
    temp.fisica.trimestre1 = element[7];
    temp.fisica.trimestre2 = element[8];
    temp.fisica.trimestre3 = element[9];
    temp.fisica.proyecto = element[10];
    temp.fisica.promedioTotal = element[11];
    temp.fisica.estado = element[12];

    temp.quimica.materia = materias[2];
    temp.quimica.trimestre1 = element[13];
    temp.quimica.trimestre2 = element[14];
    temp.quimica.trimestre3 = element[15];
    temp.quimica.proyecto = element[16];
    temp.quimica.promedioTotal = element[17];
    temp.quimica.estado = element[18];

    temp.biologia.materia = materias[3];
    temp.biologia.trimestre1 = element[19];
    temp.biologia.trimestre2 = element[20];
    temp.biologia.trimestre3 = element[21];
    temp.biologia.proyecto = element[22];
    temp.biologia.promedioTotal = element[23];
    temp.biologia.estado = element[24];

    temp.historia.materia = materias[4];
    temp.historia.trimestre1 = element[25];
    temp.historia.trimestre2 = element[26];
    temp.historia.trimestre3 = element[27];
    temp.historia.proyecto = element[28];
    temp.historia.promedioTotal = element[29];
    temp.historia.estado = element[30];

    temp.eciudadania.materia = materias[5];
    temp.eciudadania.trimestre1 = element[31];
    temp.eciudadania.trimestre2 = element[32];
    temp.eciudadania.trimestre3 = element[33];
    temp.eciudadania.proyecto = element[34];
    temp.eciudadania.promedioTotal = element[35];
    temp.eciudadania.estado = element[36];

    temp.filosofia.materia = materias[6];
    temp.filosofia.trimestre1 = element[37];
    temp.filosofia.trimestre2 = element[38];
    temp.filosofia.trimestre3 = element[39];
    temp.filosofia.proyecto = element[40];
    temp.filosofia.promedioTotal = element[41];
    temp.filosofia.estado = element[42];

    temp.lengua.materia = materias[7];
    temp.lengua.trimestre1 = element[43];
    temp.lengua.trimestre2 = element[44];
    temp.lengua.trimestre3 = element[45];
    temp.lengua.proyecto = element[46];
    temp.lengua.promedioTotal = element[47];
    temp.lengua.estado = element[48];

    temp.ingles.materia = materias[8];
    temp.ingles.trimestre1 = element[49];
    temp.ingles.trimestre2 = element[50];
    temp.ingles.trimestre3 = element[51];
    temp.ingles.proyecto = element[52];
    temp.ingles.promedioTotal = element[53];
    temp.ingles.estado = element[54];

    temp.eca.materia = materias[9];
    temp.eca.trimestre1 = element[55];
    temp.eca.trimestre2 = element[56];
    temp.eca.trimestre3 = element[57];
    temp.eca.proyecto = element[58];
    temp.eca.promedioTotal = element[59];
    temp.eca.estado = element[60];

    temp.efisica.materia = materias[10];
    temp.efisica.trimestre1 = element[61];
    temp.efisica.trimestre2 = element[62];
    temp.efisica.trimestre3 = element[63];
    temp.efisica.proyecto = element[64];
    temp.efisica.promedioTotal = element[65];
    temp.efisica.estado = element[66];

    temp.emprendimiento.materia = materias[11];
    temp.emprendimiento.trimestre1 = element[67];
    temp.emprendimiento.trimestre2 = element[68];
    temp.emprendimiento.trimestre3 = element[69];
    temp.emprendimiento.proyecto = element[70];
    temp.emprendimiento.promedioTotal = element[71];
    temp.emprendimiento.estado = element[72];

    dataFinal.push(temp);
  }
  dataFinal.splice(0, 2);

  dataFinal.forEach(i => {

    const matematica = [
      { text: i.matematica.materia, alignment: "center" },
      { text: i.matematica.trimestre1, alignment: "center" },
      { text: i.matematica.trimestre2, alignment: "center" },
      { text: i.matematica.trimestre3, alignment: "center" },
      { text: i.matematica.proyecto, alignment: "center" },
      { text: i.matematica.promedioTotal, alignment: "center", },
      { text: i.matematica.estado, alignment: "center" },
    ]

    const fisica = [
      { text: i.fisica.materia, alignment: "center" },
      { text: i.fisica.trimestre1, alignment: "center" },
      { text: i.fisica.trimestre2, alignment: "center" },
      { text: i.fisica.trimestre3, alignment: "center" },
      { text: i.fisica.proyecto, alignment: "center" },
      { text: i.fisica.promedioTotal, alignment: "center", },
      { text: i.fisica.estado, alignment: "center" },
    ]

    const quimica = [
      { text: i.quimica.materia, alignment: "center" },
      { text: i.quimica.trimestre1, alignment: "center" },
      { text: i.quimica.trimestre2, alignment: "center" },
      { text: i.quimica.trimestre3, alignment: "center" },
      { text: i.quimica.proyecto, alignment: "center" },
      { text: i.quimica.promedioTotal, alignment: "center", },
      { text: i.quimica.estado, alignment: "center" },
    ]

    const biologia = [
      { text: i.biologia.materia, alignment: "center" },
      { text: i.biologia.trimestre1, alignment: "center" },
      { text: i.biologia.trimestre2, alignment: "center" },
      { text: i.biologia.trimestre3, alignment: "center" },
      { text: i.biologia.proyecto, alignment: "center" },
      { text: i.biologia.promedioTotal, alignment: "center", },
      { text: i.biologia.estado, alignment: "center" },
    ]

    const historia = [
      { text: i.historia.materia, alignment: "center" },
      { text: i.historia.trimestre1, alignment: "center" },
      { text: i.historia.trimestre2, alignment: "center" },
      { text: i.historia.trimestre3, alignment: "center" },
      { text: i.historia.proyecto, alignment: "center" },
      { text: i.historia.promedioTotal, alignment: "center", },
      { text: i.historia.estado, alignment: "center" },
    ]

    const eciudadania = [
      { text: i.eciudadania.materia, alignment: "center" },
      { text: i.eciudadania.trimestre1, alignment: "center" },
      { text: i.eciudadania.trimestre2, alignment: "center" },
      { text: i.eciudadania.trimestre3, alignment: "center" },
      { text: i.eciudadania.proyecto, alignment: "center" },
      { text: i.eciudadania.promedioTotal, alignment: "center", },
      { text: i.eciudadania.estado, alignment: "center" },
    ]

    const filosofia = [
      { text: i.filosofia.materia, alignment: "center" },
      { text: i.filosofia.trimestre1, alignment: "center" },
      { text: i.filosofia.trimestre2, alignment: "center" },
      { text: i.filosofia.trimestre3, alignment: "center" },
      { text: i.filosofia.proyecto, alignment: "center" },
      { text: i.filosofia.promedioTotal, alignment: "center", },
      { text: i.filosofia.estado, alignment: "center" },
    ]

    const lengua = [
      { text: i.lengua.materia, alignment: "center" },
      { text: i.lengua.trimestre1, alignment: "center" },
      { text: i.lengua.trimestre2, alignment: "center" },
      { text: i.lengua.trimestre3, alignment: "center" },
      { text: i.lengua.proyecto, alignment: "center" },
      { text: i.lengua.promedioTotal, alignment: "center", },
      { text: i.lengua.estado, alignment: "center" },
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

    const emprendimiento = [
      { text: i.emprendimiento.materia, alignment: "center" },
      { text: i.emprendimiento.trimestre1, alignment: "center" },
      { text: i.emprendimiento.trimestre2, alignment: "center" },
      { text: i.emprendimiento.trimestre3, alignment: "center" },
      { text: i.emprendimiento.proyecto, alignment: "center" },
      { text: i.emprendimiento.promedioTotal, alignment: "center", },
      { text: i.emprendimiento.estado, alignment: "center" },
    ]

    const raya = [
      { text: "",colSpan: 2, border: [false, false, false, false] },
      { },
      { 
        text: "__________________________________", 
        margin: [0, 34, 0, 0],
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
        { image: logo, width: 300, alignment: "right" },
        { text: "", margin: [0, 5] },
        {
          text: "Reporte de Calificaciones",
          style: "header",
          alignment: "center",
        },
        { text: "", margin: [0, 6] },
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
        { text: "", margin: [0, 10] },
        {
          table: {
            widths: ["25%", "*", "*", "*", "*", "*", "*"],

            body: [
              [
                { text: "Rendimiento Académico", bold: true, alignment: "center", },
                { text: "Trimestre 1", bold: true, alignment: "center" },
                { text: "Trimestre 2", bold: true, alignment: "center" },
                { text: "Trimestre 3", bold: true, alignment: "center" },
                { text: "Proyecto I.", bold: true, alignment: "center" },
                { text: "Promedio total", bold: true, alignment: "center", },
                { text: "Estado", bold: true, alignment: "center" },
              ],
              matematica,
              fisica,
              quimica,
              biologia,
              historia,
              eciudadania,
              filosofia,
              lengua,
              ingles,
              eca,
              efisica,
              emprendimiento,
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
