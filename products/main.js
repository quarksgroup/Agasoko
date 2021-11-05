window.onload = () => {


    const colorItems = document.querySelectorAll('.color-items');
    console.log(colorItems);
    colorItems.forEach(item => {

        item.addEventListener('click', function () {
            const idSelected = this.id;
            console.log(idSelected);
            const container = document.querySelector(".bg-container")
            container.id = idSelected;
        })
    })
}
