"use client";
import { AddToCalendarButton } from "add-to-calendar-button-react";

import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = () => {
      const now = new Date();
      const target = new Date("2023-09-29T12:00:00-04:00"); // Friday 9-29 at 12p ET

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white mx-auto space-y-8">
      <h1 className="sm:text-4xl md:text-4xl font-bold mb-8 text-center">
        Time until Map Alpha Launch:
      </h1>
      <div className="text-4xl font-mono mb-8 text-center">
        {time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0
          ? "Launch!"
          : `T-${time.hours}h ${time.minutes}m ${time.seconds}s`}
      </div>
      <AddToCalendarButton
        name="Map Alpha Launch Event"
        description="Come hang out on X spaces and celebrate the launch of Map Alpha!"
        options={["Apple", "Google"]}
        startDate="2023-09-29"
        endDate="2023-09-29"
        startTime="12:00"
        endTime="12:30"
        timeZone="America/New_York"
      ></AddToCalendarButton>
      <audio controls loop autoPlay>
        <source src="/mortal-kombat.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
export default CountdownTimer;
