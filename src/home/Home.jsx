import data from '../assets/data-model.js'
import PersonalForm from '../components/PersonalForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import CV from '../components/CV'

console.log(data)
export const Home = () => (
  <main className='main'>
    <section className='input-container'>
      <h2 className='h2'>
        <span className='title'>CV Generator</span>
      </h2>
      <PersonalForm />
      <ExperienceForm />
      <EducationForm />
    </section>
    <section className='output-container'>
      <CV data={data} />
    </section>
  </main>
)
