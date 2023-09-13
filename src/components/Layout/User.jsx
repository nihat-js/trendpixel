import React, {Children, useState} from 'react';
import {Modal} from "../Modal/index.jsx";
import Nav from "../Nav/index.jsx";
import {useSelector} from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

export function UserLayout({children, maxWidth}) {

  const theme = useSelector(state => state.theme)

  return (
    <div className={`user-layout ${theme === "DARK" && "bg-gray-700 text-white"} `}>
      <Toaster />
      <Modal/>
      <Nav/>

      <div className="container mx-auto" style={{maxWidth: '1000px'}}>
        {children}

      </div>


    </div>
  );
}

