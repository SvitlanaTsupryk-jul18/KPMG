"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  preloader();
  burger();
  showCard();
  readMore();
  toTop();
  smoothScroll();
  modal(); //////preloader

  function preloader() {
    document.body.onload = function () {
      setTimeout(function () {
        var preloader = document.querySelector(".preloader");

        if (!preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }
      }, 500);
    };
  }

  ; ///burger-menu

  function burger() {
    var menu = document.querySelector(".menu");
    var openbtn = document.querySelector(".js-burger-open");
    var closebtn = document.querySelector(".js-burger-close");
    openbtn.addEventListener("click", show);
    closebtn.addEventListener("click", hide);

    function show() {
      this.classList.remove("burger--visibility");
      menu.style.transform = "translate(0)";
    }

    function hide() {
      openbtn.classList.add("burger--visibility");
      menu.style.transform = "translate(-300%)";
    }
  } ///click on stage in hero section for show card


  function showCard() {
    var cards = document.querySelectorAll(".hero__stage-card");

    var sectons = _toConsumableArray(document.querySelectorAll(".hero__stage"));

    sectons.forEach(function (el) {
      el.addEventListener("click", function (e) {
        var card = e.target.nextElementSibling;
        cards.forEach(function (el) {
          el.classList.remove("shown");
        });
        card.classList.add("shown");
      });
    });
  } ///adding more text after click 


  function readMore() {
    var section = document.querySelector(".about__inner");

    var hasAttr = _toConsumableArray(section.querySelectorAll("[data-item]"));

    section.addEventListener("click", function (e) {
      if (!e.target.classList.contains("read-more")) return;
      var itemHide = e.target.dataset.item;
      hasAttr.forEach(function (el) {
        e.preventDefault();

        if (el.dataset.item === itemHide) {
          el.classList.contains("points") ? el.style.display = "none" : el.style.display = "inline-block";
        }

        ;
      });
      e.target.style.display = "none";
    });
  } /// button to top


  function toTop() {
    var buttonTop = document.querySelector("#btn-up");

    window.onscroll = function () {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        buttonTop.style.opacity = "1";
      } else {
        buttonTop.style.opacity = "0";
      }
    };

    buttonTop.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".header").scrollIntoView({
        behavior: 'smooth'
      });
    });
  } //modal window


  function modal() {
    var namePages = document.querySelectorAll("[data-page]");
    var modal = document.querySelector(".modal");
    var closeModalButton = document.querySelector(".modal__btn");
    var title = modal.querySelector(".modal__name");
    namePages.forEach(function (name) {
      return name.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.replace("hideModal", "showModal");
        closeModalButton.style.visibility = "visible";
        title.innerHTML = name.dataset.page;
      });
    });
    closeModalButton.addEventListener("click", function () {
      modal.classList.replace("showModal", "hideModal");
      closeModalButton.style.visibility = "hidden";
    });
  } ////smoothScroll on scrollDown button


  function smoothScroll() {
    var scrollDown = document.querySelector(".scroll__btn");
    scrollDown.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
})();