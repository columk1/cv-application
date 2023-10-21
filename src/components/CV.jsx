import '../styles/CV.css'
import { useState, useEffect } from 'react'

export default function CV({ data }) {
  const [scale, setScale] = useState('0.7')

  useEffect(() => {
    const inputContainer = document.querySelector('.input-container')
    const resumeContainer = document.querySelector('.resume-container')

    window.addEventListener('resize', resize)
    resize()
    function resize() {
      let containerWidth = inputContainer.offsetWidth
      let contentWidth = resumeContainer.offsetWidth
      let mobileTablet = window.matchMedia('(max-width: 1200px)')

      let newScale = Math.min(containerWidth / contentWidth) - 0.2
      if (mobileTablet.matches) newScale += 0.1
      if (newScale < 0.7) setScale(newScale)
    }
  })

  const person = data.person
  const experience = data.experience
  const education = data.education

  return (
    <div className='resume-container' style={{ transform: `scale(${scale})` }}>
      <div className='resume'>
        <div className='cv-header'>
          <h2 className='name'>{person.name}</h2>
          <div className='contact-info'>
            {person.location && (
              <div className='contact-group'>
                <span className='symbol material-symbols-outlined'>
                  location_on
                </span>
                {person.location}
              </div>
            )}
            {person.phoneNumber && (
              <div className='contact-group'>
                <span className='symbol material-symbols-outlined'>call</span>
                {person.phoneNumber}
              </div>
            )}
            {person.email && (
              <div className='contact-group'>
                <span className='symbol material-symbols-outlined'>email</span>
                {person.email}
              </div>
            )}
          </div>
        </div>
        <div className='cv-body'>
          {experience.length > 0 && (
            <div className='section experience'>
              <h3 className='cv-section-title'>Experience</h3>
              <div className='h-divider'></div>
              <div className='timeline'>
                {experience.map((job, index) => (
                  <div className='timeline-item job' key={index}>
                    <div className='info-group'>
                      <h4>{job.jobTitle}</h4>
                      <p className='city'>{job.city}</p>
                    </div>
                    <p className='employer'>{job.employer}</p>
                    <p className='dates'>
                      {job.startDate}
                      {job.endDate && `- ${job.endDate}`}
                    </p>
                    <ul className='description'>
                      {job.description &&
                        job.description
                          .split('.')
                          .map((li, i) => li !== '' && <li key={i}>{li}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {education.length > 0 && (
            <div className='section education'>
              <h3 className='cv-section-title'>Education</h3>
              <div className='h-divider'></div>
              <div className='timeline'>
                {education.map((school, index) => (
                  <div className='timeline-item school' key={index}>
                    <div className='info-group'>
                      <h4>{school.school}</h4>
                      <p className='city'>{school.city}</p>
                    </div>
                    <p className='degree'>{school.degree}</p>
                    <p className='dates'>
                      {school.startDate}
                      {school.endDate && `- ${school.endDate}`}
                    </p>
                    <p className='description'>{school.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.customSection.length > 0 && (
            <div className='section custom'>
              {data.customSection.map((section, index) => (
                <div className='section custom' key={index}>
                  <h3 className='cv-section-title'>{section.title}</h3>
                  <div className='h-divider'></div>
                  <p className='description'>{section.description}</p>
                  {/* <ul className='description'>
                    {section.description &&
                      section.description
                        .split('.')
                        .map((li, i) => li !== '' && <li key={i}>{li}</li>)}
                  </ul> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
