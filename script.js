// jedan el koji hoce da se prikaze dodavajuci klasom

const images = document.querySelectorAll('.anim');

// instance IObservera

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = 'anim1 2s forwards ease-out';
            }else{
                entry.target.style.animation = 'none';
            }
        })
})

// mora da se pozove metoda observera
images.forEach(image => {
    observer.observe(image)
})



