
// Sekcja #agent: automatyzacja w praktyce (app-frame z taste-skill): lista zadań, które
// wykonały się same, obok kroków obsługi jednego zamówienia. Dane to przykład, nie prawdziwy klient.

type Row = { av: string; tone: number; who: string; sub: string; st: string; cls?: string; age: string }

const ROWS: Row[] = [
  { av: "FV", tone: 1, who: "Faktura FV/11/214", sub: "Wystawiona po zamówieniu", st: "W toku", age: "teraz" },
  { av: "SMS", tone: 3, who: "Przypomnienie SMS", sub: "Wizyta jutro o 9:00", st: "Zrobione", cls: "is-done", age: "4 min" },
  { av: "MG", tone: 4, who: "Stan magazynu", sub: "Opony zimowe 205/55: 12 szt.", st: "Zrobione", cls: "is-done", age: "9 min" },
  { av: "ZA", tone: 2, who: "Zamówienie u dostawcy", sub: "Klocki hamulcowe, 8 kpl.", st: "Do akceptacji", cls: "is-you", age: "15 min" },
  { av: "FV", tone: 1, who: "Faktura FV/11/213", sub: "Wysłana e-mailem", st: "Zrobione", cls: "is-done", age: "22 min" },
  { av: "RA", tone: 5, who: "Raport dnia", sub: "Wysłany do właściciela", st: "Zrobione", cls: "is-done", age: "1 godz." },
  { av: "OP", tone: 3, who: "Opinia klienta", sub: "Prośba po odbiorze auta", st: "Zrobione", cls: "is-done", age: "1 godz." },
  { av: "KS", tone: 4, who: "Kopia zapasowa", sub: "Dane z dnia zapisane", st: "Zrobione", cls: "is-done", age: "2 godz." },
  { av: "FV", tone: 1, who: "Faktura FV/11/212", sub: "Zaksięgowana", st: "Zrobione", cls: "is-done", age: "3 godz." },
  { av: "PL", tone: 2, who: "Płatność", sub: "Przelew dopasowany do faktury", st: "Zrobione", cls: "is-done", age: "3 godz." },
]

const STEPS: [string, string, string, string, string][] = [
  ["checkout", "Zlecenie", "przyjęte ze strony", "1 s", "is-done"],
  ["install", "Faktura", "FV/11/214 wystawiona", "2 s", "is-done"],
  ["test", "Klientka", "e-mail i SMS", "2 s", "is-run"],
  ["build", "Magazyn", "opony 205/55: 12 szt.", "1 s", ""],
  ["deploy", "Raport", "dopisane do raportu dnia", "3 s", ""],
]

const LOG: [string, string, boolean][] = [
  ["checkout", "Nowe zamówienie: wymiana opon, sobota 9:00", false],
  ["checkout", "Termin wpisany do kalendarza warsztatu", false],
  ["install", "Faktura FV/11/214 wystawiona na 120 zł", false],
  ["install", "PDF zapisany przy zamówieniu", false],
  ["test", "E-mail z potwierdzeniem wysłany", true],
  ["test", "SMS z przypomnieniem zaplanowany na piątek", true],
  ["build", "Stan magazynu: opony 205/55, zostało 12 szt.", false],
  ["deploy", "Zamówienie dopisane do raportu dnia", false],
  ["deploy", "Raport trafi do właściciela o 18:00", false],
]

