'use client'
import Link from 'next/link'
import React from 'react'
import { CiBookmarkCheck } from 'react-icons/ci'
interface Props {
  icon: React.ReactNode
  path: string
  title: string
}
export const SideItembar = ({ icon, path, title }: Props) => {
  return (
    <>
      <li>
        <Link
          href={path}
          className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        >
          {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
    </>
  )
}
