export const playAudio = (sound: string) => {
  // If no audio is playing or the previous one has ended, create a new audio element
  const audio = new Audio(`/audio/${sound}.mp3`)
  audio.play().then()
}
