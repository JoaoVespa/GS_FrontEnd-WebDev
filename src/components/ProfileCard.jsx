function ProfileCard({ profile, onClick }) {
  const topSkills = (profile.habilidadesTecnicas || []).slice(0, 3)

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="flex items-start gap-3">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-emerald-500/70"
        />
        <div className="flex-1">
          <h2 className="text-sm font-semibold">{profile.nome}</h2>
          <p className="text-xs text-emerald-600 dark:text-emerald-400">
            {profile.cargo}
          </p>
          <p className="mt-1 line-clamp-2 text-xs text-zinc-600 dark:text-zinc-400">
            {profile.resumo}
          </p>
          <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
            {profile.localizacao} • {profile.area}
          </p>
        </div>
      </div>

      {topSkills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </button>
  )
}

export default ProfileCard
