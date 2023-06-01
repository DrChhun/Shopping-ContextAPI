export interface IStore {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: string
        count: string
    }
}