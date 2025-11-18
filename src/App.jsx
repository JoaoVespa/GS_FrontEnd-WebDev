import { useMemo, useState } from 'react'
import profilesData from './data/profiles.json'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import FiltersBar from './components/FiltersBar.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import ProfileModal from './components/ProfileModal.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [areaFilter, setAreaFilter] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [techFilter, setTechFilter] = useState('')
  const [selectedProfile, setSelectedProfile] = useState(null)

  const areas = useMemo(
    () => Array.from(new Set(profilesData.map((p) => p.area))).sort(),
    []
  )
  const locations = useMemo(
    () => Array.from(new Set(profilesData.map((p) => p.localizacao))).sort(),
    []
  )
  const techs = useMemo(
    () =>
      Array.from(
        new Set(
          profilesData.flatMap((p) => p.habilidadesTecnicas || []),
        ),
      ).sort(),
    []
  )

  const filteredProfiles = useMemo(() => {
    return profilesData.filter((profile) => {
      const term = searchTerm.toLowerCase()
      const matchesSearch =
        !term ||
        profile.nome.toLowerCase().includes(term) ||
        profile.cargo.toLowerCase().includes(term) ||
        profile.resumo.toLowerCase().includes(term) ||
        (profile.habilidadesTecnicas || []).some((h) =>
          h.toLowerCase().includes(term),
        )

      const matchesArea = !areaFilter || profile.area === areaFilter
      const matchesLocation =
        !locationFilter || profile.localizacao === locationFilter
      const matchesTech =
        !techFilter ||
        (profile.habilidadesTecnicas || []).includes(techFilter)

      return matchesSearch && matchesArea && matchesLocation && matchesTech
    })
  }, [searchTerm, areaFilter, locationFilter, techFilter])

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Header />
          <ThemeToggle />
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Conectando talentos ao futuro do trabalho
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              Explore profissionais em transição, talentos em ascensão e especialistas
              em tecnologia, inovação e economia verde.
            </p>
          </div>
        </section>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <div className="mt-4">
          <FiltersBar
            areas={areas}
            locations={locations}
            techs={techs}
            areaFilter={areaFilter}
            onAreaChange={setAreaFilter}
            locationFilter={locationFilter}
            onLocationChange={setLocationFilter}
            techFilter={techFilter}
            onTechChange={setTechFilter}
          />
        </div>

        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
            <span>
              Mostrando <strong>{filteredProfiles.length}</strong> de{' '}
              <strong>{profilesData.length}</strong> profissionais
            </span>
            <span className="hidden sm:inline">
              Clique em um card para ver o perfil completo e interagir.
            </span>
          </div>

          <div className="card-grid">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onClick={() => setSelectedProfile(profile)}
              />
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <p className="mt-6 rounded-xl border border-dashed border-zinc-300 bg-white/70 p-6 text-center text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-400">
              Nenhum profissional encontrado com os filtros atuais. Ajuste a busca
              para explorar outros perfis.
            </p>
          )}
        </section>
      </main>

      <Footer />

      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  )
}

export default App
