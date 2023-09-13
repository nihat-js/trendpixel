import likeSvg from "../../assets/like.svg";
import commentsSvg from "../../assets/comments.svg";
import React, {useState} from "react";
import {setModalData} from "../../store/modalSlice.js";
import {PostModalBox} from "./ModalBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import trashBinSvg from "../../assets/trash-bin.svg"
import {client} from "../../consts/index.js";
import toast from "react-hot-toast";

export function GridViewPost({el, posts, setPosts}) {
  const dispatch = useDispatch()
  const [isHovering, setHover] = useState(false)
  const me = useSelector(state => state.user)

  function handlePreviewClick() {
    dispatch(setModalData({
      showModal: true,
      body: <PostModalBox {...el} />
    }))
  }

  async function handleDelete() {
    let bool = confirm("Are you sure deleting this post. This action is irreversible")
    if (!bool) return false

    let res = await client.delete('/post?postId=' + el.postId)
    if (res?.data.status === "success") {
      toast.success('Deleted post successfully')
      setPosts(posts.filter(element => element.postId !== el.postId))
    } else {
      toast.error('Something went wrong. Please try again')
    }
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
      }}
      className="preview-post relative">
      <img onClick={handlePreviewClick} src={el.imageUrl} style={{height: '400px', width: "100%", objectFit: 'cover'}}
           alt=""/>

      <div style={{display: isHovering ? 'flex' : 'none'}}
           className="stats   gap-2 absolute left-2 justify-between  bottom-2 w-full  z-20 px-4  ">

        <section className="left flex gap-2">
          <div className="flex gap-1  justify-center bg-slate-50 rounded-full p-2 ">
            <img src={likeSvg} className="w-5 h-5"/>
            <span className="text-sm"> {el.likes.length} </span>
          </div>
          <div className="flex gap-1  justify-center bg-slate-50 rounded-full p-2 ">
            <img src={commentsSvg} className="w-5 h-5"/>
            <span className="text-sm"> {el.comments.length} </span>
          </div>
        </section>
        <section className="right">

          {
            el.authorUsername === me.username &&
            <div className="p-2 bg-slate-50 rounded-full hover:bg-red-500 "  onClick={handleDelete}>
              <img src={trashBinSvg} className="w-5 h-5" alt=""/>
            </div>
          }
        </section>

      </div>

    </div>
  )
}