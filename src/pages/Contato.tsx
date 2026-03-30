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

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-lg bg-slate-700 border text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors duration-200 ${
      hasError ? 'border-red-500' : 'border-slate-600'
    }`

  return (
    <Layout>
      <section className="bg-[#2c7fb8] text-white text-center py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Entre em Contato</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Estamos prontos para ajudar sua organização ou responder suas dúvidas</p>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Fale Conosco</h2>
            <p className="text-slate-400">Preencha o formulário e entraremos em contato em breve</p>
            <div className="w-20 h-1 bg-sky-400 mx-auto mt-4" />
          </div>

          {enviado && (
            <div className="bg-green-600 text-white text-center font-semibold px-6 py-4 rounded-xl mb-6">
              ✅ Mensagem enviada com sucesso!
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 rounded-2xl p-8 space-y-5">
            {/* Nome */}
            <div>
              <label className="block text-slate-300 font-medium mb-2">Nome Completo *</label>
              <input
                {...register('nome', { required: 'Nome é obrigatório', minLength: { value: 2, message: 'Nome muito curto' } })}
                className={inputClass(!!errors.nome)}
                placeholder="Seu nome completo"
              />
              {errors.nome && <span className="text-red-400 text-sm mt-1 block">{errors.nome.message}</span>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-300 font-medium mb-2">E-mail *</label>
              <input
                {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' } })}
                type="email"
                className={inputClass(!!errors.email)}
                placeholder="seu@email.com"
              />
              {errors.email && <span className="text-red-400 text-sm mt-1 block">{errors.email.message}</span>}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-slate-300 font-medium mb-2">Telefone</label>
              <input
                {...register('telefone')}
                type="tel"
                className={inputClass(false)}
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Tipo */}
            <div>
              <label className="block text-slate-300 font-medium mb-2">Tipo de Contato</label>
              <select {...register('tipo')} className={inputClass(false)}>
                <option value="">Selecione...</option>
                <option value="ong">ONG/Instituição</option>
                <option value="voluntario">Voluntário</option>
                <option value="duvida">Dúvida</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-slate-300 font-medium mb-2">Mensagem *</label>
              <textarea
                {...register('mensagem', { required: 'Mensagem é obrigatória', minLength: { value: 5, message: 'Mensagem muito curta' } })}
                rows={5}
                className={inputClass(!!errors.mensagem)}
                placeholder="Escreva sua mensagem..."
              />
              {errors.mensagem && <span className="text-red-400 text-sm mt-1 block">{errors.mensagem.message}</span>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-900 font-bold rounded-lg text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer border-none"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contato
