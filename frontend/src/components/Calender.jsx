import { useState } from 'react';

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedSlot(''); 
  };

  const handlePayment = ()=>{
    alert("Payment can only be done after a meet agreement.")
  }

  const availableTimeSlots = ['10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 8:00 PM'];

  const handleBookSlot = () => {
    console.log('Date selected:', selectedDate);
    console.log('Slot selected:', selectedSlot);
    alert("Your slot is now Booked")
  };

  return (
    <div className="scheduler-container mt-[5%] py-[10%]">
      <h1 className='mb-[20px] text-4xl decor font-semibold pb-5'>Book a meeting</h1>
      <div className='flex flex-col md:flex-row'>
      <div className='text-center basis-1/2'>
      <h2 className='decor text-2xl'>Choose a Date</h2>
      <input className='text-black my-4 py-2 px-3 rounded-[2px]' type="date" value={selectedDate} onChange={handleDateChange} min={new Date().toISOString().split('T')[0]} />
      </div>
    <div className='text-center'>
      <h2 className='decor text-2xl pb-2'>Choose a Time Slot</h2>
      <table className="time-slots">
        <tbody>
          {availableTimeSlots.map((slot, index) => (
            <tr
              key={index}
              className={`time-slot ${selectedSlot === slot ? 'selected' : ''}`}
              onClick={() => handleSlotClick(slot)}
            >
              <td>{slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      <button onClick={handleBookSlot} disabled={!selectedDate || !selectedSlot} className='type py-3 my-[5%] w-[80%] rounded-full text-black font-semibold'>
        Book Slot
      </button>

      {selectedDate && (
        <div className="confirmation-message bg-black">
          {selectedSlot && <p>Slot selected: {selectedSlot} on {selectedDate}</p>}
        </div>
      )}

    <button className="type mb-5 rounded-3xl py-3 font-black w-[80%] text-black" onClick={handlePayment}>PAY NOW</button>
    </div>
  );
};

export default Calender;
