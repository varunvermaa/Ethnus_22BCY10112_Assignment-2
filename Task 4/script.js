function showDate() {
    let today = new Date();
    let date = today.getDate() + "/" + 
               today.toLocaleString('default', { month: 'long' }) + "/" + 
               today.getFullYear();
    
    document.getElementById("dateOutput").innerText = date;
}

function showTime() {
    let time = new Date().toString();
    document.getElementById("timeOutput").innerText = time;
}
