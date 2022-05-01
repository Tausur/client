import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
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
    </div>
  )
}

export default Navbar