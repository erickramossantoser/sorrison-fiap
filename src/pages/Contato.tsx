import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout'
 
interface FormData {
  nome: string
  email: string
  telefone?: string
  tipo: string
  mensagem: string
}
 
const Contato = () => {
  const [enviado, setEnviado] = useState(false)
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()
 
  useEffect(() => {
    document.title = 'Contato - SorrisON'
  }, [])
 
  const onSubmit = (data: FormData) => {
    console.log('Formulário enviado:', data)
    setEnviado(true)
    reset()
    setTimeout(() => setEnviado(false), 4000)
  }
 
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>Estamos prontos para ajudar sua organização ou responder suas dúvidas</p>
        </div>
      </section>
 
      <section className="dark-section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="section-title">
            <h2>Fale Conosco</h2>
            <p>Preencha o formulário e entraremos em contato em breve</p>
          </div>
 
          {enviado && (
            <div className="alert-success">
              ✅ Mensagem enviada com sucesso!
            </div>
          )}
 
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form" style={{ background: '#1e293b' }}>
            {/* Nome */}
            <div className="form-group">
              <label>Nome Completo *</label>
              <input
                {...register('nome', { required: 'Nome é obrigatório', minLength: { value: 2, message: 'Nome muito curto' } })}
                className={`form-control${errors.nome ? ' error' : ''}`}
                placeholder="Seu nome completo"
              />
              {errors.nome && <span className="error-message">{errors.nome.message}</span>}
            </div>
 
            {/* Email */}
            <div className="form-group">
              <label>E-mail *</label>
              <input
                {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' } })}
                type="email"
                className={`form-control${errors.email ? ' error' : ''}`}
                placeholder="seu@email.com"
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
 
            {/* Telefone */}
            <div className="form-group">
              <label>Telefone</label>
              <input
                {...register('telefone')}
                type="tel"
                className="form-control"
                placeholder="(11) 99999-9999"
              />
            </div>
 
            {/* Tipo */}
            <div className="form-group">
              <label>Tipo de Contato</label>
              <select {...register('tipo')} className="form-control">
                <option value="">Selecione...</option>
                <option value="ong">ONG/Instituição</option>
                <option value="voluntario">Voluntário</option>
                <option value="duvida">Dúvida</option>
                <option value="outro">Outro</option>
              </select>
            </div>
 
            {/* Mensagem */}
            <div className="form-group">
              <label>Mensagem *</label>
              <textarea
                {...register('mensagem', { required: 'Mensagem é obrigatória', minLength: { value: 5, message: 'Mensagem muito curta' } })}
                rows={5}
                className={`form-control${errors.mensagem ? ' error' : ''}`}
                placeholder="Escreva sua mensagem..."
              />
              {errors.mensagem && <span className="error-message">{errors.mensagem.message}</span>}
            </div>
 
            <button type="submit" className="btn" style={{ width: '100%', fontSize: '1rem' }}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
 
export default Contato