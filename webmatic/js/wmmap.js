// �bersetzungen von HomeMatic IDs zu sprechenden Texten f�r alle
// Controls, die nicht direkt im webmatic.js abgehandelt werden.

var textMap = {
	HUMIDITY:"Luftfeuchtigkeit",
	TEMPERATURE:"Temperatur",
	WIND_SPEED:"Windgeschwindigkeit",
	DEW_POINT:"Taupunkt",
	ABS_HUMIDITY:"Absolute Luftfeuchtigkeit",
	VALVE_STATE:"Ventil&ouml;ffnung",
	BRIGHTNESS:"Helligkeit",
	TEMP_MIN_24H:"Min. Temperatur (24 Std)",
	TEMP_MAX_24H:"Max. Temperatur (24 Std)",
	HUM_MIN_24H:"Min. Luftfeuchtigkeit (24 Std)",
	HUM_MAX_24H:"Max. Luftfeuchtigkeit (24 Std)",
	MISS_24H:"Fehlende Datenpakete (24 Std)",
	PROG_TIMER:"-",
	COUNTER:"-",
	SUM:"-",
	MEAN5MINUTES:"Durchschnittsverbrauch (5 Min)",
	MAX5MINUTES:"Maximalverbrauch (5 Min)",
	SUM_1H:"Verbrauch letzte Stunde",
	MAX_1H:"Maximalverbrauch letzte Stunde",
	SUM_24H:"Verbrauch (24 Std)",
	MAX_24H:"Maximalverbrauch (24 Std)",
	METER:"Z&auml;hlerstand",
	FILLING_LEVEL:"F&uuml;llstand",
	ALL_LEDS:"-"
};

var imageMap = {
	HUMIDITY:"humidity.png",
	TEMPERATURE:"temperature.png"
};

// Funktion zum mappen der IDs auf Texte.
function MapText(text){
	var newText = "";
	newText = textMap[text];

	// Wenn nichts gefunden, dann Originaltext zur�ck:
	if (!newText){
		return text;
	}else{
		return newText;
	}
}

// Funktion zum mappen von IDs auf Grafiken:
function MapImage(text){
	var gfx = "";
	gfx = imageMap[text];

	// Wenn keines gefunden, dann unknown.png zur�ck:
	if (!gfx){
		return "unknown.png";
	}else{
		return gfx;
	}
}