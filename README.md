# Software van Ayden

Nederlandstalige website voor Software van Ayden, met de warme kleuren, grote typografie en blauwe accenten van de opgegeven referentie larce.nl. Eén website, zonder dienstensubdomeinen.

- Website: https://aydenbreeyen.github.io/softwarevanayden/
- Beoogd eigen domein: https://softwarevanayden.site/
- Contact: contact@softwarevanayden.site / 085 333 4099

## Lokaal bekijken

Geen build of installatie nodig. Open index.html of voer uit:

```sh
python -m http.server 8080
```

## Publicatie

GitHub Pages publiceert de root van de branch `main`. `.nojekyll` schakelt Jekyll-verwerking uit. Alle interne bestanden gebruiken relatieve paden en werken daardoor ook onder het repositorypad.

## Eigen domein activeren

Zolang het eigen domein niet geactiveerd is, blijft de website bereikbaar via de GitHub Pages-link. Op 11 november 2026 gaf publieke DNS voor `softwarevanayden.site` NXDOMAIN terug.

Zodra je het domein beheert, verifieer je het bij GitHub en voeg je in Settings → Pages `softwarevanayden.site` toe als Custom domain. GitHub maakt bij deze publicatiemethode zelf een `CNAME`-bestand aan; haal die commit vervolgens lokaal op met `git pull --ff-only`.

Stel daarna bij de domeinprovider het hoofddomein in met de vier GitHub Pages A-records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Een eventueel `www` CNAME-record kan naar `aydenbreeyen.github.io` wijzen. Schakel Enforce HTTPS in zodra het certificaat beschikbaar is. Canonical- en Open Graph-URL's zijn al op het beoogde domein ingesteld. Zie de [officiële instructies van GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

DNS voor e-mail is afzonderlijk: de vermelding van het e-mailadres maakt nog geen mailbox aan. Behoud de MX-/SPF-/DKIM-/DMARC-records van de gekozen mailprovider.

## Ontwerp en fonts

Eigen teksten, woordmerk en favicon; geen Larce-contactgegevens, tarieven, klantcases of bedrijfsregistraties. Bricolage Grotesque en Inter worden lokaal gehost onder de SIL Open Font License; zie assets/fonts/.
