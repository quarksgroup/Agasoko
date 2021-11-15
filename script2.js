window.addEventListener("load", () => {
   
    const colorItems = document.querySelectorAll('.color-items');
    colorItems.forEach(item => {
        item.addEventListener('click', function(){
            const idSelected= this.id;
           document.body.className= idSelected;
        })
    })
})
"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"