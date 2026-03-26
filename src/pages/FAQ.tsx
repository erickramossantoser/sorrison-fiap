import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  { question: 'Como minha ONG pode utilizar a plataforma?', answer: 'Basta entrar em contato conosco para criar uma conta. Oferecemos suporte completo para implementação.' },
  { question: 'Quais os critérios para um paciente ser atendido?', answer: 'Desenvolvemos critérios baseados em: urgência do caso, condições socioeconômicas e idade.' },
  { question: 'A plataforma é gratuita para ONGs?', answer: 'Sim, a plataforma é completamente gratuita para organizações sem fins lucrativos.' },
  { question: 'Como os voluntários são cadastrados?', answer: 'Profissionais podem se cadastrar diretamente na plataforma, informando especialidade e disponibilidade.' },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    document.title = 'FAQ - SorrisON'
  }, [])

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Layout>
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Perguntas Frequentes</h1>
          <p className="text-blue-100">Tire suas dúvidas sobre a plataforma SorrisON</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">FAQ</h2>
            <p className="text-slate-400">Respostas para as perguntas mais comuns sobre nosso projeto</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-slate-700 rounded-xl overflow-hidden border border-slate-600">
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-white flex justify-between items-center hover:bg-slate-600 transition-colors"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>▶</span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 text-slate-300 border-t border-slate-600 bg-slate-800">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FAQ
