import { NavBarProps } from "../../../../../helpers/interfaces/navbar";
// import { products } from "@/data/navbar";

interface PageProps {
  params: Promise<{
    href: string;
    category: string;
  }>;
}

export default async function PageProducts({ params }: PageProps) {
  const { href, category } = await params;

  const response = await fetch(`${process.env.API_HOST}/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  const products: NavBarProps[] = await response.json();

  const accessories = products
    .flatMap((product) => product.items)
    .find((item) => item.href === `/docs/${category}/${href}`);

  if (!accessories) return <h1>Category not found</h1>;

  return (
    <div className="container mt-12">
      <p>category: {category}</p>
      <p>
        you are view product: {accessories.title || "..."} on url:{" "}
        {accessories.href}
      </p>
    </div>
  );
}
