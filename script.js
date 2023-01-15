console.log("Welcome to the Digital Clock");
function time() {
    const hour = document.getElementById("hr");
    const minute = document.getElementById("min");
    const second = document.getElementById("sec");
    let dateGet = new Date();
    hour.innerText = dateGet.getHours();
    minute.innerText = dateGet.getMinutes();
    second.innerText = dateGet.getSeconds(); 
}
setInterval(time, 10);

