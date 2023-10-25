const containerEle = document.getElementById("container");
const closeIconEle = document.getElementById("closeIcon");
const hamburgerIconEle = document.getElementById("hamburgerIcon");
const navbarEle = document.getElementById("navbar");
const navCardEle = document.getElementById("navCard");
const navItemsEle = document.getElementsByClassName("navItems");
hamburgerIconEle.addEventListener("click", () => {
  navbarEle.style.height = "100vh";
  navbarEle.style.width = "100vw";
  navCardEle.style.height = "95%";
  navCardEle.style.width = "90%";
  navCardEle.style.borderRadius = "1rem";
  hamburgerIconEle.style.display = "none";
  closeIconEle.style.display = "block";
  Array.from(navItemsEle).forEach((item) => {
    item.style.display = "flex";
  });
});
closeIconEle.addEventListener("click", () => {
  hamburgerIconEle.style.display = "block";
  closeIconEle.style.display = "none";
  Array.from(navItemsEle).forEach((item) => {
    item.style.display = "none";
  });
  navbarEle.style.height = "70px";
  navbarEle.style.width = "100vw";
  navCardEle.style.width = "100%";
  navCardEle.style.height = "100%";
  navCardEle.style.borderRadius = "0";
});
