import '../styles/Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <p>columk 2023</p>
      <a href='https://github.com/columk1' target='_blank' rel='noreferrer'>
        {/* <i className='githubIcon'></i> */}
        <FaGithub style={{ color: 'white' }} />
      </a>
    </footer>
  )
}
