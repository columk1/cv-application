import Input from './Input.jsx'
import FormHeader from './FormHeader.jsx'
import { useState } from 'react'

export default function EducationForm({
  formTitle,
  onChange,
  handleDelete,
  school,
  degree,
  startDate,
  endDate,
  city,
  description,
}) {
  const [isActive, setIsActive] = useState(true)
  const [title, setTitle] = useState(school || formTitle)

  const toggleActive = () => setIsActive(!isActive)

  const onTitleChange = (e) => {
    onChange(e)
    setTitle(e.target.value)
    e.target.value === '' && setTitle(formTitle)
  }

  return (
    <div className='form education-form'>
      <div className='form-container'>
        <FormHeader
          onClick={toggleActive}
          formTitle={title}
          isActive={isActive}
        />
        {isActive && (
          <div className='inputs'>
            <Input
              type='text'
              id='school'
              labelText='School'
              placeholder='University of California'
              value={school}
              onChange={onTitleChange}
              data-key='school'
            />
            <Input
              type='text'
              id='degree'
              labelText='Degree'
              placeholder='Bachelor of Science'
              value={degree}
              onChange={onChange}
              data-key='degree'
            />
            <fieldset>
              <Input
                type='text'
                id='start-date'
                labelText='Start Date'
                placeholder='Oct, 2020'
                value={startDate}
                onChange={onChange}
                data-key='startDate'
              />
              <Input
                type='text'
                id='end-date'
                labelText='End Date'
                placeholder='May, 2022'
                value={endDate}
                onChange={onChange}
                data-key='endDate'
              />
            </fieldset>
            <Input
              type='text'
              id='city'
              labelText='City'
              placeholder='Berkely, CA'
              value={city}
              onChange={onChange}
              data-key='city'
            />
            <Input
              type='textarea'
              id='description'
              labelText='Description'
              placeholder='e.g. Graduated with High Honors.'
              value={description}
              onChange={onChange}
              data-key='description'
            />
          </div>
        )}
      </div>
      <button className='deleteBtn' onClick={handleDelete}>
        <span className='deleteSymbol material-symbols-outlined'>delete</span>
      </button>
    </div>
  )
}
