import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <Card className="border border-gray-300 mt-4 hover:shadow-xl transition overflow-hidden">
      
      <CardContent className="p-0">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="h-72 w-full object-contain"
        />

        <h2 className="mt-4 font-semibold text-xl px-4">
          {product.name}
        </h2>

        <p className="text-gray-600 font-bold text-lg px-4">
          ${product.price}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/product/${product.id}`} className="w-full">
          <Button className="w-full bg-black text-white py-4 hover:bg-gray-900">
            View Product
          </Button>
        </Link>
      </CardFooter>

    </Card>
  );
}