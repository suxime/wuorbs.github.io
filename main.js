const element = document.getElementById('relic-card');
element.addEventListener('mouseenter', function () {
    element.style.animation = 'aggregateCardHover 1s linear infinite, cardScale 1s linear infinite';
});
element.addEventListener('mouseleave', function () {
    element.style.animation = '';
});