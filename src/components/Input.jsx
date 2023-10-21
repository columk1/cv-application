import '../styles/Input.css'
export default function Input({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  autofocus,
  'data-key': dataKey,
}) {
  return (
    <div className='input-group'>
      <label htmlFor={id}>
        <span>{labelText}</span>
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
          autoFocus={autofocus}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
          autoFocus={autofocus}
        />
      )}
    </div>
  )
}
