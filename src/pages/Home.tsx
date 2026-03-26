import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  { icon: '👥', title: 'Cadastro de Pacientes', description: 'Sistema estruturado para registro completo de pacientes, incluindo dados pessoais e condições bucais.' },
  { icon: '🦷', title: 'Triagem Inteligente', description: 'Critérios automáticos de priorização baseados em urgência, idade e condições socioeconômicas.' },
  { icon: '👨‍⚕️', title: 'Rede de Voluntários', description: 'Cadastro de dentistas com especialidades, disponibilidade e locais de atendimento.' },
  { icon: '📊', title: 'Relatórios e Métricas', description: 'Indicadores de impacto social para demonstrar resultados a parceiros e financiadores.' },
]

const Home = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      {/* Hero */}
      <section
        className="text-white py-16 md:py-24"
        style={{
          background: 'linear-gradient(135deg, rgba(44,127,184,0.88), rgba(29,111,165,0.88)), url(https://images.unsplash.com/photo-1588776814546-ec7e5c9a5b75?auto=format&fit=crop&w=1400&q=80) center/cover no-repeat',
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <h1
            className={`text-3xl md:text-5xl font-bold leading-tight mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Conectando Sorrisos,<br />Transformando Vidas
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mb-8">
            Plataforma inteligente de gestão para triagem odontológica e voluntários, otimizando o atendimento a comunidades carentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/sobre" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition-all hover:-translate-y-0.5 shadow-lg">
              Conheça o Projeto
            </Link>
            <Link to="/contato" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-lg text-center transition-all hover:-translate-y-0.5 shadow-lg">
              Participe como Voluntário
            </Link>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Como Funciona Nossa Plataforma</h2>
            <p className="text-slate-400">Uma solução completa para organizar atendimentos odontológicos voluntários</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-slate-700 text-white text-center p-6 rounded-xl transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-300 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
