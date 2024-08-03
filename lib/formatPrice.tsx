export function formatPrice(price:number){
  const priceformated= new Intl.NumberFormat('es-ar', {
    style:"currency",
    currency: "ARS",
    minimumFractionDigits: 2
  })

  const finalPrice = priceformated.format(price)
  return finalPrice
}