let transform = document.querySelector('.userPhoto');
let reposList = document.querySelector('.reposList');

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
    else if (event.key == 'r' || event.key == 'R' ) {
        const element = document.querySelector("#letterM");
        element.scrollIntoView(true);
    }
});

async function fetchAllRepositories() {

    const allRepos = await fetch(`https://api.github.com/users/YuliiaIIIII/repos`)
    const repos = await allRepos.json();
    repos.forEach(item => {
        function addRepository (){
            let li = document.createElement('li');
            li.innerHTML = `<a href="${item.html_url}">${item.full_name}</a>`;
            li.setAttribute('class','fw600');
            reposList.appendChild(li);
                if(item.description){
                    let p = document.createElement('p');
                    p.innerHTML = `${item.description}`;
                    p.setAttribute('style','margin-bottom: 10px; padding-left: 22px');
                    reposList.appendChild(p);
                }else{
                    let p = document.createElement('p');
                    p.innerHTML = "";
                    reposList.appendChild(p);
                }
            }
        addRepository ();
    })
}
fetchAllRepositories();