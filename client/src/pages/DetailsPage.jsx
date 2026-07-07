import { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import { useLocation, useParams } from "react-router-dom"

import {
  ItemDetails,
  SectionTitle,
  BackBtn,
  MenuBook,
} from "../components"

import {
  AddOrReserveSection,
  ContentSection,
} from "../sections"

import { API_BASE_URL } from "../config/api"

export function DetailsPage() {
  const { state } = useLocation()
  const { itemId } = useParams()

  const selectedId = Number(itemId ?? state?.id)
  const stateItem = state && Number(state.id) === selectedId
    ? state
    : null

  const [items, setItems] = useState(state?.items ?? [])
  const [item, setItem] = useState(stateItem)
  const [isLoading, setIsLoading] = useState(!stateItem)
  const [error, setError] = useState("")

  useEffect(() => {
    if (stateItem && state?.items?.length) {
      return undefined
    }

    let isActive = true

    async function loadItemDetails() {
      try {
        setIsLoading(true)
        setError("")

        const response = await fetch(
          `${API_BASE_URL}/api/food-items`
        )

        if (!response.ok) {
          throw new Error("Could not load this menu item.")
        }

        const foodItems = await response.json()
        const selectedItem = foodItems.find(
          (foodItem) => foodItem.id === selectedId
        )

        if (!selectedItem) {
          throw new Error("Menu item not found.")
        }

        if (isActive) {
          setItems(foodItems)
          setItem(selectedItem)
        }
      } catch (loadError) {
        if (isActive) {
          setError(
            loadError.message ||
            "Could not load this menu item."
          )
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadItemDetails()

    return () => {
      isActive = false
    }
  }, [selectedId, state, stateItem])

  if (isLoading) {
    return (
      <>
        <BackBtn />
        <ContentSection>
          <Typography variant="bodyLarge" sx={{ mt: 4 }}>
            Loading item...
          </Typography>
        </ContentSection>
      </>
    )
  }

  if (!item || error) {
    return (
      <>
        <BackBtn />
        <ContentSection>
          <Typography
            variant="bodyLarge"
            sx={{
              mt: 4,
              color: "error.main",
            }}
          >
            {error || "Menu item not found."}
          </Typography>
        </ContentSection>
      </>
    )
  }

  const {
    id,
    src,
    title,
    description,
    descriptionLong,
    price,
    highlights,
  } = item

  return (
    <>
      <BackBtn />

      <ContentSection>
        <ItemDetails
          src={src}
          title={title}
          descriptionLong={descriptionLong}
          price={price}
          highlights={highlights}
        />

        <AddOrReserveSection
          id={id}
          src={src}
          title={title}
          description={description}
          price={price}
          highlights={highlights}
        />

        <SectionTitle title="Menu" />
        <MenuBook items={items} />
      </ContentSection>
    </>
  )
}
