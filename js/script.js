const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("nav");
hamburger.onclick = function () {
  if (navigation.style.display === "none") {
    
  } else {
    navigation.style.display = "block";
  }
};
