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
  materias.push(data[0][50]);
  materias.push(data[0][57]);
  materias.push(data[0][64]);
  materias.push(data[0][71]);
  materias.push(data[0][78]);
  materias.push(data[0][85]);
  materias.push(data[0][92]);

  for (let i = 0; i < data.length; i++) {
    var temp = {}
    const element = data[i];
    temp.matematica = {};
    temp.fisica = {};
    temp.quimica = {};
    temp.biologia = {};
    temp.historia = {};
    temp.lengua = {};
    temp.ingles = {};
    temp.efisica = {};
    temp.emprendimiento = {};
    temp.investigacion = {};
    temp.teatro = {};
    temp.lectura = {};
    temp.redaccion = {};
    temp.filosofia = {};

    temp.estudiante = element[0];
    temp.matematica.materia = materias[0];
    temp.matematica.trimestre1 = element[1];
    temp.matematica.trimestre2 = element[2];
    temp.matematica.trimestre3 = element[3];
    temp.matematica.proyecto = element[4];
    temp.matematica.subnivel = element[5];
    temp.matematica.promedioTotal = element[6];
    temp.matematica.estado = element[7];

    temp.fisica.materia = materias[1];
    temp.fisica.trimestre1 = element[8];
    temp.fisica.trimestre2 = element[9];
    temp.fisica.trimestre3 = element[10];
    temp.fisica.proyecto = element[11];
    temp.fisica.subnivel = element[12];
    temp.fisica.promedioTotal = element[13];
    temp.fisica.estado = element[14];

    temp.quimica.materia = materias[2];
    temp.quimica.trimestre1 = element[15];
    temp.quimica.trimestre2 = element[16];
    temp.quimica.trimestre3 = element[17];
    temp.quimica.proyecto = element[18];
    temp.quimica.subnivel = element[19];
    temp.quimica.promedioTotal = element[20];
    temp.quimica.estado = element[21];

    temp.biologia.materia = materias[3];
    temp.biologia.trimestre1 = element[22];
    temp.biologia.trimestre2 = element[23];
    temp.biologia.trimestre3 = element[24];
    temp.biologia.proyecto = element[25];
    temp.biologia.subnivel = element[26];
    temp.biologia.promedioTotal = element[27];
    temp.biologia.estado = element[28];

    temp.historia.materia = materias[4];
    temp.historia.trimestre1 = element[29];
    temp.historia.trimestre2 = element[30];
    temp.historia.trimestre3 = element[31];
    temp.historia.proyecto = element[32];
    temp.historia.subnivel = element[33];
    temp.historia.promedioTotal = element[34];
    temp.historia.estado = element[35];

    temp.lengua.materia = materias[5];
    temp.lengua.trimestre1 = element[36];
    temp.lengua.trimestre2 = element[37];
    temp.lengua.trimestre3 = element[38];
    temp.lengua.proyecto = element[39];
    temp.lengua.subnivel = element[40];
    temp.lengua.promedioTotal = element[41];
    temp.lengua.estado = element[42];

    temp.ingles.materia = materias[6];
    temp.ingles.trimestre1 = element[43];
    temp.ingles.trimestre2 = element[44];
    temp.ingles.trimestre3 = element[45];
    temp.ingles.proyecto = element[46];
    temp.ingles.subnivel = element[47];
    temp.ingles.promedioTotal = element[48];
    temp.ingles.estado = element[49];

    temp.efisica.materia = materias[7];
    temp.efisica.trimestre1 = element[50];
    temp.efisica.trimestre2 = element[51];
    temp.efisica.trimestre3 = element[52];
    temp.efisica.proyecto = element[53];
    temp.efisica.subnivel = element[54];
    temp.efisica.promedioTotal = element[55];
    temp.efisica.estado = element[56];

    temp.emprendimiento.materia = materias[8];
    temp.emprendimiento.trimestre1 = element[57];
    temp.emprendimiento.trimestre2 = element[58];
    temp.emprendimiento.trimestre3 = element[59];
    temp.emprendimiento.proyecto = element[60];
    temp.emprendimiento.subnivel = element[61];
    temp.emprendimiento.promedioTotal = element[62];
    temp.emprendimiento.estado = element[63];

    temp.investigacion.materia = materias[9];
    temp.investigacion.trimestre1 = element[64];
    temp.investigacion.trimestre2 = element[65];
    temp.investigacion.trimestre3 = element[66];
    temp.investigacion.proyecto = element[67];
    temp.investigacion.subnivel = element[68];
    temp.investigacion.promedioTotal = element[69];
    temp.investigacion.estado = element[70];

    temp.teatro.materia = materias[10];
    temp.teatro.trimestre1 = element[71];
    temp.teatro.trimestre2 = element[72];
    temp.teatro.trimestre3 = element[73];
    temp.teatro.proyecto = element[74];
    temp.teatro.subnivel = element[75];
    temp.teatro.promedioTotal = element[76];
    temp.teatro.estado = element[77];

    temp.lectura.materia = materias[11];
    temp.lectura.trimestre1 = element[78];
    temp.lectura.trimestre2 = element[79];
    temp.lectura.trimestre3 = element[80];
    temp.lectura.proyecto = element[81];
    temp.lectura.subnivel = element[82];
    temp.lectura.promedioTotal = element[83];
    temp.lectura.estado = element[84];

    temp.redaccion.materia = materias[12];
    temp.redaccion.trimestre1 = element[85];
    temp.redaccion.trimestre2 = element[86];
    temp.redaccion.trimestre3 = element[87];
    temp.redaccion.proyecto = element[88];
    temp.redaccion.subnivel = element[89];
    temp.redaccion.promedioTotal = element[90];
    temp.redaccion.estado = element[91];

    temp.filosofia.materia = materias[13];
    temp.filosofia.trimestre1 = element[92];
    temp.filosofia.trimestre2 = element[93];
    temp.filosofia.trimestre3 = element[94];
    temp.filosofia.proyecto = element[95];
    temp.filosofia.subnivel = element[96];
    temp.filosofia.promedioTotal = element[97];
    temp.filosofia.estado = element[98];

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
      { text: i.matematica.subnivel, alignment: "center" },
      { text: i.matematica.promedioTotal, alignment: "center", },
      { text: i.matematica.estado, alignment: "center" },
    ]

    const fisica = [
      { text: i.fisica.materia, alignment: "center" },
      { text: i.fisica.trimestre1, alignment: "center" },
      { text: i.fisica.trimestre2, alignment: "center" },
      { text: i.fisica.trimestre3, alignment: "center" },
      { text: i.fisica.proyecto, alignment: "center" },
      { text: i.fisica.subnivel, alignment: "center" },
      { text: i.fisica.promedioTotal, alignment: "center", },
      { text: i.fisica.estado, alignment: "center" },
    ]

    const quimica = [
      { text: i.quimica.materia, alignment: "center" },
      { text: i.quimica.trimestre1, alignment: "center" },
      { text: i.quimica.trimestre2, alignment: "center" },
      { text: i.quimica.trimestre3, alignment: "center" },
      { text: i.quimica.proyecto, alignment: "center" },
      { text: i.quimica.subnivel, alignment: "center" },
      { text: i.quimica.promedioTotal, alignment: "center", },
      { text: i.quimica.estado, alignment: "center" },
    ]

    const biologia = [
      { text: i.biologia.materia, alignment: "center" },
      { text: i.biologia.trimestre1, alignment: "center" },
      { text: i.biologia.trimestre2, alignment: "center" },
      { text: i.biologia.trimestre3, alignment: "center" },
      { text: i.biologia.proyecto, alignment: "center" },
      { text: i.biologia.subnivel, alignment: "center" },
      { text: i.biologia.promedioTotal, alignment: "center", },
      { text: i.biologia.estado, alignment: "center" },
    ]

    const historia = [
      { text: i.historia.materia, alignment: "center" },
      { text: i.historia.trimestre1, alignment: "center" },
      { text: i.historia.trimestre2, alignment: "center" },
      { text: i.historia.trimestre3, alignment: "center" },
      { text: i.historia.proyecto, alignment: "center" },
      { text: i.historia.subnivel, alignment: "center" },
      { text: i.historia.promedioTotal, alignment: "center", },
      { text: i.historia.estado, alignment: "center" },
    ]

    const lengua = [
      { text: i.lengua.materia, alignment: "center" },
      { text: i.lengua.trimestre1, alignment: "center" },
      { text: i.lengua.trimestre2, alignment: "center" },
      { text: i.lengua.trimestre3, alignment: "center" },
      { text: i.lengua.proyecto, alignment: "center" },
      { text: i.lengua.subnivel, alignment: "center" },
      { text: i.lengua.promedioTotal, alignment: "center", },
      { text: i.lengua.estado, alignment: "center" },
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

    const emprendimiento = [
      { text: i.emprendimiento.materia, alignment: "center" },
      { text: i.emprendimiento.trimestre1, alignment: "center" },
      { text: i.emprendimiento.trimestre2, alignment: "center" },
      { text: i.emprendimiento.trimestre3, alignment: "center" },
      { text: i.emprendimiento.proyecto, alignment: "center" },
      { text: i.emprendimiento.subnivel, alignment: "center" },
      { text: i.emprendimiento.promedioTotal, alignment: "center", },
      { text: i.emprendimiento.estado, alignment: "center" },
    ]

    const investigacion = [
      { text: i.investigacion.materia, alignment: "center" },
      { text: i.investigacion.trimestre1, alignment: "center" },
      { text: i.investigacion.trimestre2, alignment: "center" },
      { text: i.investigacion.trimestre3, alignment: "center" },
      { text: i.investigacion.proyecto, alignment: "center" },
      { text: i.investigacion.subnivel, alignment: "center" },
      { text: i.investigacion.promedioTotal, alignment: "center", },
      { text: i.investigacion.estado, alignment: "center" },
    ]

    const teatro = [
      { text: i.teatro.materia, alignment: "center" },
      { text: i.teatro.trimestre1, alignment: "center" },
      { text: i.teatro.trimestre2, alignment: "center" },
      { text: i.teatro.trimestre3, alignment: "center" },
      { text: i.teatro.proyecto, alignment: "center" },
      { text: i.teatro.subnivel, alignment: "center" },
      { text: i.teatro.promedioTotal, alignment: "center", },
      { text: i.teatro.estado, alignment: "center" },
    ]

    const lectura = [
      { text: i.lectura.materia, alignment: "center" },
      { text: i.lectura.trimestre1, alignment: "center" },
      { text: i.lectura.trimestre2, alignment: "center" },
      { text: i.lectura.trimestre3, alignment: "center" },
      { text: i.lectura.proyecto, alignment: "center" },
      { text: i.lectura.subnivel, alignment: "center" },
      { text: i.lectura.promedioTotal, alignment: "center", },
      { text: i.lectura.estado, alignment: "center" },
    ]

    const redaccion = [
      { text: i.redaccion.materia, alignment: "center" },
      { text: i.redaccion.trimestre1, alignment: "center" },
      { text: i.redaccion.trimestre2, alignment: "center" },
      { text: i.redaccion.trimestre3, alignment: "center" },
      { text: i.redaccion.proyecto, alignment: "center" },
      { text: i.redaccion.subnivel, alignment: "center" },
      { text: i.redaccion.promedioTotal, alignment: "center", },
      { text: i.redaccion.estado, alignment: "center" },
    ]

    const filosofia = [
      { text: i.filosofia.materia, alignment: "center" },
      { text: i.filosofia.trimestre1, alignment: "center" },
      { text: i.filosofia.trimestre2, alignment: "center" },
      { text: i.filosofia.trimestre3, alignment: "center" },
      { text: i.filosofia.proyecto, alignment: "center" },
      { text: i.filosofia.subnivel, alignment: "center" },
      { text: i.filosofia.promedioTotal, alignment: "center", },
      { text: i.filosofia.estado, alignment: "center" },
    ]

    const raya = [
      { text: "",colSpan: 2, border: [false, false, false, false] },
      { },
      { 
        text: "__________________________________", 
        margin: [0, 26, 0, 0],
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
        { image: logo, width: 250, alignment: "right" },
        { text: "", margin: [0, 3] },
        {
          text: "Reporte de Calificaciones",
          style: "header",
          alignment: "center",
        },
        { text: "", margin: [0, 0.5] },
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
        { text: "", margin: [0, 5] },
        {
          table: {
            widths: ["16%", "12%", "12%", "12%", "12%", "12%","12%", "12%"],

            body: [
              [
                { text: "Rendimiento Académico", bold: true, alignment: "center", },
                { text: "Trimestre 1", bold: true, alignment: "center" },
                { text: "Trimestre 2", bold: true, alignment: "center" },
                { text: "Trimestre 3", bold: true, alignment: "center" },
                { text: "Proyecto I", bold: true, alignment: "center" },
                { text: "Subnivel", bold: true, alignment: "center" },
                { text: "Promedio Simple", bold: true, alignment: "center", },
                { text: "Estado", bold: true, alignment: "center" },
              ],
              matematica,
              fisica,
              quimica,
              biologia,
              historia,
              lengua,
              ingles,
              efisica,
              emprendimiento,
              investigacion,
              teatro,
              lectura,
              redaccion,
              filosofia,
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
