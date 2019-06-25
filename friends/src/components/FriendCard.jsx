import React from 'react'
import './Friend.css'

 const FriendCard = props => {
    const {name, age, email, id} = props.friend

    const deleteFriend = () => {
      props.deleteFriend(id)
    }
  return (
  
        <div className='card'>
            <div className="card-body">
                <h2 className='card-title'>Name: {name}</h2>
                <p className='card-text'>Age: {age}</p>
                <p className='card-text'>Email: {email}</p>
            </div>
            <button 
                className="btn btn-danger"
                onClick={deleteFriend}
                >Delete Friend</button>
        </div>
  )
}

export default FriendCard