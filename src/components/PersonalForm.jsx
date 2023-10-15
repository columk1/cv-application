import Input from './Input.jsx'
import '../styles/PersonalForm.css'

export default function PersonalForm({
  onChange,
  fullName,
  email,
  phoneNumber,
  address,
}) {
  return (
    <section className='personal-form'>
      <h2 className='section-title'>Personal Details</h2>
      <div className='inputs'>
        <Input
          type='text'
          id='full-name'
          labelText='Full Name'
          placeholder='John Doe'
          value={fullName}
          onChange={onChange}
          data-key='fullName'
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
          id='phone-number'
          labelText='Phone Number'
          placeholder='+1 123 456 7890'
          value={phoneNumber}
          onChange={onChange}
          data-key='phoneNumber'
        />
        <Input
          type='text'
          id='address'
          labelText='Address'
          placeholder='Florida, USA'
          value={address}
          onChange={onChange}
          data-key='address'
        />
      </div>
    </section>
  )
}
