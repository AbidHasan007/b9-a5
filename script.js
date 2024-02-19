


const seats = document.querySelectorAll('.seat')



let seatCount = ""; 
let count = 0;

 for(let index = 0; index < seats.length; index++)
 {
    const seat = seats[index];
    seat.addEventListener('click', function(e){
       if(seatCount === e.target.innerText ){
        alert('Do you want to buy 1 ticket 2 times? But You cannt...');
        return ;
       }else if(parseInt(document.getElementById('selected-seat-count').innerText) >= 4){
        alert('Sorry! You can buy only 4 tickets');
        return ;
       }
        seat.classList.add('bg-[#1DD100]')
        seat.classList.remove('bg-gray-200')
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

// enable next button if ticket grater than 0
          const nextbutton = document.getElementById('next-button');

         if(currentSeat >= 0)
           {
            nextbutton.removeAttribute('disabled');
           }else{
          nextbutton.setAttribute('disabled', true)
         }

       
         
     })
 }


 // cupon functionality

 document.getElementById('input-value').addEventListener('keyup', function (e) {

   const value = e.target.value;
   const validateValue = value.toLowerCase().split(' ').join('');
   const button = document.getElementById('btn-apply');
   if(validateValue === "new15"){
          button.removeAttribute('disabled')
          
   }else if(validateValue ==="couple20"){
     button.removeAttribute('disabled')
   }
   else{
     button.setAttribute('disabled', true)
   }
  
 })

 document.getElementById('btn-apply').addEventListener("click", function(){
  const hide = document.getElementById('hidden');
    const value1 = document.getElementById('input-value').value;
    const validateValue2 = value1.toLowerCase().split(' ').join('');
   const total = parseInt(document.getElementById('total').innerText);
   if(validateValue2 ==="new15"){
    const discount15 = total * 0.15;
    const grandTotal = total-discount15;
    document.getElementById('grand-total').innerText = grandTotal.toFixed(2);
    hide.style.display = 'none';
   }else if(validateValue2 === "couple20"){

    const discount20 = total * 0.20;
    const grandTotal = total-discount20;
    document.getElementById('grand-total').innerText = grandTotal.toFixed(2);
    hide.style.display = 'none';
   }
   
     
       
 })




  
