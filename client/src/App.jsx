import { lazy, Suspense, useState, useMemo, useEffect } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CartProvider, AuthProvider, LoadingProvider } from "./context";
import { CssBaseline, Stack } from "@mui/material"
import { Navbar, BottomInfo, Footer } from "./components"
import { Routes, Route } from "react-router-dom"
import { BGPattern } from "./assets"
import './App.css'

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({
    default: module.HomePage,
  }))
)

const DetailsPage = lazy(() =>
  import("./pages/DetailsPage").then((module) => ({
    default: module.DetailsPage,
  }))
)

const ReservationPage = lazy(() =>
  import("./pages/ReservationPage").then((module) => ({
    default: module.ReservationPage,
  }))
)

const CheckoutPage = lazy(() =>
  import("./pages/CheckoutPage").then((module) => ({
    default: module.CheckoutPage,
  }))
)

const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((module) => ({
    default: module.AboutPage,
  }))
)

const sharedTypography = {
  fontFamily: `"Karla", sans-serif`,
  heroTitle: { fontFamily: `"Markazi Text", serif`, fontWeight: 600, fontSize: "54px" },
  headingTitle: { fontFamily: `"Markazi Text", serif`, fontWeight: 600, fontSize: "42px" },
  sectionTitle: { fontFamily: `"Markazi Text", serif`, fontWeight: 600, fontSize: "30px" },
  bigCardTitle: { fontFamily: `"Markazi Text", serif`, fontWeight: 600, fontSize: "24px" },
  bigButtonTitle: { fontWeight: 600, fontSize: "20px" },

  cardTitle: { fontWeight: 600, fontSize: "16px" },
  bodyLarge: { fontWeight: 400, fontSize: "16px" },
  bodyMedium: { fontWeight: 400, fontSize: "14px" },
  bodySmall: { fontWeight: 400, fontSize: "12px" },
}

const themeSettings = {
  typography: sharedTypography,
  shape: { borderRadius: 12 },
  palette: {
    background: { default: "#FFFDF8", paper: "#F3F0EA" },
    text: { primary: "#1D211F", secondary: "#FFFFFF" },
    custom: {
      textSpecial: "#F4C316",
      borderNormal: "#223D33",
      yellowSpecial: "#FFF5D8",
      yellowSpecial2: "#FFF9EA",
      yellowSpecial3: "#F4C316",
      greenSpecial: "#B9D19D",
      deepGreen: "#173C2C",
      borderSpecial2: "#F4C316",
      borderGrey: "#D8D2C7",
      borderGrey1: "#A9A298",
      heroTitleBg: "#173C2C",
      heroTitleTextBorder: "352C00",
      buttonSpecial: "#F9F5EC",
      buttonSpecial2: "#173C2C",
      backgroundSpecial: "#F4C316",
      bigButtonBg: "#173C2C",
      bigButtonBorder: "#123129",
      backgroundSecondary: "#F8F4EC",
      bottomInfoBg: "#F0EDEA",
      cream: "#FFF9EA",
      softGold: "#E9C66B",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFFFFF',
            borderRadius: 9,
          },
        },
      },
    },
  },
}

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const muiTheme = useMemo(() => createTheme(themeSettings), [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [])

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <LoadingProvider>
        <AuthProvider>
          <CartProvider>
            <Stack className="PageFull" sx={{
              position: "relative",
              minHeight: "100vh",
              alignItems: "center",
              justifyContent: "flex-start",
              isolation: "isolate",
              bgcolor: "background.default",
              "&::before": {
                content: `""`,
                position: "fixed",
                inset: 0,
                backgroundImage: `url(${BGPattern})`,
                backgroundRepeat: "repeat",
                backgroundSize: { xs: "620px auto", md: "980px auto" },
                opacity: { xs: 0.16, md: 0.12 },
                pointerEvents: "none",
                zIndex: -1,
              }
            }}>
              <Navbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}
                isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />

              <Stack className="PageContent" sx={{ width: "100%", alignItems: "center" }}>
                <Suspense fallback={null}>
                  <Routes>
                    <Route path="/" element={<HomePage isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />} />
                    <Route path="/details/:itemId" element={<DetailsPage />} />
                    <Route path="/details" element={<DetailsPage />} />
                    <Route path="/reservation" element={<ReservationPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/about" element={<AboutPage />} />
                  </Routes>
                </Suspense>
              </Stack>
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
