const quiz = [
  {
    frage:
      "In welcher Zeit müssen Einsprüche gegen die Wertung des Endergebnisses abgegeben werden?",
    antworten: [
      "ohne Zeitlimit",
      "20 Minuten nach Aushang des Ergebnisses",
      "60 Minuten nach Aushang des Ergebnisses",
    ],
    antwort: [1],
  },
  {
    frage:
      "Welche Zielhilfsmittel sind laut Teil 0 im Schießsport grundsätzlich zugelassen?",
    antworten: [
      "Fernglas",
      "Gläser zum Astigmatismusausgleich",
      "Filter mit geringer Vergrößerung",
    ],
    antwort: [1],
  },
  {
    frage: "Was ist ein Trockenschuss?",
    antworten: [
      "das Auslösen des gespannten Abzugsmechanismus einer ungeladenen Schusswaffe",
      "das Auftreffen des Schlagbolzens auf eine Patrone, ohne das diese zündet",
      "das Auslösen des Abzuges einer Waffe, die mit einer Vorrichtung versehen ist, den Abzug auszulösen, ohne dass die Treibladung ausgelöst wird",
    ],
    antwort: [0, 2],
  },
  {
    frage: "Welche Aufgaben hat ein Schießleiter?",
    antworten: [
      "die Schützen auf die Schießbahnen verteilen",
      "bei Wettkämpfen innerhalb des Vereins über Einsprüche endgültig entscheiden",
      "die Waffenkontrolle durchführen",
    ],
    antwort: [0, 1],
  },
  {
    frage: "Warum muss ein Schütze einen Gehörschutz tragen?",
    antworten: [
      "damit der Gleichgewichtssinn im Mittelohr optimal funktioniert",
      "um von den Anweisungen der Standaufsicht nicht gestört zu werden",
      "um möglichen Gehörschäden vorzubeugen",
    ],
    antwort: [2],
  },
  {
    frage:
      "Wer darf grundsätzlich eine Disqualifikation eines Schützen aussprechen (kein Sicherheitsvorfall)?",
    antworten: [
      "der Vereinssportleiter",
      "die Schießleitung/Jury (mit Mehrheitsbeschluss)",
      "die Standaufsicht",
    ],
    antwort: [1],
  },
  {
    frage: "Welche Aussagen bezüglich des Genusses von Alkohol sind richtig?",
    antworten: [
      "Sportlern ist der Genuss von Alkohol verboten",
      "als Grenze gilt 0,0 Promille",
      "Dem Veranstalter bleibt es vorbehalten Kontrollen vorzunehmen.",
      "bei Feststellung von Alkohol erfolgt eine Disqualifikation in dem betr. Wettbewerb.",
    ],
    antwort: [0, 1, 2, 3],
  },
  {
    frage:
      "Für wie viele Vereine darf ein Schütze innerhalb eines Sportjahres in einem Wettbewerb bei Meisterschaften des DSB starten?",
    antworten: [
      "für einen Verein",
      "für zwei Vereine",
      "für jeden Verein, in dem der Schütze Mitglied ist.",
    ],
    antwort: [0],
  },
  {
    frage: "Wozu dient der Mitgliedsausweis (Wettkampfpass)?",
    antworten: [
      "alle Wettkampfergebnisse werden in ihm eingetragen",
      "zur Bescheinigung für den Transport von Waffen in das Ausland",
      "zur Kontrolle der Startberechtigungen",
    ],
    antwort: [2],
  },
  {
    frage:
      "Welche der nachfolgenden Punkte gehört in eine Ausschreibung für einen Wettkampf?",
    antworten: [
      "Name und Anschrift der ausschreibenden Stelle",
      "Höhe des Startgeldes",
      "Zeitpunkt des Meldeschlusses",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage:
      "Welche der nachfolgenden Punkte gehört in eine Ausschreibung für einen Wettkampf?",
    antworten: [
      "Zeit und Ort des Wettkampfes",
      "Zeitpunkt des Meldeschlusses",
      "Vorbehalts- und Änderungsklausel",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage:
      "Darf ein Schütze während des Wettkampfes den Schießstand verlassen?",
    antworten: [
      "nein, weil er andere Wettkämpfer stören könnte",
      "ja, wenn er sich bei der Aufsicht abmeldet",
      "ja, wenn er sich bei dem Betreuer abmeldet",
    ],
    antwort: [1],
  },
  {
    frage: "Von welcher Seite sind die Scheibenstreifen zu beschießen?",
    antworten: [
      "bleibt dem Schützen überlassen",
      "regelt der Veranstalter",
      "Scheibenstreifen werden vom Signum aus beschossen",
    ],
    antwort: [2],
  },
  {
    frage:
      "Darf ein Schütze, nachdem er den Stand verlassen hat, erneut Probeschüsse abgeben?",
    antworten: [
      "der Schütze darf während seiner Wettkampfzeit immer Probeschüsse abgeben",
      "Probeschüsse sind nur nach Absprachen mit der Standaufsicht erlaubt",
      "nach dem ersten Wertungsschuss sind keine Probeschüsse mehr zulässig",
    ],
    antwort: [2],
  },
  {
    frage:
      "Welche maximale Höhe dürfen Seitenblenden habe, die z.B. an einer Schießbrille angebracht sind?",
    antworten: ["30 mm", "40 mm", "50 mm"],
    antwort: [1],
  },
  {
    frage:
      "Welche Breite darf eine Blenden habe, die das nicht zielende Auge abdeckt?",
    antworten: ["30 mm", "40 mm", "50 mm"],
    antwort: [0],
  },
  {
    frage: "Dürfen Schützen der Jugendklasse in der Juniorenklasse B starten?",
    antworten: ["nein", "ja", "nur mit Sondergenehmigung"],
    antwort: [0],
  },
  {
    frage: "Dürfen Schützen der Herren III in der Herren I starten?",
    antworten: [
      "nein",
      "ja, wenn sie zu Beginn des Jahres eine entsprechende Erklärung abgegeben haben",
      "ja, ein Wechsel ist jeder Zeit möglich",
    ],
    antwort: [1],
  },
  {
    frage: 'Welcher Defekt wird als "zulässiger Defekt" bewertet?',
    antworten: [
      "die Patrone zündet nicht",
      "ein Geschoss bleibt im Lauf stecken",
      "trotz Betätigung des Abzugs löst die Waffe keinen Schuss aus",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage: "Welche der Wettbewerbe ist ein olympischer Wettbewerb?",
    antworten: ["Skeet", "25 m Pistole (Frauen)", "KK Liegendkampf (Männer)"],
    antwort: [0, 1],
  },
  {
    frage: "Welche der Wettbewerbe ist ein olympischer Wettbewerb?",
    antworten: [
      "laufende Scheibe (Männer)",
      "25 m Schnellfeuerpistole (Männer)",
      "Perkussionsgewehr (Männer)",
    ],
    antwort: [1],
  },
  {
    frage:
      "Darf ein Schütze sich der Ausrüstungskontrolle des Veranstalters verweigern?",
    antworten: [
      "ja",
      "nur wenn er zu spät zum Wettkampf erschienen ist",
      "nein",
    ],
    antwort: [2],
  },
  {
    frage: "Muss ein Sportschütze Dopingkontrollen zulassen?",
    antworten: ["ja", "nur wenn ein Gerichtsbeschluss vorliegt", "nein"],
    antwort: [0],
  },
  {
    frage: "Wofür gilt die Bezeichnung SH1/AB1?",
    antworten: [
      "ein Kürzel für eine Disziplin im Sportschießen",
      "für die verschlüsselte Datenübertragung für Ergebnisse im Sportschießen",
      "für eine Klasseneinteilung und deren Spezifikation im Schießsport für Menschen mit körperlicher Behinderung",
    ],
    antwort: [2],
  },
  {
    frage:
      "Darf ein Sehbehinderter/Blinder Wettkampfteilnehmer einen Helfer/Betreuer haben?",
    antworten: [
      "nein, er darf keinen Helfer/Betreuer haben",
      "ja, er darf einen Helfer/Betreuer haben",
      "ja, aber nur wenn die Schießleitung dies erlaubt",
    ],
    antwort: [1],
  },
  {
    frage:
      "Sind im Schießsport für Menschen mit körperlicher Behinderung Schießhosen für sitzende Sportler erlaubt?",
    antworten: [
      "ja, sie dürfen benutzt werden",
      "nein, für sitzende Sportler sind Schießhosen verboten",
      "ja, aber nur wenn die Schießleitung dies erlaubt",
    ],
    antwort: [1],
  },
  {
    frage:
      "Welche Schießzeiten sind bei Luftgewehr liegend (1.18 - 60 Schuss) ohne Vorbereitungszeit vorgegeben?",
    antworten: [
      "50 Minuten bei anderen Anlagen",
      "55 Minuten",
      "60 Minuten bei Zuganlagen",
    ],
    antwort: [0, 2],
  },
  {
    frage:
      "Welche Maße eines Hochstuhles sind korrekt beim höchsten Punkt vom Knie sitzend (60 cm)?",
    antworten: [
      "Maximalhöhe des Hochstuhles 65 cm",
      "Maximalhöhe des Hochstuhles 66 cm",
      "Maximalhöhe des Hochstuhles 67 cm",
    ],
    antwort: [2],
  },
  {
    frage: "Welche Bestimmungen gelten für die Kniend-Rolle?",
    antworten: [
      "die Form muss zylindrisch sein",
      "eine Verformung der Rolle durch Zusammenbinden oder auf andere Art ist erlaubt",
      "sie darf nicht größer als 250 mm in der Länge und 180 mm im Durchmesser sein.",
    ],
    antwort: [0, 2],
  },
  {
    frage: "Wie lang darf der Korntunnel bei einem Luftgewehr (1.10) sein?",
    antworten: ["60 mm", "50 mm", "55 mm"],
    antwort: [1],
  },
  {
    frage: "In welcher Reihenfolge wird der 3-Stellungskampf geschossen?",
    antworten: [
      "liegend, stehend, kniend",
      "kniend, liegend, stehend",
      "stehend, kniend, liegend",
    ],
    antwort: [1],
  },
  {
    frage:
      "Der Unterarm des Schützen, der beim Liegendschießen den Riemen hält, bildet zur Horizontalen einen Winkel von mindestens?",
    antworten: ["20 Grad", "30 Grad", "40 Grad"],
    antwort: [1],
  },
  {
    frage: "Wie lautet das Verhältnis Höhe zu Länge (+10mm) bei Schießschuhen?",
    antworten: ["2 : 3", "2 : 4", "3 : 4"],
    antwort: [0],
  },
  {
    frage: "Sind an Schießhandschuhen Verschlussvorrichtungen erlaubt?",
    antworten: ["ja", "nur Klettverschlüsse", "nein"],
    antwort: [2],
  },
  {
    frage: "Welche Maße darf ein Diopterblende nicht überschreiten?",
    antworten: [
      "Höhe (50 mm), Länge (110 mm)",
      "Höhe (30 mm), Länge (100 mm)",
      "Höhe (40 mm), Länge (120 mm)",
    ],
    antwort: [1],
  },
  {
    frage: "Die maximale Schießriemenbreite beträgt?",
    antworten: ["40 mm", "45 mm", "50 mm"],
    antwort: [0],
  },
  {
    frage:
      "Die Schaftkappe eines Luftgewehres darf von der Nullstellung parallel um maximal wieviel mm nach links oder rechts verschoben werden?",
    antworten: ["10 mm", "15 mm", "30 mm"],
    antwort: [2],
  },
  {
    frage:
      "Wie dick darf die Unterbekleidung unter der Schießjacke oder Schießhose sein?",
    antworten: [
      "1,5 mm oder 3 mm doppelt gemessen",
      "2,0 mm oder 4 mm doppelt gemessen",
      "2,5 mm oder 5 mm doppelt gemessen",
    ],
    antwort: [2],
  },
  {
    frage: "Welche Aussagen bezüglich der Visierungen (Gewehr) sind korrekt?",
    antworten: [
      "der Schütze darf Korrekturgläser (z.B. Brille, Schießbrille usw.) verwenden.",
      "ab der Klasse Herren II/ Damen II dürfen Linsen mit Vergrößerung verwendet werden.",
      "Lichtfilter (Farbfilter) dürfen am Korn und/oder Diopter montiert sein.",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage: "Welche Festlegungen für alle Gewehre sind korrekt?",
    antworten: [
      "Kompensatoren und Mündungsbremsen sind nicht erlaubt",
      "Voll- und Halbautomaten sind zugelassen",
      "Laufverlängerungen und Läufe dürfen keine seitlichen Öffnungen aufweisen.",
    ],
    antwort: [0, 2],
  },
  {
    frage: "Welche Abmessungen gelten für das Luftgewehr?",
    antworten: [
      "Maximale Systemlänge - 850 mm",
      "Durchmesser des Korntunnels 30 mm",
      "Gesamtstärke (Breite) des Vorderschaftes - 65 mm",
    ],
    antwort: [0],
  },
  {
    frage:
      "Welche Aussagen bezüglich des Wettbewerb LG 3-Stellung sind korrekt?",
    antworten: [
      "es muss für alle drei Stellungen dasselbe Gewehr verwendet werden",
      "die Schaftbacke darf nach oben und unten verstellt werden",
      "ein Austausch des gesamten Korntunnels und/oder Diopter ist erlaubt.",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage: "Welche Länge darf der Korntunnel eines Zimmerstutzen haben?",
    antworten: ["40 mm", "45 mm", "50 mm"],
    antwort: [2],
  },
  {
    frage: "Welches max. Gewicht darf ein Luftgewehr (Regelnr. 1.10) haben?",
    antworten: ["4.500 g", "5.000 g", "5.500 g"],
    antwort: [2],
  },
  {
    frage:
      "Darf beim KK-Sportgewehr eine Handstütze im Stehendanschlag verwendet werden?",
    antworten: ["ja", "ja, mit Erlaubnis des Schießleiters", "nein"],
    antwort: [0],
  },
  {
    frage:
      "Welches max. Gewicht darf ein KK-Sportgewehr (Regelnr. 1.40) haben?",
    antworten: ["5.500 g", "6.500 g", "8.000 g"],
    antwort: [2],
  },
  {
    frage:
      "Welche max. Vergrößerung darf ein Zielfernrohr im Wettbewerb KK-50m Zielfernrohr haben?",
    antworten: ["12 fach", "15 fach", "20 fach"],
    antwort: [0],
  },
  {
    frage: "Darf beim KK 100m eine Wasserwaage verwendet werden?",
    antworten: ["ja", "ja, mit Erlaubnis des Schießleiters", "nein"],
    antwort: [2],
  },
  {
    frage:
      "Welches max. Gewicht darf ein Sportgerät im Wettbewerb KK-Liegendkampf Herren (Regelnr. 1.80) haben?",
    antworten: ["6.000 g", "7.000 g", "8.000 g"],
    antwort: [2],
  },
  {
    frage:
      "Wie lang ist die erlaubte Schießzeit im Wettbewerb Luftgewehr (1.10 - 40 Schuss) bei Zuganlagen ohne Vorbereitungszeit?",
    antworten: ["50 Min.", "60 Min.", "75 Min."],
    antwort: [1],
  },
  {
    frage:
      "Wie lang ist die erlaubte Schießzeit im Wettbewerb KK-Liegendkampf (1.80) bei anderen Systemen (keine Zuganlagen) ohne Vorbereitungszeit?",
    antworten: ["50 Min.", "60 Min.", "75 Min."],
    antwort: [0],
  },
  {
    frage:
      "Welche max. Tiefe darf der Vorderschaft eines Luftgewehrs von der Laufachse aus gemessen haben?",
    antworten: ["90 mm", "120 mm", "150 mm"],
    antwort: [1],
  },
  {
    frage: "Wie schwer darf eine Luftpistole maximal sein?",
    antworten: ["1000g", "500g", "1500g"],
    antwort: [2],
  },
  {
    frage:
      "Wie viele Probeschüsse darf ein Luftpistolenschütze in der Vorbereitungszeit abgeben?",
    antworten: [
      "beliebig viele innerhalb der Vorbereitungszeit",
      "maximal 10 innerhalb der Vorbereitungszeit",
      "auch während des Wettkampfes dürfen Probeschüsse abgegeben werden",
    ],
    antwort: [0],
  },
  {
    frage:
      "Was passiert, wenn ein Schütze im Wettbewerb Luftpistole während des Wettkampfes die Treibladung ohne Geschoss auslöst?",
    antworten: [
      "er darf den Schuss wiederholen",
      "der Schuss wird als Fehler gewertet",
      "dem Schützen werden 10 Ringe abgezogen",
    ],
    antwort: [1],
  },
  {
    frage:
      "Was passiert, wenn ein Schütze seine Pistole/Revolver (25-m-Wettbewerbe) mit mehr als 5 Patronen lädt oder mehr als ein Magazin füllt (außer Finale)?",
    antworten: [
      "nichts",
      "er erhält eine Verwarnung",
      "er wird disqualifiziert",
    ],
    antwort: [2],
  },
  {
    frage: "Ist bei einer Luftpistole (2.10) ein Kompensator erlaubt?",
    antworten: [
      "ja",
      "nur wenn er bei der Waffenkontrolle nicht beanstandet wurde",
      "nein",
    ],
    antwort: [0],
  },
  {
    frage:
      "Wie hoch muss mindestens der Abzugswiderstand bei einer Luftpistole eingestellt sein?",
    antworten: ["100 g", "500 g", "750 g"],
    antwort: [1],
  },
  {
    frage:
      "Wie muss der Abzugswiderstand bei einer 50 m Pistole eingestellt sein?",
    antworten: ["freie Einstellung - keine Vorgabe", "50 g", "100 g"],
    antwort: [0],
  },
  {
    frage: "Welches maximale Gewicht darf eine Schnellfeuerpistole haben?",
    antworten: ["1.400 g", "1.500 g", "1.750 g"],
    antwort: [0],
  },
  {
    frage:
      "Wie sind die Schießzeiten in einem Durchgang im Wettbewerb 25m Schnellfeuerpistole (2.30) festgelegt?Es werden je zwei Serien in ",
    antworten: [
      "10, 8, 6 Sekunden geschossen. ",
      "8, 6, 4 Sekunden geschossen. ",
      "7, 5, 3 Sekunden geschossen. ",
    ],
    antwort: [1],
  },
  {
    frage:
      "Welche Vorgabe gibt es für die maximale Visierlänge bei 25-m-Pistolen?",
    antworten: ["200 mm", "210 mm", "220 mm"],
    antwort: [2],
  },
  {
    frage:
      "Wie lang ist die erlaubte Schießzeit im Wettbewerb Luftpistole (2.10 - 60 Schuss) bei Zuganlagen ohne Vorbereitungszeit?",
    antworten: ["75 Min.", "90 Min.", "105 Min."],
    antwort: [1],
  },
  {
    frage:
      "Wie lang ist die Vorbereitungszeit inkl. einer unbegrenzten Anzahl von Probeschüssen im Wettbewerb Luftpistole (2.10 - 60 Schuss)?",
    antworten: ["10 Min.", "15 Min.", "20 Min."],
    antwort: [1],
  },
  {
    frage:
      "Wie viele Wettkampfschüsse werden in welcher Zeit beim Auflageschießen auf einer elektronischen Anlage in einem Wettkampf maximal abgegeben?",
    antworten: [
      "60 Schuss in 90 Minuten (inkl. Probe)",
      "30 Schuss in 45 Minuten",
      "30 Schuss in 55 Minuten",
      "40 Schuss in 60 Minuten, zusätzlich Probeschießen 10 Minuten",
    ],
    antwort: [1],
  },
  {
    frage: "Darf beim Auflageschießen die Auflage im Anschlag berührt werden?",
    antworten: [
      "ja, nur mit der Hand, die nicht den Abzugsmechanismus auslöst",
      "nein, kein Körperteil darf die Auflage berühren",
      "bleibt dem Schützen überlassen",
    ],
    antwort: [1],
  },
  {
    frage:
      "Welche Maße der Auflagen sind beim Auflageschießen LG & LP vorgeschrieben?",
    antworten: [
      "Rundmaterial, Durchmesser maximal 50 mm, Länge mindestens 100 mm",
      "wie auf dem Schießstand vorhanden",
      "Rechteckmaterial, nicht größer als 40x40mm, Länge 120 mm",
    ],
    antwort: [0],
  },
  {
    frage: "Was muss beim Laden der Waffe im Auflageschießen beachtet werden?",
    antworten: [
      "Das Gewehr muss mindestens im Winkel von 45° nach vorn zeigen",
      "Das Einführen der Geschosse bzw. der Patronen darf nur erfolgen, wenn die Waffe in Richtung des Kugelfanges zeigt.",
      "Bleibt dem Schützen überlassen.",
    ],
    antwort: [1],
  },
  {
    frage:
      "Sind die Maße für die zu verwendenden Hocker beim Auflageschießen Gewehr (ab Senioren III, Seniorinnen III) vorgegeben?",
    antworten: [
      "ja, siehe Tabelle in Teil 10",
      "alle Hocker haben eine einheitliche Größe",
      "nein",
    ],
    antwort: [0],
  },
  {
    frage: "Wie viele Wertungsschüsse (1.11) müssen abgegeben werden?",
    antworten: [
      "20 Wertungsschüsse",
      "30 Wertungsschüsse",
      "40 Wertungsschüsse",
    ],
    antwort: [1],
  },
  {
    frage: "Welche Schießzeiten sind bei 10-m-Wettbewerben Auflage vorgegeben?",
    antworten: [
      "45 Minuten bei anderen Anlagen",
      "50 Minuten",
      "55 Minuten bei Zuganlagen",
    ],
    antwort: [0, 2],
  },
  {
    frage:
      "Welche Schießzeiten sind bei 15-m-/50-m-/100-m- Wettbewerben Auflage vorgegeben?",
    antworten: [
      "bei Zuganlagen 55 Minuten ohne Probezeit",
      "bei Zuganlagen 55 Minuten inklusive Probezeit",
      "50 Minuten bei anderen Systemen",
    ],
    antwort: [1, 2],
  },
  {
    frage:
      "Welche Regelungen gibt es bezüglich der Schießkleidung beim Auflageschießen - Gewehr?",
    antworten: [
      "keine",
      "Bei Sportlern, die sitzen, muss die Jacke an der Sitzfläche enden oder über den Hocker frei hängen.",
      "Schießkleidung ist gemäß Fachteil 1 erlaubt.",
    ],
    antwort: [1, 2],
  },
  {
    frage: "Darf der Korntunnel beim Auflageschießen über die Mündung ragen?",
    antworten: [
      "nein",
      "ja, bis max. 25 mm über die Mündung",
      "ja, bis max. 50 mm über die Mündung",
    ],
    antwort: [2],
  },
  {
    frage: "Welche Wettbewerbe werden im Auflageschießen laut SpO angeboten?",
    antworten: ["Armbrust", "Zimmerstutzen", "Luftpistole"],
    antwort: [0, 1, 2],
  },
  {
    frage:
      "Welches max. Gewicht darf ein KK Gewehr Auflage (Regelnr. 1.36 ohne ZF) haben?",
    antworten: ["5.500 g", "6.500 g", "7.500 g"],
    antwort: [2],
  },
  {
    frage:
      "Wie lang darf der Korntunnel beim Auflageschießen Luftgewehr maximal sein?",
    antworten: ["50 mm", "55 mm", "80 mm"],
    antwort: [2],
  },
  {
    frage: "Welche der nachfolgenden Begriffe bezeichnen einen Führungsstil?",
    antworten: [
      "Autoritärer Führungsstil",
      "Demokratischer oder kooperativer Führungsstil",
      "Laissez-fairer Führungsstil",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage: "Mit welchen Methoden kann die Ideenfindung unterstützt werden?",
    antworten: ["Brainstorming", "es gibt keine Methoden", "Mind-Map"],
    antwort: [0, 2],
  },
  {
    frage: 'Welche Aspekte umfasst der Begriff "Diversity-Management"?',
    antworten: [
      "Verschiedene Disziplinen im Sportschießen",
      "Tolerierung individueller Verschiedenheiten",
      "Verhinderung von Diskriminierungen von Minderheiten",
    ],
    antwort: [1, 2],
  },
  {
    frage:
      "Welche der nachfolgend aufgeführten Versicherungen sind durch die Mitgliedschaft im Verband abgeschlossen?",
    antworten: [
      "Berufsunfähigkeits- und Rechtsschutzversicherung",
      "Haftpflicht- und Unfallversicherung",
      "Unfall- und Lebensversicherung",
    ],
    antwort: [1],
  },
  {
    frage: "Darf ein dem Verein anvertrauter 14-jähriger rauchen?",
    antworten: ["ja", "nein", "nur im Aufenthaltsraum"],
    antwort: [1],
  },
  {
    frage: "Welche Kalibergröße ist in einem 10-Meter Stand zugelassen?",
    antworten: ["5,6 mm", "9 mm", "4,5 mm"],
    antwort: [2],
  },
  {
    frage: "Dürfen 11-jährige am Schießen teilnehmen?",
    antworten: [
      "ja, mit Genehmigung der Schießleitung",
      "nein, keine Teilnahme",
      "nur mit Ausnahmegenehmigung",
    ],
    antwort: [2],
  },
  {
    frage:
      "Wer haftet, wenn Kinder unter 12 Jahren im Verein bei unberechtigter, aber geduldeter Benutzung von Schusswaffen Schäden verursachen?",
    antworten: [
      "die Kinder",
      "der Verein",
      "der Verein vertreten durch den Vorstand",
    ],
    antwort: [2],
  },
  {
    frage:
      "Welche Voraussetzungen müssen erfüllt sein, damit ein Gast auf dem Schießstand schießen darf?",
    antworten: [
      "er muss Mitglied in einem Schützenverein sein",
      "er muss ausreichend versichert sein",
      "er darf nur unter Aufsicht schießen",
    ],
    antwort: [1, 2],
  },
  {
    frage:
      "Welche Qualifikation muss eine Aufsicht für Kinder- und Jugendbetreuung haben?",
    antworten: [
      "Jugendleiter-Lizenz",
      "Jugendbasis-Lizenz",
      "Gruppenleiter-Lizenz",
    ],
    antwort: [1],
  },
  {
    frage: "Ist das Rauchen auf Schießständen erlaubt?",
    antworten: [
      "kann die Aufsicht entscheiden",
      "ohne Ausnahme verboten",
      "ist nur für Sportschützen verboten",
    ],
    antwort: [1],
  },
  {
    frage: "Was muss auf jedem Schießstand aushängen?",
    antworten: [
      "ein Hinweis über zugelassene Waffen- und Munitionsarten",
      "die Schießstandordnung",
      "der Name des Leitenden",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage:
      "Darf eine eingeteilte Standaufsicht mit anderen Schützen gleichzeitig schießen?",
    antworten: [
      "Ja, ohne Einschränkungen möglich",
      "Ja, wenn alle anderen Schützen schon schießen",
      "Nein, ohne Ausnahme nicht erlaubt",
    ],
    antwort: [2],
  },
  {
    frage: "Wo muss eine Schießstandordnung aushängen?",
    antworten: [
      "in jedem Schützenhaus",
      "im Schützenhausaufenthaltsaum bzw. - Umkleideraum",
      "auf jedem Schießstand",
    ],
    antwort: [2],
  },
  {
    frage: "Welche Anforderungen muss eine Standaufsicht erfüllen?",
    antworten: [
      "zuverlässig sein",
      "volljährig sein",
      "muss die Ausbildung für Standaufsichten mit Erfolg abgelegt haben und eine gültige Lizenz besitzen.",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage:
      "Welches ist das höchste Verbandsorgan des Niedersächsischen Sportschützenverbandes?",
    antworten: ["Delegiertenversammlung", "Präsidium", "Gesamtvorstand"],
    antwort: [0],
  },
  {
    frage: "Wieviele Landesverbände hat der Deutsche Schützenbund?",
    antworten: ["40", "20", "26"],
    antwort: [1],
  },
  {
    frage:
      "Welche Voraussetzungen müssen erfüllt sein, damit eine Trainerlizenz erworben werden kann?",
    antworten: [
      "eine gültige Schießsportleiterlizenz muss vorliegen ",
      "eine Jugendbasislizenz muss vorliegen",
      "ein gültiger erste Hilfe Nachweis muss vorliegen ",
    ],
    antwort: [0, 2],
  },
  {
    frage: "Warum muss ein Schütze dem NSSV gemeldet werden?",
    antworten: [
      "damit er an übergeordneten Meisterschaften teilnehmen kann",
      "um Luftgewehrmunition erwerben zu können",
      "um in seiner Sportart versichert zu sein",
    ],
    antwort: [0, 2],
  },
  {
    frage: "Wie viele Kreisschützenverbände gibt es im NSSV?",
    antworten: [
      "20 Kreisschützenverbände",
      "39 Kreisschützenverbände",
      "36 Kreisschützenverbände",
    ],
    antwort: [1],
  },
  {
    frage:
      "Welches Organ des Niedersächsischen Sportschützenverbandes wählt den Präsidenten?",
    antworten: [
      "der Gesamtvorstand",
      "die Delegiertenversammlung",
      "das Präsidium",
    ],
    antwort: [1],
  },
  {
    frage: "Welche Schützenverbände bilden den Schützenbund Niedersachsen?",
    antworten: [
      "Niedersächsische Sportschützenverband",
      "Schützenverband Nordheide/Elbmarsch (Landesschützenverband Hamburg und Umgebung)",
      "Nordwestdeutscher Schützenbund",
    ],
    antwort: [0, 1, 2],
  },
  {
    frage:
      "Welcher Verband vertritt die Interessen der Schützen im Landessportbund Niedersachsen?",
    antworten: [
      "Niedersächsischer Sportschützenverband (NSSV)",
      "Deutscher Schützenbund (DSB)",
      "Schützenbund Niedersachsen (sbn)",
    ],
    antwort: [2],
  },
  {
    frage: "Wo muss sich die Standaufsicht aufhalten?",
    antworten: ["im Auswerteraum", "links vom Schützen", "auf dem Schießstand"],
    antwort: [2],
  },
];

export default quiz;
