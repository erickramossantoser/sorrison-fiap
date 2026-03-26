import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importando as páginas da pasta pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Solucao from './pages/Solucao'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import Integrantes from './pages/Integrantes'
import IntegranteDetalhe from './pages/IntegranteDetalhe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal (Home) */}
        <Route path="/" element={<Home />} />
        
        {/* Rotas estáticas */}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        
        {/* Rota dinâmica (Garante os 5 pontos do requisito f) */}
        <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App