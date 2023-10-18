import sampleData from '../assets/data-model.js'
import PersonalForm from '../components/PersonalForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import AddSectionButton from '../components/AddSectionButton'
import CV from '../components/CV'
import { useState } from 'react'

export const Home = () => {
  const [data, setData] = useState(sampleData)
  const person = data.person
  const experience = data.experience
  const education = data.education

  const handlePersonalChange = (e) => {
    const key = e.target.dataset.key
    const updatedPerson = { ...data.person, [key]: e.target.value }
    setData({ ...data, person: updatedPerson })
  }

  const handleExperienceChange = (index) => (e) => {
    const key = e.target.dataset.key
    let updatedExperience = experience.map((job, i) =>
      i === index ? { ...job, [key]: e.target.value } : job,
    )
    setData({ ...data, experience: updatedExperience })
  }

  const handleEducationChange = (index) => (e) => {
    const key = e.target.dataset.key
    const updatedEducation = education.map((course, i) =>
      i === index ? { ...course, [key]: e.target.value } : course,
    )
    setData({ ...data, education: updatedEducation })
  }

  // const CVState = () => {
  //   console.log({ ...data, ...person })
  //   return { ...data, ...person }
  // }

  const handleAddExperience = () => {}
  const handleAddEducation = () => {}

  const handleDeleteExperience = (index) => {
    setData({ ...data, experience: experience.filter((_, i) => i !== index) })
  }

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
        {console.log(data.experience)}
        {data.experience.map((job, index) => (
          <ExperienceForm
            key={index}
            formTitle={`Experience  (${index + 1})`}
            onChange={handleExperienceChange(index)}
            handleDelete={() => handleDeleteExperience(index)}
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
        <CV data={data} />
      </section>
    </main>
  )
}
