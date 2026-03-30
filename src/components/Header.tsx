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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-[#2c7fb8] no-underline">
          Sorris<span className="text-[#7fcdbb]">ON</span>
        </Link>

        {/* Botão hamburguer */}
        <button
          className="md:hidden border border-gray-300 rounded px-2 py-1 text-lg cursor-pointer bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="no-underline font-medium transition-colors duration-200 hover:text-[#2c7fb8]"
                  style={{
                    color: location.pathname === link.path ? '#2c7fb8' : '#253237',
                    fontWeight: location.pathname === link.path ? 700 : 500,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-5 pb-4">
          <ul className="flex flex-col gap-3 list-none m-0 p-0 pt-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="no-underline font-medium block py-1"
                  style={{
                    color: location.pathname === link.path ? '#2c7fb8' : '#253237',
                    fontWeight: location.pathname === link.path ? 700 : 500,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
