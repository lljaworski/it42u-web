import { Check } from "@/components/kit-icons"

// Sekcja #wspolpraca: "steps" z taste-skill (trzy karty z podglądem) + moment counter-rolls w nagłówku.
// Treści w panelach to przykłady, nie dane klientów.

const fit = (max: number) => ({
  ["--fit-max" as string]: `${max}px`,
  ["--ax" as string]: `max(20px, 50% - ${max / 2}px)`,
  ["--ay" as string]: "32px",
  ["--ay-sm" as string]: "16px",
})

const Box = () => (
  <span className="ui-check__box">
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4.5 8.2 2.3 2.3 4.7-5" />
    </svg>
  </span>
)

const CHECKS: [string, boolean][] = [
  ["Jak przyjmujesz zamówienia", true],
  ["Gdzie przepisujesz dane ręcznie", true],
  ["O co klienci pytają codziennie", false],
  ["Z jakich programów korzystasz", false],
]

const TOGGLES: [string, string, boolean][] = [
  ["Faktury po zamówieniu", "Wystawiane automatycznie", true],
  ["Odpowiedzi na typowe pytania", "Asystent AI, także wieczorem", true],
  ["Przypomnienia o wizytach", "SMS dzień wcześniej", true],
  ["Zamówienia u dostawców", "Zostają u Ciebie", false],
]

export function WhyLocal() {
  return (
    <section className="section" id="wspolpraca" aria-labelledby="wspolpraca-h">
      <div className="wrap">
        <div className="grid">
          <h2 id="wspolpraca-h" className="span-6">
            Współpraca w 3 krokach. <span className="muted">Zaczynamy od wizyty u Ciebie.</span>
          </h2>
          <div className="span-6 start-7 stats-row" data-moment="counter-rolls">
            <div className="stack-2">
              <p className="t-stat">17+</p>
              <p className="t-small muted">lat doświadczenia w programowaniu</p>
            </div>
            <div className="stack-2">
              <p className="t-stat">5</p>
              <p className="t-small muted">branż, dla których budowaliśmy systemy</p>
            </div>
          </div>
        </div>
        <div className="grid" style={{ marginTop: "var(--s-7)" }}>
          <article className="card card--row card--open span-4">
            <span className="step-num">1</span>
            <h3>Odwiedzamy Twoją firmę</h3>
            <p>Przyjeżdżamy i patrzymy, gdzie ucieka najwięcej czasu.</p>
            <div className="panel">
              <div className="stage stage--fade-b">
                <div className="at-rise fit" style={fit(340)} data-ui-loop="">
                  <div className="ui ui-panel ui-checks" data-ui="checklist" role="img" aria-label="Lista rzeczy, które sprawdzamy podczas wizyty w firmie">
                    <div className="ui-checks__head">
                      <div className="ui-title">Wizyta w firmie</div>
                      <span className="ui-spacer"></span>
                      <div className="ui-meta" data-checks-count="">
                        2 z 4
                      </div>
                    </div>
                    <div className="ui-checks__bar">
                      <i data-checks-bar="" style={{ ["--k" as string]: 0.5 }}></i>
                    </div>
                    <ul className="ui-checks__list">
                      {CHECKS.map(([label, done]) => (
                        <li className={`ui-check${done ? " is-done" : ""}`} key={label}>
                          <Box />
                          <span className="ui-check__label">{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="card card--row card--open span-4">
            <span className="step-num">2</span>
            <h3>Proponujemy plan</h3>
            <p>Mówimy, co warto zautomatyzować i ile to da. Bez żargonu.</p>
            <div className="panel">
              <div className="stage stage--fade-b">
                <div className="at-rise fit" style={fit(360)} data-ui-still="">
                  <div className="ui ui-panel ui-toggles" data-ui="toggles" role="img" aria-label="Plan automatyzacji: trzy z czterech pozycji włączone">
                    <div className="ui-head">
                      <div className="ui-title">Plan dla Twojej firmy</div>
                      <span className="ui-spacer"></span>
                      <div className="ui-meta" data-tg-count="">
                        3 z 4
                      </div>
                    </div>
                    <ul className="ui-toggles__list">
                      {TOGGLES.map(([label, sub, on]) => (
                        <li className="ui-tg" key={label}>
                          <span className="ui-tg__text">
                            <span className="ui-tg__label">{label}</span>
                            <span className="ui-tg__sub">{sub}</span>
                          </span>
                          <span className={`ui-switch${on ? " is-on" : ""}`} aria-hidden="true">
                            <i></i>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="card card--row card--open span-4">
            <span className="step-num">3</span>
            <h3>Wdrażamy rozwiązanie</h3>
            <p>Uruchamiamy rozwiązanie i jesteśmy pod telefonem, gdy coś trzeba zmienić.</p>
            <div className="panel">
              <div className="stage">
                <div className="at-rise fit" style={fit(360)} data-ui-still="">
                  <div className="ui ui-notify" data-ui="notify" role="img" aria-label="Powiadomienia po wdrożeniu: automatyzacja działa, zmiana wprowadzona">
                    <ul className="ui-notify__list" data-notify-list="">
                      <li className="ui-note">
                        <span className="ui-agent ui-note__av" aria-hidden="true"></span>
                        <span className="ui-note__text">
                          <span className="ui-note__title">
                            Asystent AI uruchomiony<time>dziś</time>
                          </span>
                          <span className="ui-note__body">Odpowiada na stronie i w Messengerze</span>
                        </span>
                      </li>
                      <li className="ui-note">
                        <span className="ui-note__ico">
                          <Check />
                        </span>
                        <span className="ui-note__text">
                          <span className="ui-note__title">
                            Faktury wystawiają się same<time>3 dni</time>
                          </span>
                          <span className="ui-note__body">Od poniedziałku bez przepisywania</span>
                        </span>
                      </li>
                      <li className="ui-note">
                        <span className="ui-note__ico">
                          <Check />
                        </span>
                        <span className="ui-note__text">
                          <span className="ui-note__title">
                            Zmiana w cenniku wprowadzona<time>tydzień</time>
                          </span>
                          <span className="ui-note__body">Na Twoją prośbę, tego samego dnia</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
