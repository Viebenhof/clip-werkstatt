# Clip-Werkstatt

Kurze Clips für Social Media aus Fotos und Videos – als Abfolge oder Collage, mit Text, Kommentar und Musik. Läuft komplett im Browser, es werden keine Fotos oder Videos auf einen Server hochgeladen.

## Inhalt des Ordners

| Datei | Wofür |
|---|---|
| `index.html` | Die komplette App |
| `manifest.webmanifest` | Name, Farbe und Icon für den Home-Bildschirm |
| `sw.js` | Speichert die App im Gerät, damit sie schnell startet |
| `vercel.json` | Einstellungen für Vercel (Mikrofon erlauben usw.) |
| `icons/` | App-Icons |

Es gibt keinen Build-Schritt und keine Abhängigkeiten.

## Online stellen mit Vercel (über GitHub)

1. **GitHub-Konto** anlegen unter github.com (falls noch keins vorhanden).
2. Oben rechts **„+“ → „New repository“**, Name z. B. `clip-werkstatt`, auf **„Create repository“**.
3. Im neuen Repository auf **„uploading an existing file“** klicken und den **Inhalt** dieses Ordners hineinziehen (also `index.html`, `sw.js`, `icons` usw., nicht den Ordner selbst). Unten auf **„Commit changes“**.
4. Auf vercel.com mit **„Continue with GitHub“** anmelden.
5. **„Add New… → Project“**, das Repository `clip-werkstatt` auswählen und **„Import“**.
6. Bei „Framework Preset“ **„Other“** stehen lassen, nichts weiter einstellen, **„Deploy“**.
7. Nach etwa einer Minute erscheint die Adresse, z. B. `clip-werkstatt.vercel.app`.

Eine eigene Domain trägst du später im Vercel-Projekt unter **Settings → Domains** ein.

**Hinweis zum Tarif:** Der kostenlose Hobby-Tarif von Vercel ist laut Vercel nur für private, nicht-kommerzielle Nutzung gedacht. Für geschäftliche Nutzung brauchst du den Pro-Tarif oder einen anderen Anbieter (die App funktioniert genauso z. B. bei Netlify oder Cloudflare Pages).

## Änderungen veröffentlichen

Geänderte Dateien im GitHub-Repository hochladen bzw. ersetzen – Vercel stellt die neue Version automatisch online. Bei Änderungen an `index.html` in `sw.js` die Zeile `const CACHE = 'clip-werkstatt-v1'` hochzählen (`v2`, `v3` …), damit alle Geräte die neue Version laden.

## Auf den Home-Bildschirm legen

- **iPhone/iPad (Safari):** Adresse öffnen → Teilen-Symbol → „Zum Home-Bildschirm“.
- **Android (Chrome):** Adresse öffnen → Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.
- **Mac/PC (Chrome oder Edge):** In der Adressleiste auf das Installieren-Symbol klicken.

## Gut zu wissen

- **MP4 für Instagram:** Safari und aktuelles Chrome erzeugen MP4. Ältere Browser liefern WebM, das Instagram nicht annimmt.
- **Export in Echtzeit:** Ein 20-Sekunden-Clip braucht 20 Sekunden. Das Fenster dabei offen und im Vordergrund lassen.
- **Mikrofon:** Der Browser fragt beim ersten Aufnehmen nach der Erlaubnis. Das funktioniert nur unter `https://` (bei Vercel automatisch).
- **Teilen-Knopf:** Erscheint dort, wo das Gerät Dateien teilen kann (iPhone, Android, Safari am Mac). Sonst gibt es „Herunterladen“.
- **HEIC-Fotos** vom iPhone öffnet nur Safari. In anderen Browsern vorher als JPG exportieren.
- **Musik:** Die vier eingebauten Stücke werden in der App erzeugt und sind frei nutzbar. Bei eigener Musik die Lizenz beachten (bei „CC BY“ den Künstler im Beitragstext nennen).
