import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className=" grid sm:grid-cols-12 gap-2 py-8 mt-5 ">
      <div className=" flex justify-center flex-wrap sm:col-span-8 sm:row-span-2  items-center h-20  rounded-xl ml-5  ">
        <h1 className=" text-2xl font-bold  ">{post.title}</h1>
      </div>

      <div className=" sm:col-span-4 m-3 sm:row-span-6 ">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-xl"
        />
      </div>

      <div className="flex justify-center p-5 m-3 bg-blue-500 bg-opacity-50 rounded-xl flex-wrap sm:col-span-8 sm:row-span-6 max-h-1/2">
        {parse(post.content)}
      </div>

      <div className="sm:col-span-8 sm:row-span-10 ">
        <Container>
          <div className=" flex justify-center relative rounded-xl ">
            {console.log("from post", isAuthor)}
            {isAuthor && (
              <div className="flex justify-center  w-full">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="mr-3">
                    Edit
                  </Button>
                </Link>
                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  ) : null;
}
