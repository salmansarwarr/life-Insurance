'use client'

import Header from "@/app/life/sections/Header"
import { useState } from "react";

const page = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <Header showMenu={showMenu} setshowMenu={setShowMenu}/>
  )
}

export default page