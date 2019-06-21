import React, { useState } from 'react'

 const FriendForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const nameHandler = e => {
        setName(e.target.value)
    }

    const ageHandler = e => {
        setAge(e.target.value)
    }

    const emailHandler = e => {
        setEmail(e.target.value)
    }

  return (
    <div className="formtainer">
        <form className='form'>
            <div className="inputs">
                <input 
                    type="text"
                    value={name}
                    onChange={nameHandler}
                    placeholder='Name'
                />
                <input 
                    type="text"
                    value={age}
                    onChange={ageHandler}
                    placeholder="Age"
                />
                <input 
                    type="text"
                    value={email}
                    onChange={emailHandler}
                    placeholder='Email'
                />
            </div>
            <button className="btn">Add Friend</button>
        </form>
    </div>
  )
}

export default FriendForm