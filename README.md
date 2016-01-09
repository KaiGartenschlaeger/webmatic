# WebMatic
WebMatic ist eine browserbasierte Benutzeroberfläche für HomeMatic. Die Elemente sind für eine Bedienung mit mobilen Endgeräten optimiert. WebMatic läuft komplett auf der CCU.

## Haftungsausschluss
Der Autor dieser Software übernimmt keinerlei Verantwortung für die Funktionsweise der Software und keinerlei Haftung für Schäden, die aus der Benutzung dieser Software resultieren.

## Changelog
2.1.4
* Unterstützung verschiedener Sprachen (deutsch, englisch, spanisch, türkisch, chinesisch, russisch, portugisisch, französisch) - alles von Mr. Big G. übersetzt ... wer es besser kann, kann gerne unterstützen
* Einstellung von Clients über Admin-Rechner möglich
* Sortierung manuell oder alphabetisch
* Bugfix: Ausgeblendete Geräte werden nicht angezeigt
* Bugfix: Nicht bedienbare Geräte sind nicht bedienbar
* Bugfix: Bilder werden jetzt nach dem Hochladen auch richtig gespeichert und angezeigt

2.1
* Codereview Teil 2
* Geschwindigkeitsoptimierung
* Einstellungen können jetzt direkt in der Oberfläche gemacht werden
* Einstellungen sowohl global als auch für einzelnen Geräte möglich
* Einzelnen Menüeinträge ausblenden (Global und pro Gerät)
* Startauswahl (was soll beim Laden geöffnet angezeigt werden) (Global und pro Gerät)
* WebMatic Updaten können als Meldung angezeigt werden
* Verbindung mit CCU-Historian möglich (Variable: "Zeichenkette"; Einheit: "historian")
* Räume, Gewerke, Favoriten und Programmen können umbenannt werden
* Visibilität von Räume, Gewerke, Favoriten und Programmen kann direkt in der Oberfläche eingestellt werden
* Sortierung von Räume, Gewerke, Favoriten und Programmen möglich
* Bedienbarkeit von Programmen kann direkt in der Oberfläche eingestellt werden
* Icons für Programmen jetzt möglich
* Unterstützung für Webcam als CUXD Gerät
* Dynamische Unterstützung von Geräte (neue Geräte können automatisch richtig dargestellt werden, wenn sie nicht extrem komplex sind)
* Unterstützung für Wired HMW-IO-12-Sw 14-DR PWM
* Unterstützung für Funk-RGBW-LED-Controller
* "Partymodus" für Heizungen wird unterstützt
* Unterstützung von Einschaltdauer/Dimmzeit bei bestimmten Geräten
* Funktion um das versehentliche Verlassen der Seite zu verhindern
* TuneIn Radio wird unterstützt (Variable: "Zeichenkette"; Einheit: "tuneIn")
* Bugfix: Installation auf der CCU 1 ist jetzt möglich

2.0
* Codereview
* Geräte, Programme und Variablen die als nicht sichtbar deklariert wurden, werden nicht mehr angezeigt
* Neue Ansicht "get.html" akzeptiert eine ID und zeigt nur den gewünschten Raum oder Gewerk an "get.html?id=12345"
* Eingabe von HTML-Code in Textvariablen möglich, wenn als Einheit 'html' eingegeben wird. JavaScript wird auch ausgeführt.  (Variable: "Zeichenkette"; Einheit: "html")
* Wenn eine Textvariable zu lang ist, erscheint eine Textarea anstatt eines Input-Feldes
* Startparameter werden in der Datei webmatic_user/config.json eingegeben
* Nur ausführbare Programme anzeigen
* Verschiedene Styles auswählbar
* Installtionsroutine angepasst (Userfreundlichkeit)
* Bilder können jetzt per Browser hochgeladen werden
* Optimierung der Geschwindigkeit
* Unterstützung für HM-CC-RT-DN

