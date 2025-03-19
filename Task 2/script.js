
function sortString() {
    let str = document.getElementById("stringInput").value;
    if (str === "") {
        document.getElementById("sortedResult").innerText = "Please enter a string";
        return;
    }
    let sortedStr = str.split('').sort().join('');
    document.getElementById("sortedResult").innerText = "Sorted String: " + sortedStr;
}
