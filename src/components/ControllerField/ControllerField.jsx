import React, {useState} from 'react';
// use,
const ControllerField = () => {


    // const [password, setPassword] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
        }
    }


// Password must be at least 6 characters long


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        
    }
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' required  />
                <br />
                <br />
                <input type="password" name="password" placeholder='Password must be 6 characters' onChange={handlePasswordOnChange} defaultValue={password} required  />
                <br />
                <br />
                <input type="submit" value="Submit" />
             </form>
             <p style={{color: 'red'}}>
                <small>{error}</small>
             </p>
        </div>
    );
};

export default ControllerField;