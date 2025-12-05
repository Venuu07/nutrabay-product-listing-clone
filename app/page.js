"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-high-low":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
      // featured → no sorting
    }

    return result;
  }, [searchQuery, category, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Supplements & Nutrition
          </h1>
          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          category={category}
          onCategoryChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          categories={categories}
        />

        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-gray-500 text-sm">
            No products found. Try changing filters.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
