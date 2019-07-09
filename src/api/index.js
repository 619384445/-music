import {fetch as fetchPolyfill} from 'whatwg-fetch'

// export  const getShowImg=(url,data)=>(
//     fetchPolyfill(url,{
//         method: 'POST',
//         body:JSON.stringify(data),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//           })
//     })
//     .then((res)=>{
//       return res.json();
//     }).then((data)=>{
//         console.log(data)
//     }) 
// )

export  const getwy=(url)=>(
    fetchPolyfill(url)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
        return data;
    }) 
)
