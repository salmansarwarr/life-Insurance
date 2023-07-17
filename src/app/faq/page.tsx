'use client'

import { useState } from 'react'
import Header from '../sections/Header'

const page = () => {
const  [showMenu, setShowMenu] = useState(false);
  return (
    <>
        <Header showMenu={showMenu} setshowMenu={setShowMenu}/>
    </>
  )
}

export default page