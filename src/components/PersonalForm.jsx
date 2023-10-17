import Input from './Input.jsx'
import '../styles/PersonalForm.css'
import { useState } from 'react'

export default function PersonalForm({
  onChange,
  name,
  email,
  phoneNumber,
  location,
  isCollapsed,
}) {
  const [isActive, setIsActive] = useState(true)

  const toggleActive = () => setIsActive(!isActive)

  return isActive ? (
    <section className='personal-form'>
      <div className='section-header' onClick={toggleActive}>
        <h2 className='section-title'>Personal Details</h2>
        <button className='expand-btn' onClick={toggleActive}>
          <span className='expand material-symbols-outlined'>expand_less</span>
        </button>
      </div>
      <div className='inputs'>
        <Input
          type='text'
          id='name'
          labelText='Full Name'
          placeholder='John Doe'
          value={name}
          onChange={onChange}
          data-key='name'
        />
        <Input
          type='email'
          id='email'
          labelText='Email'
          placeholder='johndoe@gmail.com'
          value={email}
          onChange={onChange}
          data-key='email'
        />
        <Input
          type='tel'
          id='phoneNumber'
          labelText='Phone Number'
          placeholder='+1 123 456 7890'
          value={phoneNumber}
          onChange={onChange}
          data-key='phoneNumber'
        />
        <Input
          type='text'
          id='location'
          labelText='Address'
          placeholder='Florida, USA'
          value={location}
          onChange={onChange}
          data-key='location'
        />
      </div>
    </section>
  ) : (
    <section className='personal-form'>
      <div className='section-header' onClick={toggleActive}>
        <h2 className='section-title'>Personal Details</h2>
        <button className='expand-btn' onClick={toggleActive}>
          <span className='expand material-symbols-outlined'>expand_more</span>
        </button>
      </div>
    </section>
  )
}
