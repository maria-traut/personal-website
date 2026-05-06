import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>meet me on</p>
      <ul className="contact-links">
        <li>
          <a className="link" href="https://github.com/maria-traut">
            github
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/maria-t-47b666354/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <form>
        <label htmlFor="input">input</label>
        <input id="input" name="input" type="text" />
      </form>
    </footer>
  );
}
