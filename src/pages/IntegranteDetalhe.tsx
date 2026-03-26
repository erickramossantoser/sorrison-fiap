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
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Perfil do Integrante</h1>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-lg mx-auto px-5">
          <div className="bg-slate-700 text-white rounded-2xl p-10 text-center shadow-2xl">
            <div className="w-32 h-32 rounded-full bg-slate-600 border-4 border-blue-500 flex items-center justify-center text-6xl mx-auto mb-6">
              {integrante.emoji}
            </div>
            <h2 className="text-2xl font-bold mb-2">{integrante.nome}</h2>
            <p className="text-slate-400 mb-1">RM: {integrante.rm}</p>
            <p className="text-slate-400 mb-6">Turma: {integrante.turma}</p>
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <a href={integrante.github} target="_blank" rel="noreferrer"
                className="text-blue-400 hover:text-teal-400 transition-colors font-medium">
                🔗 GitHub
              </a>
              <a href={integrante.linkedin} target="_blank" rel="noreferrer"
                className="text-blue-400 hover:text-teal-400 transition-colors font-medium">
                🔗 LinkedIn
              </a>
            </div>
            <Link to="/integrantes"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
              ← Voltar para Equipe
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IntegranteDetalhe