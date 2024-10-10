// src/utils/formService.ts
import { CreateCustomer } from '../types/TypesForCreate';

// Bootstrap ile form oluşturup JSON verisi döndüren fonksiyon
export const showFormAndGetData = (): Promise<CreateCustomer> => {
  console.log("SHOW CUSTOMER FORM")
  return new Promise((resolve) => {
    // Bootstrap ile form oluşturuyoruz
    const formElement = document.createElement("form");
    formElement.classList.add("container", "mt-5");

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    // First Name input
    const firstNameDiv = document.createElement("div");
    firstNameDiv.classList.add("mb-3", "col-md-6");
    const firstNameLabel = document.createElement("label");
    firstNameLabel.classList.add("form-label");
    firstNameLabel.textContent = "First Name";
    const firstNameInput = document.createElement("input");
    firstNameInput.classList.add("form-control");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("placeholder", "Enter First Name");
    firstNameDiv.appendChild(firstNameLabel);
    firstNameDiv.appendChild(firstNameInput);

    // Last Name input
    const lastNameDiv = document.createElement("div");
    lastNameDiv.classList.add("mb-3", "col-md-6");
    const lastNameLabel = document.createElement("label");
    lastNameLabel.classList.add("form-label");
    lastNameLabel.textContent = "Last Name";
    const lastNameInput = document.createElement("input");
    lastNameInput.classList.add("form-control");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("placeholder", "Enter Last Name");
    lastNameDiv.appendChild(lastNameLabel);
    lastNameDiv.appendChild(lastNameInput);

    // Password input
    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("mb-3", "col-md-6");
    const passwordLabel = document.createElement("label");
    passwordLabel.classList.add("form-label");
    passwordLabel.textContent = "Password";
    const passwordInput = document.createElement("input");
    passwordInput.classList.add("form-control");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter Password");
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    // Phone input
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("mb-3", "col-md-6");
    const phoneLabel = document.createElement("label");
    phoneLabel.classList.add("form-label");
    phoneLabel.textContent = "Phone Number";
    const phoneInput = document.createElement("input");
    phoneInput.classList.add("form-control");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("placeholder", "Enter Phone Number");
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneInput);

    // Email input
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("mb-3", "col-md-6");
    const emailLabel = document.createElement("label");
    emailLabel.classList.add("form-label");
    emailLabel.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.classList.add("form-control");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Enter Email");
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    // Age input
    const ageDiv = document.createElement("div");
    ageDiv.classList.add("mb-3", "col-md-6");
    const ageLabel = document.createElement("label");
    ageLabel.classList.add("form-label");
    ageLabel.textContent = "Age";
    const ageInput = document.createElement("input");
    ageInput.classList.add("form-control");
    ageInput.setAttribute("type", "number");
    ageInput.setAttribute("placeholder", "Enter Age");
    ageDiv.appendChild(ageLabel);
    ageDiv.appendChild(ageInput);

    // Gender input (select)
    const genderDiv = document.createElement("div");
    genderDiv.classList.add("mb-3", "col-md-6");
    const genderLabel = document.createElement("label");
    genderLabel.classList.add("form-label");
    genderLabel.textContent = "Gender";
    const genderSelect = document.createElement("select");
    genderSelect.classList.add("form-select");
    const maleOption = document.createElement("option");
    maleOption.value = "Male";
    maleOption.textContent = "Male";
    const femaleOption = document.createElement("option");
    femaleOption.value = "Female";
    femaleOption.textContent = "Female";
    genderSelect.appendChild(maleOption);
    genderSelect.appendChild(femaleOption);
    genderDiv.appendChild(genderLabel);
    genderDiv.appendChild(genderSelect);

    // Submit button
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("mb-3", "col-md-12");
    const submitButton = document.createElement("button");
    submitButton.classList.add("btn", "btn-primary");
    submitButton.textContent = "Submit";
    buttonDiv.appendChild(submitButton);

    rowDiv.appendChild(firstNameDiv);
    rowDiv.appendChild(lastNameDiv);
    rowDiv.appendChild(passwordDiv);
    rowDiv.appendChild(phoneDiv);
    rowDiv.appendChild(emailDiv);
    rowDiv.appendChild(ageDiv);
    rowDiv.appendChild(genderDiv);
    rowDiv.appendChild(buttonDiv);

    formElement.appendChild(rowDiv);
    document.body.appendChild(formElement); // Formu ekranda gösteriyoruz

    // Form submit olunduğunda JSON dönecek
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData: CreateCustomer = {
        name: firstNameInput.value,
        address: lastNameInput.value,
        password: passwordInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        age: parseInt(ageInput.value),
        gender: genderSelect.value,
        type: "CreateCustomer" // Varsayılan bir 'type' ekleyebiliriz
      };
      resolve(formData); // Form verisini JSON formatında döndürüyoruz
      document.body.removeChild(formElement); // Formu kaldırıyoruz
    });
  });
};
