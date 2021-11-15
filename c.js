var loadFile = function(event) {
    var x=document.createElement('img'),
        y=document.body.appendChild(x);
   y.src = URL.createObjectURL(event.target.files[0]);
  y.width = '200';
  };