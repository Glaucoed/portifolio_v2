import React from "react";

export default function LiComponent({ name }: { name: string }) {
  return (
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="text-lg font-semibold text-white">{name}</span>
    </li>
  );
}
