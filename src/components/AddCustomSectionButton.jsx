import '../styles/AddCustomSectionButton.css'
import { useState } from 'react'

export default function AddSectionButton({ onClick, sectionTitle }) {
  const [title, setTitle] = useState('')

  const handleClick = () => {
    onClick(title)
    setTitle('')
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='add-custom-section'>
      <label htmlFor='custom-section-title'>Add your own section title</label>
      <input
        type='text'
        id='custom-section-title'
        placeholder='e.g. Technical Skills'
        value={title || ''}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit' className='add-section-btn' onClick={handleClick}>
        <span>+</span> Add {sectionTitle}
      </button>
    </form>
  )
}
