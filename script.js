const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "EHEHE YEEEY I LOVE CHU :3 see u soon my valentine ;3";
  gif.src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczJwNjFvbzY0dGJoOGQzdzNieGRvMWU0dWljaHprYjVsbWZ5c3J2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12vXrAZhMazV7y/giphy.gif";
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
