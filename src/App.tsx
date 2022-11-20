import { useState } from 'react'
import './App.css'
import Example from './components/example'
import CodeEditorWindow from './components/CodeEditorWindow'
import LanguageSelector from './components/LanguageSelector'

function App() {
  const [language, setLanguage] = useState<string>('javascript')
  return (
    <div className='flex justify-center items-center w-screen	h-screen p-0'>
      <Example />
      <LanguageSelector onSelectChange={(selectedLanguage) => setLanguage(selectedLanguage?.value)} />
      <CodeEditorWindow language={language} />
    </div>
  )
}

export default App
