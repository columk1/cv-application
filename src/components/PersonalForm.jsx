import '../styles/PersonalForm.css'
import Input from './Input.jsx'
import FormHeader from './FormHeader.jsx'
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
    <div className='form personal-form'>
      <div className='form-container'>
        <FormHeader
          onClick={toggleActive}
          formTitle='Contact Info'
          isActive={isActive}
        />
        {isActive && (
          <div className='inputs'>
            <Input
              type='text'
              id='name'
              labelText='Full Name'
              placeholder='Washington Irving'
              value={name}
              onChange={onChange}
              autofocus={true}
              data-key='name'
            />
            <Input
              type='email'
              id='email'
              labelText='Email'
              placeholder='washingtonirving@gmail.com'
              value={email}
              onChange={onChange}
              data-key='email'
            />
            <Input
              type='tel'
              id='phoneNumber'
              labelText='Phone Number'
              placeholder='+1 864 456 0963'
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
    </div>
  )
}
