import { CONTACT, MAIN_ACTION } from "@/lib/content"
import { Arrow } from "@/components/kit-icons"

// footer-statement + close-word z taste-skill.
export function Footer() {
  return (
    <footer className="footer closing footer--dark" id="kontakt" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--word">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">Porozmawiajmy o Twojej firmie</h2>
              <p className="t-lead">Odpowiadamy w ciągu jednego dnia roboczego. Pierwsza rozmowa nic nie kosztuje.</p>
            </div>
            <a className="btn btn--primary" href={MAIN_ACTION.href}>
              {MAIN_ACTION.label}
              <Arrow />
            </a>
          </div>
          <p className="close__word" aria-hidden="true">
            IT42U
          </p>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="arc" aria-hidden="true"></span>IT42U
              </a>
              <p className="footer__lede">AI, automatyzacja i oprogramowanie na miarę dla firm z okolicy.</p>
            </div>
            <div className="span-4 footer__col">
              <h3>Kontakt</h3>
              <ul>
                <li>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>{CONTACT.region}</li>
              </ul>
            </div>
            <div className="span-4 footer__col">
              <h3>Strona</h3>
              <ul>
                <li>
                  <a href="#uslugi">Usługi</a>
                </li>
                <li>
                  <a href="#agent">Jak to działa</a>
                </li>
                <li>
                  <a href="#realizacje">Realizacje</a>
                </li>
                <li>
                  <a href="#wspolpraca">Współpraca</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>
              &copy; {new Date().getFullYear()} IT42U. Wszelkie prawa zastrzeżone.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
