
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
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-lg"
      />
      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>

      <button className="mt-2 w-full bg-black text-white py-2 rounded-lg">
        View Product
      </button>
    </div>
  );
}
