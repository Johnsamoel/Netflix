import React from 'react';
import './Profiles.css'
import {useSelector} from 'react-redux'

function EditProfile() {
     const user=useSelector((state)=>{
      return state
     })
     console.log(user)
    return (
        <div className='edit-profilel'>
            <div className='edit-profile-body'>
               <h1>Edit profile</h1>
               <div className='edit-profile-info'>
                 <img src='https://www.w3schools.com/howto/howto_css_image_avatar.asp'/>
                 <div className='edit-profile-details'>
                 <h2> email: {user.Email}</h2>
               </div>
               </div>
            </div>
        </div>
    );
}

export default EditProfile;