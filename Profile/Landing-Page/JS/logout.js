const logout = document.getElementById('log-out');


logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    location.replace('../HTML/login.html')
  });
   

  





 