import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import {cookies} from 'next/headers'



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 


const Page = () => {
  const newCookies = cookies()
 // console.log(newCookies.getAll())hepsine ulasmak icin
// console.log(newCookies.get('cookies').value)birirne ulasmak icin veya deger ulasma

  return (
    <>
      <div>page</div>
      <Link className={roboto.className} href='/about'>Yonlendirme</Link> {/**strimgesl ifadeler */}
      <Link href='/about?name=berkant&surname=kaya'>Yonlendirme2</Link>
      {/**obje olarak  */}
      <Link href={{
        pathname: '/about',
        query: {
          name: 'berkant',
          surname: 'kkkkk'
        }
      }}>Yonlendirme78888</Link>
    

 






    </>

  )
}

export default Page