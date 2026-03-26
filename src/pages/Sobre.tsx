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
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Sobre o Projeto</h1>
          <p className="text-blue-100">Conectando tecnologia e solidariedade para transformar sorrisos</p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Nossa Missão</h2>
            <p className="text-slate-400">Como surgiu a ideia de revolucionar o atendimento odontológico voluntário</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>

          <div className="bg-slate-700 text-slate-200 rounded-xl p-6 mb-12 shadow">
            <p>
              O SorrisON nasceu da observação de que muitas ONGs e projetos sociais enfrentam dificuldades para organizar atendimentos odontológicos voluntários de forma eficiente.
            </p>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Roadmap</h2>
            <p className="text-slate-400">Nossa trajetória e planos futuros</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>

          {/* Roadmap */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-500" />
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="relative pl-16 mb-8 cursor-pointer"
                onClick={() => setActivePhase(activePhase === index ? null : index)}
              >
                <div className="absolute left-3 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow" />
                <div className={`bg-slate-700 rounded-xl p-5 transition-all hover:shadow-xl ${activePhase === index ? 'ring-2 ring-blue-400' : ''}`}>
                  <p className="text-blue-400 font-semibold text-sm mb-1">{item.phase}</p>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
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
