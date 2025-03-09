import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Cache remains fresh for 5 seconds
    cacheTime: 10000, // Cache remains in memory for 10 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        Refresh Data
      </button>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
