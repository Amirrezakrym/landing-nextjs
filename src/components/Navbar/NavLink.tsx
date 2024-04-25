

import React from 'react'
import Link from "next/link"
const NavLink = ({ href, title}) => {
    return(
        <Link 
         href={href}
         className="text-white font-medium hover:font-semibold hover:text-teal-400 rounded-lg p-2 ease-in  transition-all duration-200">
         {title}
        </Link>
    )
}

export default NavLink;