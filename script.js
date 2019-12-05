//set picture
// set street
//set date
// how many participants
//when should waste management pick up the trash?
// checkbox for gloves
// share toggle
//create

document
  .querySelector('input[type="file"]')
  .addEventListener("change", function() {
    if (this.files && this.files[0]) {
      var img = document.getElementById("trash-image");// $('img')[0]
      img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      //img.onload = imageIsLoaded;
    }
  });