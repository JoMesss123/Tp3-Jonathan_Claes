  import {
    Validation,
    Input,
    Datepicker,
    Timepicker,
    initTE,
  } from "tw-elements";
  
  initTE({ Validation, Input, Datepicker, Timepicker });
  
  const fullValidationDisposeBtn = document.getElementById("dispose");
  const fullValidationForm = document.getElementById("form__rendez-vous");
  
  const fullValidation = new Validation(fullValidationForm, {
    customErrorMessages: {
      contains: "The field must contain the '{contains}' word",
    },
    customRules: {
      contains: (value, message, string) => {
        return value.includes(string)
          ? true
          : message.replace("{contains}", string);
      },
    },
    submitCallback: (e, valid) => {
      console.log("Do something ...", "Validation passed: ", valid);
    },
  });
  
  fullValidationDisposeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fullValidation.dispose();
  });
  
  fullValidationForm.addEventListener("invalid.te.validation", (e) => {
    console.log("Il y a une erreur!");
  });
  fullValidationForm.addEventListener("valid.te.validation", (e) => {
    console.log("Tout est bon!");
  });