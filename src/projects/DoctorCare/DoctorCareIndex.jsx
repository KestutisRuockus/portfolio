import iconCheck from "./assets/icons/check.svg";
import iconClose from "./assets/icons/close.svg";
import iconFacebook from "./assets/icons/facebook.svg";
import iconinstagram from "./assets/icons/instagram.svg";
import iconMail from "./assets/icons/mail.svg";
import iconMapPin from "./assets/icons/map-pin.svg";
import iconMenu from "./assets/icons/menu.svg";
import iconWhatsapp from "./assets/icons/whatsapp.svg";
import iconYoutube from "./assets/icons/youtube.svg";
import imgDoctor from "./assets/img/doctor.svg";
import imgPicture1 from "./assets/img/picture1.svg";
import imgPicture2 from "./assets/img/picture2.svg";

export default function DoctorCareIndex() {
  return (
    <div className="doctor-care-body">
      <header>
        <div className="title">
          Doctor<strong>Care</strong>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#start">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#service">Serviços</a>
            </li>
            <li>
              <a href="#contacts">Depoimentos</a>
            </li>
          </ul>
        </nav>
        <div className="header-btn">
          <button>Agendar consulta</button>
        </div>
        {/* <!-- open navbar container on mobile/small screen  --> */}
        <div id="menu" className="menu">
          <img src={iconMenu} />
        </div>
        {/* <!-- close navabr container --> */}
        <div id="close" className="close">
          <img src={iconClose} alt="close" />
        </div>
      </header>
      {/* <!-- mobile menu container --> */}
      <div id="hamburger" className="mobile-menu">
        <div className="mobile-nav">
          <nav>
            <ul>
              <li>
                <a href="#start">Início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#service">Serviços</a>
              </li>
              <li>
                <a href="#contacts">Depoimentos</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-menu-btn">
          <button>Agende sua consulta</button>
        </div>
        <div className="mobile-media">
          <div>
            <img src={iconinstagram} alt="instagram" />
          </div>
          <div>
            <img src={iconFacebook} alt="facebook" />
          </div>
          <div>
            <img src={iconYoutube} alt="youtube" />
          </div>
        </div>
      </div>
      {/* <!-- hero section --> */}
      <section id="start" className="hero">
        <div className="hero-top">
          <div className="hero-text">
            <div className="welcome">BOAS-VINDAS A DOCTORCARE 👋</div>
            <div className="title">
              Assistência médica simplificada para todos
            </div>
            <div className="description">
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </div>
            <div className="schedule-btn">
              <img src={iconWhatsapp} alt="whatsapp" />
              <div>Agende sua consulta</div>
            </div>
          </div>
          <div className="hero-picture">
            <img src={imgPicture1} alt="hero" />
          </div>
        </div>

        <div className="records">
          <div className="patient">
            <div className="number">+3.500</div>
            <div className="text">Pacientes atendidos</div>
          </div>
          <div className="box-divider"></div>
          <div className="specialists">
            <div className="number">+15</div>
            <div className="text">Especialistas disponíveis</div>
          </div>
          <div className="box-divider"></div>

          <div className="years">
            <div className="number">+10</div>
            <div className="text">Anos no mercado</div>
          </div>
        </div>
      </section>
      {/* <!-- service section --> */}
      <section id="service" className="service">
        <div className="segment">SERVIÇOS</div>
        <div className="title">Como podemos ajudá-lo a se sentir melhor?</div>
        <div className="subjects">
          <div className="subjects-info">
            <div className="subjects-image">
              <img src={iconCheck} />
            </div>
            <div className="subjects-title">Problemas digestivos</div>
            <div className="subjects-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </div>
          </div>
          <div className="subjects-info">
            <div className="subjects-image">
              <img src={iconCheck} alt="check" />
            </div>
            <div className="subjects-title">Saúde Hormonal</div>
            <div className="subjects-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </div>
          </div>
          <div className="subjects-info">
            <div className="subjects-image">
              <img src={iconCheck} alt="check" />
            </div>
            <div className="subjects-title">Bem-estar mental</div>
            <div className="subjects-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </div>
          </div>
          <div className="subjects-info">
            <div className="subjects-image">
              <img src={iconCheck} alt="check" />
            </div>
            <div className="subjects-title">Cuidados Pediátricos</div>
            <div className="subjects-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </div>
          </div>
          <div className="subjects-info">
            <div className="subjects-image">
              <img src={iconCheck} alt="check" />
            </div>
            <div className="subjects-title">Autoimune e Inflamação</div>
            <div className="subjects-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </div>
          </div>
          <div className="subjects-info">
            <div className="subjects-image">
              <img src={iconCheck} alt="check" />
            </div>
            <div className="subjects-title">Saúde do Coração</div>
            <div className="subjects-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about us section --> */}
      <section id="about" className="about">
        <div className="doctor">
          <img src={imgDoctor} alt="doctor" />
        </div>
        <div className="about-text">
          <div className="about-segment">SOBRE NÓS</div>
          <div className="about-title">
            Entenda quem somos e por que existimos
          </div>
          <div className="about-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </div>
        </div>
      </section>
      {/* <!-- contact section --> */}
      <section id="contacts" className="contact">
        <div className="contact-text">
          <div className="contact-title">Entre em contato com a gente!</div>
          <div className="contact-navigation">
            <div className="contact-location">
              <div>
                <img src={iconMapPin} alt="" />
              </div>
              <div>R. Amauri Souza, 346</div>
            </div>
            <div className="contact-mail">
              <div>
                <img src={iconMail} alt="" />
              </div>
              <div>contato@doctorcare.com</div>
            </div>
          </div>
          <div className="contact-btn">
            <img src={iconWhatsapp} alt="whatsapp" />
            <div>Agende sua consulta</div>
          </div>
        </div>
        <div className="contact-image">
          <img src={imgPicture2} alt="picture2" />
        </div>
      </section>
      {/* <!-- footer --> */}
      <footer>
        <div className="footer-text">
          <div className="footer-title">
            Doctor<strong>Care</strong>
          </div>
          <div className="footer-paragraph">©2022 - DoctorCare.</div>
          <div className="footer-paragraph">Todos os direitos reservados.</div>
        </div>
        <div className="footer-media">
          <div>
            <img src={iconinstagram} alt="instagram" />
          </div>
          <div>
            <img src={iconFacebook} alt="facebook" />
          </div>
          <div>
            <img src={iconYoutube} alt="youtube" />
          </div>
        </div>
      </footer>
    </div>
  );
}
