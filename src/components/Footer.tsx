import { Link } from 'react-router-dom'

const links = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/solucao', label: 'Solução' },
  { href: '/integrantes', label: 'Integrantes' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
]

const Footer = () => {
  return (
    <footer className="bg-[#253237] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#2c7fb8] inline-block">
              SorrisON
            </h3>
            <p className="text-[#bdc3c7] text-sm leading-relaxed">
              Plataforma de gestão para triagem odontológica e voluntários,
              transformando sorrisos e vidas através da tecnologia.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#2c7fb8] inline-block">
              Links Rápidos
            </h3>
            <ul className="list-none p-0 m-0 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#bdc3c7] text-sm no-underline hover:text-[#7fcdbb] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#2c7fb8] inline-block">
              Contato
            </h3>
            <p className="text-[#bdc3c7] text-sm leading-relaxed">
              📧 contato@sorrison.com.br<br />
              📍 São Paulo, SP – Brasil
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-[#bdc3c7] text-sm">
          © 2025 SorrisON. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
