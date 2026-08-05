import { useEffect, useRef, useState } from "react";
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
  littleLemonLogoNew,
  profileIcon,
  hamBtnIcon,
  cartIcon,
} from "../../assets";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { convert } from "../../utils/muiConverter";

const desktopOptions = [
  {
    id: 0,
    name: "home",
    state: true,
    hoveredState: false,
    displayName: "Homepage",
    path: "/",
  },
  {
    id: 1,
    name: "aboutus",
    state: false,
    hoveredState: false,
    displayName: "About us",
    path: "/about",
  },
  {
    id: 2,
    name: "menu",
    state: false,
    hoveredState: false,
    displayName: "Menu",
    path: "/#menu",
  },
  {
    id: 3,
    name: "gallery",
    state: false,
    hoveredState: false,
    displayName: "Gallery",
    path: "/#gallery",
  },
];

const collapseAnimationSpeed = "0.35s";
const collapseTransitionDuration = 400;

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
        alt=""
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
  const accumulatedScroll = useRef(0);
  const animationFrame = useRef(null);
  const transitionTimeout = useRef(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    function updateNavbarState(nextState) {
      setIsScrollingDown((currentState) => {
        if (currentState === nextState) {
          return currentState;
        }

        isTransitioning.current = true;
        accumulatedScroll.current = 0;

        window.clearTimeout(transitionTimeout.current);
        transitionTimeout.current = window.setTimeout(() => {
          isTransitioning.current = false;
          accumulatedScroll.current = 0;
        }, collapseTransitionDuration);

        return nextState;
      });
    }

    function measureScroll() {
      animationFrame.current = null;

      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDifference =
        currentScrollY - previousScrollY.current;

      previousScrollY.current = currentScrollY;

      if (currentScrollY <= 20) {
        accumulatedScroll.current = 0;
        updateNavbarState(false);
        return;
      }

      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        currentScrollY;

      if (distanceFromBottom < 50) {
        accumulatedScroll.current = 0;
        updateNavbarState(true);
        return;
      }

      if (isTransitioning.current || scrollDifference === 0) {
        return;
      }

      const currentDirection = Math.sign(scrollDifference);
      const accumulatedDirection = Math.sign(
        accumulatedScroll.current
      );

      if (
        accumulatedDirection !== 0 &&
        accumulatedDirection !== currentDirection
      ) {
        accumulatedScroll.current = 0;
      }

      accumulatedScroll.current += scrollDifference;

      const scrollThreshold = 12;

      if (accumulatedScroll.current >= scrollThreshold) {
        updateNavbarState(true);
      } else if (
        accumulatedScroll.current <= -scrollThreshold
      ) {
        updateNavbarState(false);
      }
    }

    function handleScroll() {
      if (animationFrame.current !== null) {
        return;
      }

      animationFrame.current = window.requestAnimationFrame(
        measureScroll
      );
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }

      window.clearTimeout(transitionTimeout.current);
    };
  }, []);

  return (
    <Stack
      component="nav"
      className="Navbar"
      direction="row"
      aria-label="Primary navigation"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        width: "100%",

        height: {
          xs: 70,
          md: isScrollingDown
            ? "100px"
            : "190px",
        },

        boxSizing: "border-box",
        overflowAnchor: "none",
        willChange: "height",
        bgcolor: "rgba(255, 253, 248, 0.88)",

        px: {
          xs: 2.5,
          md: "1%",
        },

        zIndex: 20,

        borderBottom:
          "1px solid rgba(24, 62, 50, 0.14)",

        boxShadow:
          "0 3px 14px rgba(30, 40, 34, 0.05)",

        backdropFilter: "blur(10px)",

        transition: `height ${collapseAnimationSpeed} ease-in-out`,
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
              aria-expanded={isOpenMenu}
            >
              <Box
                component="img"
                src={hamBtnIcon}
                alt=""
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
              aria-label="Little Lemon homepage"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={littleLemonLogoNew}
                alt="Little Lemon"
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
              aria-label="Little Lemon homepage"
              sx={{
                display: "flex",
                alignItems: "flex-start",

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
                alt="Little Lemon"
                sx={{
                  width: "377px",
                  fontWeight: 600,
                  aspectRatio: "377px / 102px",
                  objectFit: "cover"
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
                        whiteSpace: "nowrap",
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

            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
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
                aria-haspopup="menu"
                aria-expanded={isOpenProfile}
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
              </ButtonBase>

              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",

                  width: "fit-content",
                  height: "fit-content",
                  overflow: "hidden",

                  pointerEvents: isOpenProfile
                    ? "auto"
                    : "none",
                }}
              >
                <MainMenu
                  forwardRef={profileMenuRef}
                  orientation="right"
                  logoutUser={logoutUser}
                  setIsOpenMenu={setIsOpenProfile}
                  setIsOpenCart={setIsOpenCart}
                  isOpenMenu={isOpenProfile}
                  isMasked
                />
              </Box>
            </Box>

            <CartItemCounter
              cartButtonRef={cartButtonRef}
              buttonActions={buttonActions}
              cartIcon={cartIcon}
              cartItems={cartItems}
            />
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
  );
}