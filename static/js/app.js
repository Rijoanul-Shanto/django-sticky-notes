window.onload = loadData;

function loadData() {
    console.log("hello robert");
    let data = new XMLHttpRequest();
    data.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.responseText);
            for (let contents of res) {
                console.log(contents["topic"]);
            }
        }
    };
    data.open("GET", "https://django-sticky.herokuapp.com/notesApi/content/", true);
    data.send();
}