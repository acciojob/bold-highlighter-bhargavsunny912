let link=document.getElementById("link");
        
        link.addEventListener("mouseover",highlight);
        link.addEventListener("mouseout",return_normal);

        function highlight(){
            document.querySelectorAll("strong").forEach((a)=>{
                a.style.color="green";
            });
        }
        function return_normal(){
            document.querySelectorAll("strong").forEach((a)=>{
                a.style.color="black";
            });
        }