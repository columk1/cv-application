import '../styles/home.css'
import sampleData from '../assets/data-model.js'
import PersonalForm from '../components/PersonalForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import CustomForm from '../components/CustomForm'
import AddSectionButton from '../components/AddSectionButton'
import AddCustomSectionButton from '../components/AddCustomSectionButton'
import CV from '../components/CV'
import Button from '../components/Button'
import { useState } from 'react'

const startData = {
  person: { name: '', location: '', phoneNumber: '', email: '' },
  experience: [],
  education: [],
  customSection: [],
}
export const Home = () => {
  const [data, setData] = useState(startData)
  const person = data.person
  const experience = data.experience
  const education = data.education
  const customSection = data.customSection

  const handlePersonalChange = (e) => {
    const key = e.target.dataset.key
    const updatedPerson = { ...data.person, [key]: e.target.value }
    setData({ ...data, person: updatedPerson })
  }

  const handleSectionChange = (sectionKey, index) => (e) => {
    const key = e.target.dataset.key
    const section = data[sectionKey]

    const updatedSection = section.map((item, i) =>
      i === index ? { ...item, [key]: e.target.value } : item,
    )
    setData({ ...data, [sectionKey]: updatedSection })
  }

  // const loadSampleData = () => setData(sampleData)

  const loadSampleData = () => {
    setData(sampleData)
    contractSections()
  }
  const clearData = () => setData(startData)

  // Contract each section (except for Personal Details)
  const contractSections = () => {
    setTimeout(() => {
      let expandBtns = document.querySelectorAll('.expand-btn')
      expandBtns.forEach((e, index) => (index > 0 ? e.click() : e))
    }, 10)
  }

  // Print / Save as PDF
  const printCV = () => {
    let resume = document.querySelector('.resume-container')
    let cloned = resume.cloneNode(true)
    document.body.appendChild(cloned)
    cloned.classList.add('pdf')
    cloned.style.transform = 'scale(1)'
    window.print()
    document.body.removeChild(cloned)
  }

  const handleAddExperience = () =>
    setData({ ...data, experience: [...experience, {}] })
  const handleAddEducation = () =>
    setData({ ...data, education: [...education, {}] })
  const handleAddCustomSection = (title) =>
    setData({ ...data, customSection: [...customSection, { title: title }] })

  const handleDeleteExperience = (index) =>
    setData({ ...data, experience: experience.filter((_, i) => i !== index) })
  const handleDeleteEducation = (index) =>
    setData({ ...data, education: education.filter((_, i) => i !== index) })
  const handleDeleteCustomSection = (index) =>
    setData({
      ...data,
      customSection: customSection.filter((_, i) => i !== index),
    })

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
              onChange={handleSectionChange('experience', index)}
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
              onChange={handleSectionChange('education', index)}
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
        <section className='form-section'>
          <h2 className='form-section-title'>Custom</h2>
          {data.customSection.map((section, index) => (
            <CustomForm
              key={index}
              formTitle={section.title || `Custom Section (${index + 1})`}
              onChange={handleSectionChange('customSection', index)}
              handleDelete={() => handleDeleteCustomSection(index)}
              description={customSection[index].description}
            />
          ))}
          <AddCustomSectionButton
            onClick={handleAddCustomSection}
            sectionTitle='Custom Section'
          />
        </section>
      </section>
      <section className='output-container'>
        <div className='btn-group'>
          <Button onClick={loadSampleData}>Load Sample Data</Button>
          <Button onClick={clearData}>Clear Data</Button>
          <Button onClick={printCV}>Save as PDF</Button>
        </div>
        <CV data={data} />
      </section>
    </main>
  )
}
