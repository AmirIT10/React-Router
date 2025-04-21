
import Navbar from './Navbar';

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <h1>درباره ما</h1>
      <p>
        این یک پروژه نمونه در React است که برای آموزش و نمایش قابلیت‌های React ساخته شده است.
        هدف این پروژه معرفی نحوه‌ی ایجاد صفحات مختلف و استفاده از React Router برای مسیریابی است.
      </p>
      <img
        src="https://via.placeholder.com/400"
        alt="About"
        className="about-image"
      />
    </div>
  );
}

export default About;


