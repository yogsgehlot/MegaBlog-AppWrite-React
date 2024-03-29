import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { bgStyle2 } from "../constant";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {

    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, [  ]);

  return (
    <div className={`w-full min-h-screen sm:h-screen py-8 dark:bg-gray-900 ${bgStyle2}`}>
      <Container>
        <div className="grid sm:flex sm:flex-wrap grid-cols-1  ">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 sm:w-1/4 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
