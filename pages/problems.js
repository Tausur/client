import Link from 'next/link'
import React from 'react'

const Problems = () => {
  return (
    <div className='flex'>
      <div className="w-60 h-screen shadow-xl bg-white px-1">
        <ul className="relative">
          <li className="relative">
            <Link href="/Problems/Physics"><a className="flex items-center text-sm pt-6 pb-6 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out text-xl">Physics</a></Link>
          </li>
          <li className="relative">
            <a className="flex items-center text-sm pt-6 pb-6 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out text-xl" href="/Problems/Chemistry" data-mdb-ripple="true" data-mdb-ripple-color="dark">Chemistry</a>
          </li>
          <li className="relative">
            <a className="flex items-center text-sm pt-6 pb-6 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out text-xl" href="/Problems/Programming" data-mdb-ripple="true" data-mdb-ripple-color="dark">Programming</a>
          </li>
        </ul>
      </div>
      <table>
        <th>hello</th>
      </table>
    </div>
  )
}

export default Problems