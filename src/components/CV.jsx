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
          <p>{person.location}</p>
          <p>{person.phone}</p>
          <p>{person.email}</p>
        </div>
      </div>
      <div className='cv-body'>
        <div className='section experience'>
          <h3 className='cv-section-title'>Experience</h3>
          <div className='h-divider'></div>
          <div className='timeline'>
            {experience.map((job, index) => (
              <div className='job' key={index}>
                <div className='info-group'>
                  <h4>{job.jobTitle}</h4>
                  <p className='city'>{job.location}</p>
                </div>

                <p className='employer'>{job.employer}</p>
                <p className='dates'>
                  {job.startDate} - {job.endDate}
                </p>
                <ul className='description'>
                  {job.description.map((li, i) => (
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
          {education.map((school, index) => (
            <div className='school' key={index}>
              <h4>{school.school}</h4>
              <p className='degree'>{school.degree}</p>
              <p className='dates'>
                {school.startDate} - {school.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
