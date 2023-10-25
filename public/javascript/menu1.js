// menu 1 is completely used in Home page
// menu1 is partially used in signUp SignIn and about us
const navbarEle = document.getElementById("navbar");
const hamburgerIconEle = document.getElementById("hamburgerIcon");
const closeIconEle = document.getElementById("closeIcon");
const navItemsEle = document.getElementById("navItems");
hamburgerIconEle.addEventListener("click", () => {
  hamburgerIconEle.style.display = "none";
  closeIconEle.style.display = "block";
  navItemsEle.style.display = "flex";
  navbarEle.style.height = "100vh";
  console.log("t");
});
closeIconEle.addEventListener("click", () => {
  hamburgerIconEle.style.display = "block";
  closeIconEle.style.display = "none";
  navItemsEle.style.display = "none";
  navbarEle.style.height = "max-content";
  console.log("hh");
});
