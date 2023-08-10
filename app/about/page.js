'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const Page = () => {

const searchParam = useSearchParams()
const name = searchParam.get('name')
console.log(name,'name')

  return (
    <div>P
        aboooooooooooooooo
    </div>
  )
}

export default Page