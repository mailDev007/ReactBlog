import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import generateUniqueId from "generate-unique-id";
// const generateUniqueId = require('generate-unique-id');

function CreateBlog() {

    /* -------------------------- reactive blog content ------------------------- */
    // create a state for accessing and submitting data from each section of the form
    const [title, storeTitle] = useState("");
    const [image, storeImage] = useState("");
    const [content, storeContent] = useState("");

    /* -------------------- save this post into localStorage -------------------- */
    let oldPost: any = localStorage.getItem("blog");
    if (oldPost == null || !oldPost) {
        oldPost = []
    } else {
        JSON.parse(oldPost)
    }
    const [post, savePost] = useState(oldPost);

    /* --------------------- function to work with the state -------------------- */
    const sendInfo = (event: any) => {
        let inputId = event.target.id;

        if (inputId == 'title') {
            storeTitle(event.target.value);
        } else if (inputId == 'content') {
            storeContent(event.target.value);
        } else if (inputId == "image") {
            storeImage(event.target.value);
        }
    }

    /* ----------------- function to be triggered by post button ---------------- */
    const createPost = (event: any) => {

        if (title.trim() !== "" && image.trim() !== "" && content.trim() !== "") {
            Loading.custom("Saving Post",{
                customSvgUrl: 'https://icons8.com/preloaders/preloaders/1495/Spinner-3.gif',
            });
            /* ----------------------------- disable button ----------------------------- */
            event.target.disabled = true;

            /* ------------------ this is a post created from the form ------------------ */
            let newsPost: any = { id: generateUniqueId({ length: 20 }), title, image, content };
            let postArray;

            /* ------------------ check if the state has existing data ------------------ */
            if (post.length > 0) {
                postArray = JSON.parse(post);
            } else {
                postArray = post;
            }

            /* --------------- embed the new post together to the old post -------------- */
            let newPost: any = [...postArray, newsPost];

            /* ------------------ assign the new post to the post array ----------------- */
            savePost(newPost);

            /* ------------------- store the data in the localStorage ------------------- */
            localStorage.setItem("blog", JSON.stringify(newPost));
            Notify.success("Blog content added successfully");

            /* ---------------------- reset the content of the form --------------------- */
            setTimeout(() => {
                storeContent("");
                storeImage("");
                storeTitle("");

                event.target.disabled = false;
                Loading.remove();
            }, 2000);
        } else {
            Notify.failure('All fields required');
        }

    }

    return (
        <div className="container">
            <div className="px-5 pb-5">
                <h3 className="mt-5 mb-4 pb-4 text-center text-uppercase">Create New Blog Content</h3>
                <form role="search">
                    <div className="row mb-4">
                        <div className="col">
                            <label htmlFor="">Title</label>
                            <input className="form-control p-2" id="title" value={title} type="text" placeholder="title" onChange={sendInfo} />
                        </div>
                        <div className="col">
                            <label htmlFor="">Image</label>
                            <input className="form-control p-2" id="image" value={image} type="text" placeholder="image src" onChange={sendInfo} />
                        </div>
                    </div>
                    <div className="col mb-4">
                        <label htmlFor="">Content</label>
                        <textarea className="form-control px-2" id="content" value={content} rows={10} onChange={sendInfo} placeholder="Blog Content"></textarea>
                    </div>
                    <button className="btn btn-outline-success" type="button" onClick={createPost}>Create New</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog;