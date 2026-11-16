import { CONTACT, MAIN_ACTION } from "@/lib/content"
import { Arrow } from "@/components/kit-icons"

export function HeroSection() {
  return (
    <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <p className="hero__kicker">
              <span className="dot" aria-hidden="true"></span>
              {CONTACT.region}
            </p>
            <h1 id="hero-h">AI i automatyzacja dla firm z Myszkowa i Zawiercia</h1>
            <p className="hero__lead">
              Asystent, który odpowiada klientom wieczorem, i faktury, które wystawiają się same. Ponad 17 lat doświadczenia.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={MAIN_ACTION.href}>
                {MAIN_ACTION.label}
                <Arrow />
              </a>
              <a className="btn btn--secondary" href="#agent">
                Zobacz, jak to działa
              </a>
            </div>
          </div>
          <div className="hero__media span-6 start-7" data-visual="">
            <div className="panel" data-fx="grain-gradient" data-fx-seed="42" data-fx-params='{"calmX":0.55,"calmY":0.5}' data-fx-palette='{"bg":"#3d7fb0","surface":"#5a9cc9","ink":"#e6ebf2","muted":"#93a0b4","accent":"#22a6dd"}'>
              <div className="stage">
                <div className="at-rise fit" style={{ ["--fit-max" as string]: "440px", ["--ax" as string]: "max(24px, 50% - 220px)", ["--ay" as string]: "96px", ["--ay-sm" as string]: "16px" }} data-ui-loop="">
                  <div className="ui ui-panel ui-chat" data-ui="chat" role="img" aria-label="Asystent AI warsztatu rezerwuje klientce termin wymiany opon o 21:47">
                    <div className="ui-head">
                      <span className="ui-agent" aria-hidden="true"></span>
                      <div className="ui-title">Asystent warsztatu</div>
                      <span className="ui-chat__online">Online</span>
                      <span className="ui-spacer"></span>
                    </div>
                    <div className="ui-chat__body">
                      <div className="ui-chat__day">Dziś, 21:47</div>
                      <div className="ui-msg ui-msg--me" data-chat-q="">
                        <span className="ui-msg__text">Macie wolny termin na wymianę opon w sobotę?</span>
                      </div>
                      <div className="ui-msg ui-msg--bot" data-chat-a="">
                        <span className="ui-agent ui-msg__av" aria-hidden="true"></span>
                        <span className="ui-msg__col">
                          <span className="ui-chat__typing" aria-hidden="true"><i></i><i></i><i></i></span>
                          <span className="ui-chat__answer">
                            Tak, wolne są godziny <b>9:00 i 11:30</b>. Zarezerwować któryś termin?
                          </span>
                          <span className="ui-chat__srcs">
                            <span className="ui-chat__src">Kalendarz warsztatu</span>
                          </span>
                        </span>
                      </div>
                      <div className="ui-msg ui-msg--me">
                        <span className="ui-msg__text">Poproszę 9:00, dziękuję!</span>
                      </div>
                      <div className="ui-msg ui-msg--bot">
                        <span className="ui-agent ui-msg__av" aria-hidden="true"></span>
                        <span className="ui-msg__col">
                          <span className="ui-chat__answer">
                            Zapisane: <b>sobota, 9:00</b>. Przypomnę SMS-em dzień wcześniej.
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="ui-chat__input">
                      <span className="ui-chat__ph">Napisz wiadomość</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
