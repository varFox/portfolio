const works = document.querySelectorAll('.card-work');

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
    item.style.animation = 'none';
  })
  
  console.log(imgWork);
  i++;
})

document.querySelector('.humburger').addEventListener('click', () => {
  if (document.querySelector('.open-sidebar')) {
    document.querySelector('.toggle').classList.remove('open-sidebar');
    document.querySelector('.sidebar').classList.remove('open-sidebar');
    document.querySelector('.humburger').classList.remove('active');
  } else {
    document.querySelector('.toggle').classList.add('open-sidebar');
    document.querySelector('.sidebar').classList.add('open-sidebar');
    document.querySelector('.humburger').classList.add('active');
  }
  
});