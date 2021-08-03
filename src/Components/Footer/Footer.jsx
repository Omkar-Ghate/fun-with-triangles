import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div class="heading-footer">Get in touch with me</div>
        <ul>
          <li>
            <a href="https://github.com/Omkar-Ghate" target="blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/omkarghate/" target="blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://omkarghate.netlify.app/" target="blank">
              <i class="fas fa-briefcase"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/OmkarGhate9" target="blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
