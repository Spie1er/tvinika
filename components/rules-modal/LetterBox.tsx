const LetterBox = ({
  letter,
  status
}: {
  letter: string
  status?: 'correct' | 'present' | 'absent'
}) => {
  let bgAndText = 'border-2 border-gray-700'
  if (status === 'correct') bgAndText = 'bg-position-guess text-white'
  if (status === 'present') bgAndText = 'bg-letter-guess text-white'
  if (status === 'absent') bgAndText = 'bg-wrong-guess text-white'

  return (
    <div
      className={`font-guess w-10 h-10 flex items-center justify-center text-xl font-bold ${bgAndText}`}
    >
      {letter}
    </div>
  )
}

export default LetterBox
