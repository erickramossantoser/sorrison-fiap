import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
 
interface RoadmapItem {
  phase: string
  title: string
  description: string
}
 
const roadmap: RoadmapItem[] = [
  { phase: 'Fase 1 - MVP', title: 'Sistema Básico de Triagem', description: 'Desenvolvimento do MVP com ferramentas gratuitas para validação do conceito.' },
  { phase: 'Fase 2 - Plataforma Web', title: 'Sistema Proprietário', description: 'Desenvolvimento da plataforma web própria com cadastro completo.' },
  { phase: 'Fase 3 - Expansão', title: 'Integração com Parceiros', description: 'Conectar com clínicas e hospitais parceiros para ampliar o alcance.' },
]
 
const Sobre = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null)
 
  useEffect(() => {
    document.title = 'Sobre - SorrisON'
  }, [])
 
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Sobre o Projeto</h1>
          <p>Conectando tecnologia e solidariedade para transformar sorrisos</p>
        </div>
      </section>
 
      {/* Conteúdo */}
      <section className="dark-section">
        <div className="container">
          <div className="section-title">
            <h2>Nossa Missão</h2>
            <p>Como surgiu a ideia de revolucionar o atendimento odontológico voluntário</p>
          </div>
 
          <div className="card" style={{ background: '#1e293b', color: '#cbd5e1', marginBottom: '3rem' }}>
            <p>
              O SorrisON nasceu da observação de que muitas ONGs e projetos sociais enfrentam
              dificuldades para organizar atendimentos odontológicos voluntários de forma eficiente.
            </p>
          </div>
 
          <div className="section-title">
            <h2>Roadmap</h2>
            <p>Nossa trajetória e planos futuros</p>
          </div>
 
          {/* Roadmap */}
          <div className="roadmap-container">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="roadmap-item"
                onClick={() => setActivePhase(activePhase === index ? null : index)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="card"
                  style={{
                    background: '#1e293b',
                    color: 'white',
                    outline: activePhase === index ? '2px solid #38bdf8' : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  <p className="roadmap-date">{item.phase}</p>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
export default Sobre
 