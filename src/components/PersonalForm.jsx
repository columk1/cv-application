import Input from './Input.jsx'
import FormHeader from './FormHeader.jsx'
import '../styles/PersonalForm.css'
import { useState } from 'react'

export default function PersonalForm({
  onChange,
  name,
  email,
  phoneNumber,
  location,
}) {
  const [isActive, setIsActive] = useState(true)

  const toggleActive = () => setIsActive(!isActive)

  return (
    <section className='form personal-form'>
      <div className='form-container'>
        <FormHeader
          onClick={toggleActive}
          formTitle='Personal Details'
          isActive={isActive}
        />
        {isActive && (
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
        )}
      </div>
    </section>
  )
}
