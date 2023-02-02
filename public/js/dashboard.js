

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
    
  };
  const upblog = async (event) => {
    console.log("here")
    if (event.target.hasAttribute('data-id2')) {
      const id = event.target.getAttribute('data-id2');
      const content = document.querySelector('#bloginput').value.trim();
  console.log(content);
      const response = await fetch(`/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };
document.getElementById('upblog').addEventListener('click', upblog);
document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
