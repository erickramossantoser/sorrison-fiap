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
      <section className="page-header">
        <div className="container">
          <h1>Perfil do Integrante</h1>
        </div>
      </section>
 
      <section className="dark-section">
        <div className="container">
          <div className="integrante-card">
            <div className="integrante-avatar">
              {integrante.emoji}
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              {integrante.nome}
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>RM: {integrante.rm}</p>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Turma: {integrante.turma}</p>
 
            <div className="social-links" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <a href={integrante.github} target="_blank" rel="noreferrer">
                🔗 GitHub
              </a>
              <a href={integrante.linkedin} target="_blank" rel="noreferrer">
                🔗 LinkedIn
              </a>
            </div>
 
            <Link to="/integrantes" className="btn">
              ← Voltar para Equipe
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
export default IntegranteDetalhe