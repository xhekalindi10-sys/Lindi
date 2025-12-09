document.getElementById("viti").textContent = new Date().getFullYear(); 

let infosAll =[
    {
        title: "Mos ëndërro për udhëtimet... Udhëto!",
        desc: "Titulli i Home Page",
        image: "Images/2.jpg",
    },
    {
        title: "Agjensi turistike Lindi",
        desc: "Titulli i About Page",
        image: "Images/1.png",

        title: "Vleresimi",
        desc: "Titulli i Rating Page",
        image: "Images/4.jpg",

    }

];
let afisho ="";
for(let i=0;i<infosAll.length; i++){
    console.log(infosAll[i].title);
    afisho=afisho+
    -

<div class="col-12 col-md-6">
    <div class="card" style="width: 18rem;">
        <img src="${infosAll[i].image}" class="card-img-top" alt="${infosAll[i].title}">
        <div class="card-body">
            <h5 class="card-title">${infosAll[i].title}</h5>
            <p class="card-text">${infosAll[i].desc}</p>
        </div>
        </img>
    </div>
</div>

document.getElementById("infos").innerHTML = afisho;

}






