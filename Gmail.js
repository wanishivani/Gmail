import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Email from "./Email";
// import { Route, Routes } from "react-router-dom";

// import { Link } from "react-router-dom";
// import Main from "./Main";
export default function Gmail() {
  return (
    <div>
      <Header />
      <Email />
      <Sidebar />
    </div>
  );
}
