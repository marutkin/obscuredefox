import React, { useState } from "react";
import { Modal, notification } from "antd";

export default function BirthdayAgreement() {
    const hasBeenAccepted = localStorage.getItem("birthdayAgreementAccepted");
    const [accepted, setAccepted] = useState(hasBeenAccepted === "true");

    return (
        <Modal
            title="🎂 Пользовательское соглашение о принятии подарков"
            onOk={() => {
                setAccepted(true)
                localStorage.setItem("birthdayAgreementAccepted", "true")
            }}
            okText="Я принимаю!"
            cancelText="Я подумою..."
            onCancel={() => {
                notification.open({
                    message: 'Соглашение не принято',
                    description: 'Ну подумой еще раз, но не слишком долго.',
                    placement: 'topRight',
                    duration: 2,
                });
            }}
            open={!accepted}
        >
            <div className="max-w-4xl mx-auto p-8">
                <div className="space-y-6 text-justify">
                    <section>
                        <h2 className="text-2xl font-semibold">1. Предмет Соглашения</h2>
                        <p>
                            1.1. Сайт предоставляет Маруткиной Даше доступ к радости, веселью, поздравлениям, подаркам и не очень сложным загадкам.
                            <br />
                            1.2. Именинница обязуется быть довольной, не брюзжать и ценить сюрпризы, даже если это носки с ананасами.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">2. Принятие условий</h2>
                        <p>
                            2.1. Принятие осуществляется нажатием кнопки ниже, желательно с радостным вскриком.
                            <br />
                            2.2. Именинница соглашается быть в отличном настроении и не жаловаться на отсутствие собственной квартиры в Будапеште в качестве подарка.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">3. Уровень сложности</h2>
                        <p>
                            3.1. Загадки несложные. Не пугайся. Это не экзамен по Нефрологии.
                            <br />
                            3.2. Разрешено пользоваться интуицией, Плюшей, и внутренним голосом бабушки.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">4. Ограничение ответственности</h2>
                        <p>
                            4.1. Сайт не несёт ответственности за внезапный смех, че лол, умиление и желание танцевать, но это не точно.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">5. Заключительные положения</h2>
                        <p>
                            5.1. Соглашение действует до конца времен (или пока ты не ляжешь спать с улыбкой).
                            <br />
                            5.2. Все споры решаются по принципу «камень-ножницы-ну-его-нахуй».
                        </p>
                    </section>
                </div>
            </div>
        </Modal>
    );
}
