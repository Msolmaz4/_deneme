import React from 'react'
import Link from  'next/link'

const Page = () => {
  return (
    <>
     <div>page</div>
     <Link href='/about'>Yonlendirme</Link> {/**strimgesl ifadeler */}
     <Link href='/about?name=berkant&surname=kaya'>Yonlendirme2</Link>
     {/**obje olarak  */}
     <Link href={{
      pathname:'/about',
      query:{
        name:'berkant',
        surname:'kkkkk'
      }
     }}>Yonlendirme78888</Link>
    </>
  
  )
}

export default Page