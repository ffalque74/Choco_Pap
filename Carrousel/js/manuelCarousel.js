// select the buttons "next" and "previous"//
const nextBtn = document.querySelector("[data-next-btn]");
const preBtn = document.querySelector("[data-pre-btn");

// click event of button "next" //
nextBtn.addEventListener ("click", () => {

  // loop to check which of the slides has the class "show" //
  // if it's positive the class is removed and add to next //
  for (let classe of slide0) {
    if (classe == "show") {
      slide0.remove("show");
      slide0.add("hide");
  
      slide1.remove("hide");
      slide1.add("show");
      return
    }
  };
  for (let classe of slide1) {
    if (classe == "show") {
      slide1.remove("show");
      slide1.add("hide");
  
      slide2.remove("hide");
      slide2.add("show");;
      return
    }
  };
  for (let classe of slide2) {
    if (classe == "show") {
      slide2.remove("show");
      slide2.add("hide");
  
      slide0.remove("hide");
      slide0.add("show");;
      return
    }
  };
});

// click event of button "previous" // 
preBtn.addEventListener("click", () => {

    // loop to check which of the slides has the class "show" //
    // if it's positive the class is removed and add to previous //
  for (let classe of slide0) {
    if (classe == "show") {
      slide0.remove("show");
      slide0.add("hide");
 
      slide2.remove("hide");
      slide2.add("show");
      return
    }
  };
  for (let classe of slide2) {
    if (classe == "show") {
      slide2.remove("show");
      slide2.add("hide");
 
      slide1.remove("hide");
      slide1.add("show");;
      return
    }
  };
  for (let classe of slide1) {
    if (classe == "show") {
      slide1.remove("show");
      slide1.add("hide");
 
      slide0.remove("hide");
      slide0.add("show");;
      return
    }
  };
});