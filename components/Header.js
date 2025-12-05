import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
            NB
          </span>
          <span className="font-semibold text-lg tracking-tight">
            Nutrabay Clone
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <button className="hover:text-black transition-colors">Supplements</button>
          <button className="hover:text-black transition-colors">Vitamins</button>
          <button className="hover:text-black transition-colors">Combos</button>
        </nav>
      </div>
    </header>
  );
}
