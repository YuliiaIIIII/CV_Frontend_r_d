let transform = document.querySelector('.userPhoto');


function scaleFn(){
    transform.classList.add('transformPhotoSize');
    document.querySelector('.userPhoto').innerHTML = ("<img onclick='cancelScale()' src='self-photo.jpg' alt='Profile photo Y.Malykhina'>");
}
function cancelScale(){
    transform.classList.remove('transformPhotoSize');
}



// transform.addEventListener('click',(event) => {

// });