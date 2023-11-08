let nameValue = document.querySelector("#namefeild")
let emailValue = document.querySelector("#emailfeild")
let submitForm = document.querySelector("#signup");
let errorName = document.querySelector("#errorName");
let errorEmail = document.querySelector("#errorEmail");



class FormValidator{
    constructor(formElement){
        this.formElement = formElement
        this.nameInput = nameValue;
        this.emailInput = emailValue;
        this.nameErrorMessage = errorName;
        this.emailErrorMessage = errorEmail
        this.nameInput.addEventListener("input",()=>{
            this.hideErrorMessage("name")
        });
        this.emailInput.addEventListener("input", ()=>{
            this.hideErrorMessage("email")
        })
    }

    Validate(){
        const userName = this.nameInput.value.trim()
        const email = this.emailInput.value.trim()

        if(userName.length <= 3){
            this.displayErrorMessage("name", 'Username must be between at 3 character to 20 character long')
          return false
        }else if(userName.length >= 3){
            this.hideErrorMessage("name")
        }
        if(!isValidEmail(email)){
            this.displayErrorMessage("email", "Please Enter a valid email address")
            return false
        }
        return true
    }

    displayErrorMessage(type, message){
        const errorElement = type === "name" ? this.nameErrorMessage : this.emailErrorMessage
        errorElement.textContent = message;
        errorElement.classList.remove("hidden")

    }

    hideErrorMessage(type){
        const errorElement = type === "name"? this.nameErrorMessage : this.emailErrorMessage
        errorElement.textContent = ""
        errorElement.classList.add("hidden")
    }
}

function isValidEmail(email) {
    const Emailregex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return Emailregex.test(email)
  }



  const Validator = new FormValidator(submitForm)
  submitForm.addEventListener("submit",(e)=>{
    
    e.preventDefault()
    console.log("I am clicked")

    if(Validator.Validate()){
        console.log("Successfully submitted")
    }
    

  })
  