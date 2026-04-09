import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="px-6 py-6">
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="px-6 py-14 bg-gray-50 mt-10">
        <h1 className="text-3xl font-bold mb-6">Shop by Category</h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Men */}
          <div className="flex flex-col justify-center items-center rounded-xl h-56 p-6 bg-white text-center hover:shadow-lg cursor-pointer">
            <div className="text-2xl mb-2 bg-black text-white p-6 rounded-full w-20 h-20">M</div>
            <h3 className="text-2xl font-semibold mt-2">Men</h3>
            <p className="text-gray-700 mt-2 text-[17px]">Fashion & Accessories</p>
          </div>

          {/* Women */}
          <div className="flex flex-col justify-center items-center rounded-xl h-56 p-6 bg-white  text-center hover:shadow-lg cursor-pointer">
            <div className="text-2xl mb-2 bg-black text-white p-6 rounded-full w-20 h-20">W</div>
            <h3 className="text-2xl font-semibold mt-2">Women</h3>
            <p className="text-gray-800 mt-2 text-[17px]">Trending Styles</p>
          </div>

          {/* Electronics */}
          <div className="flex flex-col justify-center items-center rounded-xl h-56 p-6 bg-white text-center hover:shadow-lg cursor-pointer">
            <div className="text-2xl mb-2 bg-black text-white p-6 rounded-full w-20 h-20">E</div>
            <h3 className="text-2xl font-semibold mt-2">Electronics</h3>
            <p className="text-gray-800 mt-2 text-[17px]">Latest Tech</p>
          </div>
        </div>
      </section>
       <section className="px-20 py-16 flex flex-col content-center items-center bg-pink-500">
          <h1 className="text-white text-4xl font-bold mb-4">Limited Time Offer</h1>
          <h2 className="text-white text-xl font-bold mb-4">Get 30% OFF on all electronics this week!</h2>
          <button className="text-pink-600 bg-white text-lg px-4 py-3 rounded-lg font-bold mb-4">Claim Discount</button>
      </section>

      <Footer/>
    </main>
  );
}
