var menuNames = document.querySelectorAll('.menu-fold-item-l1-name');

menuNames.forEach(function (menuName) {
    menuName.addEventListener('click', function () {
        var content = this.querySelector('.menu-fold-item-l1-name-content').textContent;
        if (content === '首页') window.location.href = 'index.html';
        else if (content === '角色') window.location.href = 'character.html';
        else if (content === '光锥') window.location.href = 'equipment.html';
        else if (content === '遗器') window.location.href = 'relic.html';
        console.log(1);
    })
})
