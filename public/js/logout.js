//log out handler
const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  //newblogbtn listenr that just redirects to newblog page
  function newblogpage(){
    document.location.replace('/dashboard/newblog')
  }
  document.getElementById('logout').addEventListener('click', logout);

  document.getElementById('newblogpagebtn').addEventListener('click', newblogpage);