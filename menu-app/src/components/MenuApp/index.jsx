// src/components/MenuApp/index.js

import React from "react";
import Menu from "../Menu"; // Import Menu component

function MenuApp({ data }) {
  return (
    <div>
      {data.map((menu) => (
        <Menu
          key={menu.menuName} // Using menuName as a unique key
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        />
      ))}
    </div>
  );
}

export default MenuApp;
