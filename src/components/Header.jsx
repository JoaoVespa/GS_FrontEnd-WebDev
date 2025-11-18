function Header() {
  return (
    <header className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white shadow">
        FW
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">Future Work Network</div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Profissionais, competências e propósito em uma só rede.
        </p>
      </div>
    </header>
  )
}

export default Header
