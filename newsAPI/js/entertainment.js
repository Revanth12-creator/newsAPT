
let entertainmentAPI=
"http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5801ded7b2334c0eb215ae7bb5a52263";

window.fetch(entertainmentAPI)
.then(entertainmentData =>{
    entertainmentData.json()
    .then(( entertainment)=>{  
let entertainmentInfo=entertainment.articles;
      output=[];
           for(let entertain of entertainmentInfo ){
               output +=`
               <div section="entertainmentImgandTitleandUrl">
                 <div class="imageBlock">
                  <img src="${entertain.urlToImage}"/>
                 </div>
                 <div class="entertainmenttitle">
                   <h4>${entertain.title}</h4>
                   <a href="${entertain.url}"><b>More Details..</b> </a>
                    </div>
                    <div class="entertainmentDate">
                    <span>publishedAt :${entertain.publishedAt}</span>
                  
                    </div>
                 </div>
               </div>
               `;
               document.getElementById("entertainSection").innerHTML=output;
          
           }
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err) =>{
    console.log(err);
})
