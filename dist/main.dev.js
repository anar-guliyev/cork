"use strict";

var paragraphs = document.querySelectorAll(".side-bar__header p");
var sideBar = document.querySelector(".side-bar");
var button = document.querySelector(".nav-activate");
var content = document.querySelector(".content");

function activeButton() {
  //paragraphs.classList.add("activate")
  paragraphs.forEach(function (element) {
    element.classList.contains("activate") ? element.classList.remove("activate") : element.classList.add("activate");
  });
}

;

function activeButtonSB() {
  sideBar.classList.contains("activate-sidebar") ? sideBar.classList.remove("activate-sidebar") : sideBar.classList.add("activate-sidebar");
}

;

function activeButtoncontent() {
  content.classList.contains("activate-content") ? content.classList.remove("activate-content") : content.classList.add("activate-content");
}

;

if (button) {
  button.addEventListener("click", activeButton);
  button.addEventListener("click", activeButtonSB);
  button.addEventListener("click", activeButtoncontent);
}

;