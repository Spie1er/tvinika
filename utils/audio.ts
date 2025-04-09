export const playAudio = (sound: string) => {
  const audio = new Audio(`/audio/${sound}.mp3`)
  audio.play().then()
}