1.1
* Anzeige für Gerät: ALARMACTUATOR.
* Anzeige für Gerät: SENSOR.
* Anzeige für Gerät: TILT_SENSOR.
* Anzeige für Geräte: RS485 und I/O-Module.
* Mit Geräten verknüpfte Variablen auch beim Gerät anzeigen.
* Falscher Wert bei Variablenanzeige im ReadOnly Mode für bool behoben (war umgekehrt).
* Update nach 60 Sekunden selber regeln: Wenn man iPad aufklappt kommt dann sofort ein Update und nicht erst nach 1 Minute, da Safari im iOS den Timer nach dem Aufwachen neu startet.
* Update Probleme mit IE und Android -> Nur IE und Android (zumindest 2.2 getestet) cachen die Werte, die im Hintergrund geholt werden. Deswegen gibts bei diesen Browsern keine Updates mehr auf Werte, die einmal angezeigt wurden. Cache jetzt explizit abgeschaltet, damit funktioniert es in allen Browsern.
* Da bei einem Update webmatic deinstalliert werden muss, würden auch die eigenen ID Grafiken verloren gehen. Deswegen liegen diese ab sofort in einem eigenen addons Verzeichnis: webmatic_user. Dieses wird nicht installiert, und deswegen auch bei deinstallation nicht gelöscht. Also vor der Deinstallation euer img/ids Verzeichnis per FTP nach webmatic_user kopieren (Verzeichnis muss angelegt werden). Die Idee ist auch, dass man sich dort kleine HTML Seiten anlegen kann, wenn man diese als IFrame für ReadOnly Variablen braucht, da sie eben bei Installation von neuer Version erhalten bleiben.
* Fix für iPhone 5 Bildschirmformat -> Keine schwarzen Balken mehr wenn über HomeScreen Button gestartet. Wichtig -> Homescreen Icon muss neu angelegt werden!
* Englischer Text in Filtern ersetzt -> "Daten filtern...".
* Fehlertexte bei Geräten anzeigen, dafür "Kein Fehler" nicht mehr anzeigen, braucht nur Platz und ist überflüssige Information. Ein paar Geräte fehlen noch (Rauchmeler, CO Melder, ...), dort wird Fehler anzeigt, aber nur mit Nummer.

1.0
* Refresh Timer bei jedem Laden einer Seite neu starten.
* Haftungsausschluss in About.
* Installer.
* CGIs durchschauen und unnötiges rauswerfen.

0.6
* Eingeben von ```<img src='blabla'/>``` in Textvariablen bringt Fehler. Korrigiert. Es kann jetzt eigentlich alles eingefügt werden. Nur werden " durch ' ersetzt, sonst gibt es Probleme. Außerdem ist ```<SCRIPT>``` leider nicht möglich.
* Bei SetPoint nicht Seite neu laden, sondern Text mit Hinweis schreiben, dass der Wert nicht sofort übernommen wird.
* Variablen ReadOnly, wenn in Beschreibung (r) oder (R) steht.
* Beschreibung von Variablen mit anzeigen.
* Nachkommastellen bei Zahlen abschneiden, wenn es 0en sind.
* Werte bei (r) mit gewähltem Inhalt anzeigen und nicht nur true/false.
* JS, CSS und HTML aufteilen, CGIs in Unterverzeichnisse.
* Pfad bei Bildern noch mit angeben bei den Grafik IDs.
* Setzen von Kommazahlen bei Variablen. Geht nicht dynamisch, ist jetzt auf zwei Nachkommastellen.
* Name auf WebMatic umgestellt (inkl. Icons, muss man auf iOS neu auf Desktop anlegen).

0.5
* Bool und Wertelisten über Buttongroups -> Wertelisten und Alarmzone hat Zustand.
* 20/40/60/80% Schnellzugriffe bei Jalousien, WinMatic und Dimmern.
* jQuery und LazyLoader lokal mit ausliefern.
* Bei 20/40/60/80 Schnellzugriffen auch Button Group und aktuell eingestelltes markieren.
* Kleineres Layout für Phones bzw. Menu und Daten jeweils Vollbild (primary / secondary content). Erst mal einfache Variante mit Menu darüber.
* Thermostate Schnellzugriff +* 3° in ganzen Grad Schritten.
* Nach dem Setzen eines Wertes Refresh. Position wird gemerkt und scrollt wieder dahin. Nach Refresh Button gehts auch zurück zur alten Position. Vorübergehende Lösung, später nur den geänderten Wert neu lesen.
* Während Update läuft auch Animated Icon in Toolbar anzeigen. Denn jetzt kann ein Update ja auch laufen, wenn man nach unten gescrollt ist, dann sieht man das Loading oben nicht.
* Image Verzeichnisse umsortieren. User Grafiken sind jetzt in Unterverzeichnissen favorites/functions/rooms.
* Reihenfolge Favoriten / Räume / Gewerke auch in der Bild ID Seite rein.
* Titel linksbündig, weil sonst von Icons überdeckt auf Mobile.
* Automatischen Update alle 60 Sekunden inkl. Servicemeldungen. Fest eincodiert fürs erste, der Timer läuft immer wieder von vorne los. Später Timer reseten, wenn man eine Seite von Hand geladen hat.

0.4
* "Lade..." jetzt auch bei Variablen, Programmen etc.
* Bei Servicemeldungen wird der Rest vom Bildschirm abgedunkelt, damit klar ist, dass man da nichts auswählen kann.
* Schließen Knopf links oben bei Servicemeldungen.
* Die HTML Seiten haben jetzt ein no-cache Metatag, damit der Browser die Seite immer neu lädt. Das passiert eh nur beim Start, weil
  danach passiert alles innerhalb der Webseite. Aber ohne das Tag habe ich das Problem, dass manche Browser nach einem Update der HTML
  erst nach einer Weile die HTML neu laden. Passiert z.B. auf dem iPad.
