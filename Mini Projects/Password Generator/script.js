let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = slider.value;
slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChar : "";
  allChars += uppercase.checked ? upperChar : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }

  let i = 1;
  while (i <= slider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}

copyIcon.addEventListener("click", ()=>{
    if(passBox.value != "" || passBox.value.length != 0){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML = "check";
        copyIcon.title = "Copied"

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";    
            copyIcon.title = ""
        }, 3000);
    }
})
