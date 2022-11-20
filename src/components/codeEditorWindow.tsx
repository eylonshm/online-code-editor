import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import { noop } from 'lodash'

interface Props {
  language?: string
  code?: string
  theme?: string
  onChange?: (data: string | undefined) => void
}

const CodeEditorWindow: React.FC<Props> = ({ language, code, theme, onChange = noop }) => {
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
