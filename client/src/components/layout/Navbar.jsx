import { useEffect, useRef } from "react"
import { Box, Stack, ButtonBase, Typography } from "@mui/material"
import { ShoppingCart, LoginWindow, MainMenu } from "../../components"
import { logoNew, hamBtnIcon, cartIcon, infoIcon } from "../../assets"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext"
import { Link as RouteLink } from "react-router-dom"

export function Navbar({ isOpenMenu, setIsOpenMenu, isOpenCart, setIsOpenCart }) {
  const buttonActions = {
    cart: () => { setIsOpenCart(prev => !prev); setIsOpenMenu(false) },
    menu: () => { setIsOpenMenu(prev => !prev); setIsOpenCart(false) },
  }
  const { cartItems, addToCart, removeFromCart } = useCart()
  const { logoutUser, isAuthenticated } = useAuth()
  const hamButtonRef = useRef(null)
  const cartButtonRef = useRef(null)
  const hamDropdownRef = useRef(null)
  const cartDropdownRef = useRef(null)
  const loginWindowRef = useRef(null)

  useEffect(() => {
    function offClickHandler(e) {
      if (!hamButtonRef.current?.contains(e.target) && !cartButtonRef.current?.contains(e.target) &&
          !hamDropdownRef.current?.contains(e.target) && !cartDropdownRef.current?.contains(e.target) &&
          !loginWindowRef.current?.contains(e.target)) {
        setIsOpenMenu(false); setIsOpenCart(false)
      }
    }
    document.addEventListener("click", offClickHandler)
    return () => document.removeEventListener("click", offClickHandler)
  }, [setIsOpenMenu, setIsOpenCart])

  return (
    <>
      <Stack component="nav" className="Navbar" direction="row" sx={{
        justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0,
        width: "100%", minHeight: { xs: 70, md: 88 }, bgcolor: "rgba(255,253,248,.97)",
        px: { xs: 2.5, md: 5 }, zIndex: 20, borderBottom: "1px solid rgba(24,62,50,.14)",
        boxShadow: "0 3px 14px rgba(30,40,34,.05)", backdropFilter: "blur(10px)",
      }}>
        <Stack direction="row" alignItems="center" spacing={1.2}>
          <ButtonBase ref={hamButtonRef} onClick={buttonActions.menu} aria-label="Open menu">
            <Box component="img" src={hamBtnIcon} sx={{ width: { xs: 27, md: 30 } }} />
          </ButtonBase>
          <Stack direction="row" alignItems="center" spacing={.7} sx={{ display: { xs: "none", md: "flex" } }}>
            <Box component="img" src={infoIcon} sx={{ width: 23 }} />
            <Typography variant="bodyLarge">About</Typography>
          </Stack>
        </Stack>

        <Box component={RouteLink} to="/" sx={{ display: "flex", alignItems: "center" }}>
          <Box component="img" src={logoNew} sx={{ width: { xs: 155, md: 220 }, maxHeight: { xs: 54, md: 68 }, objectFit: "contain" }} />
        </Box>

        <ButtonBase ref={cartButtonRef} onClick={buttonActions.cart} aria-label="Open cart" sx={{ position: "relative" }}>
          <Box component="img" src={cartIcon} sx={{ width: { xs: 31, md: 36 } }} />
          {cartItems.length > 0 && <Box sx={{ position: "absolute", right: -7, top: -8, minWidth: 19, height: 19, px: .5, borderRadius: 10, bgcolor: "custom.yellowSpecial3", color: "custom.deepGreen", fontSize: 12, fontWeight: 700, display: "grid", placeItems: "center" }}>{cartItems.length}</Box>}
        </ButtonBase>

        <MainMenu forwardRef={hamDropdownRef} orientation="left" logoutUser={logoutUser}
          setIsOpenMenu={setIsOpenMenu} setIsOpenCart={setIsOpenCart} isOpenMenu={isOpenMenu} />
        {isAuthenticated ? (
          <ShoppingCart forwardRef={cartDropdownRef} cartItems={cartItems} addToCart={addToCart}
            removeFromCart={removeFromCart} setIsOpenMenu={setIsOpenMenu} setIsOpenCart={setIsOpenCart}
            isOpenCart={isOpenCart} />
        ) : (
          <LoginWindow loginWindowRef={loginWindowRef} setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
        )}
      </Stack>
    </>
  )
}
