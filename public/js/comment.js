// event listener when someone presses submit button for comments
// then POST new comment
const commentHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#commentinput').value.trim();
    const blog_id = document.URL.split('/').at(-1);
    if (content) {
      const response = await fetch('/api/comment', {
    
        method: 'POST',
        body: JSON.stringify({ content, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('comment made');
        document.location.replace('/blog/'+blog_id)
      } else {
        alert('Failed to comment.');
      }
    }
  };



document.getElementById('submitbtn').addEventListener('click', commentHandler);