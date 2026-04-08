import {products} from '@/data/products'
import ProductCard from "@/components/product/ProductCard";

export default function Home() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </main>
  );
}
