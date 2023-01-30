
const signupinstead = async (event) => {
    event.preventDefault();
document.location.replace('/signup')

}
document.getElementById('signupinstead').addEventListener('click', signupinstead);



const loginFormHandler = async (event) => {
    event.preventDefault();
    const user_name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  console.log(user_name, password, "uname and pass");
    if (user_name && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('logged in');
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  
  document.getElementById('logbtn').addEventListener('click', loginFormHandler);
  

  