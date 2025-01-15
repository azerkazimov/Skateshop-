import { Eye } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProductProps } from "@/components/helpers/interfaces/products";

interface ProductCardProps {
  product: ProductProps;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="rounded-lg border-0 bg-zinc-900">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-white">{product.name}</h3>
        <p className="text-sm text-zinc-400">${product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1 bg-white text-black hover:bg-zinc-200">
          Add to cart
        </Button>
        <Button size="icon" variant="outline" className="border-zinc-800">
          <Eye className="h-4 w-4 text-white" />
        </Button>
      </CardFooter>
    </Card>
  );
}
