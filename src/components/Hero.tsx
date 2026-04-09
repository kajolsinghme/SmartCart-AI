import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="h-[80vh] flex items-center justify-center text-center bg-cover bg-top"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Shop Smarter with AI
        </h1>

        <p className="mt-4 max-w-xl mx-auto">
          Discover products, ask AI questions, and make better buying decisions.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/">
            <button className="bg-white text-black px-6 py-3 rounded-lg">
              Shop Now
            </button>
          </Link>

          <button className="border border-white px-6 py-3 rounded-lg">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}