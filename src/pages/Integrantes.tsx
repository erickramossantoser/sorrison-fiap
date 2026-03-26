import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { integrantes } from '../data/integrantes'
 
const Integrantes = () => {
  useEffect(() => {
    document.title = 'Integrantes - SorrisON'
  }, [])
 
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1>Nossa Equipe</h1>
          <p>Conheça os profissionais dedicados por trás do SorrisON</p>
        </div>
      </section>
 
      <section className="dark-section">
        <div className="container">
          <div className="section-title">
            <h2>Integrantes do Projeto</h2>
            <p>Equipe multidisciplinar unida pelo propósito de transformar vidas através da tecnologia</p>
          </div>
 
          <div className="grid team-grid">
            {integrantes.map((integrante) => (
              <Link
                key={integrante.id}
                to={`/integrantes/${integrante.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="team-member" style={{ background: '#1e293b', color: 'white' }}>
                  <div className="member-photo-placeholder" style={{ background: '#334155' }}>
                    {integrante.emoji}
                  </div>
                  <p className="member-name" style={{ color: 'white' }}>{integrante.nome}</p>
                  <p className="member-info">RM: {integrante.rm}</p>
                  <p className="member-info">Turma: {integrante.turma}</p>
                  <span style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 500 }}>
                    Ver perfil →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
export default Integrantes