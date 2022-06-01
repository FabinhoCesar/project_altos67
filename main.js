window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(gallery);
    activateMenuAtCurrentSection(feedback);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2; //Descobrir qual é o meio da tela, linha imaginária
    const sectionTop = section.offsetTop; //offsetTop mostra a posição superior do elemnto
    const sectionHeight = section.offsetHeight; //offsetHeight mostra a altura visivel de um elemento
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop; //Saber o topo do elemento passou pela linha imaginária
    //Verificar se o fundo esta abaixo da linha imaginária
    const sectionEndAt = sectionTop + sectionHeight; //Fim do elemento somasse o top mais a altura visivel
    const sectionEndPassedTargetline = sectionEndAt <= targetLine; //Se o fundo do elemento for menor que a linha imaginária então ele passou por ela.
    //Limites da section
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline; //Para estar dentro do limite o topo tem que ter passado pela linha imaginária e o fundo não. Por isso o exclamação.
    const sectionId = section.getAttribute('id'); //.getAttribute ele vai mostrar o atributo id do elemento section 
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about
#gallery,
#gallery h2,
#gallery .photo,
#feedback,
#feedback h2,
#feedback .feed,
#about,
#contact,
#contact img
`);

// Swiper //

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keybord: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWapperSize: true
        }
    }
});

let time = 2000,
    currentImageIndex = 0,
    images1 = document.querySelectorAll(".transition1 img")
    images2 = document.querySelectorAll(".transition2 img")
    images3 = document.querySelectorAll(".transition3 img")
    images4 = document.querySelectorAll(".transition4 img")
    images5 = document.querySelectorAll(".transition5 img")
    images6 = document.querySelectorAll(".transition6 img")
    max = images1.length;

function nextImage() {
    images1[currentImageIndex].classList.remove("selected");
    images2[currentImageIndex].classList.remove("selected");
    images3[currentImageIndex].classList.remove("selected");
    images4[currentImageIndex].classList.remove("selected");
    images5[currentImageIndex].classList.remove("selected");
    images6[currentImageIndex].classList.remove("selected");

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images1[currentImageIndex].classList.add("selected")
    images2[currentImageIndex].classList.add("selected")
    images3[currentImageIndex].classList.add("selected")
    images4[currentImageIndex].classList.add("selected")
    images5[currentImageIndex].classList.add("selected")
    images6[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start);