import React, { useState, useEffect } from 'react'

 const FriendForm = (props) => {
     const [friend, setFriend] = useState({name: '', age: '', email: '' })
    
    useEffect((friend) => {
        return props.editFriend ? setFriend({...friend, ...props.editFriend}) : null 
    }, [props.editFriend])

    const friendHandler = e => {
        setFriend({
            ...friend,
            [e.target.name]:e.target.value
        })
    }

   const updateFriend = (xfriend) => {
       props.updateFriend(xfriend)
    }


  return (

        <form 
            onSubmit={props.editFriend ? () => {props.addFriend(friend)} : () => updateFriend(friend)}
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
                    {props.editFriend ? 'Edit Friend' : 'Add Friend'}
            </button>
        </form>
  )
}

export default FriendForm