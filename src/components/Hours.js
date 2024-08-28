import React from 'react';

const OpeningHours = () => {
  const hours = [
    { day: "Monday", open: "10:00", close: "16:00" },
    { day: "Tuesday", open: "10:00", close: "16:00" },
    { day: "Wednesday", open: "10:00", close: "16:00" },
    { day: "Thursday", open: "10:00", close: "16:00" },
    { day: "Friday", open: "10:00", close: "16:00" },
    { day: "Saturday", open: "9:00", close: "20:00" },
    { day: "Sunday", open: "9:00", close: "20:00" },
  ];

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const todayHour = hours.find((day) => day.day === today);

  return (
     <div id="hours">
        <h2>Horario de hoy =)</h2>
        <p>{todayHour.day} {todayHour.open} - {todayHour.close}</p>
    </div>
  );
};

export default OpeningHours;
