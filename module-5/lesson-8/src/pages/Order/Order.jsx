import React, { useEffect, useState } from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import avatar from "../../assets/Profile Avtar.jpg";
import { post } from "../../api/post";
import { TableRow } from "../../components/TableRow/TableRow";
import { Loader } from "../../ui/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
export const Order = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(false)
  useEffect(() => {
    post.getAllPost().then((data) => {
      setData(data.data)
      setPending(true)
    }) 
  }, []);
  const deletePost = (id) => {
    post.deleteItem(id)
    toast.success('Succesfuly deleted')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  if(!pending) {
    return <Loader/>
  }
  return ( 
   
        <section className="container">
          <div className="main overflow-y-scroll pl-[41px] h-[100vh] bg-[#F8F8F8] py-4">
            <div className="main__table">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-gray-500 text-center dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-5">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        buyurtma ID
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Edit
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                     data?.length ? data?.map((el) => {
                      return <TableRow  item={el} deletePost={deletePost}/>
                     }) : 'error'
                   }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ToastContainer autoClose={800} />
        </section>
   
  );
};
