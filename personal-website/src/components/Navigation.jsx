import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <a href="#" className="active">
            home
          </a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">about me</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
}
