import React from 'react';

const FormField = ({ input, label, type, textarea, meta}) => {
  const { error, warning, touched, invalid } = meta;
   const inputType = <input {...input} placeholder={label} type={type} className="form-control" />
   const textareaType = <textarea {...input} placeholder={label} type={type} className="form-control" />
   return (
     <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
       <label htmlFor={label.toLowerCase()}>{label}</label>
        <div>
          { textarea ? textareaType : inputType }
          <span className="form-alert">{ touched && (error  || warning) }</span>
        </div>
      </div>
   );
}
export default FormField;
