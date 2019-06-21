import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard'

import axios from 'axios'


const FriendsList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
      axios
        .get('http://localhost:5000/friends')
        .then(res => setFriends(res.data))
    }, [])

  return (
    <div className='list'>
      {friends.map((friend, index) => (
        <FriendCard key={index} friend={friend}/>
      ))}
    </div>
  )
}

export default FriendsList
