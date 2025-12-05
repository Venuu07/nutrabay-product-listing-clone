export default function SearchBar({
  searchQuery,
  onSearchChange,
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-6">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search products, brands…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      <div className="flex gap-3">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating-high-low">Rating: High to Low</option>
        </select>
      </div>
    </div>
  );
}
