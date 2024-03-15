// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { json } from 'body-parser';

// const Login = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newErrors = {};
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }

//         setErrors(newErrors);

//         if (Object.keys(newErrors).length === 0) {
//             const response = await fetch('http://localhost:9000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 // console.log('Login successful');
//                 console.log(data);



//                 // navigate('/user');
//             } else {
//                 console.error('Login failed:', data.error);
//             }
//         }
//     };

//     return (
//         <div className="container mt-5" id="fivep">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label className="form-label"> Email ID :</label>
//                     <input
//                         type="email"
//                         className={form-control ${errors.email ? 'is-invalid' : ''}}
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                     />
//                     {errors.username && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Password:</label>
//                     <input
//                         type="password"
//                         className={form-control ${errors.password ? 'is-invalid' : ''}}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                     />
//                     {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;

// *****************************************************************************************************************************

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [errors, setErrors] = useState({});
//     const [serverError, setServerError] = useState('');
//     const [loggedInUser, setLoggedInUser] = useState(null);
//     const [LoginStatus, setLoginStatus] = useState(false);
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const newErrors = {};
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }

//         setErrors(newErrors);

//         if (Object.keys(newErrors).length === 0) {
//             fetch('http://localhost:9000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             })
//                 .then((response) => {
//                     if (response.ok) {
//                         return response.json();
//                     } else {
//                         throw new Error(Login failed: ${response,statusText});
//                     }
//                 })
//                 .then((data) => {
//                     console.log(data.message);
//                     console.log(data.user.Name);

//                     setLoginStatus(true);
//                     if (LoginStatus == true) {
//                         setLoggedInUser(data.user.Name);
//                     }
//                     else {

//                     }


//                     setServerError('');

//                 })
//                 .catch((error) => {
//                     console.error('Login failed:', error.message);
//                     setLoginStatus(false);
//                     if (LoginStatus == false) {
//                         console.log(1);
//                         setServerError('Login failed. Please check your credentials.');
//                         setLoggedInUser('');
//                     }
//                     else {
//                         setServerError('');
//                     }
//                 });
//         }
//     };

//     return (
//         <div className="container mt-5" id="fivep">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label>Email ID:</label>
//                     <input
//                         type="email"
//                         className={errors.email ? 'is-invalid' : ''}
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                     />
//                     {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         className={errors.password ? 'is-invalid' : ''}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                     />
//                     {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             {serverError && <div className="mt-3" style={{ color: 'red' }}>{serverError}</div>}
//             {loggedInUser && <div className="mt-3">Logged in as: {loggedInUser}</div>}
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [errors, setErrors] = useState({});
//     const [serverError, setServerError] = useState('');
//     const [loggedInUser, setLoggedInUser] = useState(null);
//     const [loginStatus, setLoginStatus] = useState(false);
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const newErrors = {};
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }

//         setErrors(newErrors);

//         if (Object.keys(newErrors).length === 0) {
//             fetch('http://localhost:3000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             })
//                 .then((response) => {
//                     if (response.ok) {
//                         return response.json();
//                     } else {
//                         throw new Error(`Login failed: ${response.statusText}`);
//                     }
//                 })
//                 .then((data) => {
//                     console.log(data.message);
//                     console.log(data.user.Name);

//                     setLoginStatus(true);
//                     setLoggedInUser(data.user.Name);
//                     setServerError('');
//                 })
//                 .catch((error) => {
//                     console.error('Login failed:', error.message);
//                     setLoginStatus(false);
//                     setServerError('Login failed. Please check your credentials.');
//                     setLoggedInUser('');
//                 });
//         }
//     };

//     return (
//         <div className="container mt-5" id="fivep">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label>Email ID:</label>
//                     <input
//                         type="email"
//                         className={errors.email ? 'is-invalid' : ''}
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                     />
//                     {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         className={errors.password ? 'is-invalid' : ''}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                     />
//                     {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             {serverError && <div className="mt-3" style={{ color: 'red' }}>{serverError}</div>}
//             {loggedInUser && <div className="mt-3">Logged in as: {loggedInUser}</div>}
//         </div>
//     );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setVisibility}) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:9000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`Login failed: ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data.message);
                console.log(data.user.Name);

                setLoginStatus(true);
                setLoggedInUser(data.user.Name);
                setServerError('');
                setVisibility();
            } catch (error) {
                console.error('Login failed:', error.message);
                setLoginStatus(false);
                setServerError('Login failed. Please check your credentials.');
                setLoggedInUser('');
            }
        }
    };

    return (
        <div className="container mt-5" id="fivep">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email ID:</label>
                    <input
                        type="email"
                        className={errors.email ? 'is-invalid' : ''}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label>Password:</label>
                    <input
                        type="password"
                        className={errors.password ? 'is-invalid' : ''}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit">Login</button>
            </form>
            {serverError && <div className="mt-3" style={{ color: 'red' }}>{serverError}</div>}
            {loggedInUser && <div className="mt-3">Logged in as: {loggedInUser}</div>}
        </div>
    );
};

export default Login;

