import { mergeJsons } from '../../tools'

const lightTheme = {
    palette: {
        background: {
            default: "#F4F6F8",
            paper: "#fafafa",
            strong: "#FFF"
        },
        primary: {
            moreLight: "#639F8E",
            light: "#4C8F88",
            main: "#2D747A",
            dark: "#0E4D64",
            contrastText: "#FFF"
        },
        secondary: {
            moreLight: "#B590B1",
            light: "#A37797",
            main: "#92607A",
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

// Theme for the mui data picker (date/time module)
const lightPickerLightTheme = {
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: lightTheme.palette.primary.main,
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: lightTheme.palette.primary.main,
                color: lightTheme.palette.primary.contrastText,
            },
            iconButton: {
                backgroundColor: lightTheme.palette.primary.light,
            }
        },
    },
}

export default mergeJsons(lightTheme, lightPickerLightTheme)