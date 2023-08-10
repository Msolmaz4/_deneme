'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
//butona vereceksen  unu kullanabilirsin
//burada dikka tedilecek olan use client yap,azsan sayaayi hat ailirsin
const Trial = () => {
    const touterRed = useRouter();
    console.log('trial')
  return (
    <div>
      
      <div onClick={()=>touterRed.push('./about')}> 
        push
      </div>
      
      trial</div>
  )
}

export default Trial