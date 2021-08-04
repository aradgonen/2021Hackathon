import { mergeJsons } from '../../tools'

const lightTheme = {
    palette: {
        background: {
            default: "#F4F6F8",
            paper: "#fafafa",
            strong: "#FFF"
        },
        text: {
            nav: {
                active: "rgba(0,0,0, 0.7)",
                nonActive: "rgba(0,0,0, 0.45)",
                hover: "rgba(0,0,0, 0.7)"
            }

        },
        primary: {
            light: "#2D747A",
            main: "#F4F6F8",
            dark: "#0B3359",
            contrastText: "#FFF"
        },
        secondary: {
            light: "#92607A",
            main: "#80485B",
            dark: "#5E2C3B",
            contrastText: "#FFF"
        },
        action: {
            disabledBackground: "rgba(250, 250, 250, 0.7)",
        }
    }
}


export default lightTheme