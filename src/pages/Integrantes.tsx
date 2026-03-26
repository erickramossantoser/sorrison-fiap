import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export interface Integrante {
  id: string
  nome: string
  rm: string
  turma: string
  github: string
  linkedin: string
  emoji: string
}

export const integrantes: Integrante[] = [
  {
    id: '1',
    nome: 'Erick Ramos',
    rm: '567837',
    turma: '1TDSPB',
    github: 'https://github.com/erickramossantoser-create',
    linkedin: '#',
    emoji: '👤',
  },
  {
    id: '2',
    nome: 'Guilherme de Sousa Leopoldino',
    rm: '567242',
    turma: '1TDSPB',
    github: 'https://github.com/GuiDSLeopoldino',
    linkedin: '#',
    emoji: '👤',
  },
  {
    id: '3',
    nome: 'Lucas Cunha Maia Vila Nova',
    rm: '566742',
    turma: '1TDSPB',
    github: 'https://github.com/lucascunhamaia',
    linkedin: '#',
    emoji: '👤',
  },
]

const Integrantes = () => {
  useEffect(() => {
    document.title = 'Integrantes - SorrisON'
  }, [])

  return (
    <Layout>
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Nossa Equipe</h1>
          <p className="text-blue-100">Conheça os profissionais dedicados por trás do SorrisON</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Integrantes do Projeto</h2>
            <p className="text-slate-400">Equipe multidisciplinar unida pelo propósito de transformar vidas através da tecnologia</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrantes.map((integrante) => (
              <Link
                key={integrante.id}
                to={`/integrantes/${integrante.id}`}
                className="bg-slate-700 text-white text-center p-8 rounded-xl transition-all hover:-translate-y-2 hover:shadow-2xl block"
              >
                <div className="w-28 h-28 rounded-full bg-slate-600 border-4 border-blue-500 flex items-center justify-center text-5xl mx-auto mb-5">
                  {integrante.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-2">{integrante.nome}</h3>
                <p className="text-slate-400 text-sm mb-1">RM: {integrante.rm}</p>
                <p className="text-slate-400 text-sm mb-4">Turma: {integrante.turma}</p>
                <span className="text-blue-400 text-sm font-medium">Ver perfil →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Integrantes