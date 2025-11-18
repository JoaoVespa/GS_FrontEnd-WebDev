    function Section({ title, children }) {
      return (
        <section className="mt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {title}
          </h3>
          <div className="mt-2 text-sm text-zinc-800 dark:text-zinc-100">
            {children}
          </div>
        </section>
      )
    }

    function ProfileModal({ profile, onClose }) {
      const handleRecommend = () => {
        alert(`Recomendação enviada para ${profile.nome}! (simulação)`)
      }

      const handleMessage = () => {
        const assunto = encodeURIComponent(
          `Contato via Future Work Network - ${profile.nome}`,
        )
        const corpo = encodeURIComponent(
          `Olá ${profile.nome},

Encontrei seu perfil na Future Work Network e gostaria de conversar sobre oportunidades relacionadas ao futuro do trabalho.

Obrigado(a)!`,
        )
        window.location.href = `mailto:${profile.email || ''}?subject=${assunto}&body=${corpo}`
      }

      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-950">
            <header className="flex items-start gap-3 border-b border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
              <img
                src={profile.foto}
                alt={profile.nome}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-emerald-500/70"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{profile.nome}</h2>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  {profile.cargo}
                </p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {profile.localizacao} • {profile.area}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1 text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800"
                aria-label="Fechar"
              >
                ✕
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <Section title="Resumo">
                <p className="text-sm leading-relaxed">{profile.resumo}</p>
              </Section>

              <Section title="Experiências">
                {profile.experiencias && profile.experiencias.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {profile.experiencias.map((exp, idx) => (
                      <li
                        key={idx}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900"
                      >
                        <div className="font-medium">
                          {exp.empresa} — {exp.cargo}
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          {exp.inicio} • {exp.fim || 'Atual'}
                        </div>
                        <p className="mt-1">{exp.descricao}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Experiências profissionais ainda não informadas.
                  </p>
                )}
              </Section>

              <Section title="Formação">
                {profile.formacao && profile.formacao.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {profile.formacao.map((f, idx) => (
                      <li key={idx} className="text-xs">
                        <div className="font-medium">
                          {f.curso} — {f.instituicao}
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          Conclusão: {f.ano}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Formação acadêmica ainda não informada.
                  </p>
                )}
              </Section>

              <Section title="Habilidades técnicas & Soft skills">
                <div className="flex flex-wrap gap-2 text-xs">
                  {(profile.habilidadesTecnicas || []).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
                    >
                      {skill}
                    </span>
                  ))}
                  {(profile.softSkills || []).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Section>

              <Section title="Projetos em destaque">
                {profile.projetos && profile.projetos.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {profile.projetos.map((proj, idx) => (
                      <li
                        key={idx}
                        className="rounded-lg border border-zinc-200 bg-white p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900"
                      >
                        <div className="font-medium">{proj.titulo}</div>
                        <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                          {proj.descricao}
                        </p>
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-flex text-[11px] text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400"
                          >
                            Ver projeto
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Nenhum projeto cadastrado ainda.
                  </p>
                )}
              </Section>

              <Section title="Certificações & Idiomas">
                <div className="flex flex-wrap gap-2 text-xs">
                  {(profile.certificacoes || []).map((cert) => (
                    <span
                      key={cert}
                      className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 dark:bg-sky-900/40 dark:text-sky-200"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
                <div className="mt-2 space-y-1 text-xs">
                  {(profile.idiomas || []).map((idi, idx) => (
                    <div key={idx} className="text-zinc-600 dark:text-zinc-300">
                      <span className="font-medium">{idi.idioma}</span> —{' '}
                      <span>{idi.nivel}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Áreas de interesse">
                <div className="flex flex-wrap gap-2 text-xs">
                  {(profile.areaInteresses || []).map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-purple-50 px-2 py-1 text-[11px] font-medium text-purple-700 dark:bg-purple-900/40 dark:text-purple-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Section>
            </div>

            <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-zinc-50 px-5 py-3 text-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Use os botões para simular ações de recomendação e contato com o
                profissional.
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleRecommend}
                  className="btn btn-primary text-xs"
                >
                  Recomendar profissional
                </button>
                <button
                  type="button"
                  onClick={handleMessage}
                  className="btn btn-outline text-xs"
                >
                  Enviar mensagem
                </button>
              </div>
            </footer>
          </div>
        </div>
      )
    }

    export default ProfileModal
