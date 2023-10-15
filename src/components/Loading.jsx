export const Loading = ({ name }) => {
  if (name) {
    console.log('Loading', name)
  }

  return (
    <div className='status-container'>
      <div className='loading'>loading</div>
    </div>
  )
}
