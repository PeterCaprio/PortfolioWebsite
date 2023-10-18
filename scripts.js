document.addEventListener("DOMContentLoaded", function() {
    showTab('coding'); // Default tab to show

    // Initialize Swiper carousel
    var mySwiper = new Swiper('.swiper-container', {
        lazy: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

function showTab(tabId) {
    var contents = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');

    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function hoverButton(button) {
    button.style.backgroundColor = "#ccc";
}

function unhoverButton(button) {
    if (!button.classList.contains('active')) {
        button.style.backgroundColor = "";
    }
}
