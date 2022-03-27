import React, { useState } from 'react'
import {useMoralis} from 'react-moralis';

function SendMessage({endOfMsgRef}) {
    const {user,Moralis} = useMoralis();
    const [msg,setMsg] = useState("");


    const sendMessage = (e)=>{
        e.preventDefault();
        if(!msg) return;

        const Messages = Moralis.Object.extend("Messages");//creating a table like Messages
        const messages = new Messages();
        messages.save(
            {
                message:msg,
                username:user.getUsername(),
                ethAddress:user.get("ethAddress")
            }
        ).then((msg)=>{},(error)=>{console.log(error.message)});

        endOfMsgRef.current.scrollIntoView({behaviour:'smooth'});
        setMsg("");
    }

  return (
    <form className='flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-2 border-blue-500' action="">

        <input 
        className='flex-grow bg-transparent pr-5  text-white outline-none' 
        placeholder={`Enter a Message ${user.getUsername()}...`}
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        />
        
        <button type='submit'
        onClick={sendMessage}
        className='text-pink-500 font-bold'>send</button>

    </form>
  )
}

export default SendMessage