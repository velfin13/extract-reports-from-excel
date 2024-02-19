import { logo } from "./logo";
import { v4 as uuidv4 } from 'uuid';

export const getPdf = (data = [], cabecera = {}) => {
  var arraydocDefinition = []
  var materias = []
  var dataFinal = [];

  materias.push(data[0][1]);
  materias.push(data[0][9]);
  materias.push(data[0][17]);
  materias.push(data[0][25]);
  materias.push(data[0][33]);
  materias.push(data[0][41]);
  materias.push(data[0][49]);

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
    temp.lenguaje.promedio_simple = element[6];
    temp.lenguaje.promedio_pond = element[7];
    temp.lenguaje.estado = element[8];

    temp.matematica.materia = materias[1];
    temp.matematica.trimestre1 = element[9];
    temp.matematica.trimestre2 = element[10];
    temp.matematica.trimestre3 = element[11];
    temp.matematica.proyecto = element[12];
    temp.matematica.subnivel = element[13];
    temp.matematica.promedio_simple = element[14];
    temp.matematica.promedio_pond = element[15];
    temp.matematica.estado = element[16];

    temp.sociales.materia = materias[2];
    temp.sociales.trimestre1 = element[17];
    temp.sociales.trimestre2 = element[18];
    temp.sociales.trimestre3 = element[19];
    temp.sociales.proyecto = element[20];
    temp.sociales.subnivel = element[21];
    temp.sociales.promedio_simple = element[22];
    temp.sociales.promedio_pond = element[23];
    temp.sociales.estado = element[24];

    temp.ciencia.materia = materias[3];
    temp.ciencia.trimestre1 = element[25];
    temp.ciencia.trimestre2 = element[26];
    temp.ciencia.trimestre3 = element[27];
    temp.ciencia.proyecto = element[28];
    temp.ciencia.subnivel = element[29];
    temp.ciencia.promedio_simple = element[30];
    temp.ciencia.promedio_pond = element[31];
    temp.ciencia.estado = element[32];

    temp.eca.materia = materias[4];
    temp.eca.trimestre1 = element[33];
    temp.eca.trimestre2 = element[34];
    temp.eca.trimestre3 = element[35];
    temp.eca.proyecto = element[36];
    temp.eca.subnivel = element[37];
    temp.eca.promedio_simple = element[38];
    temp.eca.promedio_pond = element[39];
    temp.eca.estado = element[40];

    temp.efisica.materia = materias[5];
    temp.efisica.trimestre1 = element[41];
    temp.efisica.trimestre2 = element[42];
    temp.efisica.trimestre3 = element[43];
    temp.efisica.proyecto = element[44];
    temp.efisica.subnivel = element[45];
    temp.efisica.promedio_simple = element[46];
    temp.efisica.promedio_pond = element[47];
    temp.efisica.estado = element[48];

    temp.ingles.materia = materias[6];
    temp.ingles.trimestre1 = element[49];
    temp.ingles.trimestre2 = element[50];
    temp.ingles.trimestre3 = element[51];
    temp.ingles.proyecto = element[52];
    temp.ingles.subnivel = element[53];
    temp.ingles.promedio_simple = element[54];
    temp.ingles.promedio_pond = element[55];
    temp.ingles.estado = element[56];

    temp.suma_pro_ponderado = temp.lenguaje.promedio_pond + temp.matematica.promedio_pond + temp.sociales.promedio_pond + temp.ciencia.promedio_pond + temp.eca.promedio_pond + temp.efisica.promedio_pond + temp.ingles.promedio_pond;
    temp.estado_ponderacion = temp.suma_pro_ponderado < 7 ? "PERDEDOR/A": "APROBADO";
    dataFinal.push(temp);
  }
  dataFinal.splice(0, 2);

  dataFinal.forEach(i => {

    const lenguaje = [
      { text: i.lenguaje.materia, alignment: "center" },
      { text: (i.lenguaje.trimestre1).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.lenguaje.trimestre2).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.lenguaje.trimestre3).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.lenguaje.proyecto).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.lenguaje.subnivel).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.lenguaje.promedio_simple).toFixed(cabecera.decimal), alignment: "center", },
      { text: "25%", alignment: "center", },
      { text: (i.lenguaje.promedio_pond).toFixed(cabecera.decimal), alignment: "center", },
      { text: i.lenguaje.estado, alignment: "center" },
    ]

    const matematica = [
      { text: i.matematica.materia, alignment: "center" },
      { text: (i.matematica.trimestre1).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.matematica.trimestre2).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.matematica.trimestre3).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.matematica.proyecto).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.matematica.subnivel).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.matematica.promedio_simple).toFixed(cabecera.decimal), alignment: "center", },
      { text: "25%", alignment: "center", },
      { text: (i.matematica.promedio_pond).toFixed(cabecera.decimal), alignment: "center", },
      { text: i.matematica.estado, alignment: "center" },
    ]

    const sociales = [
      { text: i.sociales.materia, alignment: "center" },
      { text: (i.sociales.trimestre1).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.sociales.trimestre2).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.sociales.trimestre3).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.sociales.proyecto).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.sociales.subnivel).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.sociales.promedio_simple).toFixed(cabecera.decimal), alignment: "center", },
      { text: "10%", alignment: "center", },
      { text: (i.sociales.promedio_pond).toFixed(cabecera.decimal), alignment: "center", },
      { text: i.sociales.estado, alignment: "center" },
    ]

    const ciencias = [
      { text: i.ciencia.materia, alignment: "center" },
      { text: (i.ciencia.trimestre1).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.ciencia.trimestre2).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.ciencia.trimestre3).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.ciencia.proyecto).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.ciencia.subnivel).toFixed(cabecera.decimal), alignment: "center", },
      { text: (i.ciencia.promedio_simple).toFixed(cabecera.decimal), alignment: "center", },
      { text: "10%", alignment: "center", },
      { text: (i.ciencia.promedio_pond).toFixed(cabecera.decimal), alignment: "center", },
      { text: i.ciencia.estado, alignment: "center" },
    ]

    const artistica = [
      { text: i.eca.materia, alignment: "center" },
      { text: (i.eca.trimestre1).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.eca.trimestre2).toFixed(cabecera.decimal), alignment: "center" },
      { text: (i.eca.trimestre3), alignment: "center" },
      { text: i.eca.proyecto, alignment: "center", },
      { text: i.eca.subnivel, alignment: "center", },
      { text: i.eca.promedio_simple, alignment: "center", },
      { text: "10%", alignment: "center", },
      { text: i.eca.promedio_pond, alignment: "center", },
      { text: i.eca.estado, alignment: "center" },
    ]

    const efisica = [
      { text: i.efisica.materia, alignment: "center" },
      { text: i.efisica.trimestre1, alignment: "center" },
      { text: i.efisica.trimestre2, alignment: "center" },
      { text: i.efisica.trimestre3, alignment: "center" },
      { text: i.efisica.proyecto, alignment: "center", },
      { text: i.efisica.subnivel, alignment: "center", },
      { text: i.efisica.promedio_simple, alignment: "center", },
      { text: "10%", alignment: "center", },
      { text: i.efisica.promedio_pond, alignment: "center", },
      { text: i.efisica.estado, alignment: "center" },
    ]

    const ingles = [
      { text: i.ingles.materia, alignment: "center" },
      { text: i.ingles.trimestre1, alignment: "center" },
      { text: i.ingles.trimestre2, alignment: "center" },
      { text: i.ingles.trimestre3, alignment: "center" },
      { text: i.ingles.proyecto, alignment: "center", },
      { text: i.ingles.subnivel, alignment: "center", },
      { text: i.ingles.promedio_simple, alignment: "center", },
      { text: "10%", alignment: "center", },
      { text: i.ingles.promedio_pond, alignment: "center", },
      { text: i.ingles.estado, alignment: "center" },
    ]

    const footer = [
      {text: '', alignment: 'center', colSpan: 7, border: [false, false, false, false]},
      {},
      {},
      {},
      {},
      {},
      {},
      { text: "100%", alignment: "center", },
      { text: i.suma_pro_ponderado, alignment: "center", },
      { text: i.estado_ponderacion, alignment: "center" },
    ]

    const raya = [
      { 
        text: "__________________________________", 
        margin: [0, 8, 0, 0],
        alignment: "center", 
        colSpan: 4,
        border: [false, false, false, false] 
      },
    
      {},
      {},
      {},
      { text: "",colSpan: 6, border: [false, false, false, false] },
      { },
      { },
      { },
      { },
      { },
    ]
    const tutor = [
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
      { text: "",colSpan: 6, border: [false, false, false, false] },
      { },
      { },
      { },
      { },
      { },
    ]

    var docDefinition = {
      content: [
        { image: logo, width: 300, alignment: "right" },
        { text: "", margin: [0, 4] },
        {
          text: "Reporte de Calificaciones",
          style: "header",
          alignment: "center",
        },
        { text: "", margin: [0, 4] },
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
        { text: "", margin: [0, 4] },
        {
          table: {
            widths: ["*", "*", "*", "*", "*", "*","*", "*", "*", "*"],

            body: [
              [
                { text: "Rendimiento Académico", bold: true, alignment: "center", },
                { text: "Trimestre 1", bold: true, alignment: "center" },
                { text: "Trimestre 2", bold: true, alignment: "center" },
                { text: "Trimestre 3", bold: true, alignment: "center" },
                { text: "Proyecto I", bold: true, alignment: "center" },
                { text: "Prueba de subnivel", bold: true, alignment: "center" },
                { text: "Promedio Total (T1 + T2 + T3 + PI + PS)", bold: true, alignment: "center" },
                { text: "Ponderación (%)", bold: true, alignment: "center", },
                { text: "Promedio Ponderado", bold: true, alignment: "center" },
                { text: "Estado", bold: true, alignment: "center" },
              ],
              lenguaje,
              matematica,
              sociales,
              ciencias,
              artistica,
              efisica,
              ingles,
              footer,
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
