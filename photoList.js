// Object named "Slideshow"
var slideShow = {
    // array called photoList 
    photoList: ['photo1','photo2','photo3','photo4','photo5'],
    // integer currentPhotoIndex
    currentPhotoIndex: 0,
    // function for current photo
    // logs the current photo name 
    // otherwise log "End of slideshow"
    nextPhoto: function nextPhoto(){
        if (this.currentPhotoIndex +1 < this.photoList.length){ //add +1 so that if you go beyound, it isn't undefined
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
            return this.photoList[this.currentPhotoIndex];
        } else {
        return "End of slideshow";  
        }     
    },
    // function that goes backwards
    prevPhoto: function prevPhoto(){
        if (this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
            return this.photoList[this.currentPhotoIndex];
        } else {
        return "End of slideshow";  
        }     
    },
    
    // function returns the current photo from the list
    getCurrentPhoto: function getCurrentPhoto(){
        return this.photoList[this.currentPhotoIndex];
    },
    //an empty property named playInterval
    playInterval: null,
    //play() function that moves to the next photo every 2000ms 
    play: function(){
        var self = this;
        this.playInterval = setInterval(function(){
            self.nextPhoto
        }, 2000);
    },
    //A pause() function that stops the slideshow
    pause: function(){
        clearInterval(this.playInterval);
    }
    }
    


slideShow.getCurrentPhoto();
console.log(slideShow.getCurrentPhoto());

slideShow.nextPhoto();
console.log(slideShow.nextPhoto()); 
console.log(slideShow.nextPhoto()); //testing
console.log(slideShow.nextPhoto()); //testing//testing
console.log(slideShow.nextPhoto());//testing
console.log(slideShow.nextPhoto()); //testing 


slideShow.prevPhoto();
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto()); 
console.log(slideShow.prevPhoto()); //testing End of Slideshow
console.log(slideShow.prevPhoto()); //testing End of Slideshow
// console.log(slideShow.play());




    