
export const CONTACT = {
  phone: "+48 660 953 068",
  phoneHref: "tel:+48660953068",
  email: "kontakt@it42u.pl",
  region: "Myszków, Zawiercie i okolice",
} as const

// Główna akcja: te same słowa w nawigacji, hero i zamknięciu strony.
export const MAIN_ACTION = {
  label: "Napisz do nas",
  href: "mailto:kontakt@it42u.pl",
} as const

export type Service = { title: string; problem: string; description: string }
export type CaseStudy = { title: string; sector: string; problem: string; solution: string; tech: string[] }

export const SERVICES: Service[] = [
  {
    title: "Aplikacje dopasowane do Twojej firmy",
    problem: "Gotowe programy nie pasują do tego, jak naprawdę pracuje Twoja firma?",
    description:
      "Tworzymy aplikacje i systemy dopasowane do Twoich zasad, a nie odwrotnie. Dostajesz narzędzie, które ułatwia codzienną pracę i rośnie razem z firmą.",
  },
  {
    title: "Automatyzacja powtarzalnych zadań",
    problem: "Ty lub Twoi pracownicy codziennie przepisujecie, kopiujecie i sprawdzacie to samo?",
    description:
      "Przejmujemy nudną, ręczną robotę: faktury, zestawienia, wiadomości, przenoszenie danych między programami. Masz więcej czasu na to, co przynosi pieniądze.",
  },
  {
    title: "Agenci AI i asystenci dla klientów",
    problem: "Klienci pytają o to samo, a Ty nie zawsze masz czas odpowiedzieć od razu?",
    description:
      "Wdrażamy asystentów AI, którzy odpowiadają na typowe pytania, przyjmują zgłoszenia i pomagają klientom o każdej porze. Ty zajmujesz się tym, co wymaga człowieka.",
  },
  {
    title: "Automatyzacja testów",
    problem: "Każda zmiana w oprogramowaniu to ryzyko, że coś przestanie działać?",
    description:
      "Budujemy automatyczne testy, które same sprawdzają aplikację po każdej zmianie. Błędy wychodzą wcześnie, a nie u Twoich klientów.",
  },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Strony i system dla agencji pracy",
    sector: "Agencja pracy, region śląski",
    problem: "Agencja potrzebowała widocznej obecności w sieci i porządku w organizacji opieki nad osobami starszymi.",
    solution: "Strony internetowe i system do zarządzania opieką nad osobami starszymi.",
    tech: [],
  },
  {
    title: "Serwisy kulturalne miast",
    sector: "Sektor publiczny",
    problem: "Miasta w Polsce potrzebowały serwisów kulturalnych dla mieszkańców, wybieranych w przetargach publicznych.",
    solution: "Serwisy kulturalne dla miast w Polsce, realizowane w przetargach publicznych.",
    tech: [],
  },
  {
    title: "Platforma B2B dla hurtowni",
    sector: "Handel hurtowy",
    problem: "Jedna z większych hurtowni tuszy i tonerów potrzebowała wygodnych zamówień dla firm.",
    solution: "Platforma B2B dla jednej z większych hurtowni tuszy i tonerów.",
    tech: [],
  },
  {
    title: "Jedna z pierwszych aplikacji medycznych online",
    sector: "Medycyna",
    problem: "Usługi medyczne dopiero zaczynały przenosić się do przeglądarki.",
    solution: "Jedna z pierwszych w Polsce aplikacji medycznych działających w przeglądarce.",
    tech: [],
  },
  {
    title: "Rozwój platformy afiliacyjnej",
    sector: "Platformy rozrywki online",
    problem: "Platforma afiliacyjna branży rozrywki online musiała stale rosnąć i zmieniać się wraz z rynkiem.",
    solution: "Wieloletni rozwój platformy afiliacyjnej w branży rozrywki online.",
    tech: [],
  },
  {
    title: "Utrzymanie klienta i AI na dużą skalę",
    sector: "Platformy rozrywki online",
    problem: "Duże platformy rozrywki online potrzebują systemów, które utrzymują klienta i obsługują go sprawnie.",
    solution:
      "Silnik bonusów, komunikacja i CRM oraz wdrożenia AI dla dużych platform rozrywki online.",
    tech: [],
  },
]

export const TECHNOLOGIES: string[] = ["PHP", "Java", "Python", "Automatyzacja testów", "Agenci AI"]
