import Input from './Input.jsx'

export default function EducationForm({
  onChange,
  school,
  degree,
  startDate,
  endDate,
  city,
  description,
}) {
  return (
    <section className='education-form'>
      <h2 className='section-title'>Education</h2>
      <div className='inputs'>
        <Input
          type='text'
          id='school'
          labelText='School'
          placeholder='University of California'
          value={school}
          onChange={onChange}
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
    </section>
  )
}
