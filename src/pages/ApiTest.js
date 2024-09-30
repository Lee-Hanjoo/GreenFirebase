
import React, { useEffect } from 'react'

const ApiTest = ({data}) => {
  console.log(data)

  let test = {
    post: async ()=>{
      await fetch('/api/hello',{
        method:'post',
        body:JSON.stringify({name:'한주'})
      })
    },
    update: async ()=>{},
    delete: async ()=>{
      await fetch('/api/hello?name=한주',{
        method:'delete'
      })
    }
  }

  return (
    <div>
      <h2>ApiTest</h2>
      <div>
        <button onClick={test.post}>추가</button>
        <button onClick={test.update}>수정</button>
        <button onClick={test.delete}>삭제</button>
      </div>
      <ul>
        {
          data.map((obj,key)=>
            <li key={key}> {obj.name} </li>
          )
        }
      </ul>

    </div>
  )
}

export async function getServerSideProps(){
    //                첫번째 자리:reserve < 성공했을때, 두번째자리:reject < 실패했을 때
    // let a = await new Promise( async (reserve,reject)=>{
        const res = await fetch('http://localhost:3000/api/hello');
        const data = await res.json();
        // reserve(data)
    // })

    // return {props:{data:a}}
    return {props:{data}}
}

export default ApiTest;