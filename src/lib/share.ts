import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n\n` +
      generateEmojiGrid(guesses, '\n') + '\n\n' +
      'https://tlembung.vercel.app/'
  )
}
export const shareTwitter = (guesses: string[], lost: boolean) => {
  let url = 'https://twitter.com/intent/tweet?text=' +
    `${GAME_TITLE} %23${solutionIndex} ${lost ? 'X' : guesses.length}/6%0A%0A` +
    generateEmojiGrid(guesses, '%0A') + '%0A%0A' +
    'https://tlembung.vercel.app/'
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const generateEmojiGrid = (guesses: string[], joiner: string) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join(joiner)
}
