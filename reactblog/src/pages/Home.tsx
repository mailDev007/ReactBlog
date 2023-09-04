import { useState } from "react";
import NewBlog from "./New";

function Home() {

    // let title = "My React Blog";

    const [title, changeTitle] = useState("My React Blog");
    const clickMe = () => {
        changeTitle("New React Blog");
    }

    const reverseBack = () => {
        changeTitle("My React Blog")
    }

    /* ----------------------- creating a json array item ----------------------- */

    return (
        <main>

            {/* <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">{title}</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <a href="#" className="btn btn-primary my-2" onClick={clickMe}>Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2" onClick={reverseBack}>Secondary action</a>
                        </p>
                    </div>
                </div>
            </section> */}

            {/* add new blog section */}
            <NewBlog />

        </main>
    )
}

export default Home