import '../styles/FormHeader.css'

export default function FormHeader({ onClick, formTitle, isActive }) {
  return (
    <div className='section-header' onClick={onClick}>
      <h2 className='section-title'>{formTitle}</h2>
      <button className='expand-btn' onClick={onClick}>
        <span className='expand material-symbols-outlined'>
          {isActive ? 'expand_less' : 'expand_more'}
        </span>
      </button>
    </div>
  )
}
