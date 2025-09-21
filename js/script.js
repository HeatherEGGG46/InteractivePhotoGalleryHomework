function addIndex(previewPic){
   document.getElementById('image').style.backgroundImage = "url('" + src + "')";
   document.getElementById('image').innerHTML = alt;
    console.log(images.length);
    for(let i =0;i<images.length;i++){
        console.log("image " + i);
        images[i].setAttribute("tabindex", "0");
    }  
}
function upDate(previewPic){
   var src = previewPic.getAttribute( "src" );
   var alt = previewPic.getAttribute( "alt" );
   document.getElementById('image').style.backgroundImage = "url('" + src + "')";
   document.getElementById('image').innerHTML = alt;
     console.log('upDate event triggered!');
}

  function unDo(previewPic){
   previewPic = document.getElementById('image');
   previewPic.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";
      console.log('unDo event triggered!');

