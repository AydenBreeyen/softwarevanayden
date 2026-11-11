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

Zolang de DNS niet op GitHub Pages is ingesteld, blijft de website bereikbaar via de GitHub Pages-link. Stel bij de domeinprovider het hoofddomein in met de vier GitHub Pages A-records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Een eventueel `www` CNAME-record kan naar `aydenbreeyen.github.io` wijzen.

Voeg vervolgens in Settings → Pages `softwarevanayden.site` toe als Custom domain en schakel Enforce HTTPS in zodra het certificaat beschikbaar is. Voeg pas dan een `CNAME`-bestand met `softwarevanayden.site` toe. Canonical- en Open Graph-URL's zijn al op het beoogde domein ingesteld.

DNS voor e-mail is afzonderlijk: de vermelding van het e-mailadres maakt nog geen mailbox aan. Behoud de MX-/SPF-/DKIM-/DMARC-records van de gekozen mailprovider.

## Ontwerp en fonts

Eigen teksten, woordmerk en favicon; geen Larce-contactgegevens, tarieven, klantcases of bedrijfsregistraties. Bricolage Grotesque en Inter worden lokaal gehost onder de SIL Open Font License; zie assets/fonts/.
