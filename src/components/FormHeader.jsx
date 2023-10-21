import '../styles/FormHeader.css'

export default function FormHeader({
  onClick,
  formTitle,
  isActive,
  isEditable,
  onChange,
}) {
  return (
    <div className='section-header' onClick={onClick}>
      <h2
        className='section-title'
        // contentEditable={isActive ? 'true' : 'false'}
      >
        {formTitle}
      </h2>
      <button className='expand-btn' onClick={onClick}>
        <span className='expand material-symbols-outlined'>
          {isActive ? 'expand_less' : 'expand_more'}
        </span>
      </button>
    </div>
  )
}
