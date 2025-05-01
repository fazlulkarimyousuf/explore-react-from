import React, {useRef} from 'react';

const UnControllerField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const handleSubmit = e => {
     e.preventDefault();
     console.log(emailRef.current.value);
     const email = emailRef.current.value;
        const password = passwordRef.current.value;
     console.log(email, password);
     
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" required name="email" placeholder='Email' />
                <br />
                <br />
                <input ref={passwordRef} type="password" required name="password" placeholder='Password' />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControllerField;