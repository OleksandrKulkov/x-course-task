import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  const options = ["Up to $15", "$15 to $30", "Above $30"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Price
        <span>
          <FaCaretDown />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div
            onClick={(e) => setSelected(e.target.value)}
            className="dropdown-item"
            value="1"
          >
            up to $15
          </div>
          <div className="dropdown-item" value="2">
            $15 to $30
          </div>
          <div className="dropdown-item" value="3">
            above $30
          </div>
        </div>
      )}
    </div>
  );
}
