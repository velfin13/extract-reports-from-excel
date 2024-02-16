import { logo } from "./logo";

export const docDefinition = {
    content: [
        {
            image: logo,
            width: 200,
            alignment: 'left'
        },
      { text: "Reporte de Calificaciones", style: "header", alignment: 'center' },
      { text: "Another text", style: "anotherStyle" },
      { text: "Multiple styles applied", style: ["header", "anotherStyle"] },
    ],
    pageOrientation: 'landscape',
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