window.addEventListener("load", (event) => {
    let container = (document.querySelector("#container"));


    const url = './getTitels.php'
    const http = new XMLHttpRequest()

    http.open("GET", url)
    http.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var resultado = JSON.parse(this.responseText)
            console.log(resultado);
            showFolder(resultado, "");
        }
    }
    http.send()

});


function showFolder(folderObject, className) {
    let list;
    if (className == "") {
        list = document.querySelector(".container")
    } else {
        list = document.querySelector("." + className) || document.querySelector(".container");
    }
    for (let element in folderObject) {
        let elementArray = folderObject[element];

        let li = document.createElement("li")
        list.append(li)
        let text = element
        li.innerText = text

        for (let i = 0; i < elementArray.length; i++) {

            let ul = document.createElement("ul")
            ul.className = className + "_" + element
            list.append(ul)

            if (typeof elementArray[i] == "object") {

                showFolder(elementArray[i], className + "_" + element);
            } else {

                let li = document.createElement("li")
                ul.append(li)

                let text = elementArray[i]

                let a = document.createElement("a")
                a.href = "./player.html?video=" + ul.className + "_" + text;
                a.innerText = text;
                li.append(a);
            }
        }
    }
}




// for(let element in folderObject){
//     let elementArray = folderObject[element];
//     for (let i =0 ;i<elementArray.length;i++){
//         if ( typeof elementArray[i] == "object"){

//             let li = document.createElement("li")
//             list.append(li)

//             let text =element.split("/")[element.split("/").length-2]
//             li.innerText=text

//             let ul = document.createElement("ul")
//             let className=element.replaceAll("/","_")
//             ul.className = className
//             list.append(ul) 


//             showFolder(elementArray[i],className);
//         }else{
//             console.log(elementArray[i]);


//             let li = document.createElement("li")
//             list.append(li)

//             let text =elementArray[i]
//             li.innerText=text
//         }
//     }
// }