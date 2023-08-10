import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import Trial from './trial'
//redicer kullanmak icin bir tane degisken olisturmak gerekiyor
import { redirect } from 'next/navigation'



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


const fechtData = async ()=>{
  const res = await fetch('https://restcountries.com/v3.1/name/deutschland')
  return res.json()
}
const fechtData1 = async ()=>{
  const res = await fetch('https://restcountries.com/v3.1/name/united')
  return res.json()
}


const Page =async () => {
  const newCookies = cookies()
  // console.log(newCookies.getAll())hepsine ulasmak icin
  // console.log(newCookies.get('cookies').value)birirne ulasmak icin veya deger ulasma
 

  //farkli sayfalara gitsin dediginde kullanabilirsin
  //butone verirsen hata alirsin
  let navi1 = false
if(navi1){
  redirect('/about')
}


const data =  fechtData()
//console.log(data,'data')
const data1 =  fechtData1()
//console.log(data1,'data')

//coklu daat cekimleride Promise.all kullaniloir daha hiyli olur
//yukaridaki await sileriy

const resulrData = await Promise.all([
  data,data1
])
console.log(resulrData,'result')

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
      <Trial />
    </>
  )
}

export default Page