import { logo } from "./logo";

export const getPdf=(data = [],cabecera = {})=>{

    var docDefinition = {
      content: [
        { image: logo, width: 260, alignment: "right" },
        { text: "Reporte de Calificaciones", style: "header", alignment: "center" },
        { text: "", margin: [0, 15] },
        {
          table: {
            widths: ["8%", "25.33%", "8%", "25.33%", "8%", "25.33%"],
            body: [
              [
                { text: "Grado", bold: true },
                "Segundo",
                { text: "Paralelo", bold: true },
                "A",
                { text: "Jornada", bold: true },
                "Matutino",
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
                "Velfin Josue Velasquez Zamora",
                { text: "Periodo", bold: true },
                "2021 - 2022",
              ],
            ],
          },
        },
        { text: "", margin: [0, 15] },
        {
          table: {
            widths: ["*", "*", "*", "*", "*", "*", "*"],
    
            body: [
              [
                { text: "Rendimiento Académico", bold: true, alignment: "center" },
                { text: "Trimestre 1 (3)", bold: true, alignment: "center" },
                { text: "Trimestre 2 (3)", bold: true, alignment: "center" },
                { text: "Trimestre 3 (3)", bold: true, alignment: "center" },
                { text: "Proyecto I.(1)", bold: true, alignment: "center" },
                { text: "Promedio total (T1 + T2 + t3 + PI)", bold: true, alignment: "center" },
                { text: "Estado", bold: true, alignment: "center" },
              ],
              [
                { text: "Rendimiento Académico", alignment: "center" },
                { text: "Trimestre 1 (3)", alignment: "center" },
                { text: "Trimestre 2 (3)", alignment: "center" },
                { text: "Trimestre 3 (3)", alignment: "center" },
                { text: "Proyecto I.(1)", alignment: "center" },
                { text: "Promedio total (T1 + T2 + t3 + PI)", alignment: "center" },
                { text: "Estado", alignment: "center" },
              ],
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
    };

    return docDefinition;
  }