"use client";

import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useDispatch } from "react-redux";
import { getAll } from "@/redux/slices/FaqSlice";
import { API } from "@/api";
import { useAppSelector } from "@/redux/store";

const Blog = ({ post }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-2 text-indigo-700">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{post.date}</p>
        <p className="text-gray-700">{post.content}</p>
        {/* Add more blog post details as needed */}
      </div>
    );
};

const Blogs = () => {

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [Allblogs, setAllblogs] = useState([]);
  const blogs = useAppSelector((state) => state.faqReducer.blogs);
  // console.log(faqs, "this is apps");
 
  useEffect(() => {
    const fetchAll = async () => {
      const res = await API.get('/blogs/');
      setAllblogs(res.data)
      console.log(res.data, "this is apps");
 
      dispatch(getAll(res.data)); // Dispatch the action with the fetched data
    };

    fetchAll();
  }, [dispatch]);

  return (
    <>
      <Header showMenu={showMenu} setshowMenu={setShowMenu} />

    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Allblogs.map((post, index) => (
            <Blog key={index} post={post} />
          ))}
        </div>
      </div>
    </div>

    <Footer p1="" p2="" />
    </>
  );
};

export default Blogs;
