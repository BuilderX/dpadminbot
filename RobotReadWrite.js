
const fs = require('fs');
let userPoints = points[message.author.id] ? points[message.author.id].points : 0;
 
function readJsonFile(path){
  let points = JSON.parase(fs.readFileSync(path,"utf8"));

}

function writeToJsonFile(path, client){
     let points = JSON.parase(fs.readFileSync(path,"utf8"));
     client.on("message",function(){
          if(message.author.bot) return;
          if(message.length > 0 ){
              fs.writeFile(path, message,(err) =>{
                 if (err) console.log(err);
              });
              
          }
       
     });


}
