$(document).ready(function () {
  $('#buy').on('click', function () {
    alert('А деньги у теьбя есть?');
  });
});

$(document).ready(function () {
  $('#wrapper').vide({
    mp4: '../images/bckvideo/video1.mp4',
    webm: '/app/images/bckvideo/video3.webm',
    ogv: '/app/images/bckvideo/video2.ogv',
    poster: '/dist/images/backgrounds/cover.png'

  });
});


$(document).ready(function () {
  $('#watch').on('click', function () {
    window.location.href = $('a').attr(href = 'https: //www.youtube.com/watch?v=fb1BF9B1MGQ');
  });
});