import { useState } from 'react'
import './App.css'
import Example from './components/example'
import CodeEditorWindow from './components/CodeEditorWindow'

function App() {
  return (
    <div className='flex justify-center items-center w-screen	h-screen p-0'>
      <Example />
      <CodeEditorWindow />
    </div>
  )
}

export default App
