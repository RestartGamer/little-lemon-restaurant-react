import { useEffect, useMemo, useState } from "react"
import { Typography } from "@mui/material"
import { BackBtn, CheckoutFoodList, SectionTitle, PaymentMethod } from "../components"
import { HighlightReelSection, ContentSection } from "../sections"
import { useLocation } from "react-router-dom"
import { API_BASE_URL } from "../config/api"

const highlightKeyNames = ["greenPowerBowl", "slowCookedBeefBowl"]
export function CheckoutPage() {
  const { state } = useLocation()
  const cartItems = state?.cartItems ?? []
  const [foodItems, setFoodItems] = useState([])
  const [isLoadingFoodItems, setIsLoadingFoodItems] = useState(true)
  const [foodItemsError, setFoodItemsError] = useState("")
  useEffect(() => {
    let active = true
    fetch(`${API_BASE_URL}/api/food-items`).then(r => { if(!r.ok) throw new Error("Could not load recommended items."); return r.json() })
      .then(data => { if(active) setFoodItems(data) }).catch(e => { if(active) setFoodItemsError(e.message) }).finally(() => { if(active) setIsLoadingFoodItems(false) })
    return () => { active = false }
  }, [])
  const highlightList = useMemo(() => highlightKeyNames.map(key => foodItems.find(item => item.keyName === key)).filter(Boolean), [foodItems])
  return (
    <><BackBtn /><ContentSection><SectionTitle title="Checkout" />
      {cartItems.length === 0 ? <Typography variant="bodyLarge">Your cart is empty.</Typography> : <>
        <CheckoutFoodList cartItems={cartItems} />
        {isLoadingFoodItems ? <Typography sx={{ mt: 2 }}>Loading recommendations...</Typography> : foodItemsError ? <Typography sx={{ color: "error.main", mt: 2 }}>{foodItemsError}</Typography> : <HighlightReelSection items={highlightList} />}
        <PaymentMethod cartItems={cartItems} />
      </>}
    </ContentSection></>
  )
}
