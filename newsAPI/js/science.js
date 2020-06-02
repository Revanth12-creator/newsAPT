
let secinceAPI=
"http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=5801ded7b2334c0eb215ae7bb5a52263";

window.fetch(secinceAPI)
.then(secinceData =>{
    secinceData.json()
    .then((secince)=>{  
let secinceInfo=secince.articles;

      output=[];
           for(let sciens of secinceInfo){
               output +=`
               <div section="secinceImgandTitleandUrl">
                 <div class="imageBlock">
                  <img src="${sciens.urlToImage}"/>
                 </div>
                 <div class="secincetitle">
                   <h4>${sciens.title}</h4>
                   <a href="${sciens.url}"><b>More Details..</b> </a>
                    </div>
                    <div class="secinceDate">
                    <span>publishedAt :${sciens.publishedAt}</span>
                  
                    </div>
                 </div>
               </div>
               `;
               document.getElementById("scienceSection").innerHTML=output;
          
           }
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err) =>{
    console.log(err);
})

