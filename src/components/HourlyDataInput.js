import React, { useState } from 'react';

const HourlyDataInput = ({ onDataSubmit }) => {
    const [data, setData] = useState({
        date: new Date().toISOString().substr(0, 10), // default to today's date in "YYYY-MM-DD" format
        SKU: '',
        operationalTime: '',
        actualRunTime: '',
        headCount: '',
        expectedUnits: '',
        actualUnitsProduced: '',
        goodUnitsProduced: '',
        hour: '9:00am - 10:00am'
    });

    const hoursList = [
        '9:00am - 10:00am', '10:00am - 11:00am', '11:00am - 12:00pm',
        '12:00pm - 1:00pm', '1:00pm - 2:00pm', '2:00pm - 3:00pm',
        '3:00pm - 4:00pm', '4:00pm - 5:00pm'
    ];

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onDataSubmit(data); // This was changed from `onSubmit` to `onDataSubmit` to match the prop name passed in App.js.
    };

    return (
        <div>
            <label>Date:</label>
            <input 
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
            />
            <br />

            <label>SKU:</label>
            <input 
                type="text"
                name="SKU"
                value={data.SKU}
                onChange={handleChange}
            />
            <br />

            <label>Hour:</label>
            <select name="hour" value={data.hour} onChange={handleChange}>
                {hoursList.map(hour => (
                    <option key={hour} value={hour}>
                        {hour}
                    </option>
                ))}
            </select>
            <br />

            <label>Operational Time (mins):</label>
            <input 
                type="number"
                name="operationalTime"
                value={data.operationalTime}
                onChange={handleChange}
            />
            <br />

            <label>Actual Run Time (mins):</label>
            <input 
                type="number"
                name="actualRunTime"
                value={data.actualRunTime}
                onChange={handleChange}
            />
            <br />

            <label>Head Count:</label>
            <input 
                type="number"
                name="headCount"
                value={data.headCount}
                onChange={handleChange}
            />
            <br />

            <label>Expected Units:</label>
            <input 
                type="number"
                name="expectedUnits"
                value={data.expectedUnits}
                onChange={handleChange}
            />
            <br />

            <label>Actual Units Produced:</label>
            <input 
                type="number"
                name="actualUnitsProduced"
                value={data.actualUnitsProduced}
                onChange={handleChange}
            />
            <br />

            <label>Good Units Produced:</label>
            <input 
                type="number"
                name="goodUnitsProduced"
                value={data.goodUnitsProduced}
                onChange={handleChange}
            />
            <br />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default HourlyDataInput;
