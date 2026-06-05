'use strict'
const switcher = document.querySelector(".btn");
switcher.addEventListener('click', function(){
                document.body.classList.toggle('dark-theme')
                var className = document.body.className;
                if (className == 'light-theme'){
                                this.textContent = 'Escuro';
                }else{
                                this.textContent = "Claro";
                }
                console.log('Nome da classe atual: .' + className)
                
});

switcher.addEventListener('click', function() {
});

function getProjects(){
                const urlGithub = 'https://api.github.com/users/mariaeliizabete'
                var loadingElement = document.getElementById('loading')
                fetch(urlGithub, {
                                method: 'GET'
                })
                                .then((response) => response.json())
                                .then((response) => {
                                                loadingElement.style.display = 'none'
                                                showProjects(response)
                                })
                                .catch((e) => {
                                                console.log(e)
                                }
                )
                                
}

function showProjects(data){
                var listElement = document.getElementById("my-projects-list")
                for(let i = 0; i < data.lenght; i++){
                                let a = document.createElement('a')
                                a.href = data[i]['clone_url']
                                a.target = '_blank'
                                a.title = data[i]['description']
                                let linkText = document.createTextNode(data[i]['none'])
                                a.appendChild(linkText)
                                listElement.appendChild(a)
                }
}
getProjects ()