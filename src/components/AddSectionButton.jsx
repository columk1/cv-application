import '../styles/AddSectionButton.css'

export default function AddSectionButton({ onClick, sectionTitle }) {
  return (
    <button className='add-section-button' onClick={onClick}>
      <span>+</span> Add one more {sectionTitle}
    </button>
  )
}
