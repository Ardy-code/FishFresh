import React from "react";
import { Fish } from "lucide-react";

const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-2">
      <Fish className="h-8 w-8 text-ocean" />
      <span className="font-bold text-2xl text-gray-800">
        Fish<span className="text-ocean">Fresh</span>
      </span>
    </a>
  );
};

export default Logo;
