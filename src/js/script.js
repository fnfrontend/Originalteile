
// Logo Slider
var swiper = new Swiper(".logo-slider", {
    slidesPerView: 8,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        100: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        500: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        990: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 20,
        }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Search form
document.getElementById('toggleHeaderWerkstet').addEventListener('click', function () {
    this.classList.toggle('opened');
    toggle(document.querySelectorAll('.targetWerkstet'));
});

document.getElementById('toggleHeaderKfz').addEventListener('click', function () {
    this.classList.toggle('opened');
    toggle(document.querySelectorAll('.targetKfz'));
});

// Search form
document.getElementById('toggleHeaderWerkstet1').addEventListener('click', function () {
    this.classList.toggle('opened');
    toggle(document.querySelectorAll('.targetWerkstet'));
});

document.getElementById('toggleHeaderKfz1').addEventListener('click', function () {
    this.classList.toggle('opened');
    toggle(document.querySelectorAll('.targetKfz'));
});


document.getElementById('clearFilters').addEventListener('click', function () {
    var that = this;
    

    if (document.getElementById("searchKfz").checked && document.getElementById("searchWerkstatt").checked) {
        document.getElementById("searchKfz").click();
        document.getElementById("searchWerkstatt").click();

        that.classList.remove('filters-opened');
    }
    else if (!document.getElementById("searchKfz").checked && !document.getElementById("searchWerkstatt").checked) {
        document.getElementById("searchKfz").click();
        document.getElementById("searchWerkstatt").click();

        that.classList.add('filters-opened');
    } else {

        if (document.getElementById("searchKfz").checked){
            document.getElementById("searchKfz").click();
        }

        if (document.getElementById("searchWerkstatt").checked){
            document.getElementById("searchWerkstatt").click();
        }

        that.classList.toggle('filters-opened');
    }

    
});

document.getElementById('clearFilters1').addEventListener('click', function () {

    if (document.getElementById("searchKfz1").checked && document.getElementById("searchWerkstatt1").checked) {
        document.getElementById("searchKfz1").click();
        document.getElementById("searchWerkstatt1").click();

        this.classList.remove('filters-opened');
    }
    else if (!document.getElementById("searchKfz1").checked && !document.getElementById("searchWerkstatt1").checked) {
        document.getElementById("searchKfz1").click();
        document.getElementById("searchWerkstatt1").click();

        this.classList.add('filters-opened');
    } else {
        
        if (document.getElementById("searchKfz1").checked){
            this.classList.toggle('filters-opened');
            document.getElementById("searchKfz1").click();
        }

        if (document.getElementById("searchWerkstatt1").checked){
            this.classList.toggle('filters-opened');
            document.getElementById("searchWerkstatt1").click();
        }
    }

});

function toggle (elements, specifiedDisplay) {
    var element, index;

    elements = elements.length ? elements : [elements];
    for (index = 0; index < elements.length; index++) {
        element = elements[index];

        if (isElementHidden(element)) {
            element.style.display = '';

            // If the element is still hidden after removing the inline display
            if (isElementHidden(element)) {
                element.style.display = specifiedDisplay || 'block';
            }
        }
        else {
            element.style.display = 'none';
        }
    }

    function isElementHidden (element) {
        return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
    }
}

var myDrop = new drop({
    selector:  '#multiselect',
    preselected: [0]
});

var myDrop = new drop({
    selector:  '#multiselect1',
    preselected: [0]
});


/* Menu */
document.getElementById('toggleMenu').onclick=function(){
    this.classList.toggle('opened');
    var body = document.getElementsByTagName('body');
    body[0].classList.remove('mobile-search-opened');
    var x = document.getElementById("navbar");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        document.getElementById("searchMenu").style.display = "flex";
    } else if(x.style.display = "block"){
        x.style.display = "none";
        document.getElementById("searchMenu").style.display = "none";
    }
};

window.addEventListener('resize', function(event) {
    var x = document.getElementById("navbar");
    if(window.innerWidth >= 768){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
        document.getElementById('toggleMenu').classList.remove('opened');
    }
}, true);


/* Search Menu Mobile */
document.getElementById('searchBtn').onclick=function(){
    var body = document.getElementsByTagName('body');
    body[0].classList.toggle('mobile-search-opened');
};

document.getElementById('searchMenu').onclick=function(){
    var body = document.getElementsByTagName('body');
    body[0].classList.toggle('mobile-search-opened');
    document.getElementById('toggleMenu').classList.remove('opened');
    document.getElementById("navbar").style.display = "none";
    document.getElementById("searchMenu").style.display = "none";
};

