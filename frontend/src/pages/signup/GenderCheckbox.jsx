const GenderCheckbox = ({ selectedGender, handleGenderChange }) => {
  return (
    <div className='flex p-1'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-gray-400'>Male</span>
            <input type='checkbox' className='checkbox border-slate-900' checked={selectedGender === 'male'}
            onChange={() => handleGenderChange('male')}/>
        </label>
      </div>
      <div className='form-control ml-3'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-gray-400'>Female</span>
            <input type='checkbox' className='checkbox border-slate-900' checked={selectedGender === 'female'}
            onChange={() => handleGenderChange('female')}/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
