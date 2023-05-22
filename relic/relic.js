var crubmItem = document.querySelector('.bread-crumb-item');
crubmItem.addEventListener('click', function () {
    var content = this.querySelector('span').textContent;
    if (content === '角色') window.location.href = '../character.html';
    else if (content === '光锥') window.location.href = '../equipment.html';
    else if (content === '遗器') window.location.href = '../relic.html';
});
