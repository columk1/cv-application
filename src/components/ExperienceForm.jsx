import '../styles/ExperienceForm.css'
import Input from './Input.jsx'
import FormHeader from './FormHeader.jsx'
import { useState } from 'react'

export default function ExperienceForm({
  formTitle,
  onChange,
  handleDelete,
  jobTitle,
  employer,
  startDate,
  endDate,
  city,
  description,
}) {
  const [isActive, setIsActive] = useState(true)
  const [title, setTitle] = useState(jobTitle || formTitle)

  const toggleActive = () => setIsActive(!isActive)
  const onTitleChange = (e) => {
    onChange(e)
    setTitle(e.target.value)
    e.target.value === '' && setTitle(formTitle)
  }

  return (
    <div className='form experience-form'>
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
              id='job-title'
              labelText='Job Title'
              placeholder='Solutions Architect'
              value={jobTitle || ''}
              onChange={onTitleChange}
              data-key='jobTitle'
            />
            <Input
              type='text'
              id='employer'
              labelText='Employer'
              placeholder='Google'
              value={employer || ''}
              onChange={onChange}
              data-key='employer'
            />
            <fieldset>
              <Input
                type='text'
                id='start-date'
                labelText='Start Date'
                placeholder='Oct, 2020'
                value={startDate || ''}
                onChange={onChange || ''}
                data-key='startDate'
              />
              <Input
                type='text'
                id='end-date'
                labelText='End Date'
                placeholder='May, 2022'
                value={endDate || ''}
                onChange={onChange}
                data-key='endDate'
              />
            </fieldset>
            <Input
              type='text'
              id='city'
              labelText='City'
              placeholder='New York'
              value={city || ''}
              onChange={onChange}
              data-key='city'
            />
            <Input
              type='textarea'
              id='description'
              labelText='Description'
              placeholder='Lead the Cloud Native Innovation solution offering core competencies and a suite of value-added offerings. Augmenting the capability space, industry is ethically facilitating its end-to-end capabilities..'
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
