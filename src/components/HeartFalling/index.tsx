import { memo, useEffect } from "react";

const HeartFalling = () => {
  useEffect(() => {
    const heartManager = document.getElementById("manage-heart");
    const maxHeart = 15;
    for (let i = 0; i < maxHeart; i++) {
      const heartCopy = document.createElement("span");
      heartCopy.classList.add("heart-falling");
      heartCopy.style.animationDuration = `${Math.round(
        4 + Math.random() * 2
      )}s`;
      heartCopy.style.animationDelay = `${
        i > maxHeart / 2 ? Math.round(3 + Math.random() * 2) : 0
      }s`;
      heartCopy.innerHTML = "&hearts;";
      heartCopy.style.width = "25px";
      heartCopy.style.height = "25px";
      heartCopy.style.bottom =
        i > maxHeart / 2
          ? `${Math.round(102 + Math.random() * 5)}vh`
          : `${Math.round(500 + Math.random() * 1000)}px`;
      heartCopy.style.left = `${Math.round(Math.random() * 100)}%`;
      heartCopy.style.fontSize = `${Math.round(16 + Math.random() * 16)}px`;
      heartManager?.appendChild(heartCopy);
    }
  }, []);
  return <div id="manage-heart"></div>;
};
const HeartFallingMemo = memo(HeartFalling);
export default HeartFallingMemo;
