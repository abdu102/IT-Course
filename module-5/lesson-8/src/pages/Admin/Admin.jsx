import React, { useEffect, useState } from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import { Input } from "../../ui/Input/Input";
import avatar from "../../assets/Profile Avtar.jpg";
import { post } from "../../api/post";
import { TableRow } from "../../components/TableRow/TableRow";
import { Loader } from "../../ui/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
export const Admin = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    post.getAllPost().then((data) => {
      setData(data.data);
      setPending(true);
    });
  }, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addPost = () => {
    const newPost = {
      title,
      body,
    };

    if (newPost.title.length > 0 && newPost.body.length > 0) {
      toast.success("Suucesfuly added");
       post.addItem(newPost)
       setTimeout(() => {
        window.location.reload()
       }, 1000)
    } else {
      toast.error("Please fill the form!");
    }
  };
  const deletePost = (id) => {
    post.deleteItem(id)
    toast.success('Succesfuly deleted')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }


  if (!pending) {
    return <Loader />;
  }
  return (
    <section className="container">
      <div className="main overflow-y-scroll pl-[41px] h-[100vh] bg-[#F8F8F8]">
        <div className="main__top w-[98%] flex justify-between items-center h-[13%] py-3">
          <input
            type="search"
            className="w-[53%] h-[52px] px-3 rounded-[3px] border border-[#00000033] focus:outline-none"
            placeholder="Search"
          />
          <span className="flex justify-between p-2 w-[13%] items-center">
            <a href="#">
              <i className="bx bx-bell text-[23px] text-[#ADA7A7]"></i>
            </a>
            <a href="#">
              <img src={avatar} alt="avatar" />
            </a>
          </span>
        </div>
        <form className="main__filter w-full h-[20%] flex gap-x-[22px] items-center">
          <div className="flex flex-col gap-3 w-[40%]">
            <Input
              placeholder={"Enter post title"}
              label={"Title"}
              id={"postTitle"}
              type={"text"}
              val={title}
              setVal={setTitle}
            />
          </div>
          <div className="flex flex-col gap-3 w-[40%]">
            <Input
              placeholder={"Enter post body"}
              label={"Body"}
              id={"postBody"}
              type={"text"}
              val={body}
              setVal={setBody}
            />
          </div>
          <button
            className="bg-green-500 py-2 h-[50px] px-4 text-white text-center mt-8 rounded-md"
            onClick={(e) => {
              e.preventDefault()
              addPost();
            }}
          >
            ADD
          </button>
        </form>
        <ToastContainer autoClose={800} />
        <div className="main__table">
          <div className="relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-gray-500 text-center dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-5">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    buyurtma ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.length
                  ? data?.map((el, index) => {
                      return <TableRow item={el} key={index} deletePost={deletePost}/>;
                    })
                  : "error"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
