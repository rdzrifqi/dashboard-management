const token = localStorage.getItem("token");
const name = localStorage.getItem("name");

if (!token) {
    // not logged in, redirect to login page
    // window.location.href = "/index.html";
}