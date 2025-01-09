import { navbarItems } from "@/db/navbar";

interface PageProps {
  params: {
    href: string;
    category: string;
  };
}

export default async function PageProducts({ params }: PageProps) {
  const { category, href } = await params;

  const itemsArr = navbarItems.flatMap((t) => {
    return t.items;
  });

  const accessories = itemsArr.find(
    (item) => item.href === `/docs/${category}/${href}`
  );

  if (!accessories) return <h1>Category not found</h1>;

  return (
    <div className="container mt-12">
      <p>category: {}</p>
      <p>
        you are view product: {accessories.title || "..."} on url: {href}
      </p>
    </div>
  );
}
