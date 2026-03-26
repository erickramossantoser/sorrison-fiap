const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-between gap-6 pb-6">
          <div className="min-w-[220px]">
            <h3 className="text-lg font-bold mb-4 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-500">
              SorrisON
            </h3>
            <p className="text-gray-300 text-sm">
              Plataforma de gestão para triagem odontológica e voluntários, transformando sorrisos e vidas através da tecnologia.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 text-center text-gray-400 text-sm">
          © 2025 SorrisON. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
