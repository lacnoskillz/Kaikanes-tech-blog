
const commentHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#commentinput').value.trim();
    const blog_id = 1;
    if (content) {
      const response = await fetch('/api/comment', {
    
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('comment made');
        document.location.reload
      } else {
        alert('Failed to comment.');
      }
    }
  };



document.getElementById('submitbtn').addEventListener('click', commentHandler);