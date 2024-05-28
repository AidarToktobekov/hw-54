import './App.css'
import '../board/board.css'
import PlayingField from '../../components/playingField/PlayingField.tsx'
import Counter from '../../components/counter/counter.tsx'
import { useState } from 'react'


function App() {

  return (
    <>
      <PlayingField></PlayingField>
      <button>Reset</button>
    </>
  )
}

export default App
