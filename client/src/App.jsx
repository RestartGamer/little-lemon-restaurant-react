import { useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline, Stack } from "@mui/material"
import { Navbar, InfoBanner, SelectionMenu } from "./components"
import { HeroSection, FoodItemSection } from "./sections"
import { Routes, Route } from "react-router-dom"
import { HomePage, DetailsPage, ReservationPage } from "./pages"
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
  bigButtonTitle: {
    fontWeight: 500, //medium
    fontSize: "22px"
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
    fontWeight: 400, //Regular 
    fontSize: "12px"
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
      borderNormal: "#000000",
      borderSpecial: "#FFF87D",
      borderSpecial2: "#FECE14",
      borderGrey: "#A2A2A2",
      heroTitleBg: "#494949",
      buttonSpecial: "#C7C7C7",
      backgroundSpecial: "#FECE14",
      bigButtonBg: "#157C28",
      bigButtonBorder: "#2C2C2C"
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
      <Stack sx={{
        position: "relative",
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </Stack>
    </ThemeProvider>
  )
}

export default App
