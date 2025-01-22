import { countUp } from "./utils/countUp.js";

const data = {
  participate: 123123123,
};

const participateDOM = document.getElementById("participate-number"); // 증가하는 애니메이션과 함께 갱신
countUp(participateDOM, data.participate, 3);
