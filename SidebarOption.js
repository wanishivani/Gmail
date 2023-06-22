import React from "react";
import "./SidebarOption.css";

export default function SidebarOption({Icon, title, number,isactive}) {
  return (
    <div className={`sidebar_option ${isactive && 'sidebar--active'}`}>
      <Icon/>
      <h1>{title}</h1>
      <p>{number}</p>
    </div>
  );
}

