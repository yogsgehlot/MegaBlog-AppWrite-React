import React from "react";
import { Container, PostForm } from "../components";
import {bgStyle3 } from "../constant";

function AddPost() {
  return (
    <div className={`py-8 w-full bg-${bgStyle3} h-screen`  }>
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
