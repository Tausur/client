import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={'/logo1.png'} alt='' height={70} width={70} />
          <span className="ml-3 text-xl">ClientSatellite</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} passHref><p className="mr-12 hover:text-gray-900 font-bold cursor-pointer text-lg">Home</p></Link>
          <Link href={'/blogs'} passHref><p className="mr-12 hover:text-gray-900 font-bold cursor-pointer text-lg">Blogs</p></Link><Link href={'/news'} passHref><p className="mr-12 hover:text-gray-900 font-bold cursor-pointer text-lg">News</p></Link><Link href={'/contact'} passHref><p className="mr-12 hover:text-gray-900 font-bold cursor-pointer text-lg">Contact</p></Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar