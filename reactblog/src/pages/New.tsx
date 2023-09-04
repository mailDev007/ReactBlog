import { useState } from "react";

function NewBlog() {
    /* ---------- this json array will be used for filling the details ---------- */
    const allNews = [
        {
            "title": "12 healthy foods",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde delectus nam explicabo labore magnam ad dolor necessitatibus rerum nesciunt, sit eaque enim quam deserunt nemo officia repudiandae eveniet quasi.",
            "image": "https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "title": "How to keep fit",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde delectus nam explicabo labore magnam ad dolor necessitatibus rerum nesciunt, sit eaque enim quam deserunt nemo officia repudiandae eveniet quasi.",
            "image": "https://images.pexels.com/photos/1089164/pexels-photo-1089164.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "title": "5 fruits you need",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde delectus nam explicabo labore magnam ad dolor necessitatibus rerum nesciunt, sit eaque enim quam deserunt nemo officia repudiandae eveniet quasi.",
            "image": "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];


    /* -------------------------- reactive blog content ------------------------- */
    let allPosts: any = localStorage.getItem("blog");

    /* ------------ put the localStorage posts as default state value ----------- */
    const [newContent, addNewContent] = useState(JSON.parse(allPosts));

    /* --------------------------- delete blog content -------------------------- */
    const deleteBlog = (id:string) => {
        /* --------------- using filter by id remove the deleted blog --------------- */
        const newArray = newContent.filter((item:any) => item.id !== id);

        /* --------------- assign the result of the above to the state -------------- */
        addNewContent(newArray);
        /* ---------- Update the localStorage as well with the result above --------- */
        localStorage.setItem("blog", JSON.stringify(newArray));
    }


    /* ----------------- function to be triggered by post button ---------------- */
    // console.log();
    // addNewContent(JSON.parse(allPosts));



    return (
        <div className="container">
            <div className="px-5">
                <div className="album py-5 bg-body-tertiary">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            newContent.map((news: any) =>
                                <div className="col" key={news.id}>
                                    <div className="card shadow-sm">
                                        <img className="bg-placeholder-img card-img-top" width="100%" height="240" src={news.image} />
                                        {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                        <div className="card-body">
                                            <h5>{news.title}</h5>
                                            <p className="card-text">{news.content}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => deleteBlog(news.id)}>Delete</button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                </div>
                                                <small className="text-body-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBlog;