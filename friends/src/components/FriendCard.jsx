import React from 'react'
import './Friend.css'

 const FriendCard = props => {
    const {name, age, email} = props.friend
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}

export default FriendCard