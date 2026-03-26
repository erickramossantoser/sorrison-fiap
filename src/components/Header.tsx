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
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          Sorris<span>ON</span>
        </Link>
 
        {/* Botão hambúrguer */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
 
        {/* Menu */}
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: location.pathname === link.path ? 'var(--primary)' : undefined,
                    fontWeight: location.pathname === link.path ? '700' : undefined,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
 
export default Header
 