import React, { useState, useEffect, useRef } from "react";
import MoreIcon from "../MoreIcon/MoreIcon";
import DropDownItem from "./DropDownItem";

interface Props {
    position?: "left" | "right";
    items: Array;
  }

function DropdownMenu({ position, items }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [menu, setMenu] = useState(false);
  // const [items] = useState<object[]>([
  //   {"name": "Rename"},
  //   {"name": "Delete"},
  //   {"name": "Share"},
  //  ]);

   // OnClick Function
   const HandleClick = () => (menu ? setMenu(false) : setMenu(true));

   // When user click outside
   useEffect(() => {
    const HandleClickedOutside = (event: any) => {
      if (menu && ref.current && !ref.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", HandleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", HandleClickedOutside);
    };
  }, [menu]);

  return (
    <div className={`${position === "right" ? "btn-right" : "btn-left"}`} ref={ref}>
      <button className="icon" onClick={() => HandleClick()}>
        <MoreIcon color="" size={40} />
      </button>
      <div className="Prelative">
        <ul
          className={`dropMenu ${position === "right" ? "right" : "left"} ${
            menu ? "" : "d-none"
          }`}
        >
          <DropDownItem items={items} />
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;