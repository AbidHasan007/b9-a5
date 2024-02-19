


const seats = document.querySelectorAll('.seat')



let seatCount = ""; 
let count = 0;

 for(let index = 0; index < seats.length; index++)
 {
    const seat = seats[index];
    seat.addEventListener('click', function(e){
       console.log(e.target.innerText)
       if(seatCount === e.target.innerText ){
        alert('Do you want to buy 1 ticket 2 times? But You cannt...');
        return ;
       }else if(parseInt(document.getElementById('selected-seat-count').innerText) >= 4){
        alert('Sorry! You can buy only 4 tickets');
        return ;
       }
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

          const seatNameElement = e.target.innerText;
          seatCount = seatNameElement;
          document.getElementById('dynamic-container').innerHTML += `
          <div class="flex items-center justify-between">
                              <p id="seat-class "> ${seatNameElement}</p>
                              <p >Economy</p>
                              <p id="price">500</p>
                            </div>
          `;

          const ticketSelected = parseInt(newSeat);
          const total = 500*ticketSelected;
          document.getElementById('total').innerText = total;

         
     })
 }

function cupon(){

  
}