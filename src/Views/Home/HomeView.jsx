import Container from "@/Components/Container/Container";
import CreateThread from "@/Components/CreateThread/CreateThread";
import PostCard from "@/Components/PostCard/PostCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomeView = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/post/getall", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.posts);
        setPosts(res.data.posts);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <Container>
      <div className="relative max-w-lg mx-auto">
        <div
          className="relative w-full flex items-center gap-x-3 pb-4 text-sm text-gray-600 cursor-pointer"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <div className="relative w-10 min-w-10 h-10 overflow-hidden flex items-center justify-center border-2 rounded-full border-gray-600 focus:border-white transition-all duration-300 select-none">
            <img
              src={`http://localhost:5000/${user.userImage}`}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          Start a thread...
        </div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <CreateThread />
    </Container>
  );
};

export default HomeView;
