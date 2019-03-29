(function () {

    burger();
    showCard();
    readMore();
    toTop();
    smoothScroll();

    ///burger-menu

    function burger() {

        let menu = document.querySelector(".menu");
        let openbtn = document.querySelector(".js-burger-open");
        let closebtn = document.querySelector(".js-burger-close");

        openbtn.addEventListener("click", show);
        closebtn.addEventListener("click", hide);

        function show() {
            this.classList.remove("burger--visibility");
            menu.style.transform = ("translate(0)");
        }

        function hide() {
            openbtn.classList.add("burger--visibility");
            menu.style.transform = ("translate(-300%)");
        }
    }


    ///click on stage in hero section for show card

    function showCard() {

        let cards = document.querySelectorAll(".hero__stage-card");

        [...document.querySelectorAll(".hero__stage")].forEach(el => {
            el.addEventListener("click", function (e) {
                let card = e.target.nextElementSibling;
                cards.forEach((el) => {
                    el.classList.remove("shown");
                })
                card.classList.add("shown");
            });
        });

    }

    ///adding more text after click 

    function readMore() {

        let section = document.querySelector(".about__inner");
        let hasAttr = [...section.querySelectorAll("[data-item]")];

        section.addEventListener("click", function (e) {
            if (!e.target.classList.contains("read-more")) return;
            let itemHide = e.target.dataset.item;
            hasAttr.forEach((el) => {
                if (el.dataset.item === itemHide) {
                    el.classList.contains("points") ? el.style.display = "none" : el.style.display = "inline-block";
                };
            })
            e.target.style.display = "none";
        });
    }

    /// button to top

    function toTop() {
        var buttonTop = document.querySelector("#btn-up");
        window.onscroll = function () {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                buttonTop.style.opacity = "1";
            } else {
                buttonTop.style.opacity = "0";
            }
        }

        buttonTop.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(".header").scrollIntoView({
                behavior: 'smooth'
            });
        })
    }

    ////smoothScroll on scrollDown button

    function smoothScroll() {
        let scrollDown = document.querySelector(".scroll__btn");
        scrollDown.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });

    }

})();