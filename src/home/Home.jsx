import '../styles/home.css'
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

  const printCV = () => {
    let resume = document.querySelector('.resume-container')
    console.log(resume)
    let cloned = resume.cloneNode(true)
    document.body.appendChild(cloned)
    cloned.classList.add('pdf')
    cloned.style.transform = 'scale(1)'
    window.print()
    document.body.removeChild(cloned)
  }

  // const CVState = () => {
  //   console.log({ ...data, ...person })
  //   return { ...data, ...person }
  // }

  const handleAddExperience = () =>
    setData({ ...data, experience: [...experience, {}] })
  const handleAddEducation = () =>
    setData({ ...data, education: [...education, {}] })

  const handleDeleteExperience = (index) =>
    setData({ ...data, experience: experience.filter((_, i) => i !== index) })
  const handleDeleteEducation = (index) =>
    setData({ ...data, education: education.filter((_, i) => i !== index) })

  return (
    <main className='main'>
      <section className='input-container'>
        <h1 className='h1'>
          <span className='title'>CV Generator</span>
        </h1>
        <section className='form-section'>
          <h2 className='form-section-title'>Personal</h2>
          <PersonalForm
            onChange={handlePersonalChange}
            name={person.name}
            email={person.email}
            phoneNumber={person.phoneNumber}
            location={person.location}
          />
        </section>
        <section className='form-section'>
          <h2 className='form-section-title'>Experience</h2>
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
        </section>
        <section className='form-section'>
          <h2 className='form-section-title'>Education</h2>
          {data.education.map((course, index) => (
            <EducationForm
              key={index}
              formTitle={`Education (${index + 1})`}
              onChange={handleEducationChange(index)}
              handleDelete={() => handleDeleteEducation(index)}
              handleAdd={handleAddEducation}
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
      </section>
      <section className='output-container'>
        <div className='btn-group'>
          <button className='btn' onClick={printCV}>
            Save as PDF
          </button>
        </div>
        <CV data={data} />
      </section>
    </main>
  )
}
