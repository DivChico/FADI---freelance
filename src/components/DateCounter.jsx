import React, { useEffect, useState } from "react";

const DateCounter = () => {
  function getTimeDifference(startDateStr) {
    const startDate = new Date(startDateStr);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Adjust for negative values
    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      // Get the last day of the previous month
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  const startDateStr = "2023-03-03T15:23:00";
  const [timeDifference, setTimeDifference] = useState(
    getTimeDifference(startDateStr)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDifference(getTimeDifference(startDateStr));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDateStr]);
  return (
    <p className=" font-semibold">{` منذ  ${timeDifference.years} سنة  و  ${timeDifference.months} اشهر  و  ${timeDifference.days} ايام و ${timeDifference.minutes} دقايق و  ${timeDifference.seconds} ثواني `}</p>
  );
};

export default DateCounter;
