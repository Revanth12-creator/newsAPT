
let  heathAPI=
"http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5801ded7b2334c0eb215ae7bb5a52263";


window.fetch(heathAPI)
.then(heathData =>{
    heathData.json()
    .then((heath)=>{  
let heathInfo=heath.articles;

      output=[];
           for(let heal of heathInfo){
               output +=`
               <div section="heathImgandTitleandUrl">
                 <div class="imageBlock">
                  <img src="${heal.urlToImage}"/>
                 </div>
                 <div class="heathtitle">
                   <h4>${heal.title}</h4>
                   <a href="${heal.url}"><b>More Details..</b> </a>
                    </div>
                    <div class="heathDate">
                    <span>publishedAt :${heal.publishedAt}</span>
                  
                    </div>
                 </div>
               </div>
               `;
               document.getElementById("healthSection").innerHTML=output;
          
           }
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err) =>{
    console.log(err);
})
