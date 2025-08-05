import { WorkStep } from "../Constants";
import { motion } from "framer-motion";
import { useRef } from "react";

const Work = () => {
  const calcTilt = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within card
    const y = e.clientY - rect.top;  // Y position within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    return { rotateX, rotateY };
  };

  return (
    <div className="work-main">
      <div className="container">
        <h2>How It’s Work</h2>
        <div className="work-flex">
          {WorkStep.map(({ id, imageIcon, title, txt }) => {
            const cardRef = useRef(null);
            return (
              <motion.div
                key={id}
                className="flex-col-work"
                ref={cardRef}
                initial={{ rotateX: 0, rotateY: 0 }}
                whileHover={{
                  scale: 1.03,
                }}
                onMouseMove={(e) => {
                  if (!cardRef.current) return;
                  const { rotateX, rotateY } = calcTilt(e, cardRef.current);
                  cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={() => {
                  if (!cardRef.current) return;
                  cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
                }}
                style={{
                  transition: "transform 0.2s ease",
                  transformStyle: "preserve-3d",
                }}
              >
                <img src={imageIcon} alt="icon" />
                <h3>{title}</h3>
                <p>{txt}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
