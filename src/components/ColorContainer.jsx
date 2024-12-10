const colors = ["#ECEBDE", "#D3F1DF", "#EBEAFF", "#FEF3E2"];

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ColorContainer() {
  const { changeColor } = useContext(GlobalContext);
  return (
    <div className="align-elements mb-10 flex w-full justify-end">
      <ul className="flex gap-3">
        {colors.map((color) => {
          return (
            <li
              onClick={() => changeColor(color)}
              key={color}
              style={{ backgroundColor: color }}
              className="h-7 w-7 cursor-pointer rounded-full border hover:border-red-400"
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContainer;
