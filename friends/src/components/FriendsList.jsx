import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard'
import FriendForm from './FriendForm'


import axios from 'axios'


const FriendsList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
      axios
        .get('http://localhost:5000/friends')
        .then(res => setFriends(res.data))
    }, [])

    const addFriend = friend => {
      axios
        .post('http://localhost:5000/friends', friend)
        .then(res => setFriends(res.data))
    }

    const deleteFriend = id => {
      console.log(id)
      axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }

  return (
    <>
      <div className='list'>
        {friends.map((friend, index) => (
          <FriendCard 
            key={index} 
            friend={friend}
            deleteFriend={deleteFriend}
          />
        ))}
      </div>
      <FriendForm addFriend={addFriend}/>
    </>
  )
}

export default FriendsList
