const logout = document.getElementById('log-out');
const frstBtn = document.getElementById('frstbtn')

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    location.replace('../HTML/login.html')
  });
   

  





  frstBtn.addEventListener('click', () => {window.location.replace('browse.html')})