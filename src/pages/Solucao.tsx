import { useEffect } from 'react'
import Layout from '../components/Layout'

const Solucao = () => {
  useEffect(() => {
    document.title = 'Solução - SorrisON'
  }, [])

  return (
    <Layout>
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Nossa Solução</h1>
          <p className="text-blue-100">Tecnologia a serviço da saúde bucal comunitária</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Como o SorrisON Resolve o Problema</h2>
            <p className="text-slate-400">Uma plataforma completa para gestão de triagem odontológica voluntária</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Problema Identificado', desc: 'ONGs e projetos sociais enfrentam dificuldades para organizar atendimentos odontológicos voluntários de forma eficiente.' },
              { icon: '💡', title: 'Nossa Proposta', desc: 'Uma plataforma digital que centraliza o cadastro de pacientes, organiza filas de espera e conecta voluntários a quem precisa.' },
              { icon: '⚙️', title: 'Como Funciona', desc: 'Pacientes se cadastram, passam por triagem automatizada e são conectados aos voluntários mais adequados para seu caso.' },
              { icon: '🌍', title: 'Impacto Social', desc: 'Mais atendimentos realizados, menos tempo de espera, maior eficiência para as ONGs parceiras.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-700 rounded-xl p-6 text-white transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Solucao
