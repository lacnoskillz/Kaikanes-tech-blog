const logininstead = async (event) => {
    event.preventDefault();
document.location.replace('/login')
console.log("working");

}
document.getElementById('logininstead').addEventListener('click', logininstead);