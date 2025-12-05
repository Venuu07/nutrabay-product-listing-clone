import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group border rounded-xl p-3 bg-white hover:shadow-md transition-shadow flex flex-col"
    >
      <div className="aspect-square w-full mb-3 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
        />
      </div>

      <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
        {product.brand}
      </div>
      <h3 className="text-sm font-medium line-clamp-2 mb-2">
        {product.title}
      </h3>

      <div className="flex items-center justify-between mt-auto">
        <div>
          <div className="text-lg font-semibold">₹{product.price}</div>
          <div className="text-[11px] text-gray-500">Incl. of all taxes</div>
        </div>
        <div className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          <span>{product.rating.toFixed(1)}</span>
          <span>★</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-lg bg-black text-white text-sm py-2 font-medium group-hover:bg-gray-900"
      >
        Add to Cart
      </button>
    </Link>
  );
}
