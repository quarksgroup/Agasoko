
function selector(element){
  return document.querySelector(element)
}


function SubmitForm(e) { 

  let name =  selector("#productName").value;
  let color =  selector("#productColor").value;
  let price =  selector("#productPrice").value;

  selector(".product-name").innerHTML=name;
  selector(".product-price").innerHTML=price;
  selector(".productBox").style.backgroundColor=color;

  let file = selector("#photoFile").files[0];

  let fileReader = new FileReader();

  fileReader.onloadend = function(e){
      selector("#newImage").src =  URL.createObjectURL(file)
  }

  if(file){
      fileReader.readAsDataURL(file);
  }
  selector(".productBox").classList.remove("hidden");
  selector(".productBox").style.display="block";

};