// // console.log("...APP STARTED...");

// // function callAPI(){
// //     fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=API_KEY")
// //     .then((res)=>{
// //         console.log(res);
// //     })
// // }


// // console.log("APP started");

// // const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
// // function callAPI() {
// //   fetch(url)
// //   .then(response => response.json())
// //     .then(data => {
// //         console.log(data);
// //         document.getElementById("joke").innerHTML = data.value;
// // })
// // }


// console.log("APP started");

// // const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
// // function callAPI() {
// //   fetch(url)
// //   .then(response => response.json())
// //     .then(data => {
// //         console.log(data);
// //         document.getElementById("joke").innerHTML = data.articles[0].description;
// //     })
// // }
// // function renderUI(){
// //     const root = document.getElementById("root");
// //     const div= document.createElement("div");
// //     div.innerText="card";
// //     root.appendChild(div);
// // }
// // // renderUI();
// // callAPI();



// const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
// function callAPI() {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             renderUI(data);
//         })
// }

// function renderUI(data) {
//     const root = document.getElementById("root");

//     // got the article from data
//     articles = data.articles;
//     // const ar = articles[6];
//     // const urlToImage1 = ar.urlToImage
//     // console.log(ar);
//     for (let i = 0; i < articles.length; i++) {
//         const ar = articles[i];
//         // create a parent div
//         const div = document.createElement("div");
//         root.appendChild(div);

//         const h3 = document.createElement("h3");
//         h3.innerText = ar.title;

//         const img = document.createElement("img");
//         img.src = ar.urlToImage;
//         img.width = 200;
//         img.height = 200;
//         div.appendChild(img);

//         // div.innerText = ar.title;
//         div.appendChild(h3);

//     }


console.log(".....APP STARTED.....");

function callAPI() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=bdb25ca009b14655bedefbc1fd482147")
        .then((res) => res.json())
        .then((data) => renderUI(data))
}
function renderUI(data) {
    // const root = document.getElementById("root");
    //got the articles from data
    const articles = data.articles;
    for (let i = 0; i < articles.length; i++) {

        const ar = articles[i];
        const div = document.createElement("div");
        div.setAttribute("class", "news-card");

        const h3 = document.createElement("h3");
        h3.innerText = ar.title;
        div.appendChild(h3);

        const img = document.createElement('img');
        img.src = ar.urlToImage;
        div.appendChild(img);

        root.appendChild(div);

    }
}
    // console.log(articles);
    // console.log(data);

    //single article from the article array

    // console.log(ar);
    // //created parented div

    // root.appendChild(div);
// renderUI();
callAPI(); 