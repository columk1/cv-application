import '../styles/CollapsedForm.css'

export default function CollapsedForm({ onClick, form, formTitle }) {
  return (
    <section className='personal-form'>
      <h2 className='section-title'>{formTitle}</h2>
    </section>
  )
}
