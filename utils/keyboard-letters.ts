export interface LetterKeys {
  letter: string
  shifted: string | null
}

const firstRow: LetterKeys[] = [
  { letter: 'ქ', shifted: null },
  { letter: 'წ', shifted: 'ჭ' },
  { letter: 'ე', shifted: null },
  { letter: 'რ', shifted: 'ღ' },
  { letter: 'ტ', shifted: 'თ' },
  { letter: 'ყ', shifted: null },
  { letter: 'უ', shifted: null },
  { letter: 'ი', shifted: null },
  { letter: 'ო', shifted: null },
  { letter: 'პ', shifted: null }
]

const secondRow: LetterKeys[] = [
  { letter: 'ა', shifted: null },
  { letter: 'ს', shifted: 'შ' },
  { letter: 'დ', shifted: null },
  { letter: 'ფ', shifted: null },
  { letter: 'გ', shifted: null },
  { letter: 'ჰ', shifted: null },
  { letter: 'ჯ', shifted: 'ჟ' },
  { letter: 'კ', shifted: null },
  { letter: 'ლ', shifted: null }
]

const thirdRow: LetterKeys[] = [
  { letter: 'ზ', shifted: 'ძ' },
  { letter: 'ხ', shifted: null },
  { letter: 'ც', shifted: 'ჩ' },
  { letter: 'ვ', shifted: null },
  { letter: 'ბ', shifted: null },
  { letter: 'ნ', shifted: null },
  { letter: 'მ', shifted: null }
]

export const fullKeyboard = [
  firstRow,
  secondRow,
  ['shift', ...thirdRow, 'Backspace']
]
