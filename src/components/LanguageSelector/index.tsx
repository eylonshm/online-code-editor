import React from 'react'
import Select from 'react-select'
import { languageOptions } from '../../constants'
import { dropDownStyles } from '../../constants'
import { noop } from 'lodash'

interface Props {
  onSelectChange: () => void
}

const LanguageSelector: React.FC<Props> = ({ onSelectChange = noop }) => (
  <Select
    placeholder={`Filter By Category`}
    options={languageOptions}
    styles={dropDownStyles}
    defaultValue={languageOptions[0]}
    onChange={(selectedOption) => onSelectChange(selectedOption)}
  />
)

export default LanguageSelector
