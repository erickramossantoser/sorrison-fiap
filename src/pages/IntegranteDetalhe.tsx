import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { integrantes } from '../data/integrantes'

const IntegranteDetalhe = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const integrante = integrantes.find((i) => i.id === id)

  useEffect(() => {
    if (!integrante) navigate('/integrantes')
    else document.title = `${integrante.nome} - SorrisON`
  }, [integrante, navigate])

  if (!integrante) return null

  return (
    <Layout>
      <section className="bg-[#2c7fb8] text-white text-center py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Perfil do Integrante</h1>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-slate-800 rounded-2xl p-10 text-center max-w-md mx-auto shadow-2xl">
            <div className="w-32 h-32 rounded-full bg-slate-700 border-4 border-[#2c7fb8] flex items-center justify-center text-6xl mx-auto mb-6">
              {integrante.emoji}
            </div>

            <h2 className="text-2xl font-bold mb-2">{integrante.nome}</h2>
            <p className="text-slate-400 mb-1">RM: {integrante.rm}</p>
            <p className="text-slate-400 mb-8">Turma: {integrante.turma}</p>

            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={integrante.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-slate-700 text-sky-400 rounded-lg no-underline font-medium text-sm hover:bg-slate-600 transition-colors duration-200"
              >
                🔗 GitHub
              </a>
              <a
                href={integrante.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-slate-700 text-sky-400 rounded-lg no-underline font-medium text-sm hover:bg-slate-600 transition-colors duration-200"
              >
                🔗 LinkedIn
              </a>
            </div>

            <Link
              to="/integrantes"
              className="inline-block px-6 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-900 font-bold rounded-lg no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              ← Voltar para Equipe
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IntegranteDetalhe
