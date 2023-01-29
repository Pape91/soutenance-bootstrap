
let carte1 = document.getElementById('carte1');
let carte2 = document.getElementById('carte2');

// Je crée une fonction générale avec les éléments que j'affiiche dans le modal

function remplirModal(numArt){
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article='+numArt)
    .then(res => {

        if(res.ok){
            res.json().then(data => {
            let img = document.getElementById('img');
            let date = document.getElementById('date');
            let titre = document.getElementById('titre');
            let auteur = document.getElementById('auteur');
            let resume = document.getElementById('resume');

            img.src = data.picture
            titre.innerHTML = data.title
            date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
            auteur.innerHTML =`${data.author.name} ${data.author.surname} ${data.author.position}`
            resume.innerHTML = `${data.content[0]} ${data.content[1]} ${data.content[2]}`
        })
        
    }
    else{
        console.log("erreur");
    }
})
}
// J'affiiche mes articles sur la partie "dernière news" 

function afficherArt (numArt){
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article='+numArt)

    .then(res => {
        if(res.ok){
            res.json().then(data => {
    
                let date = document.getElementById('date'+numArt);
                let carte1 = document.getElementById('carte'+numArt);

                date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
                carte1.innerHTML = data.content[0];
    

            })
    }
})
};

afficherArt(1);
afficherArt(2);

// j'appelle mes foctions click pour afficher les éléments du modal quand je clique

article1.addEventListener("click", function(){
    remplirModal(1);
});
article2.addEventListener("click", function(){
    remplirModal(2);
});
article3.addEventListener("click", function(){
    remplirModal(3);
});
