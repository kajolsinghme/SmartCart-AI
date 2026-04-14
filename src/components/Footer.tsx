import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl text-white font-bold">SmartCart AI</h2>
          <p className="text-white mt-2">
            Your one-stop shop for everything. Quality products at best prices.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-white">
            <li>All Products</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Deals</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-white">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-white mb-3">
            Subscribe to get latest offers & updates
          </p>

          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter email"
              className="bg-white text-black"
            />

            <Button className="bg-gray-700 py-4 px-4 text-white hover:bg-gray-800">
              Subscribe
            </Button>
          </div>
        </div>

      </div>

      <div className="border-t text-center py-4 text-white text-sm">
        © {new Date().getFullYear()} SmartCart AI. All rights reserved.
      </div>
    </footer>
  );

}