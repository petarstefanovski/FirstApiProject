let arrayOfIDs = [];
let counter = 0;
fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => {

        let memes = data.data.memes
        let html = '';

        memes.forEach(value => {

            html += ` <div class="items">

                <h1 class="name">${value.name}</h1>
                <img src="${value.url}" width="200px" height="200px" class="image">
                <br>
                <input type="button" onclick="addToFavorites('${value.id}','${value.name}','${value.url}'), disabled" value="ADD to Favorites" class="favorites-btn" id="favorites-btn">
                
            </div>`

            document.getElementById("div").innerHTML = html;

        })
    })

function addToFavorites(id, name, url) {

    for (let i = 0; i <= arrayOfIDs.length; i++) {
        if (arrayOfIDs[i] === id) {
            alert("You have already liked this MEME.")
            --counter;
            arrayOfIDs.pop();
        }
    }
    arrayOfIDs.push(id)

    paragraph = document.getElementById("paragraph")
    paragraph.innerHTML = "Added to Favorites memes: " + ++counter;

    renderMemes(name, url)
}

function renderMemes(name, url) {

    document.getElementById("heading-1").style.display = "block"

    let html1 = '';

    html1 += `<div class="items">
    <h1 class="name">${name}</h1>
    <img src="${url}" width="200px" height="200px" class="image">
    </div>
    `

    document.getElementById("div1").innerHTML += html1;
}