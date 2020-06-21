function generateCat() {
    // first get access to "flex-box-container-2"
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://wallpaperplay.com/walls/full/6/a/6/163540.jpg";
    // change height and width of an image in js
    image.style.width="30%";
    image.style.height="auto";
    // appending img element to this container everytime someone clicks on the button(this function is called)
    div.appendChild(image);
}

