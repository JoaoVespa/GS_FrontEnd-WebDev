function Select({ label, value, onChange, options, placeholder }) {
  return (
    <div className="flex-1 min-w-[140px]">
      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-2 py-2 text-xs shadow-sm outline-none transition focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

function FiltersBar({
  areas,
  locations,
  techs,
  areaFilter,
  onAreaChange,
  locationFilter,
  onLocationChange,
  techFilter,
  onTechChange,
}) {
  return (
    <div className="flex flex-wrap gap-3 rounded-2xl border border-zinc-200 bg-white p-3 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <Select
        label="Área"
        value={areaFilter}
        onChange={onAreaChange}
        options={areas}
        placeholder="Todas as áreas"
      />
      <Select
        label="Cidade"
        value={locationFilter}
        onChange={onLocationChange}
        options={locations}
        placeholder="Todas as localidades"
      />
      <Select
        label="Tecnologia"
        value={techFilter}
        onChange={onTechChange}
        options={techs}
        placeholder="Todas as tecnologias"
      />
    </div>
  )
}

export default FiltersBar
