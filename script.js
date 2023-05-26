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
    else if (event.key == 'r' || event.key == 'R' ) {
        const element = document.querySelector("#letterM");
        element.scrollIntoView(true);
    }
});

class GitRepositories {
    constructor(token, userName) {
        this.token = token;
        this.userName = userName;
    }
    async getRepos(){
        const headers = {
            Authorization: `Bearer ${this.token}`
        };
        try{
            const response = await fetch(`https://api.github.com/users/${this.userName}/repos`, { headers });
            const data = await response.json();
            return data;
        }catch (error) {
            console.error('Error fetching repositories:', error);
            return;
        }

    }
}

//значення токена
let token1 = 'ghp_'
let token2 = 'U0UuYI5V4jOyRNnMosi0CkzkDpsPcb4dGYvE'

document.addEventListener('DOMContentLoaded', async function () {
    const apiRequest = new GitRepositories( token1+token2 ,'YuliiaIIIII');
    const repos = await apiRequest.getRepos();

    let reposList = document.querySelector('.reposList');
    repos.forEach(item => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = item.html_url;
        a.textContent = item.full_name;
        li.appendChild(a);
        li.setAttribute('class', 'fw600');
        reposList.appendChild(li);
            if(item.description){
                let p = document.createElement('p');
                p.textContent  = `${item.description}`;
                p.setAttribute('style','margin-bottom: 10px; padding-left: 22px');
                reposList.appendChild(p);
            }else{
                let p = document.createElement('p');
                p.textContent = '';
                reposList.appendChild(p);
            }
    })
})