import { useEffect } from 'react'
import Layout from '../components/Layout'

const items = [
  { icon: '🎯', title: 'Problema Identificado', desc: 'ONGs e projetos sociais enfrentam dificuldades para organizar atendimentos odontológicos voluntários de forma eficiente.' },
  { icon: '💡', title: 'Nossa Proposta', desc: 'Uma plataforma digital que centraliza o cadastro de pacientes, organiza filas de espera e conecta voluntários a quem precisa.' },
  { icon: '⚙️', title: 'Como Funciona', desc: 'Pacientes se cadastram, passam por triagem automatizada e são conectados aos voluntários mais adequados para seu caso.' },
  { icon: '🌍', title: 'Impacto Social', desc: 'Mais atendimentos realizados, menos tempo de espera, maior eficiência para as ONGs parceiras.' },
]

const Solucao = () => {
  useEffect(() => {
    document.title = 'Solução - SorrisON'
  }, [])

  return (
    <Layout>
      <section className="bg-[#2c7fb8] text-white text-center py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Nossa Solução</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Tecnologia a serviço da saúde bucal comunitária</p>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Como o SorrisON Resolve o Problema</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Uma plataforma completa para gestão de triagem odontológica voluntária</p>
            <div className="w-20 h-1 bg-sky-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Solucao
