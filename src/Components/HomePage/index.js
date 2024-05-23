import React from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoriesList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading SubHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading SubHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
      </div>
    </>
  );
}