import React from 'react';
import './FormInput.scss';

const FormInput = ({ handlehChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handlehChange} {...otherProps} />
    {
      label ? 
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
      : null
    }
  </div>
);

export default FormInput;