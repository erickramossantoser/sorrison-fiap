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
    document.title = 'SorrisON - Conectando Sorrisos, Transformando Vidas'
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      {/* Hero */}
      <section
        className="text-white text-center py-32 bg-cover bg-center"
        style={{
          background: `linear-gradient(135deg, rgba(44,127,184,0.9), rgba(29,111,165,0.9)), url('https://images.unsplash.com/photo-1588776814546-ec7e5c9a5b75?auto=format&fit=crop&w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 fade-in${visible ? ' show' : ''}`}
          >
            Conectando Sorrisos,<br />Transformando Vidas
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Plataforma inteligente de gestão para triagem odontológica e voluntários,
            otimizando o atendimento a comunidades carentes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/sobre"
              className="inline-block px-7 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-900 font-bold rounded-lg no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Conheça o Projeto
            </Link>
            <Link
              to="/contato"
              className="inline-block px-7 py-3 bg-white text-[#2c7fb8] font-semibold rounded-lg no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Participe como Voluntário
            </Link>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Como Funciona Nossa Plataforma</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Uma solução completa para organizar atendimentos odontológicos voluntários</p>
            <div className="w-20 h-1 bg-sky-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="text-center p-8 bg-slate-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
