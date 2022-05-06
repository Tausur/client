import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiAccountCircleFill } from 'react-icons/ri'
import { useState } from 'react'

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false)

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 sticky top-0 z-10  bg-gray-900 text-white'>
      <div className="logo mx-5">
        <Link className='cursor-pointer' href={'/'}><a><Image src='/logo1.png' alt='' height={50} width={50} /></a></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-10 font-bold md:text-xl'>
          <Link href={'/'} className='cursor-pointer'><a><li>Home</li></a></Link>
          <Link href={'/blogs'} className='cursor-pointer'><a><li>Blogs</li></a></Link>
          <Link href={'/problems'} className='cursor-pointer'><a><li>Problems</li></a></Link>
          <Link href={'/contact'} className='cursor-pointer'><a><li>Contact</li></a></Link>
        </ul>
      </div>
      <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className='cursor-pointer absolute right-16'>
        <RiAccountCircleFill className='text-2xl' />
        {dropdown && <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className='absolute bg-blue-400 right-3 top-5 rounded-xl'>
          <ul>
            <li className='py-1 px-5 hover:text-blue-800 cursor-pointer'><Link href={'/signup'}>Signup</Link></li>
            <li className='py-1 px-5 hover:text-blue-800 cursor-pointer'><Link href={'/login'}>Login</Link></li>
            <li className='py-1 px-5 hover:text-blue-800 cursor-pointer'>Logout</li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar