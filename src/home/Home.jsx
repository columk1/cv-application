import sampleData from '../assets/data-model.js'
import PersonalForm from '../components/PersonalForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import AddSectionButton from '../components/AddSectionButton'
import CV from '../components/CV'
import { useState } from 'react'

export const Home = () => {
  const [data, setData] = useState(sampleData)
  const [person, setPerson] = useState(data.person)
  const [experience, setExperience] = useState(data.experience)
  const [education, setEducation] = useState(data.education)

  const handlePersonalChange = (e) => {
    const key = e.target.dataset.key
    setPerson({ ...person, [key]: e.target.value })
  }

  // const handleExperienceChange = (index) => (e) => {
  //   const key = e.target.dataset.key
  //   setExperience([
  //     ...experience.slice(0, index),
  //     { ...experience, [key]: e.target.value },
  //     ...experience.slice(index + 1),
  //   ])
  // }

  const handleExperienceChange = (index) => (e) => {
    const key = e.target.dataset.key
    setExperience(
      experience.map((job, i) =>
        i === index ? { ...job, [key]: e.target.value } : job,
      ),
    )
  }

  const handleEducationChange = (index) => (e) => {
    const key = e.target.dataset.key
    setEducation(
      education.map((course, i) =>
        i === index ? { ...course, [key]: e.target.value } : course,
      ),
    )
  }

  // const CVState = () => {
  //   console.log({ ...data, ...person })
  //   return { ...data, ...person }
  // }

  const handleAddExperience = () => {}
  const handleAddEducation = () => {}

  const handleDeleteExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index))
  }

  const dataObj = () => ({
    ...data,
    person: person,
    experience: experience,
    education: education,
  })

  return (
    <main className='main'>
      <section className='input-container'>
        <h1 className='h1'>
          <span className='title'>CV Generator</span>
        </h1>
        <PersonalForm
          onChange={handlePersonalChange}
          name={person.name}
          email={person.email}
          phoneNumber={person.phoneNumber}
          location={person.location}
        />
        {data.experience.map((job, index) => (
          <ExperienceForm
            key={index}
            formTitle={`Experience  (${index + 1})`}
            onChange={handleExperienceChange(index)}
            jobTitle={experience[index].jobTitle}
            employer={experience[index].employer}
            startDate={experience[index].startDate}
            endDate={experience[index].endDate}
            city={experience[index].city}
            description={experience[index].description}
          />
        ))}
        <AddSectionButton
          onClick={handleAddExperience}
          sectionTitle='Experience'
        />
        {data.education.map((course, index) => (
          <EducationForm
            key={index}
            onChange={handleEducationChange(index)}
            school={education[index].school}
            degree={education[index].degree}
            startDate={education[index].startDate}
            endDate={education[index].endDate}
            city={education[index].city}
            description={education[index].description}
          />
        ))}
        <AddSectionButton
          onClick={handleAddEducation}
          sectionTitle='Education'
        />
      </section>
      <section className='output-container'>
        <CV data={dataObj()} />
      </section>
    </main>
  )
}
