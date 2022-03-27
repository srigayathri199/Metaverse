import Image from 'next/image';
import React from 'react'
import {useMoralis} from 'react-moralis';
import Avatar from '../components/Avatar';
import ChangeUserName from './ChangeUserName';

function Header() {
    const {user,logout} = useMoralis();
  return (
    <div className='sticky top-0 p-5 z-50 bg-black shadow-sm  border-b-2 border-pink-700 text-pink-500'>
        <div className='grid grid-cols-5 sm:grid-col-6 items-end sm:items-center'>

            <div className='relative h-24 w-24 mx-auto hidden sm:inline-grid'>
                <Image 
                layout='fill'
                objectFit='cover'
                className='rounded-full'
                src="https://links.papareact.com/3pi" />
            </div>

            <div className='col-span-3 text-left sm:text-center'>
                <div className='relative h-36 w-36 sm:mx-auto border-4 border-pink-500 rounded-full'>
                    {/* avatar */}
                    <Avatar logoutOnPress/>
                </div>
               
                {/* welcome msg */}
                <h1 className='text-2xl'>Welcome to Metaverse</h1>
                <h2 className='text-3xl font-bold truncate'>
                    {user.getUsername()}
                </h2>

            </div>

            <div className='text-center'>
                {/* change username */}
                <ChangeUserName/>
                <button 
                className='absolute top-12'
                onClick={logout}>Logout</button>
            </div>


        </div>
    </div>
  )
}

export default Header