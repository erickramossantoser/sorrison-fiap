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
      <section className="page-header">
        <div className="container">
          <h1>Perguntas Frequentes</h1>
          <p>Tire suas dúvidas sobre a plataforma SorrisON</p>
        </div>
      </section>
 
      <section className="dark-section">
        <div className="container">
          <div className="section-title">
            <h2>FAQ</h2>
            <p>Respostas para as perguntas mais comuns sobre nosso projeto</p>
          </div>
 
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className={`faq-arrow${openIndex === index ? ' open' : ''}`}>▶</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
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