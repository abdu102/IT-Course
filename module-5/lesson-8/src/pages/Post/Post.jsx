import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { post } from '../../api/post';
import { Loader } from '../../ui/Loader/Loader';
import { Input} from '../../ui/Input/Input'
import { edit } from '../../api/edit';
import { ToastContainer, toast } from "react-toastify";
export const Post = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({})
    const [pending, setPending] = useState(false)
    useEffect(() => {
        post.getOnePost(id).then(((data) => {
            setData(data.data)
            setPending(true)
          }) )
    }, [])
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const updatePost = () => {
      const newPost = {
        title, 
        body
      }
      if(newPost.title.length && newPost.body.length) {
        toast.success('Successfuly updated');
        edit.editPost(id, newPost)
        setTimeout(() => {
          window.location.reload()
         }, 1000)
      } else{
      toast.error("Please fill the form!");
      }
    }
    if(!pending) {
        return <Loader/>
      }
  return (
    <div className="bg-white p-6 w-[70vw] mx-auto rounded-sm shadow-lg py-5 flex flex-col gap-y-4 pl-9 max-h-[300px]">
        <ul>
            <li className='font-bold text-[20px] flex gap-x-2'>Title: <p className='font-normal text-[18px] m-1'>{data?.title}</p></li>
            <li className='font-bold text-[20px] flex gap-x-2'>Body: <p className='font-normal text-[18px] m-1'>{data?.body}</p></li>
            <li className='font-bold text-[20px] flex gap-x-2'>Id: <p className='font-normal text-[18px] m-1'>{id}</p></li>
        </ul>
        <button className='bg-sky-500 py-2 px-4 w-[90px] rounded-md text-white' onClick={() => navigate(-1)}>Back</button>


        <div className="edit flex justify-between items-center w-full ">
       <span className='w-[40%] flex flex-col gap-y-2'>
       <Input placeholder={'Edit title'} id={'editTitle'} label={'Edit title'} type={'text'} val={title} setVal={setTitle}/>
       </span>
       <span className='w-[40%] flex flex-col gap-y-2'>
       <Input placeholder={'Edit body'} id={'editBody'} label={'Edit body'} type={'text'} val={body} setVal={setBody}/>
       </span>
       <button className="bg-green-500 py-2 h-[50px] px-4 text-white text-center mt-8 rounded-md"
       onClick={() => {
        updatePost()
       }}
          >
            Edit
          </button>
        </div>

        <ToastContainer autoClose={800} />
    </div>
  )
}
