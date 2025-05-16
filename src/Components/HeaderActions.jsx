import React, { useState, useEffect } from "react";
import { Button, message } from "antd";

import okakJpg from '../assets/okak.jpg'
import plushaPng from '../assets/plusha.png'
import dmPng from '../assets/dm.png'

const HeaderActions = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if (!showOverlay) return;
        const timer = setTimeout(() => {
            setShowOverlay(false)
            window.location.reload();
        }, 3000);
        return () => clearTimeout(timer);
    }, [showOverlay]);

    const handleMessageDima = () => {
        window.open("https://t.me/marutkin", "_blank");
    }
    return (
        <>
            {showOverlay && (
                <div

                    style={{
                        zIndex: 1500,
                        position: "absolute",
                        top: "28%",
                        left: 0,
                        width: "100%",
                        height: "auto",
                    }}
                    className="fixed inset-0 bg-white z-2550 flex items-center justify-center">
                    <img
                        src={okakJpg}
                        alt="С Днём Рождения!"
                        className="max-h-[80vh] rounded-xl shadow-xl animate-fadeIn"
                    />
                </div >
            )}
            {contextHolder}
            <img src={dmPng} style={{
                width: "45px",
                height: "45px",
                display: "inline-block",
                position: "absolute",
                top: "25px",
                right: "25px"
            }} />
            <img src={plushaPng} style={{
                width: "35px",
                height: "35px",
                display: "inline-block",
                position: "absolute",
                top: "25px",
                left: "18px"
            }} />
            <Button type="primary" onClick={handleMessageDima}>Написать Диме</Button>
            <Button type="text" onClick={
                () => {
                    localStorage.clear()
                    setShowOverlay(true)
                    messageApi.open({
                        type: 'warning',
                        content: 'Чистию кэш тада!',
                    });
                }
            }>
                Пожаловаться
            </Button>
        </>
    )
}

export default HeaderActions;