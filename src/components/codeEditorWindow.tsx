import { useState } from 'react'
import Editor from '@monaco-editor/react'

interface CodeEditorWindowProps {
  onChange: (data: string | undefined) => void
  language: string
  code: string
  theme: string
}

const CodeEditorWindow = ({ onChange, language, code, theme }: CodeEditorWindowProps) => {
  const [value, setValue] = useState<string | undefined>(code || '')

  const handleEditorChange = (value: string | undefined) => {
    setValue(value)
    onChange(value)
  }

  return (
    <div className='overlay rounded-md overflow-hidden w-full h-full shadow-4xl'>
      <Editor
        height='85vh'
        width={`100%`}
        language={language || 'javascript'}
        value={value}
        theme={theme}
        defaultValue='// some comment'
        onChange={handleEditorChange}
      />
    </div>
  )
}
export default CodeEditorWindow
