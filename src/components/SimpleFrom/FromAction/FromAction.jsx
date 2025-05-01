import React from 'react';

const FromAction = () => {



    const handleFromAction = (fromData) =>{
        console.log(fromData.get('name'));
        console.log(fromData.get('email'));

        
    } 

    return (
        <div>   
            <form action={handleFromAction}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit"  value="Submit" />
                </form>
        </div>
    );
};

export default FromAction;