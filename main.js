window.onload = function () {
    function selector(element) {
        return document.querySelector(element)
    }

    let form = selector('#productform');

    form.addEventListener("submit", function (e) {

        e.preventDefault();
        console.log("fileReader.result")


        let name = selector("#productName").value;
        let color = selector("#productColor").value;
        let price = selector("#productPrice").value;


        selector(".product-name").innerHTML = name;
        selector(".product-price").innerHTML = price;
        selector(".productBox").style.backgroundColor = color;

        let file = selector("#file").files[0];
        console.log(file);

        let fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
        }

        fileReader.onloadend = function () {
            console.log(fileReader.result);
            selector("#image").src = fileReader.result;
        }


        selector(".productBox").classList.remove("hidden");



    })
}