export const mainTheme = {

    font: {
        family: "Rubik, serif",
        size: 16,
        titleSize: 28
    },
    colors: {
        background: "white",
        text: "black",
        primary: "#04D900",
        secondary: "#FF7205"
    }

}

export const darkTheme = {
    ...mainTheme,
    colors: {
        ...mainTheme.colors,
        background: "black",
        text: "white",
    }
}