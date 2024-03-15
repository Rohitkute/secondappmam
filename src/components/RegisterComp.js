// export default function RegisterComp () {

//     return (
//         <div>
//             <h1> Registration Form </h1>
//         </div>
//     )
// // }
// import React, { useState } from 'react';

// const RegisterComp = () => {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Mobile_Number: '',
//     Email: '',
//     Password: '',
//   });

//   const [errors, setErrors] = useState({
//     Name: '',
//     Mobile_Number: '',
//     Email: '',
//     Password: '',
//   });

//   const [msg, setMsg] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Reset errors when the user types in a field
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate name, mobile number, email, and password...
//     const nameError = !formData.Name.trim() ? 'Name is required' : '';
//     const mobileError = !/^\d{10}$/.test(formData.Mobile_Number) ? 'Invalid mobile number' : '';
//     const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email) ? 'Invalid email address' : '';
//     const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ?
//       'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';

//     // Set errors
//     setErrors({
//       Name: nameError,
//       Mobile_Number: mobileError,
//       Email: emailError,
//       Password: passwordError,
//     });

//     // Check if there are validation errors
//     if (nameError || mobileError || emailError || passwordError) {
//       // If there are errors, do not proceed with the submission
//       return;
//     }

//     // If validation is successful, proceed with the fetch request
//     const reqData = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: formData.Name,
//         mobile: formData.Mobile_Number,
//         email: formData.Email,
//         password: formData.Password,
//       }),
//     };

//     fetch('http://localhost:9000/tenant', reqData)
//       .then((res) => res.text())
//       .then((str) => setMsg(str));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="Name"
//           value={formData.Name}
//           onChange={handleChange}
//         />
//         <span style={{ color: 'red' }}>{errors.Name}</span>
//       </div>

//       <div>
//         <label htmlFor="mobile">Mobile Number:</label>
//         <input
//           type="text"
//           id="mobile"
//           name="Mobile_Number"
//           value={formData.Mobile_Number}
//           onChange={handleChange}
//         />
//         <span style={{ color: 'red' }}>{errors.Mobile_Number}</span>
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="text"
//           id="email"
//           name="Email"
//           value={formData.Email}
//           onChange={handleChange}
//         />
//         <span style={{ color: 'red' }}>{errors.Email}</span>
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="Password"
//           value={formData.Password}
//           onChange={handleChange}
//         />
//         <span style={{ color: 'red' }}>{errors.Password}</span>
//       </div>

//       <button type="submit">Register</button>

//       {/* Display success or error message */}
//       {msg && <div>{msg}</div>}
//     </form>
//   );
// };

// export default RegisterComp;

import React, { useState } from 'react';

const RegisterComp = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Mobile_Number: '',
    Email: '',
    Password: '',
  });

  const [errors, setErrors] = useState({
    Name: '',
    Mobile_Number: '',
    Email: '',
    Password: '',
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Reset errors when the user types in a field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate name, mobile number, email, and password...
    const nameError = !formData.Name.trim() ? 'Name is required' : '';
    const mobileError = !/^\d{10}$/.test(formData.Mobile_Number) ? 'Invalid mobile number' : '';
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email) ? 'Invalid email address' : '';
    const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ?
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';

    // Set errors
    setErrors({
      Name: nameError,
      Mobile_Number: mobileError,
      Email: emailError,
      Password: passwordError,
    });

    // Check if there are validation errors
    if (nameError || mobileError || emailError || passwordError) {
      // If there are errors, do not proceed with the submission
      return;
    }

    // If validation is successful, proceed with the fetch request
    try {
      const reqData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.Name,
          mobile: formData.Mobile_Number,
          email: formData.Email,
          password: formData.Password,
        }),
      };

      const response = await fetch('http://localhost:9000/tenant', reqData);
      const result = await response.text();
      
      setMsg(result);
    } catch (error) {
      console.error('Error during registration:', error);
      setMsg('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.Name}</span>
      </div>

      <div>
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          name="Mobile_Number"
          value={formData.Mobile_Number}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.Mobile_Number}</span>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.Email}</span>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="Password"
          value={formData.Password}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.Password}</span>
      </div>

      <button type="submit">Register</button>

      {/* Display success or error message */}
      {msg && <div>{msg}</div>}
      <div>
        

      </div>
        </table>
    </form>
    
  );
};

export default RegisterComp;
