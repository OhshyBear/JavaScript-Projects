let date = new Date();
let footerPara = document.getElementById('copy');
window.addEventListener('DOMContentLoaded', event => {
  let year = date.getFullYear();
  footerPara.innerHTML = `Copyright &copy; ${year} <a href="#">Mikima Trails Enterprises, LLC</a> All Rights Reserved`;
});

const links = [
  'home.html',
  'rooms.html',
  'register.html',
  'topics.html',
  'annc.html',
];
const btnWords = ['Home', 'Rooms', 'Register', 'Breakouts', 'Announcement'];
const nav = document.getElementById('nav');
for (let i = 0; i < links.length; i++) {
  nav.innerHTML += `<li><a href="${links[i]}">${btnWords[i]}</a></li>`;
}
/* <li><a href="home.html">Home</a></li>
            <li><a href="rooms.html">Conference Center</a></li>
            <li><a href="register.html">Create Banner</a></li>
            <li><a href="annc.html">Announcement</a></li>
            
            <li><a href="topics.html">Create Breakouts</a></li> */
