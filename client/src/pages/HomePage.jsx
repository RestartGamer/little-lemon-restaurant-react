import { useEffect, useState } from "react"
import { Typography, Stack, Box } from "@mui/material"
import { InfoBanner, CategorySelection, SectionTitle } from "../components"
import { HeroSection, FoodItemSection, SlideShowSection, ContentSection } from "../sections"
import { API_BASE_URL } from "../config/api"

export function HomePage({ isOpenMenu, isOpenCart }) {
  const [foodItems, setFoodItems] = useState([])
  const [isLoadingFoodItems, setIsLoadingFoodItems] = useState(true)
  const [foodItemsError, setFoodItemsError] = useState("")

  useEffect(() => {
    let isActive = true
    async function loadFoodItems() {
      try {
        setIsLoadingFoodItems(true); setFoodItemsError("")
        const response = await fetch(`${API_BASE_URL}/api/food-items`)
        if (!response.ok) throw new Error("Could not load menu items.")
        const data = await response.json()
        if (isActive) setFoodItems(data)
      } catch (error) {
        if (isActive) setFoodItemsError(error.message || "Could not load menu items.")
      } finally { if (isActive) setIsLoadingFoodItems(false) }
    }
    loadFoodItems()
    return () => { isActive = false }
  }, [])

  return (
    <>
      <HeroSection />
      <ContentSection>
        <SectionTitle title="Order Takeout" />
        <InfoBanner />
        {isLoadingFoodItems ? <Typography variant="bodyLarge">Loading menu...</Typography> : foodItemsError ? (
          <Typography variant="bodyLarge" sx={{ color: "error.main" }}>{foodItemsError}</Typography>
        ) : foodItems.length === 0 ? <Typography>No menu items are available right now.</Typography> : (
          <>
            <SlideShowSection items={foodItems} />
            <Box sx={{ width: "calc(100% - 40px)", maxWidth: 980, mx: "auto", mt: 2, p: { xs: 2, md: 3 }, borderRadius: 3,
              bgcolor: "rgba(255,255,255,.95)", border: "1px solid rgba(233,198,107,.32)", boxShadow: "0 8px 28px rgba(35,45,40,.08)" }}>
              <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 2, md: 3 }}>
                <CategorySelection />
                <FoodItemSection items={foodItems} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />
              </Stack>
            </Box>
          </>
        )}
      </ContentSection>
    </>
  )
}
