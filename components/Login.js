import Image from 'next/image'
import React from 'react'
import {useMoralis} from 'react-moralis';

function Login() {
  const {authenticate} = useMoralis();
  return (
    <div className='bg-black relative'>
      
        <div className='flex flex-col absolute z-50 h-4/5 space-y-5 w-full justify-center items-center'>

            {/* logo */}
            <Image width={200} className='object-cover rounded-full' height={200} src="https://links.papareact.com/3pi"/>


            {/* login btn */}
            <button onClick={authenticate} className='bg-yellow-500 font-bold p-4 rounded-lg animate-bounce'>Login to Metaverse</button>
            
        </div>

        <div className='w-full h-screen'>
            <Image objectFit='cover'
                src="https://links.papareact.com/55n" layout='fill'
            />

        </div>

    </div>
  )
}

export default Login