import React from "react";
import PostCard from "./PostCard";
import { posts } from "../postsData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600 tracking-wide">
        Post Cards
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
        {posts.slice(0, 20).map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
