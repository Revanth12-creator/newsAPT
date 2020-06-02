let technologyAPI=
    "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5801ded7b2334c0eb215ae7bb5a52263";


    window.fetch(technologyAPI)
    .then(technologyData =>{
        technologyData.json()
        .then((technology)=>{  
    let technologyInfo=technology.articles;
    
          output=[];
               for(let techno of technologyInfo){
                   output +=`
                   <div section="technologyImgandTitleandUrl">
                     <div class="imageBlock">
                      <img src="${techno.urlToImage}"/>
                     </div>
                     <div class="technologytitle">
                       <h4>${techno.title}</h4>
                       <a href="${techno.url}"><b>More Details..</b> </a>
                        </div>
                        <div class="technologyDate">
                        <span>publishedAt :${techno.publishedAt}</span>
                      
                        </div>
                     </div>
                   </div>
                   `;
                   document.getElementById("technologySection").innerHTML=output;
              
               }
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err) =>{
        console.log(err);
    })
    