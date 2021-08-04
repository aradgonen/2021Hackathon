import { mergeJsons } from '../../tools'

const darkTheme = {
    overrides: {
        MuiIconButton: {
            root: {
                "&.Mui-disabled": {
                    color: "rgba(255,255,255,0.26)"
                },
                color: '#FFF !importent'
            },
        },
    },
    palette: {
        background: {
            default: "#141414",
            paper: "#212121",
            strong: "#0D0D0D"
        },
        primary: {
            light: "#2D747A",
            main: "#0E4D64",
            dark: "#0B3359",
            contrastText: "#FFF"
        },
        secondary: {
            light: "#92607A",
            main: "#80485B",
            dark: "#5E2C3B",
            contrastText: "#FFF"
        },
        text: { // in typografy components
            primary: "rgba(255,255,255, 0.87)",
            secondary: "rgba(255,255,255, 0.54)",
            disabled: "rgba(255,255,255, 0.38)",
            hint: "rgba(255,255,255, 0.38)",
            nav: {
                active: "#FFF",
                nonActive: "#e5e5e5",
                hover: "#b3b3b3"
            }
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            selected: "rgba(0, 0, 0, 0.08)",
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(33, 33, 33, 0.7)",
            focus: "rgba(0, 0, 0, 0.12)",
        }
    },

}


export default darkTheme