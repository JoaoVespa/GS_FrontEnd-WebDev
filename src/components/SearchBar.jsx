function SearchBar({ value, onChange }) {
  return (
    <div className="mt-4">
      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
        Buscar profissional
      </label>
      <div className="mt-1 flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900">
        <span className="text-lg" aria-hidden="true">
          🔍
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Busque por nome, cargo, área ou tecnologia..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
        />
      </div>
    </div>
  )
}

export default SearchBar
