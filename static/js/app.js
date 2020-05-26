window.onload = loadData;

function loadData() {
    console.log("hello robert");
    let data = new XMLHttpRequest();
    data.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.responseText);
            
            len = res.length;

            for (let i = 0; i < len; i++) {
                let liNode = document.createElement('li');
                let liLink = document.createElement('a');
                let nodeId = "content.html?id=" + res[i].id;

                liNode.setAttribute("class", "toctree-l1");
                liLink.setAttribute("class", "reference internal");
                liLink.setAttribute("href", nodeId);

                liLink.appendChild(document.createTextNode(res[i].topic));
                liNode.appendChild(liLink);
                
                document.getElementById("topic").appendChild(liNode);
                // console.log(i);
            }
            console.log(res);
        }
    };
    data.open("GET", "https://django-sticky.herokuapp.com/notesApi/content/", true);
    data.send();
}