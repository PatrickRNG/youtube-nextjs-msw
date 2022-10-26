export interface GameDeals {
  internalName: string
  title: string
  metacriticLink: string | null
  dealID: string
  storeID: string
  gameID: string
  salePrice: string
  normalPrice: string
  isOnSale: string
  savings: string
  metacriticScore: string
  steamRatingText: string
  steamRatingPercent: string
  steamRatingCount: string
  steamAppID: string | null
  releaseDate: number
  lastChange: number
  dealRating: string
  thumb: string
}

export interface Game {
  info: {
    title: string
    steamAppID: string
    thumb: string
  }
  cheapestPriceEver: {
    price: string
    date: number
  }
}
