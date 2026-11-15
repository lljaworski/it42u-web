import { Code, Workflow, Bot, ShieldCheck, type LucideIcon } from "lucide-react"

export const CONTACT = {
  phone: "+48 660 953 068",
  phoneHref: "tel:+48660953068",
  email: "kontakt@it42u.pl",
  region: "Myszków, Zawiercie i okolice",
} as const

export type Service = { icon: LucideIcon; title: string; problem: string; description: string }
export type CaseStudy = { title: string; sector: string; problem: string; solution: string; tech: string[] }

export const SERVICES: Service[] = [
  {
    icon: Code,
    title: "Oprogramowanie na miarę",
    problem: "Gotowe programy nie pasują do tego, jak naprawdę pracuje Twoja firma?",
    description:
      "Tworzymy aplikacje i systemy dopasowane do Twoich zasad, a nie odwrotnie. Dostajesz narzędzie, które ułatwia codzienną pracę i rośnie razem z firmą.",
  },
  {
    icon: Workflow,
    title: "Automatyzacja powtarzalnych zadań",
    problem: "Ty lub Twoi pracownicy codziennie przepisujecie, kopiujecie i sprawdzacie to samo?",
    description:
      "Przejmujemy nudną, ręczną robotę: faktury, zestawienia, wiadomości, przenoszenie danych między programami. Masz więcej czasu na to, co przynosi pieniądze.",
  },
  {
    icon: Bot,
    title: "Agenci AI i asystenci dla klientów",
    problem: "Klienci pytają o to samo, a Ty nie zawsze masz czas odpowiedzieć od razu?",
    description:
      "Wdrażamy asystentów AI, którzy odpowiadają na typowe pytania, przyjmują zgłoszenia i pomagają klientom o każdej porze. Ty zajmujesz się tym, co wymaga człowieka.",
  },
  {
    icon: ShieldCheck,
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
    solution: "Zbudowaliśmy strony internetowe oraz system do zarządzania opieką nad osobami starszymi.",
    tech: ["PHP"],
  },
  {
    title: "Serwisy kulturalne miast",
    sector: "Sektor publiczny",
    problem: "Miasta w Polsce potrzebowały serwisów kulturalnych dla mieszkańców, wybieranych w przetargach publicznych.",
    solution: "Zrealizowaliśmy serwisy kulturalne miast w ramach przetargów publicznych.",
    tech: ["PHP"],
  },
  {
    title: "Platforma B2B dla hurtowni",
    sector: "Hurtownia tuszy i tonerów",
    problem: "Jedna z większych hurtowni tuszy i tonerów potrzebowała wygodnych zamówień dla firm.",
    solution: "Stworzyliśmy platformę B2B, przez którą firmy kupują online.",
    tech: ["PHP"],
  },
  {
    title: "Jedna z pierwszych aplikacji medycznych online",
    sector: "Medycyna",
    problem: "Usługi medyczne dopiero zaczynały przenosić się do przeglądarki.",
    solution: "Zbudowaliśmy jedną z pierwszych w Polsce przeglądarkowych aplikacji medycznych.",
    tech: ["Java"],
  },
  {
    title: "Rozwój platformy afiliacyjnej",
    sector: "Platformy rozrywki online",
    problem: "Platforma afiliacyjna branży rozrywki online musiała stale rosnąć i zmieniać się wraz z rynkiem.",
    solution: "Przez wiele lat rozwijaliśmy platformę, dodając nowe funkcje i dbając o jej stabilność.",
    tech: ["PHP", "Java"],
  },
  {
    title: "Utrzymanie klienta i AI na dużą skalę",
    sector: "Platformy rozrywki online",
    problem: "Duże platformy rozrywki online potrzebują systemów, które utrzymują klienta i obsługują go sprawnie.",
    solution:
      "Obecnie tworzymy systemy utrzymania klienta: silnik bonusów, komunikację i CRM. Wdrażamy też rozwiązania AI, które automatyzują procesy i poprawiają doświadczenie klienta.",
    tech: ["Java", "Python", "Agenci AI"],
  },
]

export const TECHNOLOGIES: string[] = ["PHP", "Java", "Python", "Automatyzacja testów", "Agenci AI"]