document.getElementById('hideSearch').onclick=function(){
    var body = document.getElementsByTagName('body');
    body[0].classList.toggle('mobile-search-opened');
};


/* Accordian */
var accoridan = document.getElementsByClassName('accordion-heading');
if (accoridan.length > 0) {

    const headings = document.querySelectorAll(".accordion-heading");
    const triggers = [];
    const accordionContents = document.querySelectorAll(".accordion-copy");
    const copyOpenClass = "accordion-copy--open";

    headings.forEach((h, i) => {
        let btn = h.querySelector("button");
        triggers.push(btn);
        let target = h.nextElementSibling;
        btn.onclick = () => {
        let expanded = btn.getAttribute("aria-expanded") === "true";
        if (expanded) {
            closeItem(target, btn);
        } else {
            openItem(target, btn);
        }
        };
    });

    function closeAllExpandedItems() {
        const expandedTriggers = triggers.filter(
            (t) => t.getAttribute("aria-expanded") === "true"
        );
        const expandedCopy = Array.from(accordionContents).filter((c) =>
        c.classList.value.includes(copyOpenClass)
        );
        expandedTriggers.forEach((trigger) => {
            trigger.setAttribute("aria-expanded", false);
        });
        expandedCopy.forEach((copy) => {
            copy.classList.remove(copyOpenClass);
            copy.style.maxHeight = 0;
        });
    }

    function closeItem(target, btn) {
        btn.setAttribute("aria-expanded", false);
        target.classList.remove(copyOpenClass);
        target.style.maxHeight = 0;
    }

    function openItem(target, btn) {
        closeAllExpandedItems();
        btn.setAttribute("aria-expanded", true);
        target.classList.add(copyOpenClass);
        target.style.maxHeight = target.scrollHeight + "px";
    }

    setTimeout(() => triggers[0].click(), 750);

}
/* Accordian End */



/* Tabs */
var tab = document.getElementById('tabs');
if (tab !== null) {
    let tabsContainer = document.querySelector("#tabs");
    let tabTogglers = tabsContainer.querySelectorAll("a");

    tabTogglers.forEach(function(toggler) {
        toggler.addEventListener("click", function(e) {
            e.preventDefault();

            let tabName = this.getAttribute("href");

            let tabContents = document.querySelector("#tab-contents");

            for (let i = 0; i < tabContents.children.length; i++) {

                tabTogglers[i].parentElement.classList.remove("opacity-100", "text-primary", "active");
                tabContents.children[i].classList.remove("hidden");
                if ("#" + tabContents.children[i].id === tabName) {
                    continue;
                }
                tabContents.children[i].classList.add("hidden");

            }
            e.target.parentElement.classList.add("opacity-100", "text-primary", "active");
        });
    });

    document.getElementById("default-tab").click();
}

/* Tabs End */


function WerkstattToggle(event, id) {
    var x = document.getElementById(id);
    var y = document.getElementById("partnerRadius");
    var z = document.getElementById("specializeOn");

    if(id == 'WerkstetOption'){
        document.getElementById('clearFilters').classList.add('filters-opened');
    }
    else {
        document.getElementById('clearFilters1').classList.add('filters-opened');
    }

    if (event.srcElement.checked) {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }  
}

function KfzToggle(event, id) {
    var x = document.getElementById(id);
    var y = document.getElementById("partnerRadius");
    var z = document.getElementById("specializeOn");

    if(id == 'KfzOption'){
        document.getElementById('clearFilters').classList.add('filters-opened');
    }
    else {
        document.getElementById('clearFilters1').classList.add('filters-opened');
    }

    if (event.srcElement.checked) {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }    
}



/* News Slider */
let newsSlider = () => {

    window.setInterval(autoSlide, 5000);
  
    //creating method to move Next
  
    function autoSlide() {
        //Find the current slide
        let $currentSlide = document.querySelector('.news-items .active');

        // Find the previous slide
        let $nextSlide = $currentSlide.nextElementSibling;

        if ($nextSlide !== null) {
            $currentSlide.classList.remove('active');
            $nextSlide.classList.add('active');
        }
  
        // Determines if the active slide is the last, 
        // when clicking prev it finds the first slide
        if ($currentSlide === document.querySelector(".news-items li.active:last-child")) {
            let $firstSlide = document.querySelector(".news-items li:first-child");
            $currentSlide.classList.remove('active');
            $firstSlide.classList.add('active');
        }
    }; //end of autoSlide

};
  
document.addEventListener('DOMContentLoaded', function () {
    newsSlider();
});