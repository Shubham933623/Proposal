const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');

noButton.addEventListener('mouseenter', () => {
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);
    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);
    } else {
        cta.insertBefore(yesButton, noButton);
    }
});

yesButton.addEventListener('click', () => {
    window.open('new_page.html', '_blank'); // Replace 'new_page.html' with the URL of the page you want to open
});
