// components/SpeedComponent.tsx

"use client"; // Marking SpeedComponent as a client component

import React, { useEffect, useState } from 'react';
import { checkInternetSpeed } from '@/lib/speedTest';
import { sendWhatsappMessage } from '@/lib/sendWhatsapp';

const SPEED_CHECK_INTERVAL = 5000; // 5 seconds in milliseconds
const SLOW_INTERNET_THRESHOLD = 50; // Mbps

export default function SpeedComponent() {
  const [internetSpeed, setInternetSpeed] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkSpeedAndNotify();
    }, SPEED_CHECK_INTERVAL);

    // Initial check
    checkSpeedAndNotify();

    // Clear interval on component unmount
    return () => clearInterval(intervalId);

    async function checkSpeedAndNotify() {
      try {
        const speed = await checkInternetSpeed();
        console.log(`Current internet speed: ${speed} Mbps`);
        setInternetSpeed(parseFloat(speed));

        // Send WhatsApp message if speed is slower than threshold
        if (parseFloat(speed) < SLOW_INTERNET_THRESHOLD) {
          await sendNotificationMessage();
        }
      } catch (error) {
        console.error('Error checking internet speed:', error);
      }
    }
  }, []);

  const sendNotificationMessage = async () => {
    try {
      await sendWhatsappMessage("Abee Bhai !! Internet fir nahi chal rha .. Refund Dede !");
      console.log("WhatsApp message sent successfully!");
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
    }
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const styles = {
    fontSize: isMobile ? '50px' : '100px', // Different font size for mobile and desktop
    fontWeight: 'bold',
    marginTop: isMobile ? '50px' : '150px', // Different margin-top for mobile and desktop
  };

  return (
    <div style={styles}>
      {internetSpeed !== null && <p>{internetSpeed} Mb/s</p>}
    </div>
  );
}
