import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

import React from 'react'

export default function Footer() {
  return (
  <footer className="h-14 text-bg-light bg-escuro flex justify-around text-white items-center leading-none">
  <div className="flex items-center gap-2">
    <span className="text-sm tracking-tight ">Siga me:</span>
    <div className="flex justify-evenly">
      <a href="https://www.linkedin.com/in/glauco-esverzuthe/" className="m-1">
      <RiLinkedinLine className="w-6 h-6 bg-dourado text-escuro rounded-full p-1" />
      </a>
      <a href="https://github.com/Glaucoed" className="m-1">
      <RiGithubLine className="w-6 h-6 bg-dourado text-escuro rounded-full p-1" />
      </a>
    </div>
  </div>
  <div>
    <span className="text-xs tracking-tight">Copyright 2023 developed by</span>
    <a href="https://github.com/Glaucoed" className="text-dourado text-xs ml-1">Glaucoed</a>
  </div>
</footer>
  )
}
