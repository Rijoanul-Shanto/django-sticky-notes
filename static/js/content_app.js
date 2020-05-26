window.onload = loadData;

// const id = urlParams.get("id");
const url = new URL(window.location.href);
id = url.searchParams.get("id");

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

                if (res[i].id == id) {
                    contentLen = res[i].contents.length;

                    liNode.setAttribute("class", "toctree-l1 current");
                    liLink.setAttribute("class", "current reference internal");
                    liLink.setAttribute("href", "#");

                    let ul = document.createElement('ul');

                    for (let j = 0; j < contentLen; j++) {
                        let liChildNode = document.createElement('li');
                        let liChildLink = document.createElement('a');

                        liChildNode.setAttribute("class", "toctree-l2");
                        liChildLink.setAttribute("class", "reference internal");
                        liChildLink.setAttribute("href", "content.html#");

                        liChildLink.appendChild(document.createTextNode(res[i].contents[j].subTopic));

                        liChildNode.appendChild(liChildLink);

                        ul.appendChild(liChildNode);
                    }
                    liNode.appendChild(ul);
                }

                document.getElementById("topic").appendChild(liNode);
            }
            // console.log(res[0].contents.length);
        }
    };
    data.open("GET", "https://django-sticky.herokuapp.com/notesApi/content/", true);
    data.send();
}