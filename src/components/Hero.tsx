import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="h-[80vh] flex items-center justify-center text-center bg-cover bg-top"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Shop Smarter with AI</h1>

        <p className="mt-4 text-xl max-w-xl mx-auto">
          Discover products, ask AI questions, and make better buying decisions.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/">
            <Button className="bg-white text-lg cursor-pointer text-black px-6 py-6 rounded-lg hover:bg-gray-200">
              Shop Now
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border border-white bg-transparent cursor-pointer text-white text-lg px-6 py-6 rounded-lg hover:bg-white hover:text-black"
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
}
