// dom : innerHTML이 갱신될 노드
// target : 목표 숫자
// second : 몇 초가 걸릴지 -> 5
// term : 몇 초마다 함수 실행할 지 -> 15

// count Term : 한 term에 몇이 증가해야 하는지
export const countUp = (dom, target, second, term = 15) => {
  if (!dom || isNaN(Number(target) || isNaN(second)) || isNaN(Number(term)))
    return;

  const countTerm = Math.floor((target / second) * (term / 1000));
  let nowNumber = 0;

  const timerID = setInterval(() => {
    if (nowNumber >= target) {
      nowNumber = target;
      clearInterval(timerID);
      return;
    }
    nowNumber += countTerm;
    dom.innerHTML = `${nowNumber.toLocaleString()}`;
  }, term);
};
