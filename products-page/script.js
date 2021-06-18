"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let totalSpan = document.querySelector(".total-span");

let buttons = document.querySelectorAll(".button");
let checkoutContainer = document.querySelector(".checkout-container");
let showCheckout = document.querySelector(".show-checkout");
let hideCheckout = document.querySelector(".hide-checkout");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let amount = parseInt(button.getAttribute("data-cost"));
    total += amount;
    totalParagraph.textContent = `Total $${total}`;
    totalSpan.textContent = `Total $${total}`;
  });
});

showCheckout.addEventListener("click", () => {
  checkoutContainer.style.display = "flex";
});
hideCheckout.addEventListener("click", () => {
  checkoutContainer.style.display = "none";
});

checkoutContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("checkout-container") ||
    e.target.classList.contains("hide-checkout")
  ) {
    console.log(e);
    checkoutContainer.style.display = "none";
  }
});