* ERROR_REDUCED, ERROR_OVERLOAD und ERROR_OVERHEAT rausgenommen aus der Anzeige, da wohl nicht gebraucht.
* Zusammenfassen von zusätzlichen Buttons z.B. bei Jalousie, dass da nicht jeder sein eigenes "Vor x Stunden" hat -> WinMatic, KeyMatic und Dimmer noch schöner sortieren.
* Zentralennetzteil schön machen.
* Manchmal doppelte Favoriten -> HomeMatic legt manchmal Referenzen zwischen Favoriten intern an, diese werden jetzt übersprungen.
* Bool und Wertelisten über Buttongroups -> Noch nicht ganz fertig, geht noch nicht für Wertelisten und Alarmzone hat keinen Zustand.

0.3
* Neue hochauflösende Grafiken für Retina Display (160x160).
* HomeMatic Forum wird im About Dialog verlinkt.
* Shutter Kontakt Offen = rot, Geschlossen = grün.
* Jalousie 0-1 -> 0-100.
* Automatisches hochscrollen bei Klick auf Menu.
* Aktuell gewählten Listeintrag im Menu links visualisieren.
* Refresh Knopf aktualisiert auch die Servicemeldungen.
* Visualisierungen für bekannte Geräte (Screenshots Alen).
* Debug abschalten oder IDs auf ungefährlichen Wert oder 0 und abfangen.
* Dimmer bedienbar.
* Überschriften auf primary content nicht immer korrekt bzw. bleiben stehen. Z.B. bei Umschaltung von Grafik IDs zu Programme.
* "Loading..." während Liste geladen wird.

0.2
* Erste Möglichkeit zum Setzen von Werten bei Thermostaten.
* Animation während Servicemeldungen geladen werden. Farbig, wenn Meldungen vorhanden. Datum der Meldung anzeigen.
* Versionsnummer in Titelleiste anzeigen.
* Update Button, später dann durch automatische Updates ergänzen. Momentan nur Update auf aktuelle Seite, keine Servicemeldungen.
* Programmliste unter Sonstiges.
* Servicemeldungen schöner stylen.
* Filter auf rechter Seite hinzugefügt.
* Paralleles Laden der Daten beim Start.
* Texte von Servicemeldungen schöner.
* Grafik-ID Liste unter Sonstiges.
* Variablenliste unter Sonstiges.
* Farben in Servicemeldungen (Je nachdem ob Info, Warnung oder Fehler).
* Umbruch in Menu erzwungen, wenn Text keinen Platz mehr hat.
* Farbiger Status für Werte.
* LazyLoading von Grafiken mit jquery-lazyloading.js Library, wenn keine User GFX da, dann Standard anzeigen für Räume, Gewerke und Favoriten.
* 3D Grafiken für große Icons.
* "Vor 43 Jahren" ersetzen durch "Noch nicht verändert".
* Tastendrücke Lang und Kurz bedienbar.
* Min/Max und Einheiten dazuschreiben.
* Programme ausführen.
* Favoriten in Liste nach oben.
* Bedienen von Zahlen, Bool und Texten in Variablen.
* Bezeichnungen bei Bool verwenden statt true/false.
* Wertelisten setzbar machen.

0.1
* rooms.cgi, functions.cgi und favorites.cgi für Übersichten.
* channels.cgi für Geräte pro Gewähltem Raum/Gewerk/Favorit.
* jQuery Mobile Seite mit links Räumen/Gewerken/Favoriten und rechts dann Geräte des gewählten Menus.
* Erste Grafiken für Temperatur und Feuchte.
* Datum / Uhrzeit mit in JSON schreiben für korrekten Zeitvergleich.
* On/Off steht falsch!
* iPad HomeScreen enabled.
* Channelnamen vollständig anzeigen.
* Bilder aus img/ids/<nr>.png lesen. User können damit eigene Bilder für Räume, Gewerke und Favoriten anlegen. 
* Variablen lesen und anzeigen.
* _USER1004, PC (202) und PDA(203) rausnehmen. USER an Name, PC und PDA an Nummer.
* Icon in richtiger Größe für Retina etc.
* Gerendertes Icon.
* Menu immer nur ein Unterbereich aufklappbar.
* Sonstiges mit vereinfachtem Programme und SysVars eingefügt.
* Was passiert bei Separator oder Programmen in den Favoriten -> Separator kommt gar nicht an, Program kommt an, eingefügt.
* "About"-Dialog.
* Servicemeldungen.
* Fixed Titlebar.
* Datum bei Programmliste (Vereinfacht, später schöner).
* Datum bei Variablenliste (Vereinfacht, später schöner).
