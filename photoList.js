// Object named "Slideshow"
var slideShow = {
    // array called photoList 
    photoList: ['photo1','photo2','photo3','photo4','photo5'],
    // integer currentPhotoIndex
    currentPhotoIndex: 0,
    //an empty property named playInterval
    playInterval: null,
    // function for current photo
    // logs the current photo name 
    // otherwise log "End of slideshow"
    nextPhoto: function(){
        if (this.currentPhotoIndex < this.photoList.length - 1){ //add -1 so that if you go beyound, it isn't undefined
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
            return this.photoList[this.currentPhotoIndex];
        } else {
        console.log("End of slideshow");  
        this.pause(); 
        }       
    },
    // function that goes backwards
    prevPhoto: function(){
        if (this.currentPhotoIndex >= 0){
            this.currentPhotoIndex--;
            return this.photoList[this.currentPhotoIndex];
        } else {
        return "End of slideshow";  
        }     
    },
    
    // function returns the current photo from the list
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    },
    //play() function that moves to the next photo every 2000ms 
    play: function(){
        var A = this;
        this.playInterval = setInterval(function(){
            A.nextPhoto();
            // console.log(A.getCurrentPhoto());
        }, 2000)
    },

    //A pause() function that stops the slideshow
    pause: function (){
        clearInterval(this.playInterval);
    },
}
slideShow.play()
// console.log(slideShow.play());
// console.log(slideShow.getCurrentPhoto());

// slideShow.nextPhoto();
// console.log(slideShow.nextPhoto()); 
// console.log(slideShow.nextPhoto()); //testing
// console.log(slideShow.nextPhoto()); //testing//testing
// console.log(slideShow.nextPhoto());//testing
// console.log(slideShow.nextPhoto()); //testing 


// slideShow.prevPhoto();
// console.log(slideShow.prevPhoto());
// console.log(slideShow.prevPhoto());
// console.log(slideShow.prevPhoto()); 
// console.log(slideShow.prevPhoto()); //testing End of Slideshow
// console.log(slideShow.prevPhoto()); //testing End of Slideshow





    