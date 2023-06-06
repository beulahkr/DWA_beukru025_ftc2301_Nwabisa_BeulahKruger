// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const heading = document.querySelector("[data-heading]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  let numerator = parseInt(dividend)
  let denominator = parseInt(divider)

  if(isNaN(numerator) || isNaN(denominator)){
    console.trace()
    heading.innerHTML = ''
    form.innerHTML = ''
    result.innerHTML = '<p>Something critical went wrong. Please reload the page.</p>'
  } else if(dividend != "" && divider != ""){
      if(dividend < 0 || divider < 0 ){
      result.innerText = "Division not performed. Invalid number provided. Try again"
      console.trace()
    } else {
          result.innerText = parseInt(dividend / divider); 
          }
  }
  else{
    result.innerText = "Division not performed. Both values are required in inputs. Try again"
  }
  
});