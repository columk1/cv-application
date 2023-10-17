import '../styles/AddSectionButton.css'

export default function AddSectionButton({ onClick, sectionTitle }) {
  return (
    <button className='add-section-button' onClick={onClick}>
      <span className='symbol'>+</span> Add one more {sectionTitle}
    </button>
  )
}
