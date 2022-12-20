import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./contents/Post";
import PostAdd from "./contents/PostAdd"
const abbas = createBrowserRouter([{
  path: "/",
  element: (
    <div>home</div>
  )
},
{
  path: '/post/:id',
  element: (<Post />),

},
{
  path:"/post/not-found",
  element:(<div>Nist</div>)
},
{
  path: '/add-post',
  element:
    (<div>
      <PostAdd />
    </div>)
}
])

function App() {

  return (
    <div>
      <RouterProvider router={abbas} />

    </div>
  );
}
export default App;