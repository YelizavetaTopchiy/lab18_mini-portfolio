import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MyCity.css";

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    const apiKey = "07a3eaf0bc3dba9041f2b50407f02441";
    const city = "Shostka";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Помилка API: ${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setWeather(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Показ кнопки "Вгору" при скролі вниз
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const cityName = weather?.name || "Шостка";
  const country = weather?.sys?.country || "Україна";
  const temp = weather?.main?.temp ?? "N/A";
  const description = weather?.weather?.[0]?.description || "Нема опису";
  const coordLat = weather?.coord?.lat ?? "N/A";
  const coordLon = weather?.coord?.lon ?? "N/A";

  return (
    <section className="my-city">
      <h1 data-aos="fade-down">Моє рідне місто — Шостка</h1>

      <div className="city-photos" data-aos="fade-up" data-aos-delay="200">
        <h2>Фото мого міста</h2>
        <div className="photos-grid">
          {[
            "https://i.pinimg.com/736x/84/54/f4/8454f4bff7ff6394d16f137e5e967960.jpg",
            "https://img.fozzyshop.com.ua/51743-large_default/syr-shostka-shostka-50.jpg",
            "https://shostka.info/wp-content/uploads/2020/10/Shostka-3.png",
            "https://www.ua-region.com.ua/firms/photo/39212085/5835.jpg",
            "https://travelworld.biz/wp-content/uploads/2019/10/IMG_20191023_175700.jpg",
          ].map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Фото Шостки ${i + 1}`}
              loading="lazy"
              className="photo"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            />
          ))}
        </div>
      </div>

      <div
        className="weather-info"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <h2>Погода зараз</h2>
        {loading ? (
          <div className="loader"></div>
        ) : error ? (
          <p className="error">Помилка: {error}</p>
        ) : (
          <>
            <p>
              <strong>{cityName}, {country}</strong>
            </p>
            <p>Температура: <strong>{temp}°C</strong></p>
            <p>Стан: <em>{description}</em></p>
            <p>Координати: широта {coordLat}, довгота {coordLon}</p>
          </>
        )}
      </div>

      <article className="city-description" data-aos="fade-up" data-aos-delay="1100">
        <h2>Про Шостку</h2>
        <p>
          Шостка — затишне місто в Сумській області, з багатою історією і дружелюбними людьми.
          Місто славиться хімічною промисловістю, мальовничими парками та культурними традиціями.
        </p>
        <p>
          Річка Шостка додає місту особливого шарму та можливостей для відпочинку.
        </p>
      </article>

      <div className="city-fun-facts" data-aos="fade-up" data-aos-delay="1300">
        <h2>Цікаві факти про Шостку</h2>
        <ul>
          <li>Засноване у 1764 році.</li>
          <li>Один із центрів хімічної промисловості України.</li>
          <li>Народний дім культури та численні фестивалі.</li>
          <li>Розвинена спортивна інфраструктура.</li>
        </ul>
      </div>

      <div
  className="map-container"
  data-aos="fade-up"
  data-aos-delay="1000"
>
  <h2>Де знаходиться Шостка?</h2>
  <iframe
    title="map-shostka"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25808.09309624535!2d33.47888525136113!3d51.87278366579662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412eb245529b47e5%3A0x1bc0b77b4b6571a7!2z0JrQsNCy0LjRgtC-0L7QtSDQvNC-0L_QtdC60LDRjyDQutCw0YDQtdC00LAsINCb0LjRgdGC0LLRi9C5INGB0YLQvtC70L7QvSDQv9C-0LTQsCDQnNC-0YDQtdCy0LAsINCa0LjRgdGC0YDRjA!5e0!3m2!1suk!2sua!4v1689816041886!5m2!1suk!2sua"
    width="100%"
    height="300"
    style={{ border: 0, borderRadius: "15px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      {showTopBtn && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Повернутись вгору">
          ↑
        </button>
      )}
    </section>
    
  );
};

export default MyCity;
