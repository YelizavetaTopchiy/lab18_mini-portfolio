import React from "react";
import "./AboutMe.css";
import mePhoto from "../components/img/me.jpg"; // Встав своє фото

// Для іконок соцмереж
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1 className="fade-in">Привіт, я Єлизавета Топчій</h1>

      <div className="intro fade-in-delay">
        <img src={mePhoto} alt="Фото Єлизавети" className="my-photo" />
        <div className="intro-text">
          <p>
            Я — творча і цілеспрямована фронтенд-розробниця, яка захоплюється
            створенням зручних і сучасних вебзастосунків. Люблю експериментувати
            з дизайном і завжди прагну вдосконалювати свої навички.
          </p>
          <p>
            У вільний час я малюю, читаю книжки про саморозвиток і займаюся спортом.
            Вірю, що постійне навчання — ключ до успіху.
          </p>
          <div className="social-links">
            <a href="https://github.com/YelizavetaTopchiy" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/YelizavetaTopchiy" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://t.me/YelizavetaTopchiy" target="_blank" rel="noreferrer" aria-label="Telegram">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      <h2 className="fade-in-delay2">Мої цінності</h2>
      <ul className="fade-in-delay2">
        <li>Якість і чистий, зрозумілий код</li>
        <li>Безперервне навчання та самовдосконалення</li>
        <li>Креативність і відкритість до нових ідей</li>
        <li>Прагнення допомагати людям через технології</li>
      </ul>

      <h2 className="fade-in-delay3">Мій досвід</h2>
      <p className="fade-in-delay3">
        Вивчаю HTML, CSS, JavaScript та React. Створила кілька проєктів, що
        демонструють мої вміння, зокрема SPA-портфоліо та інтерактивні вебдодатки.
        Прагну освоїти Redux, TypeScript та покращити навички UI/UX дизайну.
      </p>

      <h2 className="fade-in-delay4">Мої проєкти</h2>
      <div className="projects fade-in-delay4">
        <div>
          <h3>HTML + CSS</h3>
          <ul>
            <li><a href="https://github.com/YelizavetaTopchiy/html-basic.git" target="_blank" rel="noreferrer">HTML Basic</a></li>
            <li><a href="https://github.com/YelizavetaTopchiy/css-pratice.git" target="_blank" rel="noreferrer">CSS Practice</a></li>
          </ul>
        </div>

        <div>
          <h3>JavaScript</h3>
          <ul>
            <li><a href="https://github.com/YelizavetaTopchiy/js-easy.git" target="_blank" rel="noreferrer">JS Easy</a></li>
            <li><a href="https://github.com/YelizavetaTopchiy/js-arrayMoreMethods.git" target="_blank" rel="noreferrer">JS Array More Methods</a></li>
          </ul>
        </div>

        <div>
          <h3>React</h3>
          <ul>
            <li><a href="https://github.com/YelizavetaTopchiy/react-first-lab.git" target="_blank" rel="noreferrer">React First Lab</a></li>
            <li><a href="https://github.com/YelizavetaTopchiy/react-second-lab.git" target="_blank" rel="noreferrer">React Second Lab</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
