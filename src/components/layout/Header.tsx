import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="font-bold text-3xl">Amir Mohammad Sanei</div>
          <div>designer && developer</div>
        </div>
        <div className="size-12 bg-black text-white p-1 text-xl">11</div>
      </header>
  )
}
