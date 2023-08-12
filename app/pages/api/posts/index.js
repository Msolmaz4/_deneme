import Posts from  '../../../data.json'



export default function handler(req,res){
    console.log(Posts,'derlerme')
    res.status(200).json(Posts)
}