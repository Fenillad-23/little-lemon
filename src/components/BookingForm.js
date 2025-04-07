import React, { useState } from 'react';

const BookingForm = (props) => {
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time: times,
      guests,
      occasion,
    };
    props.submitForm(formData);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose Date</label>
              <input id='book-date' value={date} type='date' onChange={(e) => handleChange(e.target.value)} required />
            </div>
            <div>
            <label htmlFor='book-time'>Choose time</label>
            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
              <option value="">Select a time</option>
              {props.availableTimes &&
                props.availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor='book-guests'>Number of Guests</label>
            <input id="book-guests" type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
          </div>
          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className='btnReceive'>
            <input aria-label='On Click' type='submit' value="Make Your Reservation" />
          </div>
          </fieldset>
          
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
