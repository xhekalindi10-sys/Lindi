function showMessage() {
    alert("Faleminderit! Mesazhi juaj u dërgua me sukses.");
}

let form = document.getElementById("formcontact");
function contactform(event) {
    event.preventDeafult()
    let emri = document.getElementById("firstName").value;
    let mbiemri = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let koment = document.getElementById("comment").value;
    let alert = document.getElementById("alert");
//Fsheh
    setTimeout(() => {
        alert.style.display = "none";
        form.reset();
    }, 3000);
//Gabim
if (emri == "" || mbiemri == "" || email == "" || koment == ""){
    alert.textContent = "Fill all fields";
    alert.style.display = "blocks";
    alert.classList.add("alert-danger");
    return;
}
//Sukses
alert.textContent = "Hello"+emri + ""+mbiemri + "." +"Your email is" +email + "and the comment is:"+ koment + ".";
alert.style.display = "block";
alert.classList.remove("alert-danger");
alert.classList.add("alert-success");

}