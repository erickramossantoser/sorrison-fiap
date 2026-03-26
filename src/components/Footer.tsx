const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>SorrisON</h3>
            <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>
              Plataforma de gestão para triagem odontológica e voluntários,
              transformando sorrisos e vidas através da tecnologia.
            </p>
          </div>
          <div className="footer-column">
            <h3>Links Rápidos</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/solucao', label: 'Solução' },
                { href: '/integrantes', label: 'Integrantes' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: '0.4rem' }}>
                  <a href={link.href} style={{ color: '#bdc3c7', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contato</h3>
            <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>
              📧 contato@sorrison.com.br<br />
              📍 São Paulo, SP – Brasil
            </p>
          </div>
        </div>
        <div className="copyright">
          © 2025 SorrisON. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
 
export default Footer