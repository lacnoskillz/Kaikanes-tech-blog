const newBlogHandler = async (event) => {
    event.preventDefault();
  
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
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document.getElementById('newblogbtn').addEventListener('click', newBlogHandler);
  