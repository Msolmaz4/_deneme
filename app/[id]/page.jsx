import React from 'react'


const fetchData = async ()=>{
    const data = await fetch ('https://jsonplaceholder.typicode.com/posts')
    return data.json()
}



const  Page = async({params})=> {
    console.log(params.id,'id')
    const ver = await fetchData()
    console.log(ver,'verAllahim')
  return (
    <div>IDDDDDDDDDDDIIIIIIIIDDDDD</div>
  )
}

export default Page

//burda kullanarak direk sayfa gonderme olabilir burda adikkat edilecek olan stringe cevirmeyi unutma

export async function generateStaticParams(){
    const post = await fetchData()
    return post.map(po=>({id :po.id.toSting()}))
}