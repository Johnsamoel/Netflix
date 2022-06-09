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
                 <img src='https://www.w3schools.com/howto/img_avatar2.png'/>
                 <div className='edit-profile-details'>
                 <h2> name: Aya{user.FirstName}</h2>
                 <h2> email: {user.Email}</h2>
               </div>
               <div className='edit-profile-plans'>
                 <h3>Plans (Current Plan : Premium)</h3>
                 <button
                 className='edit-profile-signOut'>
                     Sign out
                 </button>
               </div>
               </div>
            </div>
        </div>
    );
}

export default EditProfile;