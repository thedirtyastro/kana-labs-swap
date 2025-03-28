"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TimeLoader = () => {
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  // Get the start of the current hour (e.g., 12:00 AM if time is 12:23 AM)
  const getHourStart = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), 0, 0);
  };

  const getHourEnd = () => {
    const hourStart = getHourStart();
    return new Date(hourStart.getTime() + 60 * 60 * 1000); // 1 hour later
  };

  const [startTime, setStartTime] = useState(getHourStart());
  const [endTime, setEndTime] = useState(getHourEnd());

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const elapsed = (now.getTime() - startTime.getTime()) / (60 * 60 * 1000); // Convert to hours
      const newProgress = Math.min(elapsed * 100, 100);
      setProgress(newProgress);

      const remainingSeconds = Math.max(Math.ceil((endTime.getTime() - now.getTime()) / 1000), 0);
      setRemainingTime(remainingSeconds);

      if (remainingSeconds === 0) {
        setStartTime(getHourStart());
        setEndTime(getHourEnd());
        setProgress(0);
      }
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  return (
    <div className="w-full relative p-4 bg-card flex flex-col gap-2 border border-white/10">
    
   
      {/* Progress Bar */}
      <div className="relative w-full h-2.5 bg-elevation rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          style={{ background: "#2ED3B7" }}
        />
      </div>

        {/* Time Labels */}
      <div className="flex justify-between text-sm text-white font-semibold ">
        <span>{formatTime(startTime)}</span>
        <span>{Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, "0")}</span>

        <span>{formatTime(endTime)}</span>
      </div>


     
    </div>
  );
};

export default TimeLoader;
