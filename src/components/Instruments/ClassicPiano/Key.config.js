import ANote from '../../../notes/A.mp3'
import AbNote from '../../../notes/Ab.mp3'
import BNote from '../../../notes/B.mp3'
import BbNote from '../../../notes/Bb.mp3'
import CNote from '../../../notes/C.mp3'
import DNote from '../../../notes/D.mp3'
import DbNote from '../../../notes/Db.mp3'
import ENote from '../../../notes/E.mp3'
import EbNote from '../../../notes/Eb.mp3'
import FNote from '../../../notes/F.mp3'
import GNote from '../../../notes/G.mp3'
import GbNote from '../../../notes/Gb.mp3'

export const whiteConfig = [
  { label: 'A', note: 'A.mp3', keycode: 65, color: 'white', sound: ANote },
  { label: 'S', note: 'B.mp3', keycode: 83, color: 'white', sound: BNote },
  { label: 'D', note: 'C.mp3', keycode: 68, color: 'white', sound: CNote },
  { label: 'F', note: 'D.mp3', keycode: 70, color: 'white', sound: DNote },
  { label: 'G', note: 'E.mp3', keycode: 71, color: 'white', sound: ENote },
  { label: 'H', note: 'F.mp3', keycode: 72, color: 'white', sound: FNote },
  { label: 'J', note: 'G.mp3', keycode: 74, color: 'white', sound: GNote },
]

export const blackConfig = [
  { label: 'W', note: 'Ab.mp3', keycode: 87, color: 'black', sound: AbNote },
  { label: 'E', note: 'Bb.mp3', keycode: 69, color: 'black', sound: BbNote },
  { label: 'NONE' },
  { label: 'T', note: 'Db.mp3', keycode: 84, color: 'black', sound: DbNote },
  { label: 'Y', note: 'Eb.mp3', keycode: 89, color: 'black', sound: EbNote },
  { label: 'U', note: 'Gb.mp3', keycode: 85, color: 'black', sound: GbNote },
]

export const keyConfig = {
  width: 60,
  height: 200,
  offset: 30,
}
