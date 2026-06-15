import { useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CartProvider, AuthProvider, LoadingProvider } from "./context";
import { CssBaseline, Stack } from "@mui/material"
import { Navbar, InfoBanner, CategorySelection, BottomInfo, Footer } from "./components"
import { HeroSection, FoodItemSection } from "./sections"
import { Routes, Route } from "react-router-dom"
import { HomePage, DetailsPage, ReservationPage } from "./pages"
import { convert } from "./utils/muiConverter"
import './App.css'

const sharedTypography = {
  fontFamily: `"Karla", sans-serif`,

  heroTitle: {
    fontFamily: `"Markazi Text", sans-serif`,
    fontWeight: 500, //Medium
    fontSize: "54px",
  },
  headingTitle: {
    fontFamily: `"Markazi Text", sans-serif`,
    fontWeight: 400, //Regular
    fontSize: "38px",
  },
  sectionTitle: {
    fontWeight: 500, //Medium -- semiBold
    fontSize: "26px"
  },
  bigButtonTitle: {
    fontWeight: 500, //medium
    fontSize: "22px"
  },
   bigCardTitle: {
    fontWeight: 500, //medium
    fontSize: "18px"
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
    fontWeight: 400, //Regular -- 500 for Medium
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
      yellowSpecial: "#EAE1B2",
      yellowSpecial2: "#FBF5D2",
      borderSpecial2: "#FECE14",
      borderGrey: "#A2A2A2",
      borderGrey1: "#818181",
      heroTitleBg: "#494949",
      heroTitleTextBorder: "352C00",
      buttonSpecial: "#C7C7C7",
      buttonSpecial2: "#222222",
      backgroundSpecial: "#FECE14",
      bigButtonBg: "#157C28",
      bigButtonBorder: "#2C2C2C",
      backgroundSecondary: "#E8E8E8",
      bottomInfoBg: "#CDCDCD",
    },
  }

}


function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const muiTheme = useMemo(() =>
    createTheme(themeSettings), []
  )
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <LoadingProvider>
        <AuthProvider>

          <CartProvider>
            <Stack sx={{
              position: "relative",
              pb: convert(30),
            }}>

              <Navbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}
                isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />

              <Routes>
                <Route path="/" element={<HomePage isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
              </Routes>

            </Stack>
            <BottomInfo />
            <Footer />
          </CartProvider>

        </AuthProvider>
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App
