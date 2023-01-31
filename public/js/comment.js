
const commentHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#commentinput').value.trim();
    if (content) {
      const response = await fetch('/api/users/comment', {
        method: 'POST',
        body: JSON.stringify({ content, user_id, blog_id }),
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