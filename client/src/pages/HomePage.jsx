import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import {
  InfoBanner,
  CategorySelection,
  SectionTitle,
} from "../components";

import {
  HeroSection,
  FoodItemSection,
  SlideShowSection,
  ContentSection,
} from "../sections";

import { API_BASE_URL } from "../config/api";

export function HomePage({ isOpenMenu, isOpenCart }) {
  const { hash } = useLocation();
  const [foodItems, setFoodItems] = useState([]);
  const [isLoadingFoodItems, setIsLoadingFoodItems] =
    useState(true);
  const [foodItemsError, setFoodItemsError] =
    useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("meat");

  useEffect(() => {
    const targetId = hash.replace("#", "");

    const animationFrame = window.requestAnimationFrame(() => {
      if (!targetId) {
        window.scrollTo({ top: 0 });
        return;
      }

      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [hash, isLoadingFoodItems]);

  useEffect(() => {
    let isActive = true;

    async function loadFoodItems() {
      try {
        setIsLoadingFoodItems(true);
        setFoodItemsError("");

        const response = await fetch(
          `${API_BASE_URL}/api/food-items`
        );

        if (!response.ok) {
          throw new Error(
            "Could not load menu items."
          );
        }

        const data = await response.json();

        if (isActive) {
          setFoodItems(data);
        }
      } catch (error) {
        if (isActive) {
          setFoodItemsError(
            error.message ||
            "Could not load menu items."
          );
        }
      } finally {
        if (isActive) {
          setIsLoadingFoodItems(false);
        }
      }
    }

    loadFoodItems();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <>
      <HeroSection />

      <ContentSection>
        <SectionTitle id="menu" title="Order Takeout" />

        <InfoBanner />

        {isLoadingFoodItems ? (
          <Typography variant="bodyLarge">
            Loading menu...
          </Typography>
        ) : foodItemsError ? (
          <Typography
            variant="bodyLarge"
            sx={{
              color: "error.main",
            }}
          >
            {foodItemsError}
          </Typography>
        ) : foodItems.length === 0 ? (
          <Typography>
            No menu items are available right now.
          </Typography>
        ) : (
          <>
            <SlideShowSection items={foodItems} />

            <Box
              sx={{
                width: "calc(100% - 40px)",
                maxWidth: 980,
                mx: "auto",
                mt: 2,
                p: {
                  xs: 2,
                  md: 3,
                },
                borderRadius: 3,
                bgcolor: "rgba(255, 255, 255, 0.95)",
                border:
                  "1px solid rgba(233, 198, 107, 0.32)",
                boxShadow:
                  "0 8px 28px rgba(35, 45, 40, 0.08)",
              }}
            >
              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                sx={{
                  gap: {
                    xs: 2,
                    md: 3,
                  }
                }}

              >
                <CategorySelection
                  items={foodItems}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />

                <FoodItemSection
                  items={foodItems}
                  selectedCategory={selectedCategory}
                  isOpenMenu={isOpenMenu}
                  isOpenCart={isOpenCart}
                />
              </Stack>
            </Box>
          </>
        )}
      </ContentSection>
    </>
  );
}