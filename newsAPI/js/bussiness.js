
let  businessAPI=
"http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5801ded7b2334c0eb215ae7bb5a52263";

window.fetch(businessAPI)
.then(bussinessData =>{
    bussinessData.json()
    .then((business)=>{  
let bussinessInfo=business.articles;

      output=[];
           for(let bussinessnew of bussinessInfo ){
               output +=`
               <div section="businessImgandTitleandUrl">
                 <div class="imageBlock">
                  <img src="${bussinessnew.urlToImage}"/>
                 </div>
                 <div class="bunessstitle">
                   <h4>${bussinessnew.title}</h4>
                   <a href="${bussinessnew.url}"><b>More Details..</b> </a>
                    </div>
                    <div class="businesstDate">
                    <span>publishedAt :${bussinessnew.publishedAt}</span>
                  
                    </div>
                 </div>
               </div>
               `;
               document.getElementById("bussinessSection").innerHTML=output;
          
           }
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err) =>{
    console.log(err);
})
