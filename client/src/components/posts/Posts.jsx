import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
const Posts = (userid) => {
  const { isLoading, error, data } = useQuery(
    ["posts"],
    async () =>
      await makeRequest.get("/posts?userid=" + userid).then((res) => {
        return res.data;
      })
  );
  //console.log(data);
  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
