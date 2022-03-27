import { userInfo } from 'os';
import React, { useRef } from 'react'
import {ByMoralis,useMoralis,useMoralisQuery} from 'react-moralis';
import SendMessage from '../components/SendMessage';
import Message from '../components/Message';

const MINS_DURATION = 15;
function Messages() {
    const {user} = useMoralis();
    const endOfMsgRef = useRef(null);
    const {data,loading,error} = useMoralisQuery(
        "Messages",
        (query)=>
            query.ascending("createdAt").greaterThan("createdAt",new Date(Date.now()-1000*60*MINS_DURATION)),
            [],
            {
                live:true,
            }

    );

    console.log(data);
  return (
    <div className='pb-56'>
        <div className='my-5'>
            <ByMoralis variant='dark'
            style={{marginLeft:'auto',marginRight:'auto'}}
            />
        </div>

        <div className='space-y-10 p-4'>
            {/* each messages */}
           {data.map((msg) => (
                <Message key={msg.id} message={msg}/>
            ))}
        </div>

        <div className='flex justify-center'>
            {/* send msg */}
            <SendMessage endOfMsgRef={endOfMsgRef} />
        </div>

        <div ref={endOfMsgRef} className='text-center text-gray-400 mt-5'>
            <p>You are up to date {user.getUsername()}</p>
        </div>

    </div>
  )
}

export default Messages