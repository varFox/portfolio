const arrow = '<svg height="40px" id="Layer_1" style="" version="1.1" viewBox="0 0 128 128" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><line style="fill:none;stroke:#ff5300;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="40.5" x2="87.5" y1="17" y2="64"/><line style="fill:none;stroke:#ff5300;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="87.5" x2="40.5" y1="64" y2="111"/></g></svg>';
const works = document.querySelectorAll('.card-work');


document.querySelectorAll('.arrow').forEach(item => {
  item.innerHTML = arrow;
});

let i = 1;
works.forEach(item => {
  let imgWork = 'url("img/work' + i +'.jpg") no-repeat top';
  item.addEventListener('mouseover', function(e) {
    console.log(item);
    item.style.background = imgWork;
    item.style.backgroundSize = 'cover';
    item.style.animation = 'bgcard 15s infinite linear';
  });
  item.addEventListener('mouseout', function(e) {
    item.style.background = 'rgba(0, 0, 0, 0)';
  })
  
  console.log(imgWork);
  i++;
})
