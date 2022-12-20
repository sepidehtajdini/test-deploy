import { useState } from "react";
import "./post.css";
function PostAdd() {
    const [onvan, setOnvan] = useState("");
    const [content, setContent] = useState("");
    function saveToLocal() {
        localStorage.setItem("post", JSON.stringify({
            onvan,
            content
        }))
    }
    function handleInput(e) {
        setOnvan(e.target.value)
    }
    function handleContent(e) {
        setContent(e.target.value)
    }
    return (
        <div>
            <input onChange={handleInput} />
            <textarea onChange={handleContent} />
            <button onClick={saveToLocal}>submit</button>
        </div>
    )
}
export default PostAdd;