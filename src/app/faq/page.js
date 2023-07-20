"use client";

import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useDispatch } from "react-redux";
import { getAll } from "@/redux/slices/FaqSlice";
import { API } from "@/api";
import { useAppSelector } from "@/redux/store";

const Page = () => {

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [Allfaqs, setAllfaqs] = useState([]);
  const faqs = useAppSelector((state) => state.faqReducer.faqs);
  // console.log(faqs, "this is apps");
 
  useEffect(() => {
    const fetchAll = async () => {
      const res = await API.get('/faqs/');
      setAllfaqs(res.data)
      console.log(res.data, "this is apps");
 
      dispatch(getAll(res.data)); // Dispatch the action with the fetched data
    };

    fetchAll();
  }, [dispatch]);

  return (
    <>
      <Header showMenu={showMenu} setshowMenu={setShowMenu} />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-10">
      <div className="max-w-md mx-auto p-8 pt-10">
        <h2 className="text-3xl font-bold mb-6 mt-10">Frequently Asked Questions (FAQs)</h2>
        {Allfaqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8 mb-4">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer p1="" p2="" />
    </>
  );
};

export default Page;
