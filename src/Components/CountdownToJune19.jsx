import React, { useEffect, useState } from 'react';
import { Alert } from 'antd';
const CountdownToJune19 = () => {
    const targetDate = new Date(new Date().getFullYear(), 5, 19, 0, 0, 0); // Месяцы с 0, поэтому 5 = Июнь
    const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            const diff = targetDate.getTime() - Date.now();
            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft(0);
            } else {
                setTimeLeft(diff);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft <= 0) {
        return <Alert type='success' description={"С днем рождения ❤️ !!!"} />;
    }

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);

    return (
        <Alert description={
            <div>
                До 19 июня осталось: {days}д {hours}ч {minutes}м {seconds}с
            </div>
        } type="info" showIcon />
    );
};

export default CountdownToJune19;
