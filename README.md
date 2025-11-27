
  # Premium iPhone Store Layout

  > Ekskluzywny one-page sklep z iPhone’ami bazujący na projekcie z Figmy – gotowy do hostingu statycznego i prezentacji klientom.

  ## Demo & Design
  - **Live preview:** [ajfon.xce.pl](https://ajfon.xce.pl)
  - **Figma project:** [Premium iPhone Store Layout](https://www.figma.com/make/pRVHG6qbEt76E40tfar5Ft/Premium-iPhone-Store-Layout?node-id=0-1&t=r9l9Yrg1yqD6vysA-1)
  - **Figma site mock:** [mac-scrub-01730207.figma.site](https://mac-scrub-01730207.figma.site/)

  ## Features
  - Sticky nagłówek z dynamicznym koszykiem oraz mobilnym hamburgerem.
  - Interaktywna konfiguracja telefonu (model, pamięć, kolor, stan) z kalkulacją ceny w czasie rzeczywistym.
  - Karty produktowe i sekcje marketingowe odwzorowane 1:1 z projektu UX.
  - Responsywny layout dostosowany pod desktop oraz mobile-first (Tailwind + custom CSS).
  - Przygotowany build statyczny gotowy do wdrożenia przez FTP.

  ## Tech Stack
  - **Framework:** React 18 + TypeScript (Vite)
  - **Styling:** Tailwind CSS 4 + autorskie utility classes
  - **Ikony:** lucide-react
  - **Dane:** statyczne JSON/TS w `src/data` (symulacja katalogu produktów)

  ## Getting Started
  1. **Wymagania:** Node.js ≥ 18 oraz npm ≥ 9.
  2. **Instalacja:**
    ```bash
    npm install
    ```
  3. **Dev server:**
    ```bash
    npm run dev
    ```
    Aplikacja domyślnie działa pod `http://localhost:5173`.

  ## Build & Deployment
  - Zbuduj statyczną wersję: `npm run build` (wynik w `dist/`).
  - Lokalny podgląd buildu: `npm run preview`.
  - Przy wdrożeniu przez FTP skopiuj wyłącznie zawartość katalogu `dist` na serwer produkcyjny.

  ## Struktura projektu
  ```
  src/
  ├─ components/      # Header, ProductPage, Home sections, UI primitives
  ├─ data/            # Produkty i konfiguracje
  ├─ styles/          # Globalne style i zmienne kolorystyczne
  ├─ types/           # Definicje TypeScript
  └─ main.tsx         # Punkt wejścia Vite
  ```

  ## Screenshots
  | | |
  | --- | --- |
  | ![Demo 1](./demo1.png) | ![Demo 2](./demo2.png) |
  | ![Demo 3](./demo3.png) | ![Demo 4](./demo4.png) |
  | ![Demo 5](./demo5.png) | |