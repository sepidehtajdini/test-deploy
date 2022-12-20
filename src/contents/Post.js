import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./post.css";
function Post() {
    const [onvan, setOnvan] = useState("");
    const [content, setContent] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()).then(res => {
            if (res.title) {
                setOnvan(res.title);
                setContent(res.body)
            }
            else {
                navigate("/post/not-found")
            }
        }
        )
    }, [])
    return (
        <div className="post">
            <h1>{onvan}</h1>
            <p>{content}</p>
        </div>
    )
}
export default Post