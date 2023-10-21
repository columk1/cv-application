// import '../styles/CustomForm.css'
import Input from './Input.jsx'
import FormHeader from './FormHeader.jsx'
import { useState } from 'react'

export default function CustomForm({
  formTitle,
  onChange,
  handleDelete,
  description,
}) {
  const [isActive, setIsActive] = useState(true)

  const toggleActive = () => setIsActive(!isActive)

  return (
    <div className='form custom-form'>
      <div className='form-container'>
        <FormHeader
          onClick={toggleActive}
          formTitle={formTitle}
          isActive={isActive}
          isEditable={true}
        />
        {isActive && (
          <div className='inputs'>
            <Input
              type='textarea'
              id='description'
              labelText='Description'
              placeholder='Scuba Diving'
              value={description || ''}
              onChange={onChange}
              data-key='description'
            />
          </div>
        )}
      </div>
      <div className='deleteBtn' onClick={handleDelete}>
        <span className='deleteSymbol material-symbols-outlined'>delete</span>
      </div>
    </div>
  )
}
