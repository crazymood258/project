// โหลด navbar จากไฟล์ function/navbar.html
document.addEventListener('DOMContentLoaded', () => {
  fetch('function/navbar.php')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
      initNavbar(); // เรียกหลังแทรก HTML แล้ว
    });
});

function initNavbar() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const loginBtn = document.querySelector('.login-btn');

  toggle.addEventListener('click', () => {
    links.classList.toggle('show');
    loginBtn.classList.toggle('show');
  });
}

function bookNow() {
  alert("ขอบคุณที่สนใจจองห้องพักกับเรา!");
}

function login() {
  alert("ฟังก์ชันล็อกอินอยู่ระหว่างพัฒนา...");
}
