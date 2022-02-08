import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Babagan" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dolanan iki mung modifikasi seko {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline"
        >
          React-Wordle
        </a>{' '}
        sing dimodif karo {' '}
        <a
          href="https://nanda.widyatama.web.id"
          className="underline font-bold"
        >
          Nanda Widyatama
        </a>{' '}
      </p>
    </BaseModal>
  )
}
