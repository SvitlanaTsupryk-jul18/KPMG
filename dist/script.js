(function () {
  burger();
  showCard();
  readMore(); // modal();
  // smoothScrollLinks();
  ///burger-menu

  function burger() {
    let menu = document.querySelector(".menu");
    let openbtn = document.querySelector(".js-burger-open");
    let closebtn = document.querySelector(".js-burger-close");
    openbtn.addEventListener("click", show);
    closebtn.addEventListener("click", hide);

    function show() {
      this.classList.remove("burger--visibility");
      menu.style.display = "flex";
    }

    function hide() {
      openbtn.classList.add("burger--visibility");
      menu.style.display = "none";
    }
  } ///click on stage in hero section for show card


  function showCard() {
    let cards = document.querySelectorAll(".hero__stage-card");
    [...document.querySelectorAll(".hero__stage")].forEach(el => {
      el.addEventListener("click", function (e) {
        let link = e.target;
        let card = link.nextElementSibling;
        cards.forEach(el => {
          el.classList.remove("shown");
        });
        card.classList.add("shown");
        console.log(link, card);
      });
    });
  }

  function readMore() {
    let section = document.querySelector(".about__inner");
    let hasAttr = [...section.querySelectorAll("[data-item]")];
    section.addEventListener("click", function (e) {
      if (!e.target.classList.contains("read-more")) return;
      let itemHide = e.target.dataset.item;
      hasAttr.forEach(el => {
        if (el.dataset.item === itemHide) {
          el.classList.contains("points") ? el.style.display = "none" : el.style.display = "inline-block";
        }

        ;
      });
      e.target.style.display = "none";
    });
  } ////smoothScroll


  function smoothScrollLinks() {
    let nav = document.querySelector(".nav");
    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
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
      document.querySelector(".hero").scrollIntoView({
        behavior: 'smooth'
      });
    });
  } /////Gsap


  function Tween() {
    let tl = new TimelineMax();
    tl.from('#left', 2, {
      x: '-300%',
      ease: Bounce.easeOut
    }, delay = 1).from('#right', 2, {
      x: '300%',
      ease: Bounce.easeOut
    }, "-=2").from('.wellcome__btn', .5, {
      borderRadius: "30px"
    }).from('.logo__h1', 1, {
      y: '-100',
      opacity: 0
    }, "-=0.5").staggerFrom(".nav__list", .5, {
      y: '-50',
      opacity: 0
    }, 0.1, "-=0.25");
  }

  function scrollMagic() {
    // init controller
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.from('#about', 1, {
      y: 500,
      opacity: 0
    });
    var tween1 = TweenMax.from('#contacts', 1, {
      y: 500,
      opacity: 0
    }); // create a scene

    var scene = new ScrollMagic.Scene({
      triggerElement: "#servises",
      offset: 400
    }).setTween(tween).addTo(controller);
    var scene2 = new ScrollMagic.Scene({
      triggerElement: "#clients",
      offset: 300
    }).setTween(tween1).addTo(controller);
  }
})();