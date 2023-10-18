import '../styles/CV.css'

export default function CV({ data }) {
  const person = data.person
  const experience = data.experience
  const education = data.education

  return (
    <div className='resume-container'>
      <div className='cv-header'>
        <h2 className='name'>{person.name}</h2>
        <div className='contact-info'>
          <div className='contact-group'>
            <span className='symbol material-symbols-outlined'>
              location_on
            </span>
            {person.location}
          </div>
          <div className='contact-group'>
            <span className='symbol material-symbols-outlined'>call</span>
            {person.phoneNumber}
          </div>
          <div className='contact-group'>
            <span className='symbol material-symbols-outlined'>email</span>
            {person.email}
          </div>
        </div>
      </div>
      <div className='cv-body'>
        <div className='section experience'>
          <h3 className='cv-section-title'>Experience</h3>
          <div className='h-divider'></div>
          <div className='timeline'>
            {experience.map((job, index) => (
              <div className='timeline-item job' key={index}>
                <div className='info-group'>
                  <h4>{job.jobTitle}</h4>
                  <p className='city'>{job.location}</p>
                </div>
                <p className='employer'>{job.employer}</p>
                <p className='dates'>
                  {job.startDate} - {job.endDate}
                </p>
                <ul className='description'>
                  {job.description.split('. ').map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
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
                  {school.startDate} - {school.endDate}
                </p>
                <p className='description'>{school.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
