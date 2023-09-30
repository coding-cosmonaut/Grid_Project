const hamburgerBttn = document.querySelector(".hamburger");
const allBars = document.querySelectorAll("#bar1, #bar2, #bar3");
const mobileDrawer = document.querySelector(".mobile-nav");

hamburgerBttn.addEventListener("click", () => {
  let [firstLine, secondLine, thirdLine] = allBars;
  for (let bar of allBars) {
    if (bar === firstLine) {
      if (bar.classList.contains("closeAnimation1")) {
        bar.classList.remove("closeAnimation1");
      }
      if (!bar.classList.contains("line1")) {
        bar.classList.add("line1");
      } else {
        bar.classList.remove("line1");
        bar.classList.add("closeAnimation1");
      }
    }
    if (bar === secondLine) {
      if (bar.classList.contains("closeAnimation2")) {
        bar.classList.remove("closeAnimation2");
      }
      if (!bar.classList.contains("line2")) {
        bar.classList.add("line2");
      } else {
        bar.classList.remove("line2");
        bar.classList.add("closeAnimation2");
      }
    }
    if (bar === thirdLine) {
      if (bar.classList.contains("closeAnimation3")) {
        bar.classList.remove("closeAnimation3");
      }
      if (!bar.classList.contains("line3")) {
        bar.classList.add("line3");
      } else {
        bar.classList.remove("line3");
        bar.classList.add("closeAnimation3");
      }
    }
    }
    if (mobileDrawer.classList.contains("mobileClose")) {
        mobileDrawer.classList.remove("mobileClose");
    }
    if (!mobileDrawer.classList.contains('mobileAnimation')) {
        mobileDrawer.classList.add("mobileAnimation");
    } else {
        mobileDrawer.classList.remove("mobileAnimation");
        mobileDrawer.classList.add('mobileClose')
    }
});
