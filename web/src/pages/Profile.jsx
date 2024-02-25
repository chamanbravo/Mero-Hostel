import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const {isLoggedIn}=useSelector((state)=>state.userDetail)

  const navigate = useNavigate();
  if(isLoggedIn){
    navigate('/')
  }
  return (
    <div>Profile</div>
  )
}

export default Profile