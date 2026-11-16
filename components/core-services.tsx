import { SERVICES } from "@/lib/content"

// Sekcja #uslugi: features-2x2 z taste-skill. Każda karta ma "żywy" podgląd:
// kod, diagram automatyzacji, diagram asystenta i terminal z testami.

const LANES = {
  layout: "lanes",
  alt: "Nowe zamówienie trafia do automatyzacji, która wystawia fakturę, powiadamia klienta i aktualizuje stan magazynu.",
  input: { label: "Sklep", icon: "ui:inbox", sub: "zamówienie" },
  core: { label: "Automatyzacja", icon: "ui:workflow" },
  lanes: [
    { label: "Faktura", icon: "ui:file-text", done: true, sub: "wystawiona" },
    { label: "Klient", icon: "ui:mail", done: true, sub: "powiadomiony" },
    { label: "Magazyn", icon: "ui:package", done: true, sub: "aktualny" },
  ],
}

const HUB = {
  layout: "hub",
  alt: "Asystent AI łączy stronę internetową, Messengera, skrzynkę e-mail, kalendarz i cennik firmy.",
  center: { label: "Asystent AI", icon: "ui:bot" },
  spokes: [
    { label: "Strona www", icon: "ui:globe" },
    { label: "Messenger", icon: "messenger" },
    { label: "E-mail", icon: "gmail" },
    { label: "Kalendarz", icon: "google-calendar" },
    { label: "Cennik", icon: "ui:file-text" },
  ],
}

const Tick = () => (
  <svg className="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true">
    <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
  </svg>
)

const TESTS: [string, string, string][] = [
  ["zamowienia/koszyk.spec", "24 testy", "0.6s"],
  ["platnosci/przelew.spec", "31 testów", "0.9s"],
  ["faktury/pdf.spec", "18 testów", "0.4s"],
  ["konto/logowanie.spec", "12 testów", "0.3s"],
]

export function CoreServices() {
  const [software, automation, agents, tests] = SERVICES
  return (
    <section className="section g2" id="uslugi" aria-labelledby="uslugi-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="uslugi-h">
              Usługi dla małych firm. <span className="muted">Mniej ręcznej pracy, szybsza obsługa klientów.</span>
            </h2>
          </div>
          <div className="grid">
            <article className="card card--row card--open span-6">
              <h3>{software.title}</h3>
              <p>{software.description}</p>
              <div className="panel">
                <div className="stage stage--fade-b">
                  <div className="at-rise fit" style={{ ["--fit-max" as string]: "440px", ["--ax" as string]: "max(24px, 50% - 220px)", ["--ay" as string]: "40px", ["--ay-sm" as string]: "12px" }}>
                    <div className="ui ui-panel ui-code" data-ui="code" role="img" aria-label="Fragment kodu: zamówienie zapisane razem z fakturą">
                      <div className="ui-code__tabs">
                        <span className="ui-code__tab is-on">
                          <i className="ui-code__lang">PHP</i>Zamowienie.php
                        </span>
                        <span className="ui-spacer"></span>
                        <span className="ui-chip ui-chip--plain ui-code__chip" data-code-chip="">
                          1 poprawka
                        </span>
                      </div>
                      <pre className="ui-code__pre">
                        <code>
                          <span className="ui-code__ln" data-n="12">
                            <span className="k">public function</span> <span className="f">zrealizuj</span>($z) {"{"}
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="13">
                            {"  "}$suma = <span className="f">policzSume</span>($z);
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="14" data-note="Pomija puste zamówienia.">
                            {"  "}<span className="k">if</span> ($suma &lt;= <span className="n">0</span>) <span className="k">return</span>;
                          </span>
                          {"\n"}
                          <span className="ui-code__ln is-mark" data-n="15">
                            {"  "}$f = <span className="f">faktura</span>($z, $suma);
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="16">
                            {"  "}<span className="c">// od razu do klienta</span>
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="17" data-note="Wysyła fakturę klientowi.">
                            {"  "}<span className="f">wyslij</span>($z, $f);
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="18">{"}"}</span>
                        </code>
                      </pre>
                      <div className="ui-code__hint" data-code-hint="">
                        <span className="ui-dot"></span>
                        <span data-code-text>Dodano: faktura wysyłana od razu po zamówieniu.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="card card--row card--open span-6">
              <h3>{automation.title}</h3>
              <p>{automation.description}</p>
              <div className="panel">
                <div className="dg" data-diagram={JSON.stringify(LANES)}></div>
              </div>
            </article>
          </div>
        </div>
        <div className="grid">
          <article className="card card--row card--open span-6">
            <h3>{agents.title}</h3>
            <p>{agents.description}</p>
            <div className="panel">
              <div className="dg" data-diagram={JSON.stringify(HUB)} data-dg-still=""></div>
            </div>
          </article>
          <article className="card card--row card--open span-6">
            <h3>{tests.title}</h3>
            <p>{tests.description}</p>
            <div className="panel">
              <div className="stage stage--fade-b">
                <div className="at-rise fit" style={{ ["--fit-max" as string]: "460px", ["--ax" as string]: "max(24px, 50% - 230px)", ["--ay" as string]: "40px", ["--ay-sm" as string]: "12px" }}>
                  <div className="ui ui-panel ui-term" data-ui="terminal-run" role="img" aria-label="Terminal: automatyczne testy sklepu przechodzą">
                    <div className="ui-term__head">
                      <span className="ui-dots" aria-hidden="true">
                        <i></i>
                        <i></i>
                        <i></i>
                      </span>
                      <span className="ui-term__title">sklep/testy</span>
                      <span className="ui-spacer"></span>
                    </div>
                    <div className="ui-term__screen" data-term-screen="">
                      <div className="ui-term__track" data-term-track="">
                        <div className="ui-term__ln ui-term__cmd">
                          <span className="ui-term__cwd">~/sklep</span>
                          <span className="ui-term__sig">$</span>
                          <span className="ui-term__typed" data-term-cmd="">uruchom-testy --wszystkie</span>
                        </div>
                        <div className="ui-term__ln ui-term__meter" data-term-out="" data-term-meter="">
                          <span className="ui-term__bar" style={{ ["--p" as string]: 1 }}>
                            <i></i>
                          </span>
                          <span className="ui-term__count" data-term-count="">
                            4 z 4 plików
                          </span>
                        </div>
                        {TESTS.map(([path, n, t]) => (
                          <div className="ui-term__ln ui-term__log" data-term-out="" data-term-step="" key={path}>
                            <Tick />
                            <span className="ui-term__path">{path}</span>
                            <span className="ui-term__n">{n}</span>
                            <span className="ui-term__t">{t}</span>
                          </div>
                        ))}
                        <div className="ui-term__ln ui-term__done" data-term-out="" data-term-done="">
                          <span className="ui-term__ok">
                            <svg viewBox="0 0 16 16" aria-hidden="true">
                              <path d="m4.5 8.3 2.4 2.4 4.6-5" />
                            </svg>
                          </span>
                          <b>Wszystkie przeszły</b>
                          <span className="ui-term__dim">85 testów</span>
                        </div>
                      </div>
                    </div>
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
