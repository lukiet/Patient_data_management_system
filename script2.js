const sign_in_btnp = document.querySelector("#sign-in-btnp");
const sign_up_btnp = document.querySelector("#sign-up-btnp");
const container_patient = document.querySelector(".container_patient");
const sign_in_btn2p = document.querySelector("#sign-in-btn2p");
const sign_up_btn2p = document.querySelector("#sign-up-btn2p");
sign_up_btnp.addEventListener("click", () => {
    container_patient.classList.add("sign-up-modep");
});
sign_in_btnp.addEventListener("click", () => {
    container_patient.classList.remove("sign-up-modep");
});
sign_up_btn2p.addEventListener("click", () => {
    container_patient.classList.add("sign-up-mode2p");
});
sign_in_btn2p.addEventListener("click", () => {
    container_patient.classList.remove("sign-up-mode2p");
});