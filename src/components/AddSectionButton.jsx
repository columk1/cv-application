import '../styles/AddSectionButton.css'

export default function AddSectionButton({ onClick, sectionTitle }) {
  return (
    <button className='add-section-btn' onClick={onClick}>
      <span>+</span> Add {sectionTitle}
    </button>
  )
}
