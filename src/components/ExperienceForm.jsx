import Input from './Input.jsx'
import '../styles/Input.css'

export default function ExperienceForm({
  onChange,
  jobTitle,
  employer,
  startDate,
  endDate,
  city,
  description,
}) {
  return (
    <section className='experience-form'>
      <h2 className='section-title'>Experience</h2>
      <div className='inputs'>
        <Input
          type='text'
          id='job-title'
          labelText='Job Title'
          placeholder='Solutions Architect'
          value={jobTitle}
          onChange={onChange}
          data-key='jobTitle'
        />
        <Input
          type='text'
          id='employer'
          labelText='Employer'
          placeholder='Google'
          value={employer}
          onChange={onChange}
          data-key='employer'
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
          placeholder='New York'
          value={city}
          onChange={onChange}
          data-key='city'
        />
        <Input
          type='textarea'
          id='description'
          labelText='Description'
          placeholder='Lead the Cloud Native Innovation solution offering core competencies and a suite of value-added offerings. Augmenting the capability space, industry is ethically facilitating its end-to-end capabilities..'
          value={description}
          onChange={onChange}
          data-key='description'
        />
      </div>
    </section>
  )
}
