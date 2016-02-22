// DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    // Geräte
    AKKU__LEVEL: "состояние зарядки",
    AKKU__STATUS__0: "компенсационной зарядки",
    AKKU__STATUS__1: "аккумуляторной батареи",
    AKKU__STATUS__2: "батарея поставляется",
    AKKU__STATUS__3: "состояние батареи неизвестно",
    ALARMACTUATOR__STATE__TRUE: "тревога",
    ALARMACTUATOR__STATE__FALSE: "ОК",
    ALARMACTUATOR__ERROR_POWER__1: "сетевое напряжение неправильно",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "саботаж сообщение",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "дефектных батарей",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "Время включения",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__TRUE: "батарея разряжена",
    ALARMACTUATOR__LOWBAT__FALSE: "-",
    BLIND__STOP: "остановить",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "Продолжительность слепых",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "Уровень заполнения",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "частота датчика",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__TRUE: "на",
    CLIMATECONTROL_REGULATOR__STATE__FALSE: "от",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "авто",
    CLIMATECONTROL_REGULATOR__MODE__1: "комфорт",
    CLIMATECONTROL_REGULATOR__MODE__2: "ЭКО",
    CLIMATECONTROL_REGULATOR__MODE__3: "от",
    CLIMATECONTROL_REGULATOR__VACATION__0: "от",
    CLIMATECONTROL_REGULATOR__VACATION__1: "планируется",
    CLIMATECONTROL_REGULATOR__VACATION__2: "активный",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__TRUE: "перевернутый управления",
    CLIMATECONTROL_REGULATOR__SET_INVERT__FALSE: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "переключить состояние",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "манипулировать значение, полученное от панели управления",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "преобразованный дифференциальный уставки",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "клапан открытия набор",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__TRUE: "летний режим на",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__FALSE: "летний режим OFF",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "клапан закрыт",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "клапан открыт",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "автоматически",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "вручную",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "Партия",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "температура комфорта",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "неудача",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "открыть окно температура",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "Партия / отпуск заканчивается",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "Температура",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "текущее значение влажности",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "привод клапана вялым",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "регулировки диапазона слишком большой",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "регулировки диапазона слишком маленький",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "Ошибка соединения",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "батарея разряжена",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "клапан ошибка положения",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "открытие клапана",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "режим повышения",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "снижение",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "Руководство",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "комфорт",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "автоматический",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "повысить продолжительность",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "Статус батареи",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "Праздник Режим запуска",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "установить температуру",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "время начала",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "конец времени",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__FALSE: "закрыт",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__TRUE: "открыт",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "открытие клапана",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "привода клапана заблокирован",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "привода клапана свободно",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "Диапазон настройки слишком мал",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "батарея разряжена",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "Положение привод клапана смещения",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "Температура",
    CLIMATECONTROL_VENT_DRIVE__ALARM__TRUE: "привода клапана заблокирован",
    CLIMATECONTROL_VENT_DRIVE__ALARM__FALSE: "-",
    CONDITION_POWER__DECISION_VALUE: "** CONDITION_POWER__DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "** CONDITION_CURRENT__DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "** CONDITION_VOLTAGE__DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "** CONDITION_FREQUENCY__DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "** DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "** DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_ANALOG_OUTPUT__STATE__TRUE: "на",
    DIGITAL_ANALOG_OUTPUT__STATE__FALSE: "от",
    DIGITAL_INPUT__FREQUENCY: "** DIGITAL_INPUT__FREQUENCY",
    DIGITAL_INPUT__STATE__TRUE: "да",
    DIGITAL_INPUT__STATE__FALSE: "не",
    DIGITAL_OUTPUT__STATE__TRUE: "на",
    DIGITAL_OUTPUT__STATE__FALSE: "от",
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "изменение состояния",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "восстановить последний затемнения",
    DIMMER__RAMP_TIME: "затемнения",
    DIMMER__ON_TIME: "долг",
    DIMMER__RAMP_STOP: "затемнение стоп",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "выходной ток",
    DIMMER__ENERGY_COUNTER: "текущее потребление энергии",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "зарядки ошибку",
    DIMMER__ERROR_REDUCED__FALSE: "-",
    DIMMER__ERROR_REDUCED__TRUE: "снижение мощности",
    DIMMER__ERROR_OVERHEAT__FALSE: "-",
    DIMMER__ERROR_OVERHEAT__TRUE: "перегрев",
    DIMMER__ERROR_OVERLOAD__FALSE: "-",
    DIMMER__ERROR_OVERLOAD__TRUE: "перегрузки",
    DIMMER__LEVEL_REAL: "реальная стоимость",
    DISPLAY__TEXT: "дисплей",
    DISPLAY__BULB: "лампа",
    DISPLAY__SWITCH: "переключатель",
    DISPLAY__WINDOW: "окно",
    DISPLAY__DOOR: "Дверь",
    DISPLAY__BLIND: "слепой",
    DISPLAY__SCENE: "сцена",
    DISPLAY__PHONE: "телефон",
    DISPLAY__BELL: "Колокол",
    DISPLAY__CLOCK: "Часы",
    DISPLAY__ARROW_UP: "стрелка вверх",
    DISPLAY__ARROW_DOWN: "стрелка вниз",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "°С",
    DISPLAY__UNIT__4: "°F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "звуковой сигнал 1",
    DISPLAY__BEEP__2: "звуковой сигнал 2",
    DISPLAY__BEEP__3: "звуковой сигнал 3",
    DISPLAY__BACKLIGHT__0: "подсветка выключена",
    DISPLAY__BACKLIGHT__1: "подсветки на",
    DISPLAY__BACKLIGHT__2: "подсветка мигает медленно",
    DISPLAY__BACKLIGHT__3: "подсветка мигает быстро",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "короткое нажатие",
    INPUT_OUTPUT__PRESS_LONG: "долгое нажатие",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "заявить от",
    KEY__LED_STATUS__1: "Государство красный",
    KEY__LED_STATUS__2: "Государство зеленый",
    KEY__LED_STATUS__3: "Государство оранжевый",
    KEY__LED_SLEEP_MODE: "** KEY__LED_SLEEP_MODE",
    KEY__PRESS_SHORT: "короткое нажатие",
    KEY__PRESS_LONG: "долгое нажатие",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "снимок",
    KEY__RESET: "перезагрузка",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__TRUE: "открыт",
    KEYMATIC__STATE__FALSE: "закрыть",
    KEYMATIC__OPEN: "открыть",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__TRUE: "Государство неопределенным",
    KEYMATIC__STATE_UNCERTAIN__FALSE: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "Ошибка муфта",
    KEYMATIC__ERROR__2: "двигатель остановлен",
    MOTION_DETECTOR__BRIGHTNESS: "яркость",
    MOTION_DETECTOR__SET_BRIGHTNESS: "яркость настройка",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "следующая передача",
    MOTION_DETECTOR__MOTION__TRUE: "обнаружено движение",
    MOTION_DETECTOR__MOTION__FALSE: "нет движения, не обнаружено",
    MOTION_DETECTOR__SET_MOTION: "установить движение",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "саботаж срабатывает",
    POWER__LOWBAT: "батарея разряжена",
    POWER__BAT_VOLTAGE: "напряжение батареи",
    POWERMETER__BOOT__TRUE: "** POWERMETER__BOOT__TRUE",
    POWERMETER__BOOT__FALSE: "** POWERMETER__BOOT__FALSE",
    POWERMETER__ENERGY_COUNTER: "текущее потребление энергии",
    POWERMETER__POWER: "выходной ток",
    POWERMETER__CURRENT: "сила тока",
    POWERMETER__VOLTAGE: "Напряжение на выходе переключателя",
    POWERMETER__FREQUENCY: "Частота",
    POWERMETER__SUM_1H: "Потребление энергии в течение последнего часа",
    POWERMETER__SUM_24H: "потребление энергии за последние 24 часов",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "энергия газа счетчик",
    POWERMETER_IGL__GAS_POWER: "токовый выход газа",
    POWERMETER_IGL__ENERGY_COUNTER: "счетчик энергии",
    POWERMETER_IGL__POWER: "выходной ток",
    PULSE_SENSOR__SEQUENCE_OK: "последовательность принять",
    RAINDETECTOR__STATE__0: "сухой",
    RAINDETECTOR__STATE__1: "дождь",
    RAINDETECTOR_HEAT__STATE__TRUE: "Отопление на",
    RAINDETECTOR_HEAT__STATE__FALSE: "отопление выключено",
    RAINDETECTOR_HEAT__ON_TIME: "рабочий цикл (отопление)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__TRUE: "на",
    RELAIS__STATE__FALSE: "от",
    RELAIS__VALUE: "значение команды",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "долг",
    RELAIS__RAMP_TIME: "затемнения",
    RGBW_AUTOMATIC__PROGRAM__0: "от",
    RGBW_AUTOMATIC__PROGRAM__1: "замедлить",
    RGBW_AUTOMATIC__PROGRAM__2: "нормальный",
    RGBW_AUTOMATIC__PROGRAM__3: "быстро",
    RGBW_AUTOMATIC__PROGRAM__4: "Костер",
    RGBW_AUTOMATIC__PROGRAM__5: "водопад",
    RGBW_AUTOMATIC__PROGRAM__6: "Телевизор",
    RGBW_AUTOMATIC__ON_TIME: "долг",
    RGBW_AUTOMATIC__RAMP_TIME: "затемнения",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "ток яркость",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "Цвет",
    RGBW_COLOR__ON_TIME: "долг",
    RGBW_COLOR__RAMP_TIME: "затемнения",
    RGBW_COLOR__ACT_BRIGHTNESS: "ток brigthness",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "ВПГ значение цвета",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "заблокирован",
    ROTARY_HANDLE_SENSOR__STATE__1: "чаевые",
    ROTARY_HANDLE_SENSOR__STATE__2: "открыть",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "саботаж срабатывает",
    ROTARY_HANDLE_SENSOR__LOWBAT__TRUE: "батарея разряжена",
    ROTARY_HANDLE_SENSOR__LOWBAT__FALSE: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "Общее потребление",
    SENSOR__SUM_DATE: "метка инициализации общий расход счетчик",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "Полный сброс потребление",
    SENSOR__CONTROL__0: "неизвестно",
    SENSOR__CONTROL__1: "AC метр",
    SENSOR__CONTROL__2: "эффективным измеритель мощности",
    SENSOR__CONTROL__3: "газовый счетчик",
    SENSOR__SENSOR__TRUE: "** SENSOR__SENSOR__TRUE",
    SENSOR__SENSOR__FALSE: "** SENSOR__SENSOR__FALSE",
    SENSOR__STATE__TRUE: "на",
    SENSOR__STATE__FALSE: "от",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "средний расход (5 мин)",
    SENSOR__MAX5MINUTES: "максимальная потребляемая (5 мин)",
    SENSOR__SUM_1H: "Потребление последний час",
    SENSOR__MAX_1H: "максимальная потребляемая последний час",
    SENSOR__SUM_24H: "потребление (24 ч)",
    SENSOR__MAX_24H: "максимальная потребляемая (24 ч)",
    SENSOR__METER: "метр",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "средний расход в последнем интервале измерения",
    SENSOR__LAST_TICKS: "последний интервал измерения в секундах времени 10 (GZ)",
    SENSOR__UNITSPTURN: "Коэффициент пересчета",
    SENSOR__DISTANCE: "датчик",
    SENSOR__F_PERCENT: "Уровень процента",
    SENSOR__F_LEVEL: "Уровень",
    SENSOR__F_VOLUME: "вместимость",
    SENSOR__RELAIS1__TRUE: "Реле 1 на",
    SENSOR__RELAIS1__FALSE: "Реле 1 от",
    SENSOR__RELAIS2__TRUE: "Реле 2 на",
    SENSOR__RELAIS2__FALSE: "Реле 2 от",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "Тип датчика",
    SENSOR__ERROR: "Сообщение об ошибке",
    SENSOR__ON_TIME: "долг",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "СO<sub>2</sub> концентрация нормально",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "СО<sub>2</sub> концентрация увеличилась",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "СО<sub>2</sub> концентрация значительно увеличилось",
    SHUTTER_CONTACT__STATE__TRUE: "открыть",
    SHUTTER_CONTACT__STATE__FALSE: "закрытая",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "саботаж срабатывает",
    SHUTTER_CONTACT__LOWBAT__TRUE: "батарея разряжена",
    SHUTTER_CONTACT__LOWBAT__FALSE: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__TRUE: "на",
    SIGNAL_CHIME__STATE__FALSE: "от",
    SIGNAL_CHIME__ON_TIME: "долг",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__TRUE: "на",
    SIGNAL_LED__STATE__FALSE: "от",
    SIGNAL_LED__ON_TIME: "долг",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__TRUE: "дым зарегистрирован",
    SMOKE_DETECTOR__STATE__FALSE: "хорошо",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "Тест сигнал не удалось",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "деградировали дымовую камеру",
    SMOKE_DETECTOR__LOWBAT__TRUE: "батарея разряжена",
    SMOKE_DETECTOR__LOWBAT__FALSE: "-",
    SMOKE_DETECTOR_TEAM__STATE__TRUE: "дым зарегистрирован",
    SMOKE_DETECTOR_TEAM__STATE__FALSE: "ОК",
    STATUS_INDICATOR__STATE__TRUE: "на",
    STATUS_INDICATOR__STATE__FALSE: "от",
    STATUS_INDICATOR__ON_TIME: "долг",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "отменить таймер",
    SYSTEM__TIMER_SET: "установить таймер",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__TRUE: "на",
    SYSTEM__STATE__FALSE: "от",
    SYSTEM__TIMER_GET: "оставшееся время",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "короткое нажатие",
    SYSTEM__CMD_RUNL: "долгое нажатие",
    SYSTEM__CMD_SETS: "-",
    SYSTEM__CMD_SETL: "-",
    SYSTEM__CMD_RETS: "-",
    SYSTEM__CMD_RETL: "-",
    SYSTEM__CMD_QUERY_RET: "-",
    SYSTEM__CMD_EXEC: "-",
    SYSTEM__CMD_KILL: "-",
    SYSTEM__LOGIT: "-",
    SYSTEM__SYSLOG: "-",
    SYSTEM__SET_STATE: "** SYSTEM__SET_STATE",
    SYSTEM__RAND: "** SYSTEM__RAND",
    SYSTEM__HOLD: "** SYSTEM__HOLD",
    SYSTEM__CONTROL: "** SYSTEM__CONTROL",
    SYSTEM__SEND: "клавиш на WebUI",
    SYSTEM__MAILTO: "электронная почта получатель",
    SYSTEM__MAILCC: "электронная почта куб.см",
    SYSTEM__SUBJECT: "тема сообщения",
    SYSTEM__TYPE__0: "текст",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "тревога",
    SYSTEM__TEXT: "текст",
    SYSTEM__TEMPLATEID: "шаблон ID",
    SYSTEM__OPTION_1: "данные для предопределенного шаблона 1",
    SYSTEM__OPTION_2: "данные для предопределенного шаблона 2",
    SYSTEM__OPTION_3: "данные для предопределенного шаблона 3",
    SYSTEM__OPTION_4: "данные для предопределенного шаблона 4",
    SYSTEM__OPTION_5: "данные для предопределенного шаблона 5",
    SYSTEM__RETURN: "возвращаемого значения при вызове функции",
    SYSTEM__PHONE: "SMS номер телефона",
    SYSTEM__PRIORITY__0: "низкий приоритет",
    SYSTEM__PRIORITY__1: "Приоритет Обычный",
    SYSTEM__PRIORITY__2: "Приоритет важно",
    SYSTEM__PRIORITY__3: "Приоритет высокой",
    SYSTEM__PRIORITY__4: "Приоритет критической",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "юридический адрес",
    SWITCH__IP: "адрес резолюцией DNS",
    SWITCH__UNREACH_CTR: "неудачных попыток",
    SWITCH__STATE__TRUE: "на",
    SWITCH__STATE__FALSE: "от",
    SWITCH__ON_TIME: "долг",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "изменение состояния",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "бонусы (1 час)",
    SWITCH__TIME_ON_1H: "общая продолжительность (в) (1 ч)",
    SWITCH__TIME_OFF_1H: "Общая продолжительность (от) (1 ч)",
    SWITCH__TIME_ON: "в прошлом продолжительность (на)",
    SWITCH__TIME_OFF: "в прошлом продолжительность (в выключенном состоянии)",
    SWITCH__TIME_ON_SUM: "Общая продолжительность (на)",
    SWITCH__SWITCH_SUM: "Количество бонусов",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__TRUE: "на",
    SWITCH__TIME_STATE__FALSE: "от",
    SWITCH__INFO_LED__0: "от",
    SWITCH__INFO_LED__1: "зеленый",
    SWITCH__INFO_LED__2: "оранжевый",
    SWITCH__INFO_LED__3: "красный",
    SWITCH__SUM_RESET: "Сброс счетчика",
    SWITCH__SET_STATE: "Установленное значение",
    SWITCH__NIGHT_MODE: "ночной режим",
    SWITCH__NIGHT_MODE__TRUE: "ночной режим",
    SWITCH__NIGHT_MODE__FALSE: "-",
    SWITCH__POWER: "выходной ток",
    SWITCH__ERROR_OVERLOAD__TRUE: "перегрузки",
    SWITCH__ERROR_OVERLOAD__FALSE: "-",
    SWITCH__ENERGY_COUNTER: "текущее потребление энергии",
    SWITCH__RCVS: "** SWITCH__RCVS",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__TRUE: "батарея разряжена",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__TRUE: "Ошибка связи",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__TRUE: "окно открыто",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "** THERMALCONTROL_TRANSMIT__BATTERY_STATE",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "Температура",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "текущее значение влажности",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "режим повышения",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "снижение",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "Руководство",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "комфорт",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "автоматический",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "Температура",
    THERMALCONTROL_TRANSMIT__PARTY_START: "время начала",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "конец времени",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__TRUE: "наклона зарегистрирован",
    TILT_SENSOR__STATE__FALSE: "ОК",
    TILT_SENSOR__LOWBAT__TRUE: "батарея разряжена",
    TILT_SENSOR__LOWBAT__FALSE: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "восстановить последний затемнения",
    VIRTUAL_DIMMER__RAMP_TIME: "затемнения",
    VIRTUAL_DIMMER__ON_TIME: "долг",
    VIRTUAL_DIMMER__RAMP_STOP: "остановить затемнения",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "зарядки ошибку",
    VIRTUAL_DIMMER__ERROR_REDUCED__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__TRUE: "снижение мощности",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__TRUE: "перегрев",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__TRUE: "перегрузки",
    VIRTUAL_DIMMER__LEVEL_REAL: "реальная стоимость",
    VIRTUAL_KEY__PRESS_SHORT: "короткое нажатие",
    VIRTUAL_KEY__PRESS_LONG: "долгое нажатие",
    VIRTUAL_KEY__LEVEL: "-",
    WATERDETECTIONSENSOR__STATE__0: "сухой",
    WATERDETECTIONSENSOR__STATE__1: "влажный",
    WATERDETECTIONSENSOR__STATE__2: "мокрый",
    WATERDETECTIONSENSOR__LOWBAT__TRUE: "батарея разряжена",
    WATERDETECTIONSENSOR__LOWBAT__FALSE: "-",
    WEATHER__HUMIDITY: "влажность",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "Температура",
    WEATHER__WIND_SPEED: "скорость ветра",
    WEATHER__WIND_DIRECTION: "направление ветра",
    WEATHER__WIND_DIRECTION_RANGE: "ветер диапазон направлений",
    WEATHER__SUNSHINEDURATION: "Продолжительность солнечного сияния",
    WEATHER__RAINING__TRUE: "дождь",
    WEATHER__RAINING__FALSE: "-",
    WEATHER__RAIN_COUNTER: "осадков",
    WEATHER__RAIN_CTR: "осадков",
    WEATHER__DEW_POINT: "точка росы",
    WEATHER__ABS_HUMIDITY: "абсолютная влажность",
    WEATHER__TEMP_MIN_24H: "Температура мин (24 ч)",
    WEATHER__TEMP_MAX_24H: "максимальная температура (24 ч).",
    WEATHER__HUM_MIN_24H: "мин влажности (24 ч)",
    WEATHER__HUM_MAX_24H: "Макс влажности (24 ч).",
    WEATHER__WIND_MAX_24H: "максимальная скорость ветра (24 ч)",
    WEATHER__RAIN_CTR_24H: "осадков (24 ч)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "яркость",
    WEATHER__LOWBAT__TRUE: "батарея разряжена",
    WEATHER__LOWBAT__FALSE: "-",
    WEATHER__AIR_PRESSURE: "давление",
    WEATHER__SET_HUMIDITY: "установить влажность",
    WEATHER__MEDIAN: "главная ценность",
    WEATHER__MEAN: "Средняя",
    WEATHER__BRIGHTNESS_WEST: "яркость Запад",
    WEATHER__BRIGHTNESS_SOUTH: "яркость юг",
    WEATHER__BRIGHTNESS_EAST: "яркость Восток",
    WEATHER_TRANSMIT__HUMIDITY: "влажность",
    WEATHER_TRANSMIT__TEMPERATURE: "Температура",
    WEBCAM__INFO: "информационный текст",
    WEBCAM__IMAGE: "картина",
    WEBCAM__PTZ_CMD: "предопределенная функция",
    WEBCAM__IR__0: "ИК светодиод с",
    WEBCAM__IR__1: "ИК светодиод авто",
    WEBCAM__IR__2: "ИК светодиод на",
    WINMATIC__SPEED: "Скорость",
    WINMATIC__STOP: "остановить",
    WINMATIC__RELOCK_DELAY: "автоматически заблокировать после времени",
    WINMATIC__STATE_UNCERTAIN__TRUE: "Государство неопределенным",
    WINMATIC__STATE_UNCERTAIN__FALSE: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "Ошибка очередь привод",
    WINMATIC__ERROR__2: "наклона диска ошибка",
    WRAPPER__MEDIAN: "главная ценность",
    WRAPPER__MEAN: "Средняя",
    WRAPPER__SET_STATE: "установить состояние",
    WRAPPER__TIME_ON_1H: "общая продолжительность (в) (1 ч)",
    WRAPPER__TIME_OFF_1H: "Общая продолжительность (от) (1 ч)",
    WRAPPER__SWITCH_1H: "бонусы (1 час)",
    WRAPPER__TIME_ON_24H: "Общая продолжительность (на) (24 ч)",
    WRAPPER__TIME_OFF_24H: "Общая продолжительность (от) (24 ч)",
    WRAPPER__SWITCH_24H: "бонусы (24 часа)",
    WRAPPER__PERCENT_ON_24H: "процент (по) (24 ч)",
    WRAPPER__TIME_ON_168H: "Общая продолжительность (на) (7 дней)",
    WRAPPER__TIME_OFF_168H: "Общая продолжительность (от) (7 дней)",
    WRAPPER__SWITCH_168H: "бонусы (7 Tage)",
    WRAPPER__PERCENT_ON_168H: "процент (на) (7 дней)",
    WRAPPER__TIME_ON_HHH: "Общая продолжительность (на)",
    WRAPPER__TIME_OFF_HHH: "Общая продолжительность (в выключенном состоянии)",
    WRAPPER__SWITCH_HHH: "бонусы",
    WRAPPER__PERCENT_ON_HHH: "процент",
    WRAPPER__STATE__TRUE: "на",
    WRAPPER__STATE__FALSE: "от",
    WRAPPER__TIME_ON: "в прошлом продолжительность (на)",
    WRAPPER__TIME_OFF: "в прошлом продолжительность (в выключенном состоянии)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    // Servicemeldungen
    ALARMDP__CONFIG_PENDING: "конфигурационные данные передаются",
    ALARMDP__DEVICE_IN_BOOTLOADER: "перезагрузится",
    ALARMDP__LOWBAT: "батарея разряжена",
    ALARMDP__STICKY_UNREACH: "коммуникация была нарушена",
    ALARMDP__U_SOURCE_FAIL: "отказ питания",
    ALARMDP__UNREACH: "коммуникация нарушается во время",
    ALARMDP__UPDATE_PENDING: "Доступно обновление",
    ALARMDP__USBH_POWERFAIL: "хозяин USB отключена",
    //Sprachen
    DE: "Немецкий",
    EN: "Английский",
    ES: "Испанский",
    FR: "Французский",
    PT: "Португальский",
    RU: "Русская",
    TR: "турецкий",
    ZH: "Китайский",
    LANGUAGE: "язык",
    //CCU Bezeichnungen
    ROOMLIVINGROOM: "Гостиная",
    ROOMKITCHEN: "Кухня",
    ROOMBEDROOM: "Кровать комната",
    ROOMCHILDRENSROOM1: "Детская комната 1",
    ROOMCHILDRENSROOM2: "Детская комната 2",
    ROOMOFFICE: "Домашний офис",
    ROOMBATHROOM: "Ванная комната",
    ROOMGARAGE: "Гараж",
    ROOMHWR: "Подсобное помещение",
    ROOMGARDEN: "Сад",
    ROOMTERRACE: "Терраса",
    FUNCLIGHT: "Свет",
    FUNCHEATING: "Отопление",
    FUNCCLIMATECONTROL: "Климатические условия",
    FUNCWEATHER: "Погода",
    FUNCENVIRONMENT: "Окружающая среда",
    FUNCSECURITY: "Безопасность",
    FUNCLOCK: "Блокировка",
    FUNCBUTTON: "Кнопка",
    FUNCCENTRAL: "Центральный блок управления",
    FUNCENERGY: "Энергетический менеджмент",
    //Andere Bezeichnungen
    OPEN: "открыть",
    OPEN_SHORT: "открыт",
    CLOSE: "закрыть",
    CLOSE_SHORT: "близко",
    LOCKED: "заблокирован",
    LOCK: "заблокировать",
    ON: "для",
    OFF: "от",
    MAX: "Макс",
    MED: "мед",
    MIN: "мин",
    RUN: "беги",
    SAVE: "сохранить",
    YES: "Да",
    NO: "нет",
    VISIBILITY: "видимость",
    DELETE: "Удалить",
    UPLOAD: "Загрузить изображение",
    SYS_VAR: "Системные переменные",
    PROGRAMS: "программы",
    FAVORITES: "Избранное",
    ROOMS: "комнаты",
    FUNCTIONS: "функции",
    EDIT: "редактировать",
    OPTIONS: "варианты",
    OPTIONS_CLIENT: "варианты этого устройства",
    TEST_DEVICE: "тестовая страница НМ",
    TEST_CUXD: "тестовая страница CUXD",
    UNKNOWN_ERROR: "Неизвестная ошибка",
    NO_SERVICE_MESSAGES: "Нет сообщения обслуживания доступны.",
    UNKNOWN_VAR_TYPE: "неизвестная переменная типа",
    SETTINGS: "Настройки",
    TIME_SEC_SINGULAR: "второй",
    TIME_SEC_PLURAL: "секунды",
    TIME_MIN_SINGULAR: "минуты",
    TIME_MIN_PLURAL: "минуты",
    TIME_H_SINGULAR: "час",
    TIME_H_PLURAL: "часы",
    TIME_DAY_SINGULAR: "день",
    TIME_DAY_PLURAL: "дни",
    TIME_W_SINGULAR: "неделю",
    TIME_W_PLURAL: "недели",
    TIME_MON_SINGULAR: "месяц",
    TIME_MON_PLURAL: "месяцев",
    TIME_Y_SINGULAR: "год",
    TIME_Y_PLURAL: "годы",
    TIME_PREFIX: " ",
    TIME_SUFFIX: "назад",
    LOADING: "зарядки",
    SET: "установить",
    DEFAULT: "по умолчанию",
    BLACK: "черный",
    PINK: "розовый",
    GREEN: "зеленый",
    YELLOW: "желтый",
    GREY: "серый",
    BLUE: "синий",
    RED: "красный",
    BROWN: "коричневый",
    WHITE: "белый",
    BRAZIL: "Бразилия",
    GERMANY: "Германия",
    SHOW: "шоу",
    HIDE: "скрыть",
    NO_VALUE: "Нет",
    SMALL: "маленький",
    BIG: "большой",
    GRAPHICS_SIZE: "Размер графика",
    FILTER: "фильтрации данных ...",
    TRANSFER: "перевод ...",
    DELAY: "значение по-прежнему передается в устройство и отображается только после задержки здесь.",
    TRANSFER_OK: "Хорошо!",
    IMAGE_UPLOAD: "Это может быть только JPG, GIF или PNG загружены!",
    START: "... начать",
    NEW_VERSION: "Новый WebMatic версия",
    DOWNLOAD: "ссылка для скачивания",
    MANUAL: "только ручная исполнение",
    OPERATABLE: "действующий",
    HISTORIAN_DURATION: "Последний...",
    CHOOSE_THEME: "Выберите тему",
    NOT_SELECTED: "глобальные настройки",
    DESIGN: "появление",
    FONT: "шрифта",
    MENU: "Пункты меню",
    DEFAULT_OPEN: "Дисплей первый звонок",
    DEFAULT_READONLY: "Переменная стандарт только для чтения",
    HISTORIAN_WARNING: "Вводят под Параметры> Параметры URL",
    NEW_UPDATES_WARNING: "Информация о новых выпусках",
    STABLE: "только стабильные версии",
    ALPHA: "также альфа-версии",
    OTHERS: "другие",
    DONT_LEAVE: "Предотвращение случайного покидая страницу",
    CHOOSE: "Пожалуйста, выберите",
    DELETE_SETTINGS: "удалить настройки",
    RELOAD: "перезагрузить",
    CLIENT_SETTINGS: "Настройки клиента",
    CLIENT_TITLE: "Имя клиента",
    DEFAULT_SORT: "Стандарт сортировка",
    ALPHABETICAL: "алфавитный",
    MANUALLY: "вручную",
    DELETE_SETTINGS_WARNING: "Внимание Все настройки выбранного клиентом, будут удалены.",
    END_CLIENT_MODUS: "Режим конца установки клиента",
    REMOVE_MESSAGES: "Удалить Устаревшие расстройств",
    ABOUT: "около",
    SERVICE_NOTE: "Обслуживание Уведомления",
    NO_DISORDERS: "Нет служебные сообщения, доступные",
    TWO_SITES_VERSION: "Показать на 2 страницах",
    TWO_SITES_TRANSITION: "Влияние на изменение страницы",
    BACK: "назад",
    NUMBER_OF_COLUMNS: "Количество колонок",
    STEP: "шаг",
    FACTOR: "фактор",
    SHOW_DESCRIPTION: "Показать описание",
    SHOW_LAST_TIME_USED: "Показать последний раз использованный",
    WORKSPACE: "рабочее место",
    ONLY_PIC: "только графика"
};