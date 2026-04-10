export interface Integrante {
  id: string
  nome: string
  rm: string
  turma: string
  github: string
  linkedin: string
  emoji: string
  foto?: string // Caminho da imagem do integrante
}

export const integrantes: Integrante[] = [
  { id: '1', nome: 'Erick Ramos', rm: '567837', turma: '1TDSPB', github: 'https://github.com/erickramossantoser', linkedin: 'https://www.linkedin.com/in/erickrsantos/', emoji: '👤', foto: '/src/img/erick.jpeg' },
  { id: '2', nome: 'Guilherme Marques', rm: '568054', turma: '1TDSPA', github: "/github.com/GuilhermeMarques200", linkedin: 'www.linkedin.com/in/guilherme-marques-15670b307', emoji: '👤', foto: '/src/img/guilherme.jpeg' },
  { id: '3', nome: 'Samuel Galeati', rm: '566742', turma: '1TDSPB', github: 'https://github.com/saboy71', linkedin: '#', emoji: '👤', foto: '/src/img/samuel.jpeg' },
]