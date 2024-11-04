import React from "react";

function SidebarLink({ name }) {
    return (
      <li>
        <a
          href="#"
          className="block p-2 font-semibold hover:text-pink-600 hover:bg-gray-300"
        >
          {name}
        </a>
      </li>
    );
}

export default SidebarLink;
