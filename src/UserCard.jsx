import React from 'react'
import './UserCard.css'

const UserCard = ({ user }) => {
  return (
    <div className="user-deets">
      <img className="img" src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p className="small">Location</p>
      <p className="strong">{user.location}</p>
      <p className="small">Eats</p>
      <p className="strong">{user.foodType}</p>
      <p className="small">Age</p>
      <p className="strong">{user.age}</p>
      <p className="small">Likes</p>
      <p className="strong">{user.likes}</p>
      <p className="small">Twitter</p>
      <a className="a" href="#">@{user.twitterUsername }</a>
    </div>
  )
}

export default UserCard
