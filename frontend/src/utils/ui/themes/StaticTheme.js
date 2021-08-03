
const defaultOverride = {
    typography: {
        fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        h1: {
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        h2: {
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        h3: {
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        h4: {
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        h5: {
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        h6: {
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        body1:{
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        body2:{
            fontFamily: `"netflix-sans-rg", "hebrow-font", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        },
        h2: {
            fontWeight: 400,
        },
        button: {
            fontSize: "1rem",
        }
    },
    zIndex: {
        automationCard: 800,
        carousel: 1000

    }
}

const customeAttributes = {
    layout: {
        siteSpace: 4,
        siteSpaceUnits: "vw",
        siteSpaceDisplay: "4vw"
    },
    carousel: {
        bar: {
            scale: 1.8,
            offset: 6.12
        },
        items: 6,

    },
    beehive: {
        bar: {
            scale: 1.8,
            offset: 6.12
        },
        items: 6,

    }
}


export default {
    ...defaultOverride,
    ...customeAttributes
}
