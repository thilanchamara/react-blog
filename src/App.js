import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./api/post";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          //Not in the 200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error message:${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    const filteredPost = posts.filter((post) =>
      (post.title || post.body).toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredPost.reverse());
  }, [search, posts]);
  return (
    <Router>
      <div className=" h-screen w-full flex flex-col ">
        <Header title="React Js Blog" />
        <Nav search={search} setSearch={setSearch} />

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/home" index element={<Home posts={searchResult} />} />
          <Route
            path="/post"
            element={
              <NewPost
                posts={posts}
                setPosts={setPosts}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} setPosts={setPosts} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
