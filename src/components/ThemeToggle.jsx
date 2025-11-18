import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return (
      window.matchMedia?.('(prefers-color-scheme: dark)').matches ||
      localStorage.getItem('theme') === 'dark'
    )
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
    >
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[10px] text-amber-300 dark:bg-amber-300 dark:text-zinc-900"
        aria-hidden="true"
      >
        {isDark ? '☾' : '☼'}
      </span>
      <span>{isDark ? 'Modo escuro' : 'Modo claro'}</span>
    </button>
  )
}

export default ThemeToggle
