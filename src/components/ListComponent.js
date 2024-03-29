import React from "react";

export const ListComponent = (props) => {
  return (
    <ul className="list-group list-group-checkable d-grid gap-1 border-0">
      <li className="list-group-item rounded-3 border-0 py-2">{props.items}</li>
      <li className="list-group-item rounded-3 border-0 py-2 bg-black text-white">{props.items}</li>
      <li className="list-group-item rounded-3 border-0 py-2">{props.items}</li>
    </ul>
  );
};