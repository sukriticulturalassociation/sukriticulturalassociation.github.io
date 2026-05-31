import React from "react";
import "./BulletListV1.css";
import img from "../../assets/sukriticulturalassociation.png";

interface BulletItem {
  text: string;
  icon?: React.ReactNode;
}

interface Props {
  items: BulletItem[];
}

const BulletListV1: React.FC<Props> = ({ items }) => {
  return (
    <div className="custom-bullet-list">
      {items.map((item, index) => (
        <div className="bullet-item" key={index}>
          {/* Custom Icon */}
          <span className="bullet-icon">
            <img src={img} alt={`slide-${index}`} />
          </span>

          {/* Text */}
          <span className="bullet-text">{item.text}</span>

          {/* Hover Hand */}
          <span className="hover-hand">☞</span>
        </div>
      ))}
    </div>
  );
};

export default BulletListV1;
