let transform = document.querySelector('.userPhoto');

transform.addEventListener('click',() => {
	transform.classList.toggle('transformPhotoSize');
});

document.addEventListener('keydown', function (event){ 
    if (event.key == 's' || event.key == 'S' ) {
        const element = document.querySelector("#letterS");
        element.scrollIntoView(true);
    }
    else if (event.key == 'h' || event.key == 'H' ) {
        const element = document.querySelector("#letterH");
        element.scrollIntoView(true);
    }
    else if (event.key == 'w' || event.key == 'W' ) {
        const element = document.querySelector("#letterW");
        element.scrollIntoView(true);
    }
    else if (event.key == 'e' || event.key == 'E' ) {
        const element = document.querySelector("#letterE");
        element.scrollIntoView(true);
    }
});