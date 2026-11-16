import { CONTACT, MAIN_ACTION } from "@/lib/content"

const Chev = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function Header() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Przejdź do treści
        </a>
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="arc" aria-hidden="true"></span>IT42U
        </a>
        <nav className="nav__links" aria-label="Główne">
          <div className="nav__item">
            <a className="nav__link" href="#uslugi">
              Usługi <Chev />
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Dla Twojej firmy</p>
                  <a href="#agent">
                    Automatyzacja w praktyce<span>Faktury, przypomnienia i raporty same</span>
                  </a>
                  <a href="#uslugi">
                    Asystent AI<span>Odpowiada klientom o każdej porze</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Dla zespołów IT</p>
                  <a href="#uslugi">
                    Oprogramowanie na miarę<span>PHP, Java i Python</span>
                  </a>
                  <a href="#uslugi">
                    Testy automatyczne<span>Błędy wychodzą przed wdrożeniem</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#agent">
              Jak to działa
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#realizacje">
              Realizacje
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#wspolpraca">
              Współpraca
            </a>
          </div>
        </nav>
        <div className="nav__actions">
          <a className="nav__link" href={CONTACT.phoneHref}>
            {CONTACT.phone}
          </a>
          <a className="btn btn--primary" href={MAIN_ACTION.href}>
            {MAIN_ACTION.label}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
