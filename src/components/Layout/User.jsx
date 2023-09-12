import React, {Children, useState} from 'react';
import {Modal} from "../Modal/index.jsx";
import Nav from "../Nav/index.jsx";

export function UserLayout({children,maxWidth }) {



  return (
    <div className="user-layout">
      <Modal />
      <Nav/>
      <div className="container mx-auto" style={{maxWidth : '1000px'}}>
        {children}

      </div>


    </div>
  );
}

