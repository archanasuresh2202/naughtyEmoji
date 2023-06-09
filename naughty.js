const unclickableButton = document.querySelector("#unclickable");
const message = document.querySelector("#message");
const reset = document.querySelector("#reset");

const getRandomIntInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomOffset = () => {
  return {
    x: getRandomIntInRange(20, 80),
    y: getRandomIntInRange(20, 80)
  };
};

const updateOffset = () => {
  const randomOffset = getRandomOffset();
  unclickableButton.style.left = randomOffset.x + "%";
  unclickableButton.style.top = randomOffset.y + "%";
};

const handleClick = () => {
  message.textContent = "😃 You Win!";
  unclickableButton.textContent = "👻";
  unclickableButton.classList.toggle("unclickable--active");
  clearInterval(play);
};

unclickableButton.addEventListener("mouseover", updateOffset);
unclickableButton.addEventListener("click", handleClick);

const play = setInterval(updateOffset, 1000);