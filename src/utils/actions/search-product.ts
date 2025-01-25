import { ProductProps } from "@/helpers/interfaces/products"

export async function seacrProducts(query: string): Promise<ProductProps[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/products`)

    if (!response.ok) {
        throw new Error("Failed to fetch search products")
    }

    return response.json()
}