import { ItemDetails, SectionTitle, BackBtn, MenuBook } from "../components"
import { AddOrReserveSection, ContentSection } from "../sections"
import { useLocation } from "react-router-dom"

export function DetailsPage() {
  const { state } = useLocation()
  if (!state) return <p>No item selected.</p>
  const { items, id, src, title, description, descriptionLong, price, highlights } = state
  return (
    <>
      <BackBtn />
      <ContentSection>
        <ItemDetails src={src} title={title} descriptionLong={descriptionLong} price={price} highlights={highlights} />
        <AddOrReserveSection id={id} src={src} title={title} description={description} price={price} highlights={highlights} />
        <SectionTitle title="Menu" />
        <MenuBook items={items} />
      </ContentSection>
    </>
  )
}
