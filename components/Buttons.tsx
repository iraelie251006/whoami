import React from 'react'

import { IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
const Buttons = () => {
  return (
    <div className="mt-5 flex gap-4 max-sm:flex-col">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                <IconDownload size={20} />
                Download CV
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
            </button>
      
            <button className="group relative px-8 py-4 rounded-xl hover:bg-accent border-[1px] border-purple-500 transition-all duration-300 hover:scale-105 flex justify-center">
              <span className="flex items-center gap-2">
                <IconBrandGithub size={20} />
                GitHub
              </span>
            </button>
            
            <button className="group relative px-8 py-4 rounded-xl border-[1px] border-blue-400 hover:bg-accent transition-all duration-300 hover:scale-105 flex justify-center">
              <span className="flex items-center gap-2">
                <IconBrandLinkedin size={20} />
                LinkedIn
              </span>
            </button>
        </div>
  )
}

export default Buttons