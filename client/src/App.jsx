import { useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { Navbar } from "./components"
import { HeroSection } from "./sections"
import './App.css'

const sharedTypography = {
  fontFamily: `"Karla", sans-serif`,

  heroTitle: {
    fontFamily: `"Markazi Text", sans-serif`,
    fontWeight: 500, //Medium
    fontSize: "60px",
  },
  headingTitle: {
    fontFamily: `"Markazi Text", sans-serif`,
    fontWeight: 400, //Regular
    fontSize: "45px",
  },
  sectionTitle: {
    fontWeight: 500, //Medium -- semiBold
    fontSize: "28px"
  },
  cardTitle: {
    fontWeight: 500, //medium
    fontSize: "16px"
  },
  bodyLarge: {
    fontWeight: 400, //Regular -- 600 for semiBold
    fontSize: "14px"
  },
  bodyMedium: {

  },
  bodySmall: {

  },
}

const themeSettings = {
  typography: sharedTypography,
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "#CDCDCD",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
    custom: {
      textSpecial: "#FECE14",
      normalBorder: "#000000",
      specialBorder: "#FFF87D",
      heroTitleBg: "#494949",
    },
  }

}


function App() {
  const muiTheme = useMemo(() =>
    createTheme(themeSettings), []
  )
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />


    </ThemeProvider>
  )
}

export default App
