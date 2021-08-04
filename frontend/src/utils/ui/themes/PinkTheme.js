import { mergeJsons } from '../../tools'

const pinkTheme = {
    palette: {
        background: {
            default: "#EDBCB8",
            paper: "#F2A3A9",
            strong: "#EDBCB8"
        },
        primary: {
            moreLight: "#639F8E",
            light: "#4C8F88",
            main: "#E3738C",
            dark: "#0E4D64",
            contrastText: "#FFF"
        },
        secondary: {
            moreLight: "#B590B1",
            light: "#A37797",
            main: "#A37797",
            dark: "#80485B",
            contrastText: "#FFF"
        },
        text: {
            nav: {
                active: "rgba(0,0,0, 0.7)",
                nonActive: "rgba(0,0,0, 0.45)",
                hover: "rgba(0,0,0, 0.7)"
            }

        },
        action: {
            disabledBackground: "rgba(250, 250, 250, 0.7)",
        }
    }
}

export default pinkTheme