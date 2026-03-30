export interface Integrante {
  id: string
  nome: string
  rm: string
  turma: string
  github: string
  linkedin: string
  emoji: string
}

export const integrantes: Integrante[] = [
  { id: '1', nome: 'Erick Ramos', rm: '567837', turma: '1TDSPB', github: 'https://github.com/erickramossantoser', linkedin: 'https://www.linkedin.com/in/erickrsantos/', emoji: '👤' },
  { id: '2', nome: 'Guilherme Marques', rm: '568054', turma: '1TDSPA', github: 'github.com/GuiDSLeopoldino', linkedin: 'www.linkedin.com/in/guilherme-marques-15670b307', emoji: '👤' },
  { id: '3', nome: 'Lucas Cunha Maia Vila Nova', rm: '566742', turma: '1TDSPB', github: 'https://github.com/lucascunhamaia', linkedin: '#', emoji: '👤' },
]