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

/////////////

async function fetchAllRepositories() {

    const allRepos = await fetch(`https://api.github.com/users/YuliiaIIIII/repos?_limit=1`)
    const repos = await allRepos.json();
    console.log(repos)
    repos.forEach(item => {
        function addRepository (){
            let li = document.createElement('li');
            li.innerHTML = `${item.full_name}, ${item.html_url}`;
                if(item.description !== false){
                    let li2 = document.createElement('li');
                    li2.innerHTML = `${item.description}`;
                    reposList.appendChild(li2);
                    console.log(111);
                }else{
                    let li2 = document.createElement('li');
                    li2.innerHTML = "";
                    reposList.appendChild(li2);
                }
            
            reposList.appendChild(li);
            
        }
        addRepository ();
    console.log(item.full_name)
    })
}
fetchAllRepositories()