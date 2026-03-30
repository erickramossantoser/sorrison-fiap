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
  { question: 'A plataforma funciona em dispositivos móveis?', answer: 'Sim! A plataforma é totalmente responsiva e funciona perfeitamente em smartphones, tablets e desktops.' },
  { question: 'Como é feita a triagem dos pacientes?', answer: 'A triagem é realizada com base em um formulário inteligente que avalia urgência, histórico e condições do paciente, gerando uma fila de prioridade automaticamente.' },
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
      <section className="bg-[#2c7fb8] text-white text-center py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Perguntas Frequentes</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Tire suas dúvidas sobre a plataforma SorrisON</p>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">FAQ</h2>
            <p className="text-slate-400 max-w-lg mx-auto">Respostas para as perguntas mais comuns sobre nosso projeto</p>
            <div className="w-20 h-1 bg-sky-400 mx-auto mt-4" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqData.map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-white hover:bg-slate-700 transition-colors duration-200 border-none cursor-pointer text-base bg-transparent"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className={`faq-arrow text-sky-400 ml-4 flex-shrink-0`}>▶</span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-5 border-t border-slate-700 text-slate-300 leading-relaxed">
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