export function AgentSection() {
  return (
    <section className="section" id="agent" aria-labelledby="agent-h">
      <div className="wrap">
        <div className="grid">
          <h2 id="agent-h" className="span-5">
            Automatyzacja, która działa w tle. <span className="muted">Ty tylko zatwierdzasz.</span>
          </h2>
          <p className="span-6 start-7">
            Faktury, przypomnienia dla klientów, stany magazynu i raporty dzieją się w tle. Do Ciebie trafia tylko to,
            co wymaga decyzji.{" "}
            <a className="link" href="#uslugi">
              Zobacz, co jeszcze robimy
            </a>
          </p>
        </div>
        <div className="ui app fill" role="img" aria-label="Okno automatyzacji: lista zadań wykonanych automatycznie w warsztacie i kroki obsługi jednego zamówienia" data-ui-pause-host="">
          <div className="app__pane app__pane--list">
            <div className="ui ui-panel ui-win" data-ui="window" data-open="Nowe" data-work="W toku" data-done="Zrobione">
              <div className="ui-win__bar">
                <span className="ui-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="ui-win__crumb">
                  Warsztat <i>/</i> <b>Automatyzacje</b>
                </span>
                <span className="ui-spacer"></span>
              </div>
              <div className="ui-win__body">
                <nav className="ui-win__side" aria-hidden="true">
                  <span className="ui-win__nav is-on">
                    Dzisiaj<em>10</em>
                  </span>
                  <span className="ui-win__nav">
                    Do akceptacji<em>1</em>
                  </span>
                  <span className="ui-win__nav">Zrobione</span>
                </nav>
                <div className="ui-win__main">
                  <div className="ui-win__cols" aria-hidden="true">
                    <span>Zadanie</span>
                    <span>Szczegóły</span>
                    <span>Status</span>
                    <span>Kiedy</span>
                  </div>
                  <ul className="ui-win__rows">
                    {ROWS.map((r) => (
                      <li className="ui-win__row" data-row="" key={r.who}>
                        <span className="ui-avatar" data-tone={r.tone}>
                          {r.av}
                        </span>
                        <span className="ui-win__who">{r.who}</span>
                        <span className="ui-win__sub">{r.sub}</span>
                        <span className={`ui-win__st ${r.cls ?? ""}`} data-st="">
                          {r.st}
                        </span>
                        <span className="ui-win__age">{r.age}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="app__pane app__pane--open" data-ui-loop="">
            <div className="ui ui-panel ui-pipe" data-ui="pipeline-board">
              <div className="ui-pipe__head">
                <span className="ui-pipe__repo">Warsztat</span>
                <i className="ui-pipe__slash">/</i>
                <code className="ui-pipe__ref">zamówienie</code>
                <span className="ui-pipe__run">#214</span>
                <span className="ui-spacer"></span>
                <span className="ui-pipe__total">
                  <span data-pipe-total="">9 s</span>
                </span>
                <span className="ui-chip ui-chip--ink ui-chip--live ui-pipe__chip" data-pipe-chip="" data-done="Gotowe">
                  W toku
                </span>
              </div>
              <div className="ui-pipe__commit">
                <span className="ui-avatar" data-tone="1">
                  AK
                </span>
                <span className="ui-pipe__msg">Wymiana opon, sobota 9:00</span>
                <code className="ui-pipe__sha">ze strony www</code>
              </div>
              <ol className="ui-pipe__steps">
                {STEPS.map(([id, name, cmd, time, state]) => (
                  <li className={`ui-pipe__step ${state}`} data-step={id} key={id} style={state === "is-run" ? { ["--k" as string]: 0.6 } : undefined}>
                    <span className="ui-pipe__ico">
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    <span className="ui-pipe__name">
                      <span className="ui-pipe__nm">{name}</span>
                    </span>
                    <code className="ui-pipe__cmd">{cmd}</code>
                    <span className="ui-pipe__time" data-time={time}>
                      {state === "is-done" ? time : state === "is-run" ? "1 s" : "Czeka"}
                    </span>
                    <span className="ui-pipe__bar">
                      <i></i>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="ui-pipe__log" aria-hidden="true">
                {LOG.map(([id, text, on], i) => (
                  <span className={`ui-pipe__line${on ? " is-on" : ""}`} data-step={id} key={i}>
                    {text}
                  </span>
                ))}
              </div>
            </div>
            <div className="at-over">
              <div className="ui ui-notify" data-ui="notify" data-ui-still="">
                <ul className="ui-notify__list" data-notify-list="">
                  <li className="ui-note">
                    <span className="ui-agent ui-note__av" aria-hidden="true"></span>
                    <span className="ui-note__text">
                      <span className="ui-note__title">
                        Czeka na Twoją decyzję<time>teraz</time>
                      </span>
                      <span className="ui-note__body">Klocki hamulcowe: zostały 2 kpl., zamówić 8?</span>
                    </span>
                    <span className="ui-btn ui-btn--sm ui-note__btn">Zatwierdź</span>
                  </li>
                  <li className="ui-note">
                    <span className="ui-note__text">
                      <span className="ui-note__title">
                        14 faktur wystawionych dzisiaj<time>22 min</time>
                      </span>
                      <span className="ui-note__body">Żadnej nie trzeba było przepisywać</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
