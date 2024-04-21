const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "고마워&#128157; 평생 유니한테만 내 사랑 다 줄게&#128538;";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExem5vOXI5OXEwNGtkM2N3NGtzcGhpYmh1amtvOWxibDA0ZDN6b2xiYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VpW0LoWNwGIgo7fams/giphy.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  });

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});