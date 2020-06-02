// --------------new API key----5801ded7b2334c0eb215ae7bb5a52263------//
let sportsAPI=
     "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5801ded7b2334c0eb215ae7bb5a52263";


//----------------this is sportsAPI---Start---------//
window.fetch(sportsAPI)
.then(sportsData =>{
    sportsData.json()
    .then((sports)=>{  
let sportsInfo=sports.articles;

      output=[];
           for(let sport of sportsInfo){
               output +=`
               <div section="sportsImgandTitleandUrl">
                 <div class="imageBlock">
                  <img src="${sport.urlToImage}"/>
                 </div>
                 <div class="sportstitle">
                   <h4>${sport.title}</h4>
                   <a href="${sport.url}"><b>More Details..</b> </a>
                    </div>
                    <div class="sportDate">
                    <span>publishedAt :${sport.publishedAt}</span>
                  
                    </div>
                 </div>
               </div>
               `;
               document.getElementById("sportsSection").innerHTML=output;
          
           }
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err) =>{
    console.log(err);
})

//----------------this is sportsAPI---end---------//
{/* <div class="card p-3">
               <img src="${sport.urlToImage}" class="img-card-top"/>
               <div class="card body my-2">
                  <h6 class="font-weight-bold-text-success">
                  ${sport.title}
                  </h6>
                      <a href="${sport.url}" target="_blank" class="btn btn-success btn-sm">
                       details</a>        
                     </div>
          </div> */}

// ----------------------
// let firtSportsBlock=sports.articles;
//  let sportsnewsBlockOne=firtSportsBlock[0];
//  document.getElementById("firstSportsTemplate").innerHTML=`
//  <ul> <img src="${sportsnewsBlockOne.urlToImage}"/>
//  <a herf="${sportsnewsBlockOne.url}" target="_block"></a></ul>`;
//          let output=[];
//         for(let sport of sportsInfo)
//         {
//           output +=`
//           <ul class="list-group">
//           <a href="${sport.url}" target="_blank">
//           <li class="text-dark">
//           ${sport.title}</li></a>
//           </ul
//           >
//           `;
//             document.getElementById("sportsSection").innerHTML=output;
          
//         }
 










