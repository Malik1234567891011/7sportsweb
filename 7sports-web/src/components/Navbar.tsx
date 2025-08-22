import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/7sportslogo.avif" alt="7Sports logo" height={40} />
      </div>
      <ul className={styles.links}>
        <li><a href="#programmes">Programmes</a></li>
        <li><a href="#pourquoi">Pourquoi 7Sports</a></li>
        <li><a href="#regions">Régions</a></li>
        <li><a href="#temoignages">Témoignages</a></li>
        <li>
          <a href="/inscription" className={styles.cta}>
            Réserver un coach
          </a>
        </li>
      </ul>
    </nav>
  );
}