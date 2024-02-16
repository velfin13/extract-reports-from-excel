export const docDefinition = {
    content: [
      { text: "This is a header bgu 1 a 2", style: "header" },
      "No styling here, this is a standard paragraph",
      { text: "Another text", style: "anotherStyle" },
      { text: "Multiple styles applied", style: ["header", "anotherStyle"] },
    ],

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