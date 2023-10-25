const backIconEle = document.getElementById("backIcon");
backIconEle.addEventListener("click", () => {
  history.go(-1);
});
