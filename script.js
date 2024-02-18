


const seats = document.querySelectorAll('.kbd')


 
 for(let index = 1; index < seats.length; index++)
 {
    const seat = seats[index];
    seat.addEventListener('click', function(){
        seat.classList.add('bg-[#1DD100]')
        const currentSeatElement = document.getElementById('selected-seat-count');
         const seatValue = currentSeatElement.innerText;
          const currentSeat = parseInt(seatValue);
          const newSeat = currentSeat +1;
          currentSeatElement.innerText = newSeat;
          if(currentSeat > 4)
          {
            seat.classList.remove('bg-[#1DD100]');
          }
          const totalSeat = document.getElementById('seats-left');
          const totalSeatvalue = totalSeat.innerText;
          const currentTotal = parseInt(totalSeatvalue);
          const seatLeft = currentTotal-1;
          totalSeat.innerText = seatLeft;
         
     })
 }
