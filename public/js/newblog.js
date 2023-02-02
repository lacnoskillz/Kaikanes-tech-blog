
//create new blog handler
const newBlogHandler = async (event) => {
    event.preventDefault();
    console.log("wow");
  
    const blogname = document.querySelector('#blogtitle').value.trim();
    const content = document.querySelector('#blogtext').value.trim();
  
    if (blogname && content) {
      const response = await fetch(`/blog`, {
        method: 'POST',
        body: JSON.stringify({ blogname, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  document.getElementById('newblogbtn').addEventListener('click', newBlogHandler);
  