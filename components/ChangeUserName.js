import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUserName() {
    const {setUserData,isUserUpdating,useError,user} = useMoralis();
    const setUsername=()=>{
        const username = prompt(`Enter your new username:{current:${user.getUsername()}}`);
        if(!username) return;
        setUserData({
            username
        });
    }
    
  return (
    <div className='text-sm absolute top-5 right-10'>
        <button disabled={isUserUpdating}
        onClick={setUsername}
        className='hover:text-pink-700'>
            changeUserName
        </button>
    </div>
  )
}

export default ChangeUserName