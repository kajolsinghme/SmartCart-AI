import Navbar from "@/components/Navbar";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <div className="flex gap-8 px-14 py-10 bg-gray-100">
        <aside>
          <Card className="w-72">
            <CardContent className="px-7 py-4">
              <h2 className="font-semibold text-2xl mb-7">Filters</h2>
              <h3 className="font-semibold text-gray-800 text-md mb-4">
                CATEGORY
              </h3>
              <div className="flex flex-col gap-4">
  
  {/* All */}
  <div className="flex items-center gap-2">
    <Checkbox id="all" />
    <label htmlFor="all" className="text-sm cursor-pointer">
      All
    </label>
  </div>

  {/* Men */}
  <div className="flex items-center gap-2">
    <Checkbox id="men" />
    <label htmlFor="men" className="text-sm cursor-pointer">
      Men
    </label>
  </div>

  {/* Women */}
  <div className="flex items-center gap-2">
    <Checkbox id="women" />
    <label htmlFor="women" className="text-sm cursor-pointer">
      Women
    </label>
  </div>

  {/* Electronics */}
  <div className="flex items-center gap-2">
    <Checkbox id="electronics" />
    <label htmlFor="electronics" className="text-sm cursor-pointer">
      Electronics
    </label>
  </div>

</div>
            
              <div className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start">All</Button>

              </div>
            </CardContent>
          </Card>
        </aside>
        <section className="w-3/4">
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </section>

      </div>
    </main>
  );
}
