let scrollpos = window.scrollY;
const header = document.querySelector(".header");
const header_height = 15;
const BOT_TOKEN = "5412559587:AAFsI-WLHIzW3x5MJABqUPahT7pKHBfBOxo";
const TELEGRAM_API_URL = "https://api.telegram.org/";
const CHANNEL_CHAT_ID = "-1001752499807";

const add_class_on_scroll = () => header.classList.add("header__fixed");
const remove_class_on_scroll = () => header.classList.remove("header__fixed");

window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});

document.querySelectorAll(".popular__save").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let heart = this.querySelector(".fa-heart");
        if (heart.classList.contains("fa-regular")) {
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
        } else {
            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
        }
    });
});

const burger = document.querySelector(".burger-mnu");

burger.addEventListener("click", () => {
    burger.classList.toggle("burger-mnu--active");
    document.querySelector(".navigation").classList.toggle("navigation--active");
});

const benefitsSlider = new Swiper(".benefits-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
        el: ".benefits-pagination",
    },
});

const teamSlider = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".team-pagination",
    },
});

$(document).ready(function () {
    // Planet Animation
    var hT = $("#avocado-group").offset().top;
    var hH = $("#avocado-group").outerHeight();
    var wH = $(window).height();
    var wS = $(this).scrollTop();
    var pad = 200;
    if (wS >= hT + hH - wH) $("#avocado-group").removeClass("noanimate");

    $(window).scroll(function () {
        wS = $(this).scrollTop();

        // Header
        if (wS > 50) $("#header").addClass("scroll");
        else $("#header").removeClass("scroll");

        // Planet Animation
        if (wS >= hT + hH - wH - pad) $("#avocado-group").removeClass("noanimate");
    });
});

document.querySelectorAll(".callback").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".callback-modal").style.display = "flex";
    });
});

document.querySelector(".callback-modal .close").addEventListener("click", () => {
    document.querySelector(".callback-modal").style.display = "none";
});

const form = $("#applicationForm");

form.submit(async (e) => {
    try {
        e.preventDefault();
        const data = form.serializeArray();
        if (data[0].value.length > 100) {
            return alert("Имя должно быть короче 100 символов");
        }
        if (data[1].value.length > 100) {
            return alert("Слишком длинный номер");
        }
        if (data[2].value.length > 100) {
            return alert("Слишком длинная почта");
        }
        await sendApplication(data);
        alert("Ваша заявка подана. С вами свяжутся в ближайшее время!");
    } catch (err) {
        console.error(err);
        alert("Ошибка при отправке формы. Попробуйте позже");
    }
});

async function sendApplication(data) {
    const applicationMessage = `🎨НОВАЯ ЗАЯВКА!\n\nИмя: ${data[0].value}\n\nНомер: ${data[1].value}\n\nПочта: ${data[2].value}`;
    const res = await fetch(
        `${TELEGRAM_API_URL}bot${BOT_TOKEN}/sendMessage?chat_id=${CHANNEL_CHAT_ID}&text=${encodeURIComponent(
            applicationMessage
        )}.`
    );
    const result = await res.json();
    console.log(result);
}


function get_browser() {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name: 'IE', version: (tem[1] || '')};
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) {
            return {name: 'Opera', version: tem[1]};
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}

const links = document.querySelectorAll('a[href*="#"]');

links.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 100;
    document.querySelector('body').style.overflow = 'initial';
    burger.classList.remove('active');
    header.classList.remove('open');

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}