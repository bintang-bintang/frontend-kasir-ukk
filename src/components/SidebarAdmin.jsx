import React from "react";

const SidebarAdmin = (props) => {
  return (
    <div className="flex ">
      <div className="bg-black h-lvh">
        <ul>
          <li>User</li>
          <li>Product Data</li>
          <li>Table Data</li>
        </ul>
      </div>
      {props.children}
    </div>
  );
};

export default SidebarAdmin;
