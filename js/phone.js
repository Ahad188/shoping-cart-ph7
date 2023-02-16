     

     document.getElementById("phone-btn-plus").addEventListener("click",function(){
        const newPhoneNumber = tottalFoneNumber(true);
       const phonePrice = phoneCost(newPhoneNumber)
       calculateSub();
          
     });
     document.getElementById("phone-btn-minus").addEventListener("click",function(){
        const newPhoneNumber = tottalFoneNumber(false);
       const phonePrice = phoneCost(newPhoneNumber);
       calculateSub();
     });

    