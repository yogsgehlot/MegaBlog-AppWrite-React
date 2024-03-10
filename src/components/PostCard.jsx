import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="sm:w-full bg-slate-900 text-white bg-opacity-70 m-4 rounded-xl  p-4 ">
        <div className="sm:w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <div>
        <h2 className="sm:text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
