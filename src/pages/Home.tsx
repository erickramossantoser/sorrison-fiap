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
      <section className="hero">
        <div className="container">
          <h1 className={`fade-in${visible ? ' show' : ''}`}>
            Conectando Sorrisos,<br />Transformando Vidas
          </h1>
          <p>
            Plataforma inteligente de gestão para triagem odontológica e voluntários,
            otimizando o atendimento a comunidades carentes.
          </p>
          <div className="hero-buttons">
            <Link to="/sobre" className="btn">
              Conheça o Projeto
            </Link>
            <Link to="/contato" className="btn-secondary">
              Participe como Voluntário
            </Link>
          </div>
        </div>
      </section>
 
      {/* Recursos */}
      <section id="recursos" className="dark-section">
        <div className="container">
          <div className="section-title">
            <h2>Como Funciona Nossa Plataforma</h2>
            <p>Uma solução completa para organizar atendimentos odontológicos voluntários</p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-item fade-in show">
                <div className="feature-icon">{f.icon}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
export default Home
 