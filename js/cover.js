    


          document.getElementById("cover-btn-pluse").addEventListener("click",function(){
          let newCaseNumber = inputFieldNumber(true);
          caseTottalPrice(newCaseNumber);
          calculateSub();
          });
          document.getElementById("cover-btn-mainus").addEventListener("click",function(){
               const newCaseNumber = inputFieldNumber(false);
               caseTottalPrice(newCaseNumber);
               calculateSub();
          });

 