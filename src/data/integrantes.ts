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
  { id: '1', nome: 'Erick Ramos', rm: '567837', turma: '1TDSPB', github: 'https://github.com/erickramossantoser-create', linkedin: '#', emoji: '👤' },
  { id: '2', nome: 'Guilherme de Sousa Leopoldino', rm: '567242', turma: '1TDSPB', github: 'https://github.com/GuiDSLeopoldino', linkedin: '#', emoji: '👤' },
  { id: '3', nome: 'Lucas Cunha Maia Vila Nova', rm: '566742', turma: '1TDSPB', github: 'https://github.com/lucascunhamaia', linkedin: '#', emoji: '👤' },
]