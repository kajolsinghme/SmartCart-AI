import Link from "next/link";
import { ShoppingCart, User, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-9 py-4 border-b">
      <Link href={"/"} className="text-2xl font-bold">
        SmartCart AI
      </Link>
      <div className="flex items-center w-2/5 border border-gray-400 rounded-lg px-3 focus-within:ring-2 focus-within:ring-black">
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-2 py-2 focus: outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="/cart"
          className="flex justify-center items-center bg-white rounded-lg w-10 h-10 gap-1 hover:bg-gray-200 cursor-pointer"
        >
          <ShoppingCart className="w-6 h-6" />
        </Link>
        <Button className="flex items-center gap-1 bg-black text-white text-lg px-4 py-5 cursor-pointer rounded-lg hover:bg-gray-900">
          <User className="w-5 h-5" />
          Login
        </Button>
      </div>
    </nav>
  );
}
