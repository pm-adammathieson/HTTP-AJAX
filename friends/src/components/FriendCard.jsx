import React from 'react'
import './Friend.css'

 const FriendCard = props => {
    const {name, age, email} = props.friend
  return (
  
        <div className='card'>
            <div className="card-body">
                <h2 className='card-title'>Name: {name}</h2>
                <p className='card-text'>Age: {age}</p>
                <p className='card-text'>Email: {email}</p>
            </div>
        </div>
  )
}

export default FriendCard