import data from '../assets/data-model.js'
import PersonalForm from '../components/PersonalForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import CV from '../components/CV'
import { useState } from 'react'

export const Home = () => {
  const [person, setPerson] = useState(data.person)
  const [experience, setExperience] = useState(data.experience)
  const [education, setEducation] = useState(data.education)

  const handlePersonalChange = (e) => {
    const key = e.target.dataset.key
    setPerson({ ...person, [key]: e.target.value })
  }

  const handleExperienceChange = (e) => {}

  const handleEducuationChange = (e) => {}

  // const CVState = () => {
  //   console.log({ ...data, ...person })
  //   return { ...data, ...person }
  // }

  const personObj = () => ({ ...data, person: person })

  console.log(personObj())

  return (
    <main className='main'>
      <section className='input-container'>
        <h2 className='h2'>
          <span className='title'>CV Generator</span>
        </h2>
        <PersonalForm
          onChange={handlePersonalChange}
          name={person.name}
          email={person.email}
          phoneNumber={person.phoneNumber}
          location={person.location}
        />
        <ExperienceForm />
        <EducationForm />
      </section>
      <section className='output-container'>
        <CV data={personObj()} />
      </section>
    </main>
  )
}
