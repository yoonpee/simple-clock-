const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect =document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//Upsate total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
     
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    //Copy selected seats into arr
    //Map through  array 배열로만들고 리턴
    //return a new array indexes

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
//Movie select event
movieSelect.addEventListener('change' , e =>{
     ticketPrice = +e.target.value;

     updateSelectedCount()
})

container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount()
    }
})

