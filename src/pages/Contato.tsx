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
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-3">Entre em Contato</h1>
          <p className="text-blue-100">Estamos prontos para ajudar sua organização ou responder suas dúvidas</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Fale Conosco</h2>
            <p className="text-slate-400">Preencha o formulário e entraremos em contato em breve</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>

          {enviado && (
            <div className="bg-green-500 text-white text-center rounded-xl p-4 mb-6 font-semibold">
              ✅ Mensagem enviada com sucesso!
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-700 rounded-2xl p-8 flex flex-col gap-5 shadow-2xl">
            {/* Nome */}
            <div>
              <label className="block text-slate-200 font-medium mb-1">Nome Completo *</label>
              <input
                {...register('nome', { required: 'Nome é obrigatório', minLength: { value: 2, message: 'Nome muito curto' } })}
                className={`w-full px-4 py-2 rounded-lg bg-slate-600 border text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition ${errors.nome ? 'border-red-500' : 'border-slate-500'}`}
                placeholder="Seu nome completo"
              />
              {errors.nome && <span className="text-red-400 text-sm mt-1 block">{errors.nome.message}</span>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-200 font-medium mb-1">E-mail *</label>
              <input
                {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' } })}
                type="email"
                className={`w-full px-4 py-2 rounded-lg bg-slate-600 border text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition ${errors.email ? 'border-red-500' : 'border-slate-500'}`}
                placeholder="seu@email.com"
              />
              {errors.email && <span className="text-red-400 text-sm mt-1 block">{errors.email.message}</span>}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-slate-200 font-medium mb-1">Telefone</label>
              <input
                {...register('telefone')}
                type="tel"
                className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Tipo */}
            <div>
              <label className="block text-slate-200 font-medium mb-1">Tipo de Contato</label>
              <select
                {...register('tipo')}
                className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 text-white focus:outline-none focus:border-blue-400 transition"
              >
                <option value="">Selecione...</option>
                <option value="ong">ONG/Instituição</option>
                <option value="voluntario">Voluntário</option>
                <option value="duvida">Dúvida</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-slate-200 font-medium mb-1">Mensagem *</label>
              <textarea
                {...register('mensagem', { required: 'Mensagem é obrigatória', minLength: { value: 5, message: 'Mensagem muito curta' } })}
                rows={5}
                className={`w-full px-4 py-2 rounded-lg bg-slate-600 border text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition resize-vertical ${errors.mensagem ? 'border-red-500' : 'border-slate-500'}`}
                placeholder="Escreva sua mensagem..."
              />
              {errors.mensagem && <span className="text-red-400 text-sm mt-1 block">{errors.mensagem.message}</span>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg"
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
