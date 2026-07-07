import { useEffect, useState, useRef } from "react";
import {
  Box,
  ButtonBase,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Link as RouteLink } from "react-router-dom";

import {
  ShoppingCart,
  LoginWindow,
  MainMenu,
  ReserveTableBtnYellow,
} from "../../components";

import {
  logoNew,
  littleLemonLogoNew,
  profileIcon,
  hamBtnIcon,
  cartIcon,
  infoIcon,
} from "../../assets";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { convert } from "../../utils/muiConverter";

let desktopOptionId = 0;

const desktopOptions = [
  {
    id: desktopOptionId++,
    name: "home",
    state: true,
    hoveredState: false,
    displayName: "Homepage",
    path: "/",
  },
  {
    id: desktopOptionId++,
    name: "aboutus",
    state: false,
    hoveredState: false,
    displayName: "About us",
    path: "/",
  },
  {
    id: desktopOptionId++,
    name: "menu",
    state: false,
    hoveredState: false,
    displayName: "Menu",
    path: "/",
  },
  {
    id: desktopOptionId++,
    name: "gallery",
    state: false,
    hoveredState: false,
    displayName: "Gallery",
    path: "/",
  },
];

const collapseAnimationSpeed = "0.5s";

function CartItemCounter({
  cartButtonRef,
  buttonActions,
  cartIcon,
  cartItems,
}) {
  return (
    <ButtonBase
      ref={cartButtonRef}
      onClick={buttonActions.cart}
      aria-label="Open cart"
      sx={{
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={cartIcon}
        sx={{
          width: {
            xs: 31,
            md: 36,
          },
        }}
      />

      {cartItems.length > 0 && (
        <Box
          className="CartItemCounter"
          sx={{
            position: "absolute",
            right: -7,
            top: -8,
            minWidth: 19,
            height: 19,
            px: 0.5,
            borderRadius: 10,
            bgcolor: "custom.yellowSpecial3",
            color: "custom.deepGreen",
            fontSize: 12,
            fontWeight: 700,
            display: "grid",
            placeItems: "center",
          }}
        >
          {cartItems.length}
        </Box>
      )}
    </ButtonBase>
  );
}

export function Navbar({
  isOpenMenu,
  setIsOpenMenu,
  isOpenCart,
  setIsOpenCart,
}) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [optionState, setOptionState] = useState(desktopOptions);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const buttonActions = {
    cart: () => {
      setIsOpenCart((prev) => !prev);
      setIsOpenMenu(false);
      setIsOpenProfile(false);
    },

    menu: () => {
      setIsOpenMenu((prev) => !prev);
      setIsOpenCart(false);
      setIsOpenProfile(false);
    },
  };

  const {
    cartItems,
    addToCart,
    removeFromCart,
  } = useCart();

  const {
    logoutUser,
    isAuthenticated,
  } = useAuth();

  const hamButtonRef = useRef(null);
  const cartButtonRef = useRef(null);
  const hamDropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);
  const loginWindowRef = useRef(null);
  const profileButtonRef = useRef(null);

  // Added a separate ref for the profile menu.
  const profileMenuRef = useRef(null);

  useEffect(() => {
    function offClickHandler(event) {
      const clickedOutsideMenuButton =
        !hamButtonRef.current?.contains(event.target);

      const clickedOutsideCartButton =
        !cartButtonRef.current?.contains(event.target);

      const clickedOutsideMenuDropdown =
        !hamDropdownRef.current?.contains(event.target);

      const clickedOutsideCartDropdown =
        !cartDropdownRef.current?.contains(event.target);

      const clickedOutsideLoginWindow =
        !loginWindowRef.current?.contains(event.target);

      const clickedOutsideProfileButton =
        !profileButtonRef.current?.contains(event.target);

      const clickedOutsideProfileMenu =
        !profileMenuRef.current?.contains(event.target);

      if (
        clickedOutsideMenuButton &&
        clickedOutsideCartButton &&
        clickedOutsideMenuDropdown &&
        clickedOutsideCartDropdown &&
        clickedOutsideLoginWindow &&
        clickedOutsideProfileButton &&
        clickedOutsideProfileMenu
      ) {
        setIsOpenMenu(false);
        setIsOpenCart(false);
        setIsOpenProfile(false);
      }
    }

    document.addEventListener("click", offClickHandler);

    return () => {
      document.removeEventListener(
        "click",
        offClickHandler
      );
    };
  }, [setIsOpenMenu, setIsOpenCart]);

  const theme = useTheme();
  const isAboveMD = useMediaQuery(
    theme.breakpoints.up("md")
  );

  const previousScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      const scrollDifference =
        currentScrollY - previousScrollY.current;

      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        currentScrollY;

      const scrollThreshold = 4;

      if (currentScrollY <= 20) {
        setIsScrollingDown(false);
      } else if (distanceFromBottom < 50) {
        setIsScrollingDown(true);
      } else if (scrollDifference > scrollThreshold) {
        setIsScrollingDown(true);
      } else if (scrollDifference < -scrollThreshold) {
        setIsScrollingDown(false);
      }

      previousScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <Stack
        component="nav"
        className="Navbar"
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          top: 0,
          width: "100%",

          minHeight: {
            xs: 70,
            md: isScrollingDown
              ? "100px"
              : "190px",
          },

          bgcolor: "rgba(255, 253, 248, 0.88)",

          px: {
            xs: 2.5,
            md: "4%",
          },

          zIndex: 20,

          borderBottom:
            "1px solid rgba(24, 62, 50, 0.14)",

          boxShadow:
            "0 3px 14px rgba(30, 40, 34, 0.05)",

          backdropFilter: "blur(10px)",

          transition: `min-height ${collapseAnimationSpeed} ease-in-out`,
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            gap: convert(50),
            px: convert(25),
          }}
        >
          {!isAboveMD ? (
            <>
              <ButtonBase
                ref={hamButtonRef}
                onClick={buttonActions.menu}
                aria-label="Open menu"
              >
                <Box
                  component="img"
                  src={hamBtnIcon}
                  sx={{
                    width: {
                      xs: 27,
                      md: 30,
                    },
                  }}
                />
              </ButtonBase>

              <Box
                component={RouteLink}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={littleLemonLogoNew}
                  sx={{
                    width: {
                      xs: 155,
                      md: 220,
                    },

                    maxHeight: {
                      xs: 54,
                      md: 68,
                    },

                    objectFit: "contain",
                  }}
                />
              </Box>

              <CartItemCounter
                cartButtonRef={cartButtonRef}
                buttonActions={buttonActions}
                cartIcon={cartIcon}
                cartItems={cartItems}
              />
            </>
          ) : (
            <>
              <Box
                component={RouteLink}
                to="/"
                sx={{
                  height: isScrollingDown
                    ? "90px"
                    : "130px",

                  overflow: "clip",

                  transition: `height ${collapseAnimationSpeed} ease-in-out`,
                }}
              >
                <Box
                  component="img"
                  src={littleLemonLogoNew}
                  sx={{
                    width: "377px",
                    fontWeight: 600,
                    aspectRatio: "377px / 102px",

                    transition: `width ${collapseAnimationSpeed} ease-in-out`,
                  }}
                />
              </Box>

              <Stack
                direction="row"
                sx={{
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: convert(48),
                }}
              >
                {optionState.map(({
                  name,
                  displayName,
                  path,
                  state,
                  hoveredState,
                }) => {
                  return (
                    <ButtonBase
                      key={name}
                      component={RouteLink}
                      to={path}
                      onClick={() =>
                        setOptionState(
                          (previousOptions) => {
                            return previousOptions.map(
                              (option) => ({
                                ...option,
                                state:
                                  option.name === name,
                              })
                            );
                          }
                        )
                      }
                      onMouseEnter={() =>
                        setOptionState(
                          (previousOptions) => {
                            return previousOptions.map(
                              (option) => ({
                                ...option,
                                hoveredState:
                                  option.name === name,
                              })
                            );
                          }
                        )
                      }
                      onMouseLeave={() =>
                        setOptionState(
                          (previousOptions) => {
                            return previousOptions.map(
                              (option) => ({
                                ...option,
                                hoveredState: false,
                              })
                            );
                          }
                        )
                      }
                      disableRipple
                      sx={{
                        position: "relative",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="bigButtonTitle"
                        sx={{
                          color: "custom.deepGreen",
                          fontFamily: `"Karla", sans-serif`,
                        }}
                      >
                        {displayName}
                      </Typography>

                      {(state || hoveredState) && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",

                            transform:
                              "translateX(-50%)",

                            width: "44px",

                            borderTop: "4px solid",
                            borderColor:
                              "custom.yellowSpecial3",

                            borderRadius: "9px",
                            mt: convert(9),
                          }}
                        />
                      )}
                    </ButtonBase>
                  );
                })}
              </Stack>

              <ReserveTableBtnYellow />

              <Box
                sx={{
                  borderLeft: "1px solid",
                  borderColor: "black",
                  height: "50px",
                }}
              />

              <ButtonBase
              className="ProfileBtn"
                ref={profileButtonRef}
                onClick={() => {
                  setIsOpenProfile(
                    (previousState) => !previousState
                  );

                  setIsOpenMenu(false);
                  setIsOpenCart(false);
                }}
                aria-label="Open profile menu"
                sx={{
                  display: "inline-flex",
                }}
              >
                <Box
                  component="img"
                  src={profileIcon}
                  alt=""
                  sx={{
                    width: "50px",
                    objectFit: "cover",
                  }}
                />
                <Box sx={{
                  position:"absolute",
                  top: "100%",
                  overflow: "clip",
                  width: "143px",
                  height: "221px"
                  

                }}>
                  <MainMenu
                    forwardRef={profileMenuRef}
                    orientation="right"
                    logoutUser={logoutUser}
                    setIsOpenMenu={setIsOpenProfile}
                    setIsOpenCart={setIsOpenCart}
                    isOpenMenu={isOpenProfile}
                  />
                </Box>

              </ButtonBase>
              <CartItemCounter cartButtonRef={cartButtonRef} buttonActions={buttonActions} cartIcon={cartIcon} cartItems={cartItems} />

            </>
          )}
        </Stack>

        {!isOpenProfile && (
          <MainMenu
            forwardRef={hamDropdownRef}
            orientation="left"
            logoutUser={logoutUser}
            setIsOpenMenu={setIsOpenMenu}
            setIsOpenCart={setIsOpenCart}
            isOpenMenu={isOpenMenu}
          />
        )}

        {isAuthenticated ? (
          <ShoppingCart
            forwardRef={cartDropdownRef}
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            setIsOpenMenu={setIsOpenMenu}
            setIsOpenCart={setIsOpenCart}
            isOpenCart={isOpenCart}
          />
        ) : (
          <LoginWindow
            loginWindowRef={loginWindowRef}
            setIsOpenCart={setIsOpenCart}
            isOpenCart={isOpenCart}
          />
        )}
      </Stack>
    </>
  );
}



