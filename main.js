function selector(element){
    return document.querySelector(element)
}

let form = selector('#productForm');


form.addEventListener("submit", function(e) {

    e.preventDefault();
    

    let name =  selector("#productName").value;
    let color =  selector("#productColor").value;
    let price =  selector("#productPrice").value;


    selector(".product-name").innerHTML=name;
    selector(".product-price").innerHTML=price;
    selector(".productBox").style.backgroundColor=color;

    let file = selector("#file").files[0];

    let fileReader = new FileReader();

    fileReader.onloadend = function(){
        selector("#image").src = fileReader.result;
    }

    if(file){
        fileReader.readAsDataURL(file);
    }
    selector(".productBox").classList.remove("hidden");

})