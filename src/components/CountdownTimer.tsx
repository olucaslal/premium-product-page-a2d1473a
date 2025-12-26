import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 17,
    minutes: 23,
    seconds: 0,
  });

  useEffect(() => {
    // Get or set the end time in localStorage
    const storedEndTime = localStorage.getItem("promoEndTime");
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      // Set end time to 24 hours from now
      endTime = Date.now() + (17 * 60 * 60 * 1000) + (23 * 60 * 1000);
      localStorage.setItem("promoEndTime", endTime.toString());
    }

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        // Reset the timer to 17h 23min
        const newEndTime = Date.now() + (17 * 60 * 60 * 1000) + (23 * 60 * 1000);
        localStorage.setItem("promoEndTime", newEndTime.toString());
        return { hours: 17, minutes: 23, seconds: 0 };
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-primary to-rose-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-3">
      <Clock className="h-5 w-5" />
      <span className="font-medium">TERMINA EM:</span>
      <div className="flex items-center gap-1 font-bold text-lg">
        <span className="bg-white/20 px-2 py-1 rounded">{formatNumber(timeLeft.hours)}</span>
        <span>:</span>
        <span className="bg-white/20 px-2 py-1 rounded">{formatNumber(timeLeft.minutes)}</span>
        <span>:</span>
        <span className="bg-white/20 px-2 py-1 rounded">{formatNumber(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
