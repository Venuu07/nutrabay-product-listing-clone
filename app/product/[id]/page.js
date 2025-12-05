import Link from "next/link";
import products from "@/data/products.json";
import { notFound } from "next/navigation";

export default function ProductPage({ params }) {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-600 hover:text-black">
            ← Back to products
          </Link>
          <span className="text-sm text-gray-500">Product Details</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl bg-white border p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 max-w-full object-contain"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase text-gray-500 tracking-wide mb-1">
                {product.brand}
              </div>
              <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  {product.rating.toFixed(1)} ★
                </span>
                <span className="text-gray-500">Category: {product.category}</span>
              </div>
            </div>

            <div className="border-y py-4">
              <div className="text-3xl font-semibold mb-1">₹{product.price}</div>
              <div className="text-xs text-gray-500">
                Inclusive of all taxes | Free delivery on eligible orders
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>
                This is a mock product page for the Nutrabay-style listing clone.
              </p>
              <ul className="list-disc ml-5 space-y-1">
                <li>High-quality ingredients</li>
                <li>Trusted by fitness enthusiasts</li>
                <li>Easy to mix and digest</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 rounded-lg bg-black text-white py-2 text-sm font-medium">
                Add to Cart
              </button>
              <button className="flex-1 rounded-lg border border-black text-black py-2 text-sm font-medium">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
