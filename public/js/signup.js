const logininstead = async (event) => {
    event.preventDefault();
document.location.replace('/login')
console.log("working");

}
document.getElementById('logininstead').addEventListener('click', logininstead);

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (user_name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };



document.getElementById('signupbtn').addEventListener('click', signupFormHandler);