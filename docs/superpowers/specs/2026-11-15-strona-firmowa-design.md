# IT42U – przebudowa strony firmowej (projekt)

Data: 2026-11-15 · Status: do zatwierdzenia

## Cel i dlaczego

Strona ma promować firmę IT42U i jednocześnie pełnić rolę CV firmy (doświadczenie, realizacje).
Misja właściciela: **wprowadzać lokalne firmy z Myszkowa, Zawiercia i okolic w świat AI i automatyzacji**,
jako przeciwwaga dla dużych korporacji, które przejmują większość rynku. Wspieranie lokalnej działalności jest celem samym w sobie.

Obecna strona: brak dowodów (same obietnice), ogólne usługi typowe dla każdego software house'u, brak automatyzacji testów,
sekcja wizytówek NFC rozmywająca przekaz, literówka „IT for to you” w hero, „© 2025” w stopce, jedyny kontakt to telefon.

## Odbiorcy

1. **Główny: małe lokalne firmy (Myszków, Zawiercie i okolice).** Nie znają technologii. Szukają oszczędności czasu, mniej ręcznej pracy, lepszej obsługi klientów.
2. **Drugi: potencjalni kontrahenci** (firmy z własnym IT, software house'y). Szukają stacku i dowodu na złożone projekty.

Portfolio dużych systemów służy lokalnym firmom za dowód kompetencji („robiliśmy rzeczy złożone, więc Twoją zrobimy dobrze”).

## Cele / nie-cele / anty-cele

- **Cele:** lokalna firma po wejściu rozumie, co może dla niej zrobić AI i automatyzacja, i dzwoni lub pisze. Kontrahent znajduje stack i doświadczenie.
- **Nie-cele:** osobna ścieżka lub podstrona dla kontrahentów, blog, formularz kontaktowy z backendem (strona jest statyczna).
- **Anty-cele (porażka, nawet jeśli działa):**
  - strona brzmi jak duża, droga agencja, a lokalna firma myśli „to nie dla mnie”;
  - przedstawienie osoby zamiast firmy (celowo brak imienia i zdjęcia właściciela);
  - ujawnienie nazw klientów, miast lub zleceniodawców;
  - słowo „kasyno” w nagłówkach lub eksponowane miejsce branży hazardowej.

## Ograniczenia

- Statyczny eksport Next.js na GitHub Pages (`output: 'export'`), bez funkcji serwerowych.
- Treści po polsku. Ton: „my” (firma), bezpośrednio do klienta („Twoja firma”).
- Nazwy klientów, miast przetargowych i firm-zleceniodawców nie mogą się pojawić (część projektów realizowana była przez firmę trzecią, brak zgody na publikację).
- Istniejący styl wizualny (paleta oklch, navy + cyan, animowane tło sieci neuronowej) zostaje.

## Podejścia

- **A. Jedna strona, przekaz lokalny + dowody** — **wybrane.** Spójne z misją, najprostsze w utrzymaniu; kontrahent znajduje stack i realizacje niżej na stronie.
- B. Jedna strona z dwiema ścieżkami („Prowadzę firmę” / „Szukam wykonawcy IT”) — odrzucone: dłuższa strona, rozmyty przekaz.
- C. Dwie podstrony (główna + `/wspolpraca`) — odrzucone: podwójne treści do utrzymania, kontrahent musi trafić na właściwą stronę.

## Struktura strony (kolejność sekcji)

1. **Header** – logo IT42U, telefon +48 660 953 068 (zostaje), opcjonalnie kotwice do sekcji.
2. **Hero** – misja z regionem, np. „AI i automatyzacja dla firm z Myszkowa, Zawiercia i okolic”; podtytuł z 17+ latami doświadczenia i działalnością od 2020; CTA „Porozmawiajmy”, czyli telefon i e-mail. Usunąć literówkę „IT for to you”.
3. **Usługi (język korzyści)** – 3–4 karty opisane problemem klienta, nie technologią. Obszary: oprogramowanie na miarę, automatyzacja powtarzalnych zadań, agenci AI / asystenci obsługi klienta, **automatyzacja testów** (nowa usługa, kierowana bardziej do kontrahentów).
4. **Doświadczenie / realizacje** – opisy zleceń bez nazw, każdy w układzie: problem → co zrobiliśmy → efekt (liczby, jeśli właściciel je poda). Lista:
   1. Agencja pracy (region śląski, bez nazwy): strony oraz system do zarządzania opieką nad osobami starszymi.
   2. Serwisy kulturalne miast w Polsce realizowane w przetargach publicznych.
   3. Platforma B2B dla jednej z większych hurtowni tuszy i tonerów.
   4. Jedna z pierwszych przeglądarkowych aplikacji medycznych online.
   5. Wieloletni rozwój platformy afiliacyjnej (branża rozrywki online).
   6. Obecnie: systemy utrzymania klienta dla platform rozrywki online o dużej skali (silnik bonusów, komunikacja, CRM) oraz wdrożenia AI automatyzujące procesy i poprawiające doświadczenie klienta.
5. **Technologie (pas dla kontrahentów)** – PHP, Java, Python, automatyzacja testów, agenci AI, w formie krótkiej linii lub ikon.
6. **Dlaczego lokalnie** – krótki akapit z misją (wsparcie lokalnego biznesu, przeciwwaga dla korporacji, spotkanie na miejscu).
7. **Kontakt / stopka** – telefon, e-mail kontakt@it42u.pl (link `mailto:`), region działania, rok w stopce generowany dynamicznie lub ustawiony na bieżący.

**Usunąć:** sekcję „Hybrydowe Rozwiązania” w całości (wizytówki NFC i interaktywne promocje), `components/hybrid-section.tsx` oraz nieużywane obrazy NFC i kuponu z `public/`.

## Decyzje wykonawcy (calls, do sprawdzenia przez właściciela)

- Dokładne copy wszystkich sekcji pisze wykonawca według tego dokumentu; właściciel zatwierdza tekst przed publikacją.
- Liczby efektów w realizacjach pojawiają się tylko wtedy, gdy poda je właściciel; bez nich opisy są jakościowe, bez wymyślonych liczb.
- Metadane SEO (`title`, `description` w `app/layout.tsx`) zawierają region („Myszków, Zawiercie”) i frazę „AI i automatyzacja”; usunąć `generator: "v0.app"`.
- Ten dokument jest też trwałym kontekstem strony; CLAUDE.md dostaje do niego odnośnik.

## Pozostawione wykonawcy

Podział na komponenty, ikony (lucide-react), animacje w istniejącym stylu, układ responsywny, ewentualne kotwice w headerze.
