import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <h1>Ласкаво просимо до KPI-tter</h1>

        <section className="about">
          <h2>Про KPI-tter</h2>
          <p>
            KPI-tter — це соціальна платформа для професіоналів, де можна ділитися думками, ідеями
            та обговореннями, що стосуються вашої роботи та особистих проєктів. Це допомагає
            користувачам залишатися на зв'язку з колегами та ефективно обмінюватися знаннями.
          </p>
        </section>

        <section className="advantages">
          <h2>Переваги</h2>
          <ul>
            <li>Діліться своїми професійними досягненнями</li>
            <li>Залишайтеся на зв'язку з однодумцями</li>
            <li>Отримуйте відгуки на свої ідеї та проєкти</li>
            <li>Будьте в курсі останніх тенденцій у вашій галузі</li>
          </ul>
        </section>

        <section className="how-it-works">
          <h2>Як це працює</h2>
          <p>
            Зареєструйтеся, створіть профіль та почніть публікувати! Ви можете ставити лайки,
            коментувати та ділитися контентом із вашою мережею. Це чудовий спосіб побудувати свою
            онлайн-презентацію та залишатися в курсі подій у своїй професійній сфері.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
