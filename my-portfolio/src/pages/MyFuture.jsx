import React from "react";
import { FaReact, FaLaptopCode, FaChartLine } from "react-icons/fa";
import "./MyFuture.css";

const MyFuture = () => {
  return (
    <section className="my-future">
      <h1>Мій розвиток і плани на майбутнє</h1>

      <div className="timeline">
        <div className="timeline-item">
          <div className="icon-wrapper react-icon">
            <FaReact />
          </div>
          <div className="content">
            <h3>1. Освоїти React і Redux</h3>
            <p>
              Поглибити знання React, Redux та сучасних практик, щоб створювати потужні вебзастосунки.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="icon-wrapper laptop-icon">
            <FaLaptopCode />
          </div>
          <div className="content">
            <h3>2. Отримати досвід</h3>
            <p>
              Знайти стажування або фріланс, щоб працювати в команді і навчитися практичним навичкам.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="icon-wrapper chart-icon">
            <FaChartLine />
          </div>
          <div className="content">
            <h3>3. Стати мідл-розробником</h3>
            <p>
              Брати участь у складних проєктах, вивчати TypeScript, UI/UX дизайн і розвивати свої скілли.
            </p>
          </div>
        </div>
      </div>

      <blockquote className="motivation">
        <p>“Великий шлях починається з маленького кроку.”</p>
      </blockquote>

      <div className="memes-container">
        <div className="meme-block">
          <img
            src="https://i.pinimg.com/736x/b6/ec/f2/b6ecf27d0578799e71675777435c5cc1.jpg"
            alt="Мем програміста 1"
            loading="lazy"
            className="meme"
          />
          <p className="meme-caption">“Коли нарешті зловив багу…”</p>
        </div>

        <div className="meme-block">
          <img
            src="https://i.pinimg.com/originals/1f/a2/2b/1fa22befc10e3cbacd58c5b407a97997.gif"
            alt="Мем програміста 2"
            loading="lazy"
            className="meme"
          />
          <p className="meme-caption">“Коли код працює з першого разу — це магія!”</p>
        </div>
      </div>

      <div className="dream-job">
        <h2>Моя робота мрії</h2>
        <p>
          Хочу працювати у дружньому колективі, де цінують якість коду і креативний підхід. 
          Мрію створювати вебдодатки, які приносять користь людям і роблять їхнє життя простішим та яскравішим.
        </p>
      </div>
    </section>
  );
};

export default MyFuture;
