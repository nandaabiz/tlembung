import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Carane dolanan" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Jajal ngira-ira tembung Basa Jawa ing 6 pacoben. Saben pacoben, 
        werno ning hurup bakal owah sepiro cedhake pangiramu karo tembung kuncine.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="U" />
        <Cell value="G" />
        <Cell value="I" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup S ono ning tembung kunci lan panggone bener.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell value="N" status="present" />
        <Cell value="A" />
        <Cell value="K" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup N ono ning tembung kunci lan panggone kleru.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="U" />
        <Cell value="Y" />
        <Cell value="E" status="absent" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup E ora ono ning tembung kunci.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
        Hurup <strong>é</strong> utawa <strong>ê</strong> utawa <strong>è</strong> ditulis 
        kanthi hurup <strong>e</strong> biasa,
        ben lehmu mbedek ora kangelan, lehku nggawe yo gampang.
      </p>
    </BaseModal>
  )
}
