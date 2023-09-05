  import {
    Validation,
    Input,
    Datepicker,    
    Timepicker,
    initTE,
    Select,
    
  } from "tw-elements";
  
  initTE({ Validation, Input, Datepicker, Timepicker, Select });

  const confirmDateOnSelect = document.getElementById('datepicker-close-without-confirmation');
new Datepicker(confirmDateOnSelect, {
  confirmDateOnSelect: true,
});

  const pickerMaxTime = document.querySelector("#timepicker-max-time");
const Timepicker = new Timepicker(pickerMaxTime, {
  maxTime: "20:00",
});

const pickerMinTime = document.querySelector("#timepicker-max-time");
const timepickerMinTime = new Timepicker(pickerMinTime, {
  minTime: "15:00",
});
  
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