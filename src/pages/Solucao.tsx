import { useEffect } from 'react'
import Layout from '../components/Layout'
 
const Solucao = () => {
  useEffect(() => {
    document.title = 'Solução - SorrisON'
  }, [])
 
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1>Nossa Solução</h1>
          <p>Tecnologia a serviço da saúde bucal comunitária</p>
        </div>
      </section>
 
      <section className="dark-section">
        <div className="container">
          <div className="section-title">
            <h2>Como o SorrisON Resolve o Problema</h2>
            <p>Uma plataforma completa para gestão de triagem odontológica voluntária</p>
          </div>
 
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { icon: '🎯', title: 'Problema Identificado', desc: 'ONGs e projetos sociais enfrentam dificuldades para organizar atendimentos odontológicos voluntários de forma eficiente.' },
              { icon: '💡', title: 'Nossa Proposta', desc: 'Uma plataforma digital que centraliza o cadastro de pacientes, organiza filas de espera e conecta voluntários a quem precisa.' },
              { icon: '⚙️', title: 'Como Funciona', desc: 'Pacientes se cadastram, passam por triagem automatizada e são conectados aos voluntários mais adequados para seu caso.' },
              { icon: '🌍', title: 'Impacto Social', desc: 'Mais atendimentos realizados, menos tempo de espera, maior eficiência para as ONGs parceiras.' },
            ].map((item) => (
              <div key={item.title} className="feature-item" style={{ background: '#1e293b', color: 'white' }}>
                <div className="feature-icon">{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
export default Solucao
 
    