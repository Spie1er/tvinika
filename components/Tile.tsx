const Tile = ({
  letter,
  status
}: {
  letter: string
  status?: 'correct' | 'present' | 'absent'
}) => {
  let bgAndText = 'border-1 border-gray-700'
  if (status === 'correct')
    bgAndText = `position-guess-card-light dark:position-guess-card-dark`
  if (status === 'present')
    bgAndText = `letter-guess-card-light dark:letter-guess-card-dark`
  if (status === 'absent')
    bgAndText = `wrong-guess-card-light dark:wrong-guess-card-dark`

  return (
    <div
      className={`font-guess w-[50px] h-[50px] flex items-center justify-center text-2xl font-bold ${bgAndText}`}
    >
      {letter}
    </div>
  )
}

export default Tile
