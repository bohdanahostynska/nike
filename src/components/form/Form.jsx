import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <section className="form container section">
      <form className='form__content' onSubmit={handleSubmit}>
        <div className='form__info'>
          <label className="name">Enter your name:</label>
          <input className='form__input'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='form__info'>
          <label className="email">Enter your email:</label>
          <input className='form__input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br/>
        <br/>
        <button className="btn"type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;