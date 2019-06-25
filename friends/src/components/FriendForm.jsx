import React, { useState } from 'react'

 const FriendForm = (props) => {
    const [friend, setFriend] = useState({name: '', age: '', email: '' })

    const friendHandler = e => {
        setFriend({
            ...friend,
            [e.target.name]:e.target.value
        })
    }

    // addFriend = e => {
    //     // e.preventDefault()
        

    // }

  return (

        <form 
            onSubmit={() => {props.addFriend(friend)}}
            className='formtainer'>
            <div className="form-group">
                <label>Name</label>
                <input 
                    name='name'
                    className='form-control'
                    type="text"
                    value={friend.name}
                    onChange={friendHandler}
                    placeholder='Name'
                />
                <label>Age</label>
                <input 
                    name='age'
                    type="text"
                    className='form-control'
                    value={friend.age}
                    onChange={friendHandler}
                    placeholder="Age"
                />
                <label>Email</label>
                <input 
                    name='email'
                    type="email"
                    className='form-control'
                    value={friend.email}
                    onChange={friendHandler}
                    placeholder='Email'
                />
            </div>
            <button
                className="btn btn-primary"
                type='submit'
            >
                    Add Friend
            </button>
        </form>
  )
}

export default FriendForm