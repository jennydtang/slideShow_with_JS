// Object named "Slideshow"
var slideShow = {
    // array called photoList 
    photoList: ['photo1','photo2','photo3','photo4','photo5'],
    // integer currentPhotoIndex
    currentPhotoIndex: 0,
    // function for current photo
    // logs the current photo name. 
    // otherwise log "End of slideshow"
    nextPhoto: function(){
        if (this.currentPhotoIndex < this.photoList.length){
            console.log(this.photoList[this.currentPhotoIndex]);
            return this.currentPhotoIndex++;
        } else {
            console.log("End of slideshow");  
        }     
    },
    // function that goes backwards.
    prevPhoto: function(){
        if (this.currentPhotoIndex > 0){
            return this.currentPhotoIndex--;
        } else {
            console.log("End of slideshow");
        }
    },
    
    // function returns the current photo from the list
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    },
}

slideShow.getCurrentPhoto();
console.log(slideShow.getCurrentPhoto());

slideShow.nextPhoto();
console.log(slideShow.nextPhoto()); 
console.log(slideShow.nextPhoto()); //testing

slideShow.prevPhoto();
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto()); //testing



    