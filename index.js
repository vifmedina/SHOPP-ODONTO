function resetSelect() {
    document.getElementById("meuSelect").value = "principal";
}

function redirecionar() {
    var url = document.getElementById("meuSelect").value;
    if (url) {
        window.location.href = url;
    }
}