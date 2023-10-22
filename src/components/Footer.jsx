import '../styles/Footer.css'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <p>columk 2023</p>
      <a
        href='https://github.com/columk1'
        target='_blank'
        rel='noreferrer'
        alt='github'
      >
        {/* <i className='githubIcon'></i> */}
        <FaGithub style={{ color: 'white' }} />
      </a>
    </footer>
  )
}
