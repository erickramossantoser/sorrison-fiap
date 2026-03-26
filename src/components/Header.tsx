import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/integrantes', label: 'Integrantes' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contato', label: 'Contato' },
  { path: '/solucao', label: 'Solução' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-md w-full">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between py-4 flex-wrap">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Sorris<span className="text-teal-400">ON</span>
        </Link>

        {/* Botão hambúrguer */}
        <button
          className="md:hidden border border-gray-300 rounded px-3 py-1 text-gray-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Menu */}
        <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto gap-1 mt-3 md:mt-0`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2 rounded font-semibold text-sm transition-all hover:bg-gray-100 hover:-translate-y-0.5
                ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-900'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
