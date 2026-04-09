import Image from "next/image";

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
    <div className="border border-gray-300 rounded-lg mt-4 hover:shadow-xl transition overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="h-72 w-full object-contain rounded-lg"
      />
      <h2 className="mt-4 font-semibold text-xl px-4">{product.name}</h2>
      <p className="text-gray-600 font-bold text-lg px-4">${product.price}</p>

      <button className="mt-4 w-[90%] mx-auto block mb-4 bg-black text-white py-2 cursor-pointer rounded-lg hover:bg-gray-900 transition">
        View Product
      </button>
    </div>
  );
}
