var keys = document.querySelectorAll('.ascension-key');
var info = document.querySelector('.ascension-info');
var firstDiv = info.querySelector('div');

keys.forEach(function (key, index) {
    key.addEventListener('click', function () {
        if (index === 0) firstDiv.style.transform = 'translate3d(0px,0px,0px)';
        else if (index === 1) firstDiv.style.transform = 'translate3d(-1188px,0px,0px)';
        else if (index === 2) firstDiv.style.transform = 'translate3d(-2376px,0px,0px)';
        else if (index === 3) firstDiv.style.transform = 'translate3d(-3564px,0px,0px)';
        else if (index === 4) firstDiv.style.transform = 'translate3d(-4752px,0px,0px)';
        else if (index === 5) firstDiv.style.transform = 'translate3d(-5940px,0px,0px)';
        else if (index === 6) firstDiv.style.transform = 'translate3d(-7128px,0px,0px)';
        else if (index === 7) firstDiv.style.transform = 'translate3d(-8316px,0px,0px)';
        var clickedIndex = index;
        var btn = this.querySelector('.btn');
        var btntext = this.querySelector('.btn-text');
        keys.forEach(function (key, index) {
            if (index !== clickedIndex) {
                var otherBtn = key.querySelector('.btn');
                var otherBtntext = key.querySelector('.btn-text');
                otherBtn.classList.remove('active');
                otherBtntext.classList.remove('active');
            }
        });
        btn.classList.add('active');
        btntext.classList.add('active');
    });
});

var crubmItem = document.querySelector('.bread-crumb-item');
crubmItem.addEventListener('click', function () {
    var content = this.querySelector('span').textContent;
    if (content === '角色') window.location.href = '../character.html';
    else if (content === '光锥') window.location.href = '../equipment.html';
    else if (content === '遗器') window.location.href = '../relic.html';
});
