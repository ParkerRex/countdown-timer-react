"use client";

import { AddToCalendarButton } from "add-to-calendar-button-react";

import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = () => {
      const now = new Date();
      const target = new Date();
      target.setDate(1);
      target.setMonth(9);
      target.setFullYear(now.getFullYear());
      target.setHours(10);
      target.setMinutes(0);
      target.setSeconds(0);

      const diff = target.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ hours, minutes, seconds });
    };

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Time until Map Alpha Launch:</h1>
      <div className="text-6xl font-mono mb-8">
        {time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0
          ? "Launch!"
          : `T-${time.hours}h ${time.minutes}m ${time.seconds}s`}
      </div>
      <AddToCalendarButton
        name="Map Alpha Launch Event"
        options={["Apple", "Google"]}
        startDate="2023-10-01"
        endDate="2023-10-01"
        startTime="10:00"
        endTime="10:30"
        timeZone="America/Los_Angeles"
      ></AddToCalendarButton>
    </div>
  );
};
export default CountdownTimer;
