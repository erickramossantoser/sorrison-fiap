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
      <section className="bg-[#2c7fb8] text-white text-center py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Nossa Equipe</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Conheça os profissionais dedicados por trás do SorrisON</p>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Integrantes do Projeto</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Equipe multidisciplinar unida pelo propósito de transformar vidas através da tecnologia</p>
            <div className="w-20 h-1 bg-sky-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {integrantes.map((integrante) => (
              <Link
                key={integrante.id}
                to={`/integrantes/${integrante.id}`}
                className="no-underline w-full max-w-sm"
              >
                <div className="bg-slate-800 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:outline hover:outline-2 hover:outline-sky-400 h-full">
                  <div className="w-28 h-28 rounded-full bg-slate-700 border-4 border-[#2c7fb8] flex items-center justify-center text-5xl mx-auto mb-5">
                    {integrante.emoji}
                  </div>
                  <p className="text-lg font-semibold text-white mb-1">{integrante.nome}</p>
                  <p className="text-slate-400 text-sm mb-1">RM: {integrante.rm}</p>
                  <p className="text-slate-400 text-sm mb-4">Turma: {integrante.turma}</p>
                  <span className="text-sky-400 text-sm font-medium">Ver perfil →</span>
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
