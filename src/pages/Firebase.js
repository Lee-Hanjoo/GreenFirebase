import { db, storage } from '@/lib/firebase';
import React, { useEffect, useRef, useState } from 'react'
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { collection, doc, setDoc, getDocs, getDoc, addDoc, deleteDoc } from "firebase/firestore"; 
import Image from 'next/image';


const Firebase = () => {
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState([]);

  const fileRef = useRef();

  const pre = (e) => {
    let file = new FileReader();
    file.readAsDataURL( e.target.files[0] )
    file.onload = (e)=>{
      setPreview(e.target.result)
    }
  }

  const save = (e) => {
    e.preventDefault();
    const file = e.target.photo.files[0];

    setLoading(true);

    let storageRef = ref(storage, file.name);
    // uploadBytes 는 비동기임. 비동기는 .then을 쓸 수 있음.
    uploadBytes(storageRef, file)
    .then(res=>{
      setLoading(false)
      setPreview('')
    })
    // 에러난 곳 
    .catch(()=>{

    })
  }

  let getImages = () => {
    console.log('hi');
    listAll(ref(storage))
    .then(async (res) => {
      let url = [];
      
      for(let i = 0; i < res.items.length; i++){       
        let name = res.items[i].name;
        url.push({name, url:await getDownloadURL( res.items[i] )})
      }
      setImgUrl(url)
    })
  }

  const delImg = (name)=>{
    setLoading(true)

    // deleteObject(서버접속, 삭제할이미지네임)
    // storageRef 는 save안에 클릭을 해야 name을 가져오기때문에 경우가 다름.
    deleteObject( ref(storage, name) )
    .then(res => {
      setLoading(false);
      getImages();
    })
  }

  return (
    <>
      <div>
        <div>이미지 미리보기</div>
        <div className='preview'>        
          <img src={preview} />
          {/* button말고 label이랑 input 연결시켜서 해도 됨. */}
          <button onClick={()=>{fileRef.current.click()}}>업로드</button>
        </div>

        <form onSubmit={save}>
          <input style={{display:'none'}} ref={fileRef} type="file" name="photo" onChange={pre} multiple/>
          <button>저장</button>
        </form>
        {
          loading &&
          <div className='loading'><img src="./loading.gif"/></div>
        }

        <hr />
        <h2>firebase storage</h2>
        <button type='button' onClick={getImages}>가져오기</button>
        <ul>
          {
            imgUrl.map((item,i)=>
              <li key={item[i]}>
                <figure><img src={item.url}/></figure>
              <button onClick={()=>delImg(item.name)}>삭제</button>
              </li>
            )
          }
        </ul>
      </div>
      <Firestore setLoading={setLoading}/>
    </>
  )
}

export default Firebase


export function Firestore({setLoading}){

  const [data, setData] = useState([]);
  const [mode, setMode] = useState(true);
  const [update,setUpdate] = useState({
    name:'', subject:'', content:'', url:''
  });
  const updateFn = (edit) => {
    setUpdate(
      {...update, ...edit}
    )
  }

  const crud = {
    get: async ()=>{
      const querySnapshot = await getDocs(collection(db,'test'));
      let dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push( {id:doc.id, ...doc.data()} );
      });
      setData(dataArr);
    },
    post: async (e)=>{

      e.preventDefault();
      let formdata = new FormData(e.target);

      // [STORAGE]
      const file = e.target.file.files[0];
      const fileName = 'board/'+file.name;

      let boardStorageRef = ref(storage,fileName)
      //    uploadBytes(저장위치, 파일)
      await uploadBytes( boardStorageRef, file )
      const url = await getDownloadURL(boardStorageRef);

      // [DB]
      formdata.append('date','2024-09-27');
      formdata.append('url', url);
      formdata.append('fileName',fileName);

      let obj = Object.fromEntries(formdata);
      delete obj.file;
      await addDoc(collection(db,'test'), obj)
      await crud.get();

      //input창 초기화
      e.target.reset();
      setLoading(false);


      // addDoc(db접속 콜렉션이름, 추가할내용)
      // addDoc(collection(db, 'test'), {name: '한주'})
    },
    put: async (e)=>{
      e.preventDefault();

      // file은 이미지를 수정할 때 생기도록 우리가 추가해놓은거임.
      if(update.file){
        // [STORAGE]
        const file = update.file;
        const fileName = 'board/'+file.name;
        let boardStorageRef = ref(storage,fileName)
        //    uploadBytes(저장위치, 파일)
        await uploadBytes( boardStorageRef, file )
        const url = await getDownloadURL(boardStorageRef);

        // db 쪽
        let set = {...update};
        set.fileName = fileName;
        set.url = url;

        delete set.file;
        // 우리는 content,date,fileName,name,subject,url라는 것들을 post에서 사용했음.
        //                  수정하고자하는 id.  update.id = set.id
        await setDoc(doc(db, "test", set.id), set);
      }
      else{
        let set = {...update};
        await setDoc(doc(db, "test", set.id), set);
      }
      
    },
    delete: async (item)=>{
      setLoading(true)
      // db 데이터 삭제
      await deleteDoc(doc(db, 'test', item.id));
      // storage 데이터 삭제
      await deleteObject( ref(storage, item.fileName) )
      await crud.get();
      setLoading(false)
    },
  }

  useEffect(()=>{
    crud.get();
    console.log(data);
  },[])


  return(
    <>
      <div>
        <h2> No-sql 활용</h2>
      </div>


      <article>
        <h3>글쓰기</h3>
        {
          mode ? (
            <div>
              <form onSubmit={crud.post}>
                <p><input type="text" name="subject" placeholder='subject' /></p>
                <p><input type="text" name="name" placeholder='name' /></p>
                <p><textarea cols="50" rows="10" name="content"></textarea></p>
                <p><input type="file" name="file"/></p>
                <p><input type="submit" value="저장"/></p>
              </form> 
            </div>
          ) : (
            <div>
              <form onSubmit={crud.put}>
                <p>
                  <input type="text" name="subject" placeholder='subject' defaultValue={update.subject} 
                  onChange={(e)=>{updateFn({subject:e.target.value})}}
                  />
                </p>
                <p>
                  <input type="text" name="name" placeholder='name' defaultValue={update.name} 
                  onChange={(e)=>{updateFn({name:e.target.value})}}/>
                </p>
                <p>
                  <textarea cols="50" rows="10" name="content" defaultValue={update.content}
                    onChange={(e)=>{updateFn({content:e.target.value})}}>
                  </textarea>
                </p>
                <p>
                  <input type="file" name="file" onChange={(e)=>{updateFn({file:e.target.files[0]})}}/>
                </p>
                <p><input type="submit" value="수정하기"/></p>
              </form> 
            </div>
          )
        }
      </article>

      <article>
        <h3>리스트</h3>
        <ul>
          {
            data.map((item)=>
              <li key={item.id}>
                <img src={item.url} width={100} height={100} alt={item.name}/>
                <span>{item.subject}</span>
                <span>{item.content}</span>
                <span>{item.date}</span>

                <button onClick={()=>{
                  setMode(false);
                  setUpdate(item);
                }}>수정</button>
                <button onClick={()=>crud.delete(item)}>삭제</button>
              </li>
            )
          }
        </ul>
      </article>
    </>
  )
}