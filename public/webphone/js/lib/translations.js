/*
this file is used only for strings coming from the NS engine
see the stringres.js for the user intreface stranslation
*/


webphone_api.translations = (function ()
{

/*--------- #language# hu Hungarian ---------*/
function TranslateInnerHun(str)
{
    try
    {
            if (str === "Username") return "Felhasználó";
            if (str === "Unregistered") return "Kijelentkezve";
            if (str === "Unregister") return "Kijelentkezés";
            if (str === "Stop") return "Leáll";
            if (str === "Starting...") return "Indítás...";
            if (str === "Starting call") return "Hívás indítása";
            if (str === "Ring") return "Csöngés";
            if (str === "Reload") return "Újratölt";
            if (str === "Muted") return "Némitva";
            if (str === "Enter phone number of SIP URI") return "Telefonszám vagy SIP URI";
            if (str === "Close") return "Bezár";
            if (str === "Authenticated") return "Hitelesítve";
            if (str === "Add people to the conference") return "Adjon hozzá személyeket a konferenciához";
            if (str === "Activated") return "Aktiválva";
            if (str === "Save my settings on this computer locally (including password!)") return "Mentse le beállításaimat ezen a számítógépen (jelszót beleértve)";
            if (str === "Send") return "Küld";
            if (str === "Send Chat") return "Üzenetet küld";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Destination") return "Hivott";
            if (str === "Call duration") return "Hívás időtartam";


            if (str === "Provider") return "Szolgáltató";
            if (str === "Password") return "Jelszó";
            if (str === "Save Settings") return "Beállítások mentése";
            if (str === "Connect") return "Kapcsolódás";
            if (str === "Connecting") return "Kapcsolódás";
            if (str === "Hangup") return "Bontás";
            if (str === "Reject") return "Visszautasít";
            if (str === "Accept") return "Elfogad";
            if (str === "Call") return "Hívás";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Chat") return "Chat";
            if (str === "Mute") return "Némit";
            if (str === "Transf") return "Átirányít";
            if (str === "Redial") return "Visszahív";
            if (str === "Send to") return "Küldés";
            if (str === "Send") return "Kьld";
            if (str === "Starting") return "Indulás";
            if (str === "Calling") return "Hívás";
            if (str === "InProgress") return "Tárcsázásban";
            if (str === "InCall") return "Hívásban";
            if (str === "Speaking") return "Hívásban";
            if (str === "CallConnect") return "Kapcsolódva";
            if (str === "CallDisconnect") return "Bontva";
            if (str === "Finishing") return "Befejezés";
            if (str === "Finished") return "Befejezve";
            if (str === "Call") return "Tбrcsбz";
            if (str === "Call rejected") return "Hivás elútasitva";
            if (str === "service unavailable") return "Szolgáltatás elérhetetlen";
            if (str === "Call rejected: service unavailable") return "Hivás elútasitva: szolgáltatás nemelérhető";
            if (str === "Not Initialized") return "Nem inicializált";
            if (str === "Register Failed") return "Sikertelen bejelentkezés";
            if (str === "Registered") return "Bejelentkezett";
            if (str === "Credit") return "Egyenleg";
            if (str === "Call Finished") return "Hívás vége";
            if (str === "Call Initiated") return "Hívás folyamatban";
            if (str === "Initializing") return "Inicializálizálás";
            if (str === "Registering") return "Bejelentkezés";
            if (str === "Calling") return "Hнvбs";
            if (str === "In Call") return "Hívásban";
            if (str === "Incoming call") return "Bejövő hívás";
            if (str === "Incoming call from") return "Bejövő hívás";
            if (str === "Unknown") return "Ismeretlen";
            if (str === "Init") return "Inicializálás";
            if (str === "Ready") return "Készenlétben";
            if (str === "Waiting") return "Készenlétben";
            if (str === "Ready.") return "Készenlétben.";
            if (str === "Waiting.") return "Készenlétben.";
            if (str === "Outband") return "Outband";
            if (str === "SignIn") return "Bejelentkezés";
            if (str === "Subscribe") return "Feliratkozás";
            if (str === "Setup") return "Beállítások";
            if (str === "CallProgress") return "Hívás folyamatban";
            if (str === "Routed") return "Routolt";
            if (str === "Ringing") return "Csöngetés";
            if (str === "CallInitiated") return "Hívás inicializálva";
            if (str === "CallStarted") return "Hívás megkezdve";
            if (str === "Midcall") return "Hívás közben";
            if (str === "CallFinishing") return "Hívás befejeződik";
            if (str === "CallFinished") return "Hívás befejezve";
            if (str === "Error") return "Hiba";
            if (str === "Warning") return "Figyelmeztetés";
            if (str === "Trying") return "Próbálkozás";
            if (str === "Ringing") return "Csцngetйs";
            if (str === "Call Is Being Forwarded") return "Hívás továbbítódik";
            if (str === "Queued") return "Sorba téve";
            if (str === "Session Progress") return "Folyamatban";
            if (str === "OK") return "OK";
            if (str === "Accepted") return "Elfogadva";
            if (str === "Multiple Choices") return "Több választás";
            if (str === "Moved Permanently") return "Végleg elköltözött";
            if (str === "Moved Temporarily") return "Ideiglenesen elköltözött";
            if (str === "Use Proxy") return "Használj proxy-t";
            if (str === "Alternative Service") return "Alternatív szolgáltatás";
            if (str === "Bad Request") return "Rossz kérés";
            if (str === "Unauthorized") return "Jogosulatlan";
            if (str === "Payment Required") return "Fizetés szükséges";
            if (str === "Forbidden") return "Tiltva";
            if (str === "Not Found") return "Nem talált";
            if (str === "Method Not Allowed") return "Módszer nem megengedett";
            if (str === "Not Acceptable") return "Nem elfogadható";
            if (str === "Proxy Authentication Required") return "Proxy hitelesítés szükséges";
            if (str === "Request Timeout") return "Kérés ideje lejárt";
            if (str === "Conflict") return "Konfliktus";
            if (str === "Gone") return "Már nem található";
            if (str === "Conditional Request Failed") return "Feltételes kérés meghiusúlt";
            if (str === "Request Entity Too Large") return "Túl hosszú kérés";
            if (str === "Request-URI Too Long") return "Kérés URI-ja túl hosszú";
            if (str === "Unsupported Media Type") return "Nem támogatott média típus";
            if (str === "Unsupported URI Scheme") return "Nem támogatott URI minta";
            if (str === "Bad Extension") return "Rossz kiterjesztés";
            if (str === "Extension Required") return "Kiterjesztés szükséges";
            if (str === "Interval Too Brief") return "Intervallum túl rövid";
            if (str === "Unresolvable destination") return "Nem megfelelő cél";
            if (str === "Temporarily Unavailable") return "Ideiglenesen nem elérhető";
            if (str === "CallTransaction Does Not Exist") return "Hívás nem létezik";
            if (str === "Loop Detected") return "Hurok észlelve";
            if (str === "Too Many Hops") return "Túl sok ugrás";
            if (str === "Address Incomplete") return "Cím nem teljes";
            if (str === "Ambiguous") return "Kétértelmű";
            if (str === "Busy Here") return "Foglalt";
            if (str === "Request Terminated") return "Kérés lejárt";
            if (str === "Not Acceptable Here") return "Nem elfogadható";
            if (str === "Bad Event") return "Rossz esemény";
            if (str === "Request Pending") return "Kérés függőben van";
            if (str === "Undecipherable") return "Megfejthetetlen";
            if (str === "Server Internal Error") return "Szerver belső hiba";
            if (str === "Not Implemented") return "Nem teljesítve";
            if (str === "Bad Gateway") return "Rossz gateway";
            if (str === "Service Unavailable") return "Szolgбltatбs elйrhetetlen";
            if (str === "Server Time-out") return "Szerver idő lejárt";
            if (str === "Version Not Supported") return "Verzió nincs támogatva";
            if (str === "Message Too Large") return "Üzenet túl nagy";
            if (str === "Response Cannot Be Sent Safely") return "Nem lehet biztonságosan válaszolni";
            if (str === "Requires congestion management") return "Torlódás kezelése szükséges";
            if (str === "Would induce fragmentation") return "Töredékeződést okozna";
            if (str === "Busy Everywhere") return "Mindenhol foglalt";
            if (str === "Decline") return "Visszautasít";
            if (str === "Does Not Exist Anywhere") return "Sehol sem létezik";
            if (str === "Not Acceptable") return "Nem elfogadhatу";
            if (str === "Cancel") return "Visszavon";
            if (str === "Your authentication username") return "Az Ön hitelesítő felhasználóneve";
            if (str === "Mic") return "Mic";
            if (str === "Microphone") return "Mikrofon";
            if (str === "Change microphone volume") return "Mikrofon hangerejét módosítja";
            if (str === "Spk") return "Spk";
            if (str === "Speaker") return "Hangszóró";
            if (str === "Change speaker volume") return "Hangszóró hangerejét módosítja";
            if (str === "Initiate voice call or hangup") return "Kezdeményezzen hívást vagy tegye le";
            if (str === "Send instant message") return "Küldj üzenetet";
            if (str === "Logs") return "Napló";
            if (str === "Disconnect current call") return "Hívást megszakítása";
            if (str === "Test") return "Teszt";
            if (str === "Audio") return "Audio";
            if (str === "Select audio devices") return "Válasszon audió eszközt";
            if (str === "Register to this SIP server") return "Jelentkezzen be ehhez a SIP szerverhez";
            if (str === "Phone") return "Telefon";
            if (str === "Line") return "Vonal";
            if (str === "Phone line") return "Telefon vonal";
            if (str === "Disable/Enable audio") return "Audiót kiiktat/engedélyez";
            if (str === "Hold") return "Tart";
            if (str === "Hold/Reload current call") return "Hivástartás/újrahív";
            if (str === "Trans") return "Átirányít";
            if (str === "Call transfer") return "Hívás átirányítás";
            if (str === "Recall last number") return "Hívd újra az utolsó számot";
            if (str === "Send text message") return "Szöveges üzenet küldése";
            if (str === "Save my settings on this computer locally (including password!)") return "Mentse le beállitásaim ezen a számitógépen (jelszót leleértve)";
            if (str === "Register") return "Bejelentkezés";
            if (str === "Deletable") return "Törlendő";
            if (str === "Authenticated successfully") return "Sikeres bejelentkezés";
            if (str === "Incoming") return "Bejövő";

            if (str === "Setup") return "Beбllнtбsok";
            if (str === "My PhoneNumber") return "Telefonszámom";
            if (str === "Save") return "Mentés";
            if (str === "Back") return "Vissza";
            if (str === "Call number") return "Szám hivása";
            if (str === "Phone number  to call") return "Hívandó telefonszám";
            if (str === "Exit") return "Kilépés";
            if (str === "Call") return "Hнvбs";
            if (str === "Callback") return "Visszahívás";
            if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "A szám";
            if (str === "B Number") return "B szám";
            if (str === "Initiate Call") return "Hívást kezd";
            if (str === "Cancel") return "Visszavon";
            if (str === "SMS sender") return "SMS küldő";
            if (str === "Phone number") return "Telefonszám";
            if (str === "SMS message") return "SMS üzenet";
            if (str === "Send") return "Kьld";
            if (str === "Back") return "Vissza";
            if (str === "Config saved") return "Konfig lementve";
            if (str === "cannot save config") return "sikeretelen mentés";
            if (str === "Callback") return "Visszahнvбs";
            if (str === "invalid username") return "érvénytelen felhasználónév";
            if (str === "invalid password") return "érvénytelen jelszó";
            if (str === "invalid phonenumber") return "érvénytelen telefonszám";
            if (str === "invalid number") return "érvénytelen szám";
            if (str === "Callback initiated") return "Visszahívás inicializálva";
            if (str === "Failed") return "Sikertelen";
            if (str === "Succeed") return "Sikeres";
            if (str === "Check credit") return "Ellenőrizze a kreditet";
            if (str === "ERROR") return "HIBA";
            if (str === "OK") return "OK";
            if (str === "Call") return "Hнvбs";
            if (str === "Too many requests") return "Túl sok kérés";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Too many wrong requests") return "Túl sok rossz kérés";
            if (str === "no answer") return "nincs válasz";
            if (str === "My balance") return "Mérlegem";
            if (str === "Outbound") return "Külső";

    }
    catch (e)
    {
         webphone_api.common.PutToDebugLogException(3, "TranslateInnerHun", e);
    }

    return '';

}	
	
/*--------- #language# es Spanish ---------*/
function TranslateInnerSpanish(str)
{
    try
    {
            if (str === "Registered") return "Registrado";
            if (str === "Credit") return "Crйdito";
            if (str === "Username") return "Nombre de Usuario";
            if (str === "Save my settings on this computer locally (including password!)") return "Salvar mi configuración en este computador local(incluyendo mi clave!!!)";
            if (str === "Cannot open mic (audio in) device") return "No puede abrir el micrófono (entrada de audio)";
            if (str === "Send") return "Enviar";
            if (str === "Send Chat") return "Enviar Chat";
            if (str === "Destination") return "Destino";
            if (str === "Provider") return "Proveedor";
            if (str === "Password") return "Clave";
            if (str === "Save Settings") return "Salvar Configuración";
            if (str === "Connect") return "Conectar";
            if (str === "Connecting") return "Conectar";
            if (str === "Hangup") return "Colgar";
            if (str === "Reject") return "Rechazar";
            if (str === "Accept") return "Aceptar";
            if (str === "Call") return "Llamada";
            if (str === "Chat") return "Chat";
            if (str === "Mute") return "Silencio";
            if (str === "Transf") return "Transf";
            if (str === "Redial") return "Remarcar";
            if (str === "Send to") return "Enviar a";
            if (str === "Send") return "Enviar";
            if (str === "Not Initialized") return "No Inicializado";
            if (str === "Register Failed") return "Registro fallido";
            if (str === "Registered") return "Registrado";
            if (str === "Call Finished") return "Llamada Concluída";
            if (str === "Call Initiated") return "Llamada Iniciada";
            if (str === "Initializing") return "Inicializando";
            if (str === "Initializing...") return "Inicializando...";
            if (str === "Registering") return "Registrando";
            if (str === "Calling") return "Llamando";
            if (str === "In Call") return "Ocupado";
            if (str === "Incoming call") return "Llamada entrante";
            if (str === "Incoming call...") return "Entrando llamada...";
            if (str === "Incoming call from") return "Entrando llamada de";
            if (str === "Unknown") return "Desconocido";
            if (str === "Init") return "Iniciar";
            if (str === "Ready") return "Listo";
            if (str === "Ready.") return "Listo";
            if (str === "Waiting") return "Listo";
            if (str === "Waiting.") return "Listo";
            if (str === "SignIn") return "Ingresar";
            if (str === "Subscribe") return "Suscribir";
            if (str === "Setup") return "Configurar";
            if (str === "CallProgress") return "Llamada en Progrso";
            if (str === "Routed") return "Enrutado";
            if (str === "Ringing") return "Timbrando";
            if (str === "CallInitiated") return "LlamadaIniciada";
            if (str === "CallStarted") return "Llamada Arrancada";
            if (str === "Midcall") return "Llamada media";
            if (str === "CallFinishing") return "LLamada Terminando";
            if (str === "CallFinished") return "Llamada Terminada";
            if (str === "Error") return "Error";
            if (str === "Warning") return "Advertencia";
            if (str === "Trying") return "Probando";
            if (str === "Ringing") return "Timbrando";
            if (str === "Call Is Being Forwarded") return "Llamada está siendo transferida";
            if (str === "Queued") return "Encloada";
            if (str === "Session Progress") return "Sesión en Progreso";
            if (str === "OK") return "ACEPTAR";
            if (str === "Accepted") return "Aceptado";
            if (str === "Multiple Choices") return "Múltiples Selecciones";
            if (str === "Moved Permanently") return "Movida Permanentemente";
            if (str === "Moved Temporarily") return "Movida Temporalmente";
            if (str === "Use Proxy") return "Use Proxy";
            if (str === "Alternative Service") return "Servicio Alternativo";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Bad Request") return "Petición erronea";
            if (str === "Unauthorized") return "No autorizado";
            if (str === "Payment Required") return "Pago requerido";
            if (str === "Forbidden") return "Prohibido";
            if (str === "Not Found") return "No encontrado";
            if (str === "Method Not Allowed") return "Método no disponible";
            if (str === "Not Acceptable") return "No aceptable";
            if (str === "Proxy Authentication Required") return "Necesaria autenticación en el proxy";
            if (str === "Request Timeout") return "Tiempo excedido";
            if (str === "Conflict") return "Conflicto";
            if (str === "Gone") return "Ido";
            if (str === "Conditional Request Failed") return "Falló Petición Condicional";
            if (str === "Request Entity Too Large") return "Petición Entidad Demasido Larga";
            if (str === "Request-URI Too Long") return "Petición-URI Demasiado Larga";
            if (str === "Unsupported Media Type") return "Tipo de Medio No Soportado";
            if (str === "Unsupported URI Scheme") return "Esquema URI No Soportado";
            if (str === "Bad Extension") return "Mala Extensión";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Extension Required") return "Extensión requerida";
            if (str === "Interval Too Brief") return "Interválo Demasido Breve";
            if (str === "Unresolvable destination") return "Destino sin Solución";
            if (str === "Temporarily Unavailable") return "Temporalmente No Disponible";
            if (str === "CallTransaction Does Not Exist") return "Transacción de Llamada No Existe";
            if (str === "Loop Detected") return "Detectado bucle";
            if (str === "Too Many Hops") return "Demasiados Saltos";
            if (str === "Address Incomplete") return "Dirección Incompleta";
            if (str === "Ambiguous") return "Ambiguo";
            if (str === "Busy Here") return "Ocupado aquí";
            if (str === "Request Terminated") return "Petición terminada";
            if (str === "Not Acceptable Here") return "NO aceptable aquí";
            if (str === "Bad Event") return "Evento malo";
            if (str === "Request Pending") return "Petición pendiente";
            if (str === "Undecipherable") return "Indescifrable";
            if (str === "Server Internal Error") return "Error Interno del Servidor";
            if (str === "Not Implemented") return "No IMplementado";
            if (str === "Bad Gateway") return "Pasarela Mala";
            if (str === "Service Unavailable") return "Servicio no disponible";
            if (str === "Server Time-out") return "timeout del servidor";
            if (str === "Version Not Supported") return "Versión No Soportada";
            if (str === "Message Too Large") return "Mensaje Demasiado Largo";
            if (str === "Response Cannot Be Sent Safely") return "Respuesta No Puede Ser Enviada de Forma Segura";
            if (str === "Requires congestion management") return "Requiere Administración de Congestión";
            if (str === "Would induce fragmentation") return "Podría Inducir a Fragmentación";
            if (str === "Busy Everywhere") return "Ocupado de Cualquier Manera";
            if (str === "Decline") return "Rechazar";
            if (str === "Does Not Exist Anywhere") return "No Existe de Cualquier Manera";
            if (str === "Not Acceptable") return "No Aceptable";
            if (str === "Cancel") return "Cancelar";
            if (str === "Your authentication username") return "Su Autenticación Nombre de Usuario";
            if (str === "Mic") return "Mic";
            if (str === "Microphone") return "Microfóno";
            if (str === "Change microphone volume") return "Cambiar volúmen del Micrófono";
            if (str === "Spk") return "Par";
            if (str === "Speaker") return "altavoz";
            if (str === "Change speaker volume") return "Cammbiar Volúmen del Parlante";
            if (str === "Initiate voice call or hangup") return "Iniciar llamada de voz o colgar";
            if (str === "Send instant message") return "Enviar mensaje instantáneo";
            if (str === "Logs") return "Logs";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Disconnect current call") return "Desconectar llamada Actual";
            if (str === "Test") return "Examinar";
            if (str === "Audio") return "Audio";
            if (str === "Select audio devices") return "Seleccionar Dispositivo de Audio";
            if (str === "Register to this SIP server") return "Registrar a este servidor SIP";
            if (str === "Phone") return "Teléfono";
            if (str === "Line") return "Línea";
            if (str === "Phone line") return "Línea Telefónica";
            if (str === "Disable/Enable audio") return "Deshabilitar/Habilitar Audio";
            if (str === "Hold") return "en espera";
            if (str === "Hold/Reload current call") return "Suspender/recargar llamada actual";
            if (str === "Trans") return "Transferir";
            if (str === "Call transfer") return "Transferir llamada";
            if (str === "Recall last number") return "remarcar último número";
            if (str === "Send text message") return "Enviar mensaje de Texto";

            if (str === "Save my settings on this computer locally (including password!)") return "Salvar mi configuraciуn en este computador local(incluyendo mi clave!!!)";
            if (str === "Register") return "Registrar";
            if (str === "Deletable") return "Borrable";
            if (str === "Authenticated successfully") return "Autenticado Exitosamente";
            if (str === "Incoming") return "Entrando";
            if (str === "Setup") return "Configurar";
            if (str === "My PhoneNumber") return "Mi Número Telefónico";
            if (str === "Save") return "Guardar";
            if (str === "Back") return "Atrás";
            if (str === "Call number") return "Número a Llamar";
            if (str === "Phone number  to call") return "Número telefónico a llamar";
            if (str === "Exit") return "Salir";
            if (str === "Call") return "Llamar";
            if (str === "Callback") return "Devolver Llamada";
            if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "Número A";
            if (str === "B Number") return "Número B";
            if (str === "Initiate Call") return "Iniciar Llamada";
            if (str === "Cancel") return "Cancelar";
            if (str === "SMS sender") return "Enviar SMS";
            if (str === "Phone number") return "Número Telefónico";
            if (str === "SMS message") return "Mensaje SMS";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Send") return "Enviar";
            if (str === "Back") return "Atrбs";
            if (str === "Config saved") return "Configuración salvada";
            if (str === "cannot save config") return "no puedo salvar la configiración";
            if (str === "Callback") return "Devolver Llamada";
            if (str === "invalid username") return "nombre de usuario inválido";
            if (str === "invalid password") return "clave inválida";
            if (str === "invalid phonenumber") return "número telefónico inválido";
            if (str === "invalid number") return "número inválido";
            if (str === "Callback initiated") return "iniciar devolución llamada";
            if (str === "Failed") return "Falló";
            if (str === "Succeed") return "Éxito";
            if (str === "Check credit") return "Revisar crédito";
            if (str === "ERROR") return "ERROR";
            if (str === "OK") return "ACEPTAR";
            if (str === "Call") return "Llamar";
            if (str === "Too many requests") return "Demasiadas peticiones";
            if (str === "Too many wrong requests") return "Demasiadas peticiones erróneas";
            if (str === "no answer") return "no responde";
            if (str === "My balance") return "Mi balance";
            if (str === "Ready") return "Listo";
            if (str === "Waiting") return "Listo";
            if (str === "Ready.") return "Listo";
            if (str === "Waiting.") return "Listo";
            if (str === "Call") return "Llamada";
            if (str === "Calling") return "Llamando";
            if (str === "Calling...") return "Llamando...";
            if (str === "InProgress") return "En curso";
            if (str === "InProgress...") return "En Progreso...";
            if (str === "Call Finished") return "Llamada Concluнda";
            if (str === "Speaking") return "Hablando";


            if (str === "Call duration:") return "Duración de la llamada:";
            if (str === "Registered. Credit:") return "Registrado. Crédito:";
            if (str === "Registered Credit: ") return "Registrado Crйdito: ";
            if (str === "Loading application") return "Cargando Aplicación";
            if (str === "Loading...") return "Cargando";
            if (str === "Initialized") return "Inicializado";
            if (str === "InProgress") return "En curso";
            if (str === "InCall") return "En la llamada";
            if (str === "Speaking") return "Hablando";
            if (str === "User Hung Up") return "Usuario colgó";
            if (str === "Finished") return "Finalizado";
            if (str === "cancel received") return "cancelar recepción";
            if (str === "Cancel received") return "Cancelar recepciуn";
            if (str === "Loading contacts...") return "Cargando contactos...";
            if (str === "Incoming...") return "Entrante";
            if (str === "Finishing") return "Finalizado";
            if (str === "Chat") return "Chat";
            if (str === "Messaging") return "Mensajería";
            if (str === "Automatic reconfiguration") return "Reconfiguración automática";
            if (str === "init encryption. please wait...") return "iniciando encriptación. por favor espere...";
            if (str === "sound device test failed") return "test sobre el dispositivo de sonido ha fallado";
            if (str === "Cannot open mic (audio in) device") return "No puede abrir el micrуfono (entrada de audio)";
            if (str === "Register expired") return "El registro ha expirado";
            if (str === "Register expired / Manual reregister needed") return "Registro expiró / Necesita re-registro manual";
            if (str === "No network") return "Sin red";
            if (str === "No network / No network connection") return "Sin red / Sin conexión de red";
            if (str === "Register failed") return "Registro fallido";
            if (str === "Unknown / Currently registered") return "Desconocido / Actualmente registrado";
            if (str === "Connection lost") return "perdida la Conexión";
            if (str === "Server is offline, your network is offline") return "Servidor fuera de línea, su red esta desconectada";
            if (str === "Wrong username/password, rejected by the server") return "Nombre de usuario / contraseña incorrectos, el servidor ha rechazado la conexión";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Forbidden by the server -probably wrong username/password") return "Conexión prohibida por el servidor - probablemente el nombre de usuario / contraseña sea erróneo";
            if (str === "enter your key first") return "introduzca su primera clave";
            if (str === "invalid called party") return "conferencia no valida";
            if (str === "api not allowed") return "api no permitido";
            if (str === "no server selected") return "ningún servidor seleccionado";
            if (str === "No call in progress") return "Ninguna llamada en curso";
            if (str === "Rejected") return "Rechazada";
            if (str === "Hold/Reload") return "Espera/Recarga";
            if (str === "Transfer aborted") return "Abortar transferencia";
            if (str === "Conference aborted") return "Abortar llamada en grupo";
            if (str === "AudioDevice") return "Dispositivo de audio";
            if (str === "Settings") return "Ajustes";
            if (str === "Proxy authentication") return "Autenticación proxy";
            if (str === "network connection") return "conexión de red";
            if (str === "cannot connect to") return "no se puede conectar a";
            if (str === "You have new messages") return "Tienes un nuevo mensaje";
            if (str === "No more voicemail message") return "No más mensajes de buzón de voz";
            if (str === "send DTMF") return "Enviar DTMF";
            if (str === "no free line") return "línea no gratuita";
            if (str === "network is offline mt") return "red está desconectada mt";
            if (str === "No target found") return "No se ha encontrado destino";
            if (str === "No phone instance found") return "Ningún teléfono encontrado en la instancia";
            if (str === "disconnected from server") return "desconectado del servidor";
            if (str === "ring timeout") return "tiempo máximo contacto";
            if (str === "media timeout") return "tiempo máximo comunicación";
            if (str === "no response for callsetup") return "ninguna respuesta para el establecimiento de llamada";
            if (str === "transfer timeout") return "tiempo máximo de transferencia";
            if (str === "transfer succeed") return "transferencia realizada";
            if (str === "transfer failed") return "transferencia fallida";
            if (str === "Transferred to") return "Transferido a";
            if (str === "transfered initiated successfully") return "transferencia iniciada con éxito";
            if (str === "wrong username/password") return "nombre de usuario/contraseña incorrectos";
            if (str === "Call transfered ") return "Llamada transferida";
    }
    catch (e)
    {
        webphone_api.common.PutToDebugLogException(3, "TranslateInnerDemo", e);
    }
    return '';
}


/*--------- #language# ru Russian ---------*/
function TranslateInnerRus(str)
{
    try
    {        
            if (str === "Username") return "Логин";
            if (str === "Save my settings on this computer locally (including password!)") return "Сохранить мои настройки на этом компьютере (включая пароль!)";
	    if (str === "Send") return "Отправить";            
	    if (str === "Send Chat") return "Послать";
            if (str === "Destination") return "Направление";

            if (str === "Provider") return "Провайдер";
            
            if (str === "Password") return "Пароль";            
            if (str === "Save Settings") return "Запомнить";
            if (str === "Connect") return "Войти в сеть";
            if (str === "Connecting") return "Войти в сеть";
            if (str === "Hangup") return "Повесить трубку";
            if (str === "Reject") return "Отказаться";
            if (str === "Accept") return "Принять";
            if (str === "Call") return "Звонок";
            if (str === "Chat") return "Отправить сообщение";
            if (str === "Mute") return "Выкл. звук";
            if (str === "Transf") return "Трансфер";
            if (str === "Redial") return "Повторный звонок";
            if (str === "Send to") return "Отправить...";
            if (str === "Send") return "Отправить";
            if (str === "Not Initialized") return "Не инициализировано";

            if (str === "Register Failed") return "Регистрация не завершена";

            if (str === "Registered") return "Регистрация завершена";
            if (str === "Call Finished") return "Звонок завершон";
            if (str === "Call Initiated") return "Звонок запущен";
            if (str === "Initializing") return "Инициализация";
            if (str === "Initializing...") return "Инициализация";
            if (str === "Registering") return "Регистрация";
            if (str === "Calling") return "Звоним";
            if (str === "Calling...") return "Вызов...";
            if (str === "InProgress...") return "Звоним";
            if (str === "In Call") return "Во время звонка";
            if (str === "Incoming call") return "Входящий звонок";
            if (str === "Incoming call...") return "Входящий звонок";
            if (str === "Incoming call from") return "Входящий звонок от";
            if (str === "Unknown") return "Неизвестный";
            if (str === "Init") return "Инит";
            if (str === "Ready") return "Готов";
            if (str === "Ready.") return "Готов";
            if (str === "Waiting") return "Готов";
            if (str === "Waiting.") return "Готов";
            if (str === "Outband") return "Outband";
            if (str === "SignIn") return "Войти";
            if (str === "Subscribe") return "Подписаться";
            if (str === "Setup") return "Настройки";
            if (str === "CallProgress") return "Длительность звонка";
            if (str === "Routed") return "Переадресовано";
            if (str === "Ringing") return "Звонок";
            if (str === "CallInitiated") return "Звонок начинается";
            if (str === "CallStarted") return "Звонок начат";
            if (str === "Midcall") return "Midcall";

            if (str === "CallFinishing") return "Звонок заканчивается";
            if (str === "CallFinished") return "Звонок завершен";
            if (str === "Error") return "Ошибка";
            
            if (str === "Warning") return "Предупреждение";
            if (str === "Trying") return "Попытка";
            

            if (str === "Call Is Being Forwarded") return "Звонок перенаправляется";
            if (str === "Queued") return "В очереди";
            if (str === "Session Progress") return "Соединение";
            if (str === "OK") return "ОК";
            if (str === "Accepted") return "Принято";
            if (str === "Multiple Choices") return "Множественный выбор";

            if (str === "Moved Permanently") return "Постоянно перенесено";
            if (str === "Moved Temporarily") return "Временно перенесено";
            if (str === "Use Proxy") return "Использовать прокси";

            if (str === "Alternative Service") return "Альтернативный сервис";
            if (str === "Bad Request") return "Не верный запрос";
            if (str === "Unauthorized") return "Не авторизован";
            if (str === "Payment Required") return "Необходима оплата";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Forbidden") return "Запрещен";
            if (str === "Not Found") return "Не найден";
            if (str === "Method Not Allowed") return "Метод не разрешен";
            if (str === "Not Acceptable") return "Не приемлимо";

            if (str === "Proxy Authentication Required") return "Необходима авторизация для прокси";
            if (str === "Request Timeout") return "Время запроса исчерпно";
            if (str === "Conflict") return "Конфликт";
            if (str === "Gone") return "Ушёл";

            if (str === "Conditional Request Failed") return "Условный запрос не прошел";

            if (str === "Request Entity Too Large") return "Запрошес слишком длинный";
            if (str === "Request-URI Too Long") return "URL слишком длинный";

            if (str === "Unsupported Media Type") return "Неподдерживаемый тип";

            if (str === "Unsupported URI Scheme") return "Неподдерживаемый формат";

            if (str === "Bad Extension") return "Неправильное расширение";

            if (str === "Extension Required") return "Требуется расширение";

            if (str === "Interval Too Brief") return "Слишком короткий интервал";

            if (str === "Unresolvable destination") return "Направление не определено";

            if (str === "Temporarily Unavailable") return "Временно недоступно";

            if (str === "CallTransaction Does Not Exist") return "Транзакция не существует";
            if (str === "Loop Detected") return "Обнаружена петля";

            if (str === "Too Many Hops") return "Слишком длинный маршрут";

            if (str === "Address Incomplete") return "Ввод адреса не завершен";
            if (str === "Ambiguous") return "Неоднозначно";
            if (str === "Busy Here") return "Занято";
            if (str === "Request Terminated") return "Запрос отклонен";
            if (str === "Not Acceptable Here") return "Не применимо";
            if (str === "Bad Event") return "Ошибка";

            if (str === "Request Pending") return "Запрос обрабатывается";

            if (str === "Undecipherable") return "Не поддается расшифровке";
            if (str === "Server Internal Error") return "Ошибка сервера";
            if (str === "Not Implemented") return "Не подключено";
            if (str === "Bad Gateway") return "Неправильный шлюз";
            if (str === "Service Unavailable") return "Сервис не доступен";
            if (str === "Server Time-out") return "Таймаут сервера";

            if (str === "Version Not Supported") return "Версия не поддерживается";

            if (str === "Message Too Large") return "Слишком длинное сообщение";

            if (str === "Response Cannot Be Sent Safely") return "Ответ не может быть послан";

            if (str === "Requires congestion management") return "Требуется вмешательство";

            if (str === "Would induce fragmentation") return "Увеличит фрагментацию";
            if (str === "Busy Everywhere") return "Везде занято";
            if (str === "Decline") return "Отклонить";

            if (str === "Does Not Exist Anywhere") return "Больше не существует";
            
           
            if (str === "Cancel") return "Отмена";
            if (str === "Your authentication username") return "Ваш логин";
            if (str === "Mic") return "Микр";
            if (str === "Microphone") return "Микрофон";

            if (str === "Change microphone volume") return "Изменить громкость микрофона";
            if (str === "Spk") return "Кол";
            if (str === "Speaker") return "Динамик";

            if (str === "Change speaker volume") return "Изменить громкость колонок";

            if (str === "Initiate voice call or hangup") return "Начать голосовой звонок или повесить трубку";
            if (str === "Send instant message") return "Послать сообщение";
            if (str === "Logs") return "Логи";

            if (str === "Disconnect current call") return "Сбросить текущий звонок";
            if (str === "Test") return "Тест";
            if (str === "Audio") return "Аудио";

            if (str === "Select audio devices") return "Выбрать аудио устройство";

            if (str === "Register to this SIP server") return "Зарегистрироваться на этом сервере SIP";
            if (str === "Phone") return "Телефон";
            if (str === "Line") return "Линия";
            if (str === "Phone line") return "Телефонная линия";
            if (str === "Disable/Enable audio") return "Выкл/Вкл аудио";
            if (str === "Hold") return "удержать";

            if (str === "Hold/Reload current call") return "Поставить/Снаять с холда звонок";
            if (str === "Trans") return "Перевод";
            if (str === "Call transfer") return "Перевод звонка";

            if (str === "Recall last number") return "Перезвонить на этот же номер";
            

            if (str === "Send text message") return "Послать текстовое сообщение";
            
            if (str === "Register") return "Зарегистрировать";
            if (str === "Deletable") return "Удалить";

            if (str === "Authenticated successfully") return "Успешно аутентифицирован";
            if (str === "Incoming") return "Входящий";

            if (str === "My PhoneNumber") return "Мой телефонный номер";
            if (str === "Save") return "Сохранить";
            if (str === "Back") return "Назад";
            if (str === "Call number") return "Номер телефона";

            if (str === "Phone number  to call") return "Телефонный номер для звонка";
            if (str === "Exit") return "Выход";
            
            if (str === "Callback") return "Обратный вызов";
            if (str === "P2P") return "ЗАКАЗ ЗВОНКА";
            if (str === "SMS") return "СМС";
            
            if (str === "A Number") return "Номер А";
            if (str === "B Number") return "Номер Б";
            if (str === "Initiate Call") return "инициировать звонок";
            
            if (str === "SMS sender") return "Отправка СМС";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Phone number") return "Телефонный номер";
            if (str === "SMS message") return "Текст СМС";
            
            if (str === "Config saved") return "Настройки сохранены";

            //noinspection JSConstructorReturnsPrimitive
        if (str === "cannot save config") return "не могу сохранить настройки";
            
            if (str === "invalid username") return "неправильный логин";
            if (str === "invalid password") return "неправильный пароль";
            if (str === "invalid phonenumber") return "неправильный номер";
            if (str === "invalid number") return "неправильный номер";
            if (str === "Callback initiated") return "Начинаем звонить";
            if (str === "Failed") return "Ошибка";
            if (str === "Succeed") return "Сделано";
            if (str === "Check credit") return "Проверить баланс";
            

            if (str === "Too many requests") return "Слишком много запросов";
            if (str === "Too many wrong requests") return "Ошибка";
            if (str === "no answer") return "ответа нет";
            if (str === "My balance") return "Баланс";

    }
    catch (e)
    {
         webphone_api.common.PutToDebugLogException(3, "commonTranslateInner", e);
    }

    return '';

}

/*--------- #language# it Italian ---------*/
function TranslateInnerItalian(str)
{
    try
    {
           if (str === "Registered") return "Registrato";
            if (str === "Credit") return "Credito";
            if (str === "Username") return "Username";
            if (str === "Save my settings on this computer locally (including password!)") return "Salva le mie impostazioni in questo computer (inclusa la password!)";
            if (str === "Send") return "Invia";
            if (str === "Send Chat") return "Invia Chat";
            if (str === "Destination") return "Destinazione";
            if (str === "Provider") return "Provider";
            if (str === "Password") return "Password";
            if (str === "Save Settings") return "Salva Impostazioni";
            if (str === "Connect") return "Connetti";
            if (str === "Connecting") return "Connetti";
            if (str === "Hangup") return "Chiudi";
            if (str === "Reject") return "Rifiuta";
            if (str === "Accept") return "Accetta";
            if (str === "Call") return "Chiama";
            if (str === "Chat") return "Chat";
            if (str === "Mute") return "mute";
            if (str === "Transf") return "Trasferimento";
            if (str === "Redial") return "Richiama";
            if (str === "Send to") return "Invia a";
            if (str === "Send") return "Invia";
            if (str === "Not Initialized") return "Non Inizializzato";
            if (str === "Register Failed") return "Registrazione Fallita";
            if (str === "Registered") return "Registrato";
            if (str === "Call Finished") return "Chiamata Terminata";
            if (str === "Call Initiated") return "Chiamata Iniziata";
            if (str === "Initializing") return "Inizializzazione";
            if (str === "Initializing...") return "Inizializzazione...";
            if (str === "Registering") return "Registrazione";
            if (str === "Calling") return "Chiamata in corso";
            if (str === "Calling...") return "sto chiamando...";
            if (str === "InProgress...") return "Chiamata in corso...";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "In Call") return "In Chiamata";
            if (str === "Incoming call") return "Chiamata in entrata";
            if (str === "Incoming call...") return "Chiamata in ingresso...";
            if (str === "Incoming call from") return "Chiamata in ingresso da";
            if (str === "Unknown") return "Sconosciuto";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Init") return "Inizio";
            if (str === "Ready") return "Pronto";
            if (str === "Ready.") return "Pronto.";
            if (str === "Waiting") return "Pronto";
            if (str === "Waiting.") return "Pronto.";
            if (str === "Outband") return "Fuori banda";
            if (str === "SignIn") return "Registrati";
            if (str === "Subscribe") return "Iscriviti";
            if (str === "Setup") return "Setup";
            if (str === "CallProgress") return "Chiamata in Corso";
            if (str === "Routed") return "Inoltrata";
            if (str === "Ringing") return "Squillando";
            if (str === "CallInitiated") return "Chiamata Inizializzata";
            if (str === "CallStarted") return "Chiamata Iniziata";
            if (str === "Midcall") return "Metà chiamata";
            if (str === "CallFinishing") return "Chiamata in Chiusura";
            if (str === "CallFinished") return "Chiamata Terminata";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Error") return "Errore";
            if (str === "Warning") return "Avviso";
            if (str === "Trying") return "Provando";
            if (str === "Ringing") return "Squillando";
            if (str === "Call Is Being Forwarded") return "La chiamata è stata inoltrata";
            if (str === "Queued") return "Accodata";
            if (str === "Session Progress") return "Progresso Sessione";
            if (str === "OK") return "OK";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Accepted") return "Accettato";
            if (str === "Multiple Choices") return "Scelte Multiple";
            if (str === "Moved Permanently") return "Mosso Permanentemente";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Moved Temporarily") return "Mosso Temporaneamente";
            if (str === "Use Proxy") return "Utilizza Proxy";
            if (str === "Alternative Service") return "Servizio Alternativo";
            if (str === "Bad Request") return "Richiesta errata";
            if (str === "Unauthorized") return "Non autorizzato";
            if (str === "Payment Required") return "Richiesto pagamento";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Forbidden") return "Proibito";
            if (str === "Not Found") return "Non trovato";
            if (str === "Method Not Allowed") return "Metodo non permesso";
            if (str === "Not Acceptable") return "Non accettabile";
            if (str === "Proxy Authentication Required") return "E' necessario autentificarsi al proxy";
            if (str === "Request Timeout") return "Richiesta scaduta";
            if (str === "Conflict") return "Conflitto";
            if (str === "Gone") return "Andato";
            if (str === "Conditional Request Failed") return "Richiesta Condizionale Fallita";
            if (str === "Request Entity Too Large") return "Entità della richiesta troppo grande";
            if (str === "Request-URI Too Long") return "URI Richiesta troppo lunga";
            if (str === "Unsupported Media Type") return "Media Type non supportato";
            if (str === "Unsupported URI Scheme") return "Schema URI non supportato";
            if (str === "Bad Extension") return "Estensione Errata";
            if (str === "Extension Required") return "Estensione Richiesta";
            if (str === "Interval Too Brief") return "Intervallo Troppo Breve";
            if (str === "Unresolvable destination") return "Destinazione non trovata";
            if (str === "Temporarily Unavailable") return "Temporaneamente non Disponibile";
            if (str === "CallTransaction Does Not Exist") return "Transazione Chiamata non esistente";
            if (str === "Loop Detected") return "Rilevato Loop";
            if (str === "Too Many Hops") return "Troppi rimbalzi";
            if (str === "Address Incomplete") return "Indirizzo Incompleto";
            if (str === "Ambiguous") return "Ambiguo";
            if (str === "Busy Here") return "Occupato qua";
            if (str === "Request Terminated") return "Richiesta Terminata";
            if (str === "Not Acceptable Here") return "Non Accettabile qua";
            if (str === "Bad Event") return "Evento Errato";
            if (str === "Request Pending") return "Richiesta Pendente";
            if (str === "Undecipherable") return "Indecifrabile";
            if (str === "Server Internal Error") return "Errore Interno del Server";
            if (str === "Not Implemented") return "Non Implementato";
            if (str === "Bad Gateway") return "Gateway Errato";
            if (str === "Service Unavailable") return "Servizio indisponibile";
            if (str === "Server Time-out") return "Server Time-out";
            if (str === "Version Not Supported") return "Versione Non Supportata";
            if (str === "Message Too Large") return "Messaggio Troppo Largo";
            if (str === "Response Cannot Be Sent Safely") return "La risposta non può essere trasmessa in modo sicuro";
            if (str === "Requires congestion management") return "Richiede la gestione della congestione";
            if (str === "Would induce fragmentation") return "Potrebbe indurre frammentazione";
            if (str === "Busy Everywhere") return "Occupato Dovunque";
            if (str === "Decline") return "Rifiuta";
            if (str === "Does Not Exist Anywhere") return "Non Esiste da Nessuna Parte";
            if (str === "Not Acceptable") return "Non Accettabile";
            if (str === "Cancel") return "Cancella";
            if (str === "Your authentication username") return "Il tuo nome utente di autenticazione";
            if (str === "Mic") return "Mic";
            if (str === "Microphone") return "Microfono";
            if (str === "Change microphone volume") return "Cambia volume microfono";
            if (str === "Spk") return "Altop";
            if (str === "Speaker") return "vivavoce";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Change speaker volume") return "Cambia volume altoparlante";
            if (str === "Initiate voice call or hangup") return "Inizia la chiamata o riaggancia";
            if (str === "Send instant message") return "Invia messaggio istantaneo";
            if (str === "Logs") return "Logs";
            if (str === "Disconnect current call") return "Disconnetti la chiamata corrente";
            if (str === "Test") return "Test";
            if (str === "Audio") return "Audio";
            if (str === "Select audio devices") return "Seleziona dispositivo audio";
            if (str === "Register to this SIP server") return "Registrati a questo server SIP";
            if (str === "Phone") return "Telefono";
            if (str === "Line") return "Linea";
            if (str === "Phone line") return "Linea telefonica";
            if (str === "Disable/Enable audio") return "Disabilita/Abilita audio";
            if (str === "Hold") return "in attesa";
            if (str === "Hold/Reload current call") return "Attesa/Riprendi chiamata corrente";
            if (str === "Trans") return "Trasf";
            if (str === "Call transfer") return "Trasferimento Chiamata";
            if (str === "Recall last number") return "Richiama l'ultimo numero";
            if (str === "Send text message") return "Invia messaggio di testo";

            if (str === "Save my settings on this computer locally (including password!)") return "Salva le mie impostazioni in questo computer (inclusa la password!)";
            if (str === "Register") return "Registra";
            if (str === "Deletable") return "Cancellabile";
            if (str === "Authenticated successfully") return "Autenticato con successo";
            if (str === "Incoming") return "Ingresso";
            if (str === "Setup") return "Setup";
            if (str === "My PhoneNumber") return "Mio Numero di Telefono";
            if (str === "Save") return "Salva";
            if (str === "Back") return "Indietro";
            if (str === "Call number") return "Chiama il numero";
            if (str === "Phone number  to call") return "Numero di telefono da chiamare";
            if (str === "Exit") return "Uscita";
            if (str === "Call") return "Chiama";
            if (str === "Callback") return "Richiamare";
            if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "Numero A";
            if (str === "B Number") return "Numero B";
            if (str === "Initiate Call") return "Avviare la chiamata";
            if (str === "Cancel") return "Cancella";
            if (str === "SMS sender") return "Mittente SMS";
            if (str === "Phone number") return "Numero Telefono";
            if (str === "SMS message") return "Messaggio SMS";
            if (str === "Send") return "Invia";
            if (str === "Back") return "Indietro";
            if (str === "Config saved") return "Configurazione salvata";
            if (str === "cannot save config") return "non è possibile salvare la configurazione";
            if (str === "Callback") return "Richiamare";
            if (str === "invalid username") return "username non valido";
            if (str === "invalid password") return "password non valida";
            if (str === "invalid phonenumber") return "numero di telefono non valido";
            if (str === "invalid number") return "numero non valido";
            if (str === "Callback initiated") return "Richiamata iniziata";
            if (str === "Failed") return "Fallito";
            if (str === "Succeed") return "Successo";
            if (str === "Check credit") return "Controlla credito";
            if (str === "ERROR") return "ERRORE";
            if (str === "OK") return "OK";
            if (str === "Call") return "Chiama";
            if (str === "Too many requests") return "Troppe richieste";
            if (str === "Too many wrong requests") return "Troppe richieste errate";
            if (str === "no answer") return "nessuna risposta";
            if (str === "My balance") return "Il mio equilibrio";

    }
    catch (e)
    {
            webphone_api.common.PutToDebugLogException(3, "commonTranslateInner", e);
    }
    return '';
}

/*--------- #language# ro Romanian ---------*/
function TranslateInnerRo(str)
{
    try
    {
            if (str === "Registered") return "Înregistrat";
            if (str === "Credit") return "Credit";
            if (str === "Username") return "Nume utilizator";
            if (str === "Save my settings on this computer locally (including password!)") return "Salveaza setarile mele local la acest calculator (inclusiv parola)";

            if (str === "Send") return "Trimite";
            if (str === "Send Chat") return "Trimite mesaj";
            if (str === "Destination") return "Destinatie";
            if (str === "Provider") return "Furnizor";
            if (str === "Password") return "Parola";
            if (str === "Save Settings") return "Salveaza Setarile";
            if (str === "Connect") return "Conectare";
            if (str === "Connecting") return "Conectare";
            if (str === "Hangup") return "Închide";
            if (str === "Reject") return "Respinge";
            if (str === "Accept") return "Accepta";
            if (str === "Call") return "Apel";
            if (str === "Chat") return "Mesaj";
            if (str === "Mute") return "Mut";
            if (str === "Transf") return "Transfer";
            if (str === "Redial") return "Reapelare";
            if (str === "Send to") return "Trimite";
            if (str === "Send") return "Trimite";
            if (str === "Not Initialized") return "Neinitializat";
            if (str === "Register Failed") return "Înregistrare esuata";
            if (str === "Registered") return "Înregistrat";
            if (str === "Call Finished") return "Apel terminat";
            if (str === "Call Initiated") return "Apel initiat";
            if (str === "Initializing") return "Initializare";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Initializing...") return "Initializare...";
            if (str === "Registering") return "Înregistrare";
            if (str === "Calling") return "Apelare";
            if (str === "Calling...") return "Apelare...";
            if (str === "InProgress...") return "Apelare...";
            if (str === "In Call") return "În apel";
            if (str === "Incoming call") return "Soseste apel";
            if (str === "Incoming call...") return "Soseste apel...";
            if (str === "Incoming call from") return "Soseste apel de la";
            if (str === "Unknown") return "Necunoscut";
            if (str === "Init") return "Init";
            if (str === "Ready") return "Gata";
            if (str === "Ready.") return "Gata.";
            if (str === "Waiting") return "Gata";
            if (str === "Waiting.") return "Gata.";
            if (str === "Outband") return "Outband";
            if (str === "SignIn") return "Înregistrati-va";
            if (str === "Subscribe") return "Aboneaza-te";
            if (str === "Setup") return "Setare";
            if (str === "CallProgress") return "ProgresulApelului";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Routed") return "Directionat";
            if (str === "Ringing") return "Suna";
            if (str === "CallInitiated") return "Apel initiat";
            if (str === "CallStarted") return "Apel pornit";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Midcall") return "În apel";
            if (str === "CallFinishing") return "ApelulSeTermina";
            if (str === "CallFinished") return "ApelTerminat";
            if (str === "Error") return "Eroare";
            if (str === "Warning") return "Avertisment";
            if (str === "Trying") return "Încerc";
            if (str === "Ringing") return "Suna";
            if (str === "Call Is Being Forwarded") return "Apelul este transmis";
            if (str === "Queued") return "Asezat la rând";
            if (str === "Session Progress") return "Progres Sesiune";
            if (str === "OK") return "OK";
            if (str === "Accepted") return "Acceptat";
            if (str === "Multiple Choices") return "Alegeri multiple";
            if (str === "Moved Permanently") return "S-a mutat permanent";
            if (str === "Moved Temporarily") return "S-a mutat temporar";
            if (str === "Use Proxy") return "Foloseste proxy";
            if (str === "Alternative Service") return "Serviciu Alternativ";
            if (str === "Bad Request") return "Cerere eronata";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Unauthorized") return "Neautorizat";
            if (str === "Payment Required") return "Plata necesara";
            if (str === "Forbidden") return "Interzis";
            if (str === "Not Found") return "Nu s-a gasit";
            if (str === "Method Not Allowed") return "Metoda nepermisa";
            if (str === "Not Acceptable") return "Inacceptabil";
            if (str === "Proxy Authentication Required") return "Solicitat Autenticare Proxy";
            if (str === "Request Timeout") return "Timeout Cerere";
            if (str === "Conflict") return "Conflict";
            if (str === "Gone") return "A disparut";
            if (str === "Conditional Request Failed") return "Cerere conditionala esuata";
            if (str === "Request Entity Too Large") return "Entitatea de Cerere e prea mare";
            if (str === "Request-URI Too Long") return "URI Cerere prea lung";
            if (str === "Unsupported Media Type") return "Tip media nesustinut";
            if (str === "Unsupported URI Scheme") return "Schema URI nesustinut";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Bad Extension") return "Extensie rea";
            if (str === "Extension Required") return "Se solicita extensie";
            if (str === "Interval Too Brief") return "Interval Prea Scurt";
            if (str === "Unresolvable destination") return "Destinatie imposibil de gasit";
            if (str === "Temporarily Unavailable") return "Temporar Indisponibil";
            if (str === "CallTransaction Does Not Exist") return "Tranzactia Apel Nu Exista";
            if (str === "Loop Detected") return "Bulca Detectata";
            if (str === "Too Many Hops") return "Prea Multe Salturi";
            if (str === "Address Incomplete") return "Adresa incompleta";
            if (str === "Ambiguous") return "Ambiguu";
            if (str === "Busy Here") return "Ocupat Aici";
            if (str === "Request Terminated") return "Cerere Terminata";
            if (str === "Not Acceptable Here") return "Aici Inacceptabil";
            if (str === "Bad Event") return "Eveniment De Eroare";
            if (str === "Request Pending") return "Cerere În Asteptare";
            if (str === "Undecipherable") return "Indescifrabil";
            if (str === "Server Internal Error") return "Eroare Interna Server";
            if (str === "Not Implemented") return "Neimplementat";
            if (str === "Bad Gateway") return "Gateway Incorect";
            if (str === "Service Unavailable") return "Serviciu Indisponibil";
            if (str === "Server Time-out") return "Time-out Server";
            if (str === "Version Not Supported") return "Versiune Nesprijinit";
            if (str === "Message Too Large") return "Mesaj Prea Mare";
            if (str === "Response Cannot Be Sent Safely") return "Raspuns Nu Poate Fi Trimis În Siguranta";
            if (str === "Requires congestion management") return "Cere managementul congestiei";
            if (str === "Would induce fragmentation") return "Ar cauza fragmentare";
            if (str === "Busy Everywhere") return "Toate ocupate";
            if (str === "Decline") return "Declin";
            if (str === "Does Not Exist Anywhere") return "Nu Exista Niciunde";
            if (str === "Not Acceptable") return "Inacceptabil";
            if (str === "Cancel") return "Anulare";
            if (str === "Your authentication username") return "Numele utilizator al dvs.";
            if (str === "Mic") return "Mic";
            if (str === "Microphone") return "Microfon";
            if (str === "Change microphone volume") return "Schimba volumul microfonului";
            if (str === "Spk") return "Dif";
            if (str === "Speaker") return "Difuzor";
            if (str === "Change speaker volume") return "Schimba volumul difuzorului";
            if (str === "Initiate voice call or hangup") return "Initiati apel voce sau închidere";
            if (str === "Send instant message") return "Trimite mesaj";
            if (str === "Logs") return "Jurnale";
            if (str === "Disconnect current call") return "Închide apelul curent";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Test") return "Test";
            if (str === "Audio") return "Audio";
            if (str === "Select audio devices") return "Selecteaza obiectele audio";
            if (str === "Register to this SIP server") return "Înregistrare la acest server SIP";
            if (str === "Phone") return "Telefon";
            if (str === "Line") return "Linie";
            if (str === "Phone line") return "Linie telefon";
            if (str === "Disable/Enable audio") return "Interzice/Permite audio";
            if (str === "Hold") return "Tine";
            if (str === "Hold/Reload current call") return "Tine/Reîncarca apel curent";
            if (str === "Trans") return "Trans";
            if (str === "Call transfer") return "Transfer Apel";
            if (str === "Recall last number") return "Suna din nou ultimul numar";
            if (str === "Send text message") return "Trimite mesaj text";

            if (str === "Save my settings on this computer locally (including password!)") return "Salveaza setarile mele local la acest calculator (inclusiv parola)";
            if (str === "Register") return "Înregistrare";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Deletable") return "Anulabil";
            if (str === "Authenticated successfully") return "Înregistrare reusita";
            if (str === "Incoming") return "Sosire";
            if (str === "Setup") return "Setare";
            if (str === "My PhoneNumber") return "Numarul Meu De Telefon";
            if (str === "Save") return "Salveaza";
            if (str === "Back") return "Înapoi";
            if (str === "Call number") return "Apeleaza numarul";
            if (str === "Phone number to call") return "Numar telefon de apelat";
            if (str === "Exit") return "Iesire";
            if (str === "Call") return "Apel";
            if (str === "Callback") return "Callback";
            if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "Numarul A";
            if (str === "B Number") return "Numarul B";
            if (str === "Initiate Call") return "Initiare apel";
            if (str === "Cancel") return "Anulare";
            if (str === "SMS sender") return "Expeditor SMS";
            if (str === "Phone number") return "Numar telefon";
            if (str === "SMS message") return "Mesaj SMS";
            if (str === "Send") return "Trimite";
            if (str === "Back") return "Оnapoi";
            if (str === "Config saved") return "Configuratia salvata";
            if (str === "cannot save config") return "nu pot sa salvez configuratia";
            if (str === "Callback") return "Callback";
            if (str === "invalid username") return "nume utilizator invalid";
            if (str === "invalid password") return "parola invalida";
            if (str === "invalid phonenumber") return "numar telefon invalid";
            if (str === "invalid number") return "numar invalid";
            if (str === "Callback initiated") return "Apel initiat";
            if (str === "Failed") return "Esuat";
            if (str === "Succeed") return "Urmeaza";
            if (str === "Check credit") return "Verifica crediul";
            if (str === "ERROR") return "EROARE";
            if (str === "OK") return "OK";
            if (str === "Call") return "Apel";
            if (str === "Too many requests") return "Prea multe cereri";
            if (str === "Too many wrong requests") return "Prea multe cereri eronate";
            if (str === "no answer") return "nu e raspuns";
            if (str === "My balance") return "Bilantul meu";

    }
    catch (e)
    {
            webphone_api.common.PutToDebugLogException(3, "commonTranslateInner", e);
    }
    return '';
}

/*--------- #language# de German ---------*/
function TranslateInnerDe(str)
{
    try
    {
            if (str === "Registered") return "Registriert";
            if (str === "Credit") return "Kredit";
            if (str === "Username") return "Benutzername";
            if (str === "Save my settings on this computer locally (including password!)") return "Speichere meine Einstellungen lokal, auf dieser Computer";

            if (str === "Settings") return "Настройки";
            if (str === "Send") return "Senden";
            if (str === "Send Chat") return "Message Senden";
            if (str === "Destination") return "Destination";
            if (str === "Provider") return "Dienstanbieter";
            if (str === "Password") return "Passwort";
            if (str === "Save Settings") return "Einstellungen Speichern";
            if (str === "Connect") return "Verbinden";
            if (str === "Connecting") return "Verbinden";
            if (str === "Hangup") return "Ablegen";
            if (str === "Reject") return "Abweisen";
            if (str === "Accept") return "Annehmen";
            if (str === "Call") return "Anruf";
            if (str === "Chat") return "Message";
            if (str === "Mute") return "Stumm";
            if (str === "Transf") return "Transf";
            if (str === "Redial") return "Neu anrufen";
            if (str === "Send to") return "Senden zu";
            if (str === "Send") return "Senden";
            if (str === "Not Initialized") return "Nicht Inizialisiert";
            if (str === "Register Failed") return "Gescheiterte Registrierung";
            if (str === "Registered") return "Registriert";
            if (str === "Call Finished") return "Anruf beendet";
            if (str === "Call Initiated") return "Anruf inizialisiert";
            if (str === "Initializing") return "Inizialisierung";
            if (str === "Initializing...") return "Inizialisierung...";
            if (str === "Registering") return "Registrierung";
            if (str === "Calling") return "Anruf";
            if (str === "Calling...") return "Anrufen...";
            if (str === "InProgress...") return "Anruf...";
            if (str === "In Call") return "Im Anruf";
            if (str === "Incoming call") return "Eingehender Anruf";
            if (str === "Incoming call...") return "Einlaufende Anruf...";
            if (str === "Incoming call from") return "Einlaufende Anruf von";
            if (str === "Unknown") return "Unbekannt";
            if (str === "Init") return "Init";
            if (str === "Ready") return "Fertig";
            if (str === "Ready.") return "Fertig.";
            if (str === "Waiting") return "Waiting";
            if (str === "Waiting.") return "Waiting.";
            if (str === "Outband") return "Ausserband";
            if (str === "SignIn") return "Eintragen";
            if (str === "Subscribe") return "Abonnieren";
            if (str === "Setup") return "Einstellung";
            if (str === "CallProgress") return "Anruf Ablauf";
            if (str === "Routed") return "Geleitet";
            if (str === "Ringing") return "Klingeln";
            if (str === "CallInitiated") return "Anruf inizialisiert";
            if (str === "CallStarted") return "Anruf gestartet";
            if (str === "Midcall") return "Im Anruf";
            if (str === "CallFinishing") return "Anruf wird beendet";
            if (str === "CallFinished") return "Anruf beendet";
            if (str === "Error") return "Fehler";
            if (str === "Warning") return "Achtung";
            if (str === "Trying") return "Fersuch";
            if (str === "Ringing") return "Klingeln";
            if (str === "Call Is Being Forwarded") return "Der Anruf wird weitergeleitet";
            if (str === "Queued") return "Im Reihe gelegt";
            if (str === "Session Progress") return "Session im Ablauf";
            if (str === "OK") return "OK";
            if (str === "Accepted") return "Akzeptiert";
            if (str === "Multiple Choices") return "Mehrere Auswähle";
            if (str === "Moved Permanently") return "Permanent eingezogen";
            if (str === "Moved Temporarily") return "Einweilen eingezogen";
            if (str === "Use Proxy") return "Proxy verwenden";
            if (str === "Alternative Service") return "Alternative Betrieb";
            if (str === "Bad Request") return "Fehler in Anforderung";
            if (str === "Unauthorized") return "Nicht autorisiert";
            if (str === "Payment Required") return "Zahlung erforderlich";
            if (str === "Forbidden") return "Verboten";
            if (str === "Not Found") return "Nicht gefunden";
            if (str === "Method Not Allowed") return "Diese Methode ist nicht erlaubt";
            if (str === "Not Acceptable") return "Nicht akzeptabel";
            if (str === "Proxy Authentication Required") return "Proxy Authentifizierung erforderlich";
            if (str === "Request Timeout") return "Zeitüberschreitung in der Anforderung";
            if (str === "Conflict") return "Konflikt";
            if (str === "Gone") return "Ist weg";
            if (str === "Conditional Request Failed") return "Konditionaler Abfrage gescheitert";
            if (str === "Request Entity Too Large") return "Abfrage ist zu groß";
            if (str === "Request-URI Too Long") return "URI-Abfrage zu lang";
            if (str === "Unsupported Media Type") return "Nicht unterstützter Mediatyp";
            if (str === "Unsupported URI Scheme") return "Nicht unterstützter URI Modell";
            if (str === "Bad Extension") return "Fehlerhaftes Ausweitung";
            if (str === "Extension Required") return "Ausweitung nötig";
            if (str === "Interval Too Brief") return "Bereich ist zu kurz";
            if (str === "Unresolvable destination") return "Unauffindiger Destination";
            if (str === "Temporarily Unavailable") return "Einweilen nicht verfügbar";
            if (str === "CallTransaction Does Not Exist") return "Anruftransaction existiert nicht";
            if (str === "Loop Detected") return "Endloser Schleife bemerkt";
            if (str === "Too Many Hops") return "Zu viele Sprünge";
            if (str === "Address Incomplete") return "Addresse nicht komplett";
            if (str === "Ambiguous") return "Vieldeutig";
            if (str === "Busy Here") return "Besetzt hier";
            if (str === "Request Terminated") return "Anfrage beendet";
            if (str === "Not Acceptable Here") return "Nicht akkzeptabel hier";
            if (str === "Bad Event") return "Schlechter Ereignis";
            if (str === "Request Pending") return "Anfrage hängig";
            if (str === "Undecipherable") return "Nicht entzifferbar";
            if (str === "Server Internal Error") return "Interner Serverfehler";
            if (str === "Not Implemented") return "Nicht eingebaut";
            if (str === "Bad Gateway") return "Schlecter schnittstelle";
            if (str === "Service Unavailable") return "Service nicht verfügbar";
            if (str === "Server Time-out") return "Server Time-out";
            if (str === "Version Not Supported") return "Version nicht unterstützt";
            if (str === "Message Too Large") return "Nachricht zu groß";
            if (str === "Response Cannot Be Sent Safely") return "Unmöglich Antwort sicher zu senden";
            if (str === "Requires congestion management") return "Benötigt Blokierungmanagement";
            if (str === "Would induce fragmentation") return "Es würde Fragmentation verursachen";
            if (str === "Busy Everywhere") return "Alle besetzt";
            if (str === "Decline") return "Ablehnen";
            if (str === "Does Not Exist Anywhere") return "Es existiert niergentwo";
            if (str === "Not Acceptable") return "Unakkzeptabel";
            if (str === "Cancel") return "Abbrechen";
            if (str === "Your authentication username") return "Ihre authentication Benutzername";
            if (str === "Mic") return "Mic";
            if (str === "Microphone") return "Mikrophon";
            if (str === "Change microphone volume") return "Mikrophonvolumen verändern";
            if (str === "Spk") return "Spk";
            if (str === "Speaker") return "Lautsprecher";
            if (str === "Change speaker volume") return "Lautsprechervolumen verändern";
            if (str === "Initiate voice call or hangup") return "Anruf beginnen oder abbrechen";
            if (str === "Send instant message") return "Nachricht senden";
            if (str === "Logs") return "Protokolldateien";
            if (str === "Disconnect current call") return "Aktueller Anruf abbrechen";
            if (str === "Test") return "Test";
            if (str === "Audio") return "Audio";
            if (str === "Select audio devices") return "Wählen sie die audio Instrumente";
            if (str === "Register to this SIP server") return "Registrieren sich zu diesem SIP Server";
            if (str === "Phone") return "Telefon";
            if (str === "Line") return "Linie";
            if (str === "Phone line") return "Telefonlinie";
            if (str === "Disable/Enable audio") return "Audio deaktivieren/aktivieren";
            if (str === "Hold") return "Anruf halten";
            if (str === "Hold/Reload current call") return "Aktueller Anruf halten/neu anrufen";
            if (str === "Trans") return "Trans";
            if (str === "Call transfer") return "Anruf Übergabe";
            if (str === "Recall last number") return "Letzten Nummer neu anrufen";
            if (str === "Send text message") return "Text Nachricht senden";
            if (str === "Save my settings on this computer locally (including password!)") return "Speichere meine Einstellungen lokal, auf dieser Computer";
            if (str === "Register") return "Registrieren";
            if (str === "Deletable") return "Löschbar";
            if (str === "Authenticated successfully") return "Erfolgreich authentifiziert";
            if (str === "Incoming") return "Ankommend";
            if (str === "Setup") return "Einstellung";
            if (str === "My PhoneNumber") return "Mein Telefonnummer";
            if (str === "Save") return "Speichern";
            if (str === "Back") return "Zurück";
            if (str === "Call number") return "Angerufenes Nummer";
            if (str === "Phone number to call") return "Anrufender Telefonnummer";
            if (str === "Exit") return "Ausgang";
            if (str === "Call") return "Anruf";
            if (str === "Callback") return "Rueckruf";
            if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "Nummer A";
            if (str === "B Number") return "Nummer B";
            if (str === "Initiate Call") return "Anruf inizialisieren";
            if (str === "Cancel") return "Abbrechen";
            if (str === "SMS sender") return "SMS sender";
            if (str === "Phone number") return "Telefonnummer";
            if (str === "SMS message") return "SMS Nachrich";
            if (str === "Send") return "Senden";
            if (str === "Back") return "Zurьck";
            if (str === "Config saved") return "Einstellungen gespeichert";
            if (str === "cannot save config") return "unfähig enstellungen zu speichern";
            if (str === "Callback") return "Callback";
            if (str === "invalid username") return "ungültiger benutzername";
            if (str === "invalid password") return "ungültiger passwort";
            if (str === "invalid phonenumber") return "ungültigher telefonnummer";
            if (str === "invalid number") return "ungültiger nummer";
            if (str === "Callback initiated") return "Callback initialisiert";
            if (str === "Failed") return "Gescheitert";
            if (str === "Succeed") return "Gelungen";
            if (str === "Check credit") return "Kredit prüfen";
            if (str === "ERROR") return "FEHLER";
            if (str === "OK") return "OK";
            if (str === "Call") return "Anruf";
            if (str === "Too many requests") return "Zu viele Anfragen";
            if (str === "Too many wrong requests") return "Zu viele schlechte Anfragen";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "no answer") return "keine antwort";
            if (str === "My balance") return "Mein Bilanz";

    }
    catch (e)
    {
            webphone_api.common.PutToDebugLogException(3, "commonTranslateInner", e);
    }
    return '';
}

/*--------- #language# pt Portugheze ---------*/
//noinspection JSConstructorReturnsPrimitive
    function TranslateInnerPr(str)
{
    try
    {
        if (str === "Registered") return "Registrado";
        if (str === "Credit") return "Crйdito";
        if (str === "Call duration") return "Duraçao da chamada";

            if (str === "Ringing") return "Tocando";
            if (str === "Save my settings on this computer locally (including password!)") return "Salvar minhas configurações neste Computador Local (inclusive a senha!)";

            if (str === "Ringing...") return "Toque...";
            if (str === "Speaking") return "Falando";
            if (str === "Username") return "Usuário";
            if (str === "Send") return "Enviar";
            if (str === "Send Chat") return "Enviar Bate-papo";
            if (str === "Destination") return "Destino";
            if (str === "Provider") return "Provedor";
            if (str === "Password") return "Senha";
            if (str === "Save Settings") return "Salvar Configurações";
            if (str === "Connect") return "Conectar";
            if (str === "Connecting") return "Conectar";
            if (str === "Hangup") return "Desligar";
            if (str === "Reject") return "Rejeitar";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Accept") return "Aceitar";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Call") return "Chamar";
            if (str === "Chat") return "Bate-papo";
            if (str === "Mute") return "silencioso";
            if (str === "Transf") return "Transf";
            if (str === "Redial") return "Rediscagem";
            if (str === "Send to") return "Enviar para";
            if (str === "Send") return "Enviar";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Calling") return "Chamando";
            if (str === "Calling...") return "A Ligar...";
            if (str === "InProgress...") return "EmProgresso...";
            if (str === "Call") return "ligar";
            if (str === "Call rejected") return "Chamada rejeitada";
            if (str === "service unavailable") return "Serviço Indisponível";
            if (str === "Call rejected: service unavailable") return "Chamada rejeitada: serviço indisponível";
            if (str === "Not Initialized") return "Não Inicializado";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Register Failed") return "Registro Falhou";
            if (str === "Registered") return "Registrado";
            if (str === "Call Finished") return "Chamada Terminou";
            if (str === "Call Initiated") return "Chamada Iniciada";
            if (str === "Initializing") return "Inicializando";
            if (str === "Initializing...") return "Inicializando...";
            if (str === "Registering") return "Registrando";
            if (str === "Calling") return "Chamando";
            if (str === "In Call") return "Em Chamada";
            if (str === "Incoming call") return "Recebendo Ligação";
            if (str === "Incoming call...") return "Recebendo Chamada...";
            if (str === "Incoming call from") return "Recebendo Chamada de";
            if (str === "Unknown") return "Desconhecido";
            if (str === "Init") return "Inic";
            if (str === "Ready") return "Pronto";
            if (str === "Ready.") return "Pronto.";
            if (str === "Waiting") return "Pronto";
            if (str === "Waiting.") return "Pronto.";
            if (str === "Outband") return "Fora de Banda";
            if (str === "SignIn") return "Entrar";
            if (str === "Subscribe") return "Inscrever";
            if (str === "Setup") return "Instalação";
            if (str === "CallProgress") return "Chamada em Progresso";
            if (str === "Routed") return "Encaminhada";
            if (str === "Ringing") return "Tocando";
            if (str === "CallInitiated") return "Chamada Inicializada";
            if (str === "CallStarted") return "Chamada Iniciada";
            if (str === "Midcall") return "Midcall";
            if (str === "CallFinishing") return "Chamada Finalizando";
            if (str === "CallFinished") return "Chamada Finalizada";
            if (str === "Error") return "Erro";
            if (str === "Warning") return "Atenção";
            if (str === "Trying") return "Tentando";
            if (str === "Ringing") return "Tocando";
            if (str === "Call Is Being Forwarded") return "Chamada sendo Encaminhada";
            if (str === "Queued") return "Chamada em Espera";
            if (str === "Session Progress") return "Sessão em Progresso";
            if (str === "OK") return "OK";
            if (str === "Accepted") return "Aceito";
            if (str === "Multiple Choices") return "Múltipla Escolha";
            if (str === "Moved Permanently") return "Movido Permanentemente";
            if (str === "Moved Temporarily") return "Movido Temporariamente";
            if (str === "Use Proxy") return "Use Proxy";
            if (str === "Alternative Service") return "Serviço Alternativo";
            if (str === "Bad Request") return "Requisição inválida";
            if (str === "Unauthorized") return "Não autorizado";
            if (str === "Payment Required") return "Requer pagamento";
            if (str === "Forbidden") return "Proibido";
            if (str === "Not Found") return "Não encontrado";
            if (str === "Method Not Allowed") return "Método não permitido";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Not Acceptable") return "Não suportado";
            if (str === "Proxy Authentication Required") return "Requer autenticação no Proxy";
            if (str === "Request Timeout") return "Requisição Expirou";
            if (str === "Conflict") return "Conflito";
            if (str === "Gone") return "Saiu";
            if (str === "Conditional Request Failed") return "Requisição Condicional Falhou";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Request Entity Too Large") return "Requisição de Dados Muito Grande";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Request-URI Too Long") return "Requisição de URI Muito Grande";
            if (str === "Unsupported Media Type") return "Tipo de Mídia não Suportada";
            if (str === "Unsupported URI Scheme") return "Esquema URI não Suportado";
            if (str === "Bad Extension") return "Extensão Ruim";
            if (str === "Extension Required") return "Requer Extensão";
            if (str === "Interval Too Brief") return "Intervalo muito Curto";
            if (str === "Unresolvable destination") return "Destino não Resolvível";
            if (str === "Temporarily Unavailable") return "Temporariamente Indisponível";
            if (str === "CallTransaction Does Not Exist") return "Chamada Transação não Existe";
            if (str === "Loop Detected") return "Loop Detectado";
            if (str === "Too Many Hops") return "Muitos Saltos";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Address Incomplete") return "Endereço Incompleto";
            if (str === "Ambiguous") return "Ambíguo";
            if (str === "Busy Here") return "Ocupado Aqui";
            if (str === "Request Terminated") return "Requisição Terminada";
            if (str === "Not Acceptable Here") return "Não Aceito Aqui";
            if (str === "Bad Event") return "Evento Ruim";
            if (str === "Request Pending") return "Requisição Pendente";
            if (str === "Undecipherable") return "Indecifrável";
            if (str === "Server Internal Error") return "Erro Interno do Servidor";
            if (str === "Not Implemented") return "Não Implementado";
            if (str === "Bad Gateway") return "Gateway Ruim";
            if (str === "Service Unavailable") return "Serviзo Indisponнvel";
            if (str === "Server Time-out") return "Tempo Esgotado do Servidor";
            if (str === "Version Not Supported") return "Versão Não Suportada";
            if (str === "Message Too Large") return "Mensagem Muito Grande";
            if (str === "Response Cannot Be Sent Safely") return "Resposta não pode ser Enviada com Segurança";
            if (str === "Requires congestion management") return "Requer Gestão dos Congestionamentos";
            if (str === "Would induce fragmentation") return "Induziria Fragmentação";
            if (str === "Busy Everywhere") return "Ocupado em Todo Lugar";
            if (str === "Decline") return "Recusar";
            if (str === "Does Not Exist Anywhere") return "Não existe em Lugar Nenhum";
            if (str === "Not Acceptable") return "Nгo Permitido";
            if (str === "Cancel") return "Cancelar";
            if (str === "Your authentication username") return "Seu Usuário de Autenticação";
            if (str === "Mic") return "Mic";
            if (str === "Microphone") return "Microfone";
            if (str === "Change microphone volume") return "Alterar o Volume do Microfone";
            if (str === "Spk") return "Som";
            if (str === "Speaker") return "altifalante";
            if (str === "Change speaker volume") return "Alterar o Volume do Alto-falante";
            if (str === "Initiate voice call or hangup") return "Iniciar Chamada de Voz ou Desligar";
            if (str === "Send instant message") return "Enviar Mensagem Instantânea";
            if (str === "Logs") return "Históricos";
            if (str === "Disconnect current call") return "Desligar a Chamada Atual";
            if (str === "Test") return "Teste";
            if (str === "Audio") return "Áudio";
            if (str === "Select audio devices") return "Selecione os Dispositivos de Áudio";
            if (str === "Register to this SIP server") return "Registre no Servidor SIP";
            if (str === "Phone") return "Telefone";
            if (str === "Line") return "Linha";
            if (str === "Phone line") return "Linha de Telefone";
            if (str === "Disable/Enable audio") return "Desativar/Ativar Áudio";
            if (str === "Hold") return "em espera";
            if (str === "Hold/Reload current call") return "Segurar/Recarregar Chamada Atual";
            if (str === "Trans") return "Trans";
            if (str === "Call transfer") return "Transferência de Chamadas";
            if (str === "Recall last number") return "Chamar o Último Número";
            if (str === "Send text message") return "Enviar Mensagem de Texto";

            if (str === "Save my settings on this computer locally (including password!)") return "Salvar minhas configuraзхes neste Computador Local (inclusive a senha!)";
            if (str === "Register") return "Registrar";
            if (str === "Deletable") return "Apagável";
            if (str === "Authenticated successfully") return "Autenticado com Sucesso";
            if (str === "Authenticated successfully.") return "Autenticado com Sucesso";
            if (str === "Incoming") return "Entrada";
            if (str === "Setup") return "Instalaзгo";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "My PhoneNumber") return "Meu Número de Telefone";
            if (str === "Save") return "Salvar";
            if (str === "Back") return "Voltar";
            if (str === "Call number") return "Número de Chamada";
            if (str === "Phone number  to call") return "Número de Telefone para Chamar";
            if (str === "Exit") return "Sair";
            if (str === "Call") return "Chamar";
            if (str === "Callback") return "Callback";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "Número A";
            if (str === "B Number") return "Número B";
            if (str === "Initiate Call") return "Iniciar Chamada";
            if (str === "Cancel") return "Cancelar";
            if (str === "SMS sender") return "Remetente do SMS";
            if (str === "Phone number") return "Número do Telefone";
            if (str === "SMS message") return "Mensagem SMS";
            if (str === "Send") return "Enviar";
            if (str === "Back") return "Voltar";
            if (str === "Config saved") return "Configuração Salva";
            if (str === "cannot save config") return "não pode salvar configuração";
            if (str === "Callback") return "Chamada de Volta";
            if (str === "invalid username") return "usuário inválido";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "invalid password") return "senha inválida";
            if (str === "invalid phonenumber") return "número do telefone inválido";
            if (str === "invalid number") return "número inválido";
            if (str === "Callback initiated") return "Chamada de Volta Iniciada";
            if (str === "Failed") return "Falha";
            if (str === "Succeed") return "Sucesso";
            if (str === "Check credit") return "Verificação de Crédito";
            if (str === "ERROR") return "ERRO";
            if (str === "OK") return "OK";
            if (str === "Call") return "Chamar";
            if (str === "Too many requests") return "Muitas Requisições";
            if (str === "Too many wrong requests") return "Muitos Requisições Erradas";
            if (str === "no answer") return "sem resposta";
            if (str === "My balance") return "Meu Balanceamento";

    }
    catch (e)
    {
            webphone_api.common.PutToDebugLogException(3, "TranslateInnerPr", e);
    }
    return '';
}

/*--------- #language# tr Turkish ---------*/
function TranslateInnerTr(str)
{
    try
    {
        if (str === "Registered") return "Kayıt Başarılı";
        if (str === "Credit") return "Krediyi";
            if (str === "Speaking") return "Konuşuyor";
            if (str === "Save my settings on this computer locally (including password!)") return "Ayarlarımı bu bilgisayar üzerinde kaydet (şifreler dahil!)";

            //noinspection JSConstructorReturnsPrimitive
        if (str === "Call in progress...") return "Arama devam ediyor...";
            if (str === "CallSetup") return "Hívásbeállítás";
            if (str.indexOf('Starting VoIP engine') >= 0) return str.replace('Starting VoIP engine', 'VoIP motorubaşlatılıyor');
            if (str.indexOf('VoIP engine started') >= 0) return str.replace('VoIP engine started', 'VoIP motoru başlatıldı.');
            if (str === "Finished") return "Bitti";
            if (str.indexOf('Reason') >= 0) return str.replace('Reason', 'Neden');
            if (str.indexOf('Disconnect reason') >= 0) return str.replace('Disconnect reason', 'Bağlantı Kopma Sebebi');
            
            
            if (str === "Username") return "Kullanıcı Adı";
            if (str === "Send") return "Gönder";
            if (str === "Send Chat") return "Mesaj Gönder";
            if (str === "Destination") return "Hedef";
            if (str === "Provider") return "Servis Sağlayıcı";
            if (str === "Password") return "Şifre";
            if (str === "Save Settings") return "Ayarları Kaydet";
            if (str === "Connect") return "Bağlan";
            if (str === "Connecting") return "Bağlan";
            if (str === "Hangup") return "Kapat";
            if (str === "Reject") return "Reddet";
            if (str === "Accept") return "Kabul et";
            if (str === "Call") return "Çağrı";
            if (str === "Chat") return "Mesajlaşma";
            if (str === "Mute") return "Sessiz";
            if (str === "Transf") return "Aktar";
            if (str === "Redial") return "Yeniden ara";
            if (str === "Send to") return "Gönder";
            if (str === "Send") return "Gönder";
            if (str === "Not Initialized") return "Hazır değil";
            if (str === "Register Failed") return "Kayıt başarısız";
            if (str === "Registered") return "Kayıt Başarılı";
            if (str === "Call Finished") return "Çağrı sonlandı";
            if (str === "Call Initiated") return "Çağrı Başlatıldı";
            if (str === "Initializing") return "Hazırlanıyor";
            if (str === "Initializing...") return "Hazırlanıyor...";
            if (str === "Registering") return "Kayıt olunuyor";
            if (str === "Calling") return "Aranıyor";
            if (str === "Calling...") return "Aranıyor";
            if (str === "InProgress...") return "Aranıyor...";
            if (str === "In Call") return "Görüşmede";
            if (str === "Incoming call") return "Gelen çağrı";
            if (str === "Incoming call...") return "Gelen çağrı...";
            if (str === "Incoming call from") return "Gelen çağrı";
            if (str === "Unknown") return "Bilinmiyor";
            if (str === "Init") return "Hazırla";
            if (str === "Ready") return "Hazır";
            if (str === "User Hung Up") return "Kullanıcı kapattı.";
            if (str === "Ready.") return "Hazır.";
            if (str === "Waiting") return "Hazır";
            if (str === "Waiting.") return "Hazır.";
            if (str === "Outband") return "Outband";
            if (str === "SignIn") return "Kayıt ol";
            if (str === "Subscribe") return "Üye ol";
            if (str === "Setup") return "Ayarla";
            if (str === "CallProgress") return "Çağrı durumu";
            if (str === "Routed") return "Yönlendi";
            if (str === "Ringing") return "Çalıyor";
            if (str === "CallInitiated") return "Çağrı başlatıldı";
            if (str === "CallStarted") return "Çağrı başladı";
            if (str === "Midcall") return "Midcall";
            if (str === "CallFinishing") return "Çağrı sonlanıyor";
            if (str === "CallFinished") return "Çağrı sonlandı";
            if (str === "Error") return "Hata";
            if (str === "Warning") return "Uyarı";
            if (str === "Trying") return "Deniyor";
            if (str === "ringing") return "Çalıyor";
            if (str === "Call Is Being Forwarded") return "Çağrı yönlendirildi";
            if (str === "Queued") return "Sırada";
            if (str === "Session Progress") return "İşleniyor";
            if (str === "OK") return "TAMAM";
            if (str === "Accepted") return "Kabul edildi";
            if (str === "Multiple Choices") return "Birden fazla seçenek";
            if (str === "Moved Permanently") return "Kalıcı olarak taşındı";
            if (str === "Moved Temporarily") return "Geçici olarak taşındı";
            if (str === "Use Proxy") return "Proxy kullan";
            if (str === "Alternative Service") return "Alternatif servis";
            if (str === "Bad Request") return "Geçersiz istek";
            if (str === "Unauthorized") return "Yetkilendirilmemiş";
            if (str === "Payment Required") return "Ödeme gerekli";
            if (str === "Forbidden") return "Yasaklı";
            if (str === "Not Found") return "Bulunamadı";
            if (str === "Method Not Allowed") return "İzin verilemiyor";
            if (str === "Not Acceptable") return "Kabul edilemez";
            if (str === "Proxy Authentication Required") return "Kimlik doğrulama gerekli";
            if (str === "Request Timeout") return "İstek zaman aşımı";
            if (str === "Conflict") return "Çakışma";
            if (str === "Gone") return "Gitti";
            if (str === "Conditional Request Failed") return "İstek başarısız";
            if (str === "Request Entity Too Large") return "Request Entity Too Large";
            if (str === "Request-URI Too Long") return "Request-URI Too Long";
            if (str === "Unsupported Media Type") return "Desteklenmeyen ortam türü";
            if (str === "Unsupported URI Scheme") return "Desteklenmeyen URI";
            if (str === "Bad Extension") return "Hatalı dahili";
            if (str === "Extension Required") return "Dahili gerekli";
            if (str === "Interval Too Brief") return "Interval Too Brief";
            if (str === "Unresolvable destination") return "Çözümlenemeyen hedef";
            if (str === "Temporarily Unavailable") return "Geçici olarak servis dışı";
            if (str === "CallTransaction Does Not Exist") return "Çağrı mevcut değil";
            if (str === "Loop Detected") return "Loop Detected";
            if (str === "Too Many Hops") return "Too Many Hops";
            if (str === "Address Incomplete") return "Eksik Numara";
            if (str === "Ambiguous") return "Ambiguous";
            if (str === "Busy Here") return "Meşguk";
            if (str === "Request Terminated") return "İstek iptal edildi";
            if (str === "Not Acceptable Here") return "Kabul edilemez";
            if (str === "Bad Event") return "Bad Event";
            if (str === "Request Pending") return "İstek beklemede";
            if (str === "Undecipherable") return "Undecipherable";
            if (str === "Server Internal Error") return "Dahili sunucu hatası";
            if (str === "Not Implemented") return "Not Implemented";
            if (str === "Bad Gateway") return "Bad Gateway";
            if (str === "Service Unavailable") return "Servis dışı";
            if (str === "Server Time-out") return "Sunucu zaman aşımı";
            if (str === "Version Not Supported") return "Desteklenmeyen versiyon";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Message Too Large") return "Mesaj boyutu fazla büyük";
            if (str === "Response Cannot Be Sent Safely") return "Yanıt güvenli bir şekilde gönderilemez";
            if (str === "Requires congestion management") return "Requires congestion management";
            if (str === "Would induce fragmentation") return "Would induce fragmentation";
            if (str === "Busy Everywhere") return "Busy Everywhere";
            if (str === "Decline") return "Reddedildi";
            if (str === "Does Not Exist Anywhere") return "Does Not Exist Anywhere";
            if (str === "Not Acceptable") return "Kabul edilemez";
            if (str === "Cancel") return "İptal";
            if (str === "Your authentication username") return "Kimlik doğrulama kullanıcı adı";
            if (str === "Mic") return "Mik";
            if (str === "Microphone") return "Mikrofon";
            if (str === "Change microphone volume") return "Mikrofon ses düzeyini değiştir";
            if (str === "Spk") return "Hpr";
            if (str === "Speaker") return "Hoparlör";
            if (str === "Change speaker volume") return "Hoparlör ses seviyesini değiştir";
            if (str === "Initiate voice call or hangup") return "Çağrı başlat veya sonlandır";
            if (str === "Send instant message") return "Mesaj gönder";
            if (str === "Logs") return "Kayıtlar";
            if (str === "Disconnect current call") return "Mevcut çağrıyı sonlandır";
            if (str === "Test") return "Test";
            if (str === "Audio") return "Ses";
            if (str === "Select audio devices") return "Ses cihazlarını seçin";
            if (str === "Register to this SIP server") return "Bu SIP sunucusuna kayıt ol";
            if (str === "Phone") return "Telefon";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Line") return "Hat";
            if (str === "Phone line") return "Telefon hattı";
            if (str === "Disable/Enable audio") return "Ses Aç/Kapat";
            if (str === "Hold") return "Beklet";
            if (str === "Hold/Reload current call") return "Mevcut çağrıyı Beklet/geri al";
            if (str === "Trans") return "Aktar";
            if (str === "Call transfer") return "Çağrı aktar";
            if (str === "Recall last number") return "Son numarayı geri ara";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Send text message") return "Yazılı mesaj gönder";

            if (str === "Save my settings on this computer locally (including password!)") return "Ayarları bu bilgisayar üzerinde kaydet (şifreler dahil!)";
            if (str === "Register") return "Kayıt ol";
            if (str === "Deletable") return "Silinebilir";
            if (str === "Authenticated successfully") return "Kimlik doğrulandı";
            if (str === "Incoming") return "Gelen";
            if (str === "Setup") return "Ayarla";
            if (str === "My PhoneNumber") return "Telefon numaram";
            if (str === "Save") return "Kaydet";
            if (str === "Back") return "Geri";
            if (str === "Call number") return "Nuamrayı ara";
            if (str === "Phone number  to call") return "Arancak numara";
            if (str === "Exit") return "Çıkış";
            if (str === "Call") return "Ara";
            if (str === "Callback") return "Geri ara";
            if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "A numarası";
            if (str === "B Number") return "B numarası";
            if (str === "Initiate Call") return "Çağrı başlat";
            if (str === "Cancel") return "İptal";
            if (str === "SMS sender") return "SMS gönderen";
            if (str === "Phone number") return "Telefon numarası";
            if (str === "SMS message") return "SMS mesajı";
            if (str === "Send") return "Gönder";
            if (str === "Back") return "Geri";
            if (str === "Config saved") return "Ayarlar kaydedildi";
            if (str === "cannot save config") return "ayarlar kaydedilemiyor";
            if (str === "Callback") return "Geri ara";
            if (str === "invalid username") return "hatalı kullanıcı adı";
            if (str === "invalid password") return "hatalı şifre";
            if (str === "invalid phonenumber") return "hatalı telefon numarası";
            if (str === "invalid number") return "hatalı numara";
            if (str === "Callback initiated") return "Geri arama başlatıldı";
            if (str === "Failed") return "Başarısız";
            if (str === "Succeed") return "Başarılı";
            if (str === "Check credit") return "Krediyi kontrol et";
            if (str === "ERROR") return "HATA";
            if (str === "OK") return "Tamam";
            if (str === "Call") return "Arama";
            if (str === "Too many requests") return "Çok fazla istek";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Too many wrong requests") return "Çok fazla hatalı istek";
            if (str === "no answer") return "yanıt yok";
            if (str === "My balance") return "Hesabım";

    }
    catch (e)
    {
            webphone_api.common.PutToDebugLogException(3, "commonTranslateInnerTr", e);
    }
    return '';
}

/*--------- #language# ja Japan ---------*/
function TranslateInnerJp(str)
{
    try
    {
        
            if (str === "Username") return "ユーザ名";
            if (str === "Save my settings on this computer locally (including password!)") return "設定をローカルに保存（パスワードを含む）";
            if (str === "Send") return "送信";
            if (str === "Send Chat") return "チャットを送信";
            if (str === "Destination") return "送信先";
            if (str === "Provider") return "プロバイダ";
            if (str === "Password") return "パスワード";
            if (str === "Save Settings") return "設定を保存";
            if (str === "Connect") return "接続";
            if (str === "Connecting") return "接続";
            if (str === "Hangup") return "終了";
            if (str === "Reject") return "拒否";
            if (str === "Accept") return "通話";
            if (str === "Call") return "発信";
            if (str === "Chat") return "チャット";
            if (str === "Mute") return "ミュート";
            if (str === "Transf") return "転送";
            if (str === "Redial") return "リダイアル";
            if (str === "Send to") return "送信先";
           
            if (str === "Not Initialized") return "初期化されていません";
            if (str === "Register Failed") return "登録失敗";
            if (str === "Registered") return "登録完了";
            if (str === "Call Finished") return "発信終了";
            if (str === "Call Initiated") return "発信初期化終了";
            if (str === "Initializing") return "初期化中";
            if (str === "Initializing...") return "初期化中";
            if (str === "Registering") return "登録中";
            if (str === "Calling") return "発信中";
            if (str === "In Call") return "着信中";
            if (str === "Incoming call") return "着信中";
            if (str === "Incoming call...") return "着信中";
            if (str === "Incoming call from") return "着信中";
            if (str === "Unknown") return "未知の";
            if (str === "Init") return "初期化";
            if (str === "Ready") return "準備";
            if (str === "Ready.") return "準備";
            if (str === "Waiting") return "準備";
            if (str === "Waiting.") return "準備";
            if (str === "Outband") return "アウトバンド";
            if (str === "SignIn") return "サインイン";
            if (str === "Subscribe") return "同意する";
            if (str === "Setup") return "セットアップ";
            if (str === "CallProgress") return "発信進捗状況";
            if (str === "Routed") return "迂回しました";
            if (str === "Ringing") return "電話が鳴っています";
            if (str === "CallInitiated") return "発信初期化";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "CallStarted") return "発信開始";
            if (str === "Midcall") return "ＭＩＤＣＡＬＬ";
            if (str === "CallFinishing") return "発信終了中";
            if (str === "CallFinished") return "発信終了";
            if (str === "Error") return "エラー";
            if (str === "Warning") return "警告";
            if (str === "Trying") return "トライしています";
            
            if (str === "Call Is Being Forwarded") return "呼び出しが転送されました";
            if (str === "Queued") return "順番待ちです";
            if (str === "Session Progress") return "セッション進行中";
            if (str === "OK") return "ＯＫ";
            if (str === "Accepted") return "通話";
            if (str === "Multiple Choices") return "複数選択";
            if (str === "Moved Permanently") return "完全に移動する";
            if (str === "Moved Temporarily") return "一時的に移動する";
            if (str === "Use Proxy") return "プロキシを使用";
            if (str === "Alternative Service") return "代替サービス";
            if (str === "Bad Request") return "不正なリクエストです";
            if (str === "Unauthorized") return "認証できません";
            if (str === "Payment Required") return "支払いが必要です";
            if (str === "Forbidden") return "サービスが提供されていない";
            if (str === "Not Found") return "見つかりません";
            if (str === "Method Not Allowed") return "メソッドは許可されません";
            if (str === "Not Acceptable") return "通話不能";
            if (str === "Proxy Authentication Required") return "プロキシ認証が必要です";
            if (str === "Request Timeout") return "リクエストタイムアウト";
            if (str === "Conflict") return "矛盾しています";
            if (str === "Gone") return "転送先アドレスが不明です";
            if (str === "Conditional Request Failed") return "条件付リクエストが失敗しました";

            if (str === "Request Entity Too Large") return "リクエストのエンティティが大きすぎます";
            if (str === "Request-URI Too Long") return "リクエストＵＲＩが大きすぎます";
            if (str === "Unsupported Media Type") return "サポートされないメディアタイプです";
            if (str === "Unsupported URI Scheme") return "サポートされないＵＲＩスキームです";
            if (str === "Bad Extension") return "拡張子が違います";
            if (str === "Extension Required") return "拡張子が必要です";
            if (str === "Interval Too Brief") return "間隔が短すぎます";
            if (str === "Unresolvable destination") return "あて先が解決さできません";
            if (str === "Temporarily Unavailable") return "一時的に使用できません";
            if (str === "CallTransaction Does Not Exist") return "発信処理が存在しません";
            if (str === "Loop Detected") return "ループが検出されました";
            if (str === "Too Many Hops") return "ホップが多すぎます";
            if (str === "Address Incomplete") return "アドレスが不完全です";
            if (str === "Ambiguous") return "曖昧";
            if (str === "Busy Here") return "話中です";
            if (str === "Request Terminated") return "リクエストは終了しました";
            if (str === "Not Acceptable Here") return "通話できません";
            if (str === "Bad Event") return "不正なイベント";
            if (str === "Request Pending") return "リクエスト保留中です";
            if (str === "Undecipherable") return "解読できません";
            if (str === "Server Internal Error") return "サーバ内部エラー";
            if (str === "Not Implemented") return "実装されていません";
            if (str === "Bad Gateway") return "不正なゲートウェイ";
            if (str === "Service Unavailable") return "サービス利用不可";
            if (str === "Server Time-out") return "サーバタイムアウト";
            if (str === "Version Not Supported") return "サポートされていないバージョンです";
            if (str === "Message Too Large") return "メッセージが大きすぎます";
            if (str === "Response Cannot Be Sent Safely") return "応答と安全に送信できません";
            if (str === "Requires congestion management") return "輻輳管理が必要です";
            if (str === "Would induce fragmentation") return "断片化を誘発するだろう";
            if (str === "Busy Everywhere") return "どこでも話中です";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Decline") return "減少";
            if (str === "Does Not Exist Anywhere") return "どこにも存在しません";
            
            if (str === "Cancel") return "キャンセル";
            if (str === "Your authentication username") return "あなたの認証ユーザ名";
            if (str === "Mic") return "マイク";
            if (str === "Microphone") return "マイク";
            if (str === "Change microphone volume") return "マイクボリュームの変更";
            if (str === "Spk") return "スピーカー";
            if (str === "Speaker") return "スピーカー";
            if (str === "Change speaker volume") return "スピーカーボリュームの変更";
            if (str === "Send instant message") return "インスタントメッセージの送信";
            if (str === "Logs") return "ログ";
            if (str === "Disconnect current call") return "接続を全て切断";
            if (str === "Test") return "テスト";
            if (str === "Audio") return "オーディオ";
            if (str === "Select audio devices") return "オーディオデバイスの選択";
            if (str === "Register to this SIP server") return "ＳＩＰサーバに登録";
            if (str === "Phone") return "電話";
            if (str === "Line") return "ライン";
            if (str === "Phone line") return "電話ライン";
            if (str === "Disable/Enable audio") return "オーディオの有効／無効";
            if (str === "Hold") return "保留";
            if (str === "Hold/Reload current call") return "発信の保留／リロード";
            if (str === "Trans") return "転送";
            if (str === "Call transfer") return "転送発信";
            if (str === "Recall last number") return "最後の番号に発信";
            if (str === "Send text message") return "テキストメッセージの送信";

            
            if (str === "Register") return "登録";
            if (str === "Deletable") return "削除可能";
            if (str === "Authenticated successfully") return "認証成功";
            if (str === "Incoming") return "着信";
            
            if (str === "My PhoneNumber") return "私の電話番号";
            if (str === "Save") return "保存";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Back") return "戻る";
            if (str === "Call number") return "発信番号";
            if (str === "Phone number  to call") return "電話番号に発信";
            if (str === "Exit") return "終了";
            
            if (str === "Callback") return "コールバック";
            if (str === "P2P") return "Ｐ２Ｐ";
            if (str === "SMS") return "ＳＭＳ";
            if (str === "A Number") return "Ａ番号";
            if (str === "B Number") return "Ｂ番号";
            if (str === "Initiate Call") return "発信開始";
            
            if (str === "SMS sender") return "ＳＭＳ送信者";
            if (str === "Phone number") return "電話番号";
            if (str === "SMS message") return "ＳＭＳメッセージ";
            
            
            if (str === "Config saved") return "設定が保存されました";
            if (str === "cannot save config") return "設定を保存できません";
            
            if (str === "invalid username") return "ユーザ名が不正です";
            if (str === "invalid password") return "パスワードが不正です";
            if (str === "invalid phonenumber") return "電話番号が不正です";
            if (str === "invalid number") return "番号が不正です";
            if (str === "Callback initiated") return "コールバック初期化";
            if (str === "Failed") return "失敗";
            if (str === "Succeed") return "成功";
            if (str === "Check credit") return "クレジットを確認してください";
                      
            if (str === "Too many requests") return "リクエストが多すぎます";
            if (str === "Too many wrong requests") return "誤ったリクエストが多すぎます";
            if (str === "no answer") return "応答なし";
            if (str === "My balance") return "私の";

    }
    catch (e)
    {
            webphone_api.common.PutToDebugLogException(3, "commonTranslateInnerJp", e);
    }
    return '';
}


/*--------- #language# fr French ---------*/
function TranslateInnerFr(str)
{
    try
    {
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Registered") return "Connecté";
        if (str === "Credit") return "Solde";
            if (str === "Username") return "Nom d'utilisateur";
            if (str === "Save my settings on this computer locally (including password!)") return "Sauver les données localement(mot de passe inclu";

            if (str === "Settings") return "Ajustes";
            if (str === "Calling...") return "appel en cours...";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Send") return "Envoyer";
            if (str === "Send Chat") return "Envoyer";
            if (str === "Destination") return "Destination";
            if (str === "Provider") return "Fournisseur";
            if (str === "Password") return "Mot de passe";
            if (str === "Save Settings") return "Sauver les settings";
            if (str === "Connect") return "Connecté";
            if (str === "Hangup") return "Raccrocher";
            if (str === "Reject") return "Rejeter";
            if (str === "Accept") return "Accepter";
            if (str === "Call") return "Appel";
            if (str === "Chat") return "Chat";
            if (str === "Mute") return "silence";
            if (str === "Transf") return "Transferer";
            if (str === "Redial") return "Rappeler";
            if (str === "Send to") return "Envoyer à";
            if (str === "Send") return "Envoyer";
            if (str === "Not Initialized") return "Non initialisé";
            if (str === "Register Failed") return "Enregistrement echoué";
            if (str === "Registered") return "Connecté";
            if (str === "Call Finished") return "Appel terminé";
            if (str === "Call Initiated") return "Appel initié";
            if (str === "Initializing") return "Initialisation";
            if (str === "Initializing...") return "Initialisation";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Registering") return "Connexion";
            if (str === "Calling") return "Appel";
            if (str === "In Call") return "En appel";
            if (str === "Incoming call") return "Appel entrant";
            if (str === "Incoming call...") return "Appel entrant...";
            if (str === "Incoming call from") return "Appel entrant de";
            if (str === "Unknown") return "Inconnu";
            if (str === "Init") return "Init";
            if (str === "Ready") return "Pret";
            if (str === "Ready.") return "Pret";
            if (str === "Outband") return "Outband";
            if (str === "SignIn") return "Connexion";
            if (str === "Subscribe") return "Enregistrement";
            if (str === "Setup") return "Configuration";
            if (str === "CallProgress") return "Appel en cours";
            if (str === "Routed") return "route";
            if (str === "Ringing") return "sonnerie";
            if (str === "CallInitiated") return "Appel initié";
            if (str === "CallStarted") return "Appel démaré";
            if (str === "Midcall") return "Midcall";
            if (str === "CallFinishing") return "Appel terminé..";
            if (str === "CallFinished") return "Appel terminé.";
            if (str === "Error") return "Erreur";
            if (str === "Warning") return "Attention";
            if (str === "Trying") return "Réessayer";
            if (str === "Ringing") return "Sonnerie en cours";
            if (str === "Call Is Being Forwarded") return "L'appel est en cours de transfert";
            if (str === "Queued") return "attente";
            if (str === "Session Progress") return "Progression en cours";
            if (str === "OK") return "OK";
            if (str === "Accepted") return "Accepté";
            if (str === "Multiple Choices") return "Multiples choix";
            if (str === "Moved Permanently") return "Déplacement permanent";
            if (str === "Moved Temporarily") return "Déplacement temporaire";
            if (str === "Use Proxy") return "Utilisation d'un proxy";
            if (str === "Alternative Service") return "Service alternatifs";
            if (str === "Bad Request") return "Requête mal formée";
            if (str === "Unauthorized") return "Problème d'autorisation";
            if (str === "Payment Required") return "Paiement nécessaire";
            if (str === "Forbidden") return "Paramètres interdits";
            if (str === "Not Found") return "Destination introuvable";
            if (str === "Method Not Allowed") return "Méthode non autorisée";
            if (str === "Not Acceptable") return "Non acceptable";
            if (str === "Proxy Authentication Required") return "Authentification requise";
            if (str === "Request Timeout") return "Requête expirée";
            if (str === "Conflict") return "Conflit";
            if (str === "Gone") return "Parti";
            if (str === "Conditional Request Failed") return "Requete échouée";
            if (str === "Request Entity Too Large") return "Requete trop large";
            if (str === "Request-URI Too Long") return "requete trop longue";
            if (str === "Unsupported Media Type") return "Type de média non supportée";
            if (str === "Unsupported URI Scheme") return "Theme URI non supporté";
            if (str === "Bad Extension") return "Mauvaise extension";
            if (str === "Extension Required") return "Extension requise";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Interval Too Brief") return "interval trop court";
            if (str === "Unresolvable destination") return "Destination impossible";
            if (str === "Temporarily Unavailable") return "Temporairement inaccessible";
            if (str === "CallTransaction Does Not Exist") return "La transaction n'existe pas";
            if (str === "Loop Detected") return "Boucle detectée";
            if (str === "Too Many Hops") return "Trop de hops";
            if (str === "Address Incomplete") return "Adresse imcomplete";
            if (str === "Ambiguous") return "Ambigue";
            if (str === "Busy Here") return "Occupée pour le moment";
            if (str === "Request Terminated") return "Requete terminée";
            if (str === "Not Acceptable Here") return "Non acceptable ici";
            if (str === "Bad Event") return "Mauvais evenement";
            if (str === "Request Pending") return "Requete encours";
            if (str === "Undecipherable") return "non decipherable";
            if (str === "Server Internal Error") return "Erreur serveur interne";
            if (str === "Not Implemented") return "Non implémentée";
            if (str === "Bad Gateway") return "Mauvaise passerelle";
            if (str === "Service Unavailable") return "Service indisponible";
            if (str === "Server Time-out") return "Requete expirée";
            if (str === "Version Not Supported") return "Version non supportée";
            if (str === "Message Too Large") return "Message trop long";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Response Cannot Be Sent Safely") return "La réponse ne peut etre envoyée de maniere securisée";
            if (str === "Requires congestion management") return "Necessité d'un systeme de management de congestion";
            if (str === "Would induce fragmentation") return "Devrait introduire de la fragmentation";
            if (str === "Busy Everywhere") return "Occupé";
            if (str === "Decline") return "Refuser";
            if (str === "Does Not Exist Anywhere") return "N'existe pas";
            if (str === "Not Acceptable") return "Non acceptable";
            if (str === "Cancel") return "Annuler";
            if (str === "Your authentication username") return "Nom utilisateur de connexion";
            if (str === "Mic") return "Micro";
            if (str === "Microphone") return "Microphone";
            if (str === "Change microphone volume") return "Changer volume du micro";
            if (str === "Spk") return "Haut-parleur";
            if (str === "Speaker") return "Haut-parleur";
            if (str === "Change speaker volume") return "Changer volument haut-parleur";
            if (str === "Initiate voice call or hangup") return "Initier la voix";
            if (str === "Send instant message") return "Enregistrer un message instantané";
            if (str === "Logs") return "Log";
            if (str === "Disconnect current call") return "Raccrocher appel courant";
            if (str === "Test") return "test";
            if (str === "Audio") return "audio";
            if (str === "Select audio devices") return "Selectionner les periphériques audios";
            if (str === "Register to this SIP server") return "Enregistrement au serveur SIP";
            if (str === "Phone") return "Téléphone";
            if (str === "Line") return "Ligne";
            if (str === "Phone line") return "Ligne téléphonique";
            if (str === "Disable/Enable audio") return "Désactiver/Activer l'audio";
            if (str === "Hold") return "suspendre";
            if (str === "Hold/Reload current call") return "Attente appel courant";
            if (str === "Trans") return "Transferer";
            if (str === "Call transfer") return "Transferer l'appel";
            if (str === "Recall last number") return "Rappeler le dernier appel";
            if (str === "Send text message") return "Envoyer un message text";
            if (str === "Save my settings on this computer locally (including password!)") return "Sauver les donnйes localement(mot de passe inclu";
            if (str === "Register") return "Enregistré";
            if (str === "Deletable") return "Suppresion";
            if (str === "Authenticated successfully") return "Con";
            //noinspection JSConstructorReturnsPrimitive
        if (str === "Incoming") return "Appel entrant";
            if (str === "Setup") return "Configuration";
            if (str === "My PhoneNumber") return "Mon numéro de téléphone";
            if (str === "Save") return "Sauver";
            if (str === "Back") return "Retour";
            if (str === "Call number") return "Numéro de téléphone";
            if (str === "Phone number  to call") return "Numéro a appeler";
            if (str === "Exit") return "Quitter";
            if (str === "Call") return "Appel";
            if (str === "Callback") return "Rappeler";
            if (str === "P2P") return "P2P";
            if (str === "SMS") return "SMS";
            if (str === "A Number") return "Numéro A";
            if (str === "B Number") return "Numéro B";
            if (str === "Initiate Call") return "Lancer l'appel";
            if (str === "Cancel") return "Annuler";
            if (str === "SMS sender") return "Expediteur SMS";
            if (str === "Phone number") return "Numéro de téléphone";
            if (str === "SMS message") return "MessageSMS";
            if (str === "Send") return "Envoyer";
            if (str === "Back") return "Retour";
            if (str === "Config saved") return "Configuration sauvée";
            if (str === "cannot save config") return "impossible de sauver la configuration";
            if (str === "Callback") return "Rappeler";
            if (str === "invalid username") return "nom d'utilisateur incorrect";
            if (str === "invalid password") return "mot de passe incorrect";
            if (str === "invalid phonenumber") return "téléphone incorrect";
            if (str === "invalid number") return "numéro invalide";
            if (str === "Callback initiated") return "Rappel lancé";
            if (str === "Failed") return "Echoué";
            if (str === "Succeed") return "succés";
            if (str === "Check credit") return "Vérifiez le solde";
            if (str === "ERROR") return "ERREUR";
            if (str === "OK") return "OK";
            if (str === "Call") return "Appel";
            if (str === "Too many requests") return "Trop de requete";
            if (str === "Too many wrong requests") return "Trop de requete avec erreur";
            if (str === "no answer") return "pas de réponse";
            if (str === "My balance") return "Mon compte";
            if (str === "Video") return "Vidéo";
            if (str === "Screen") return "Ecran";
            if (str === "Screensharing") return "Partage d'écran";
            if (str === "Webcam name") return "Nom de la webcam";



    }
    catch (e)
    {
            webphone_api.common.PutToDebugLogException(3, "TranslateInnerFr", e);
    }

    return '';

}


//INSERT NEW LANGUAGES HERE (marker for MTranslate)

function TranslateInner(lang,str)
{
    switch(lang)
    {
        case 'ru': return TranslateInnerRus(str);
        case 'hu': return TranslateInnerHun(str);
        case 'ro': return TranslateInnerRo(str);
        case 'de': return TranslateInnerDe(str);
        case 'it': return TranslateInnerItalian(str);
        case 'es': return TranslateInnerSpanish(str);
        case 'tr': return TranslateInnerTr(str);
        case 'pr': return TranslateInnerPr(str);
        case 'pt': return TranslateInnerPr(str);
        case 'br': return TranslateInnerPr(str);
        case 'jp': return TranslateInnerJp(str);
        case 'ja': return TranslateInnerJp(str);
        case 'fr': return TranslateInnerFr(str);
        //INSERT NEW EXPORTS HERE (marker for MTranslate)
    }
    return '';
}

function TrimEx(str)
{
    var from = 0;
    var to = str.length;
    for(var i=from;i<to-1;i++)
    {
        if(str[i] < 48 || str[i] == ' ' || str[i] == '\t' || str[i] == '\r' || str[i] == '\n' || str[i] == '.' || str[i] == ':' || str[i] == '=' || str[i] == '?' || str[i] == '!' || str[i] == ',') from = i+1;
        else break;
    }

    for(var i=to-1;i>=from;i--)
    {
        if(str[i] < 48 || str[i] == ' ' || str[i] == '\t' || str[i] == '\r' || str[i] == '\n' || str[i] == '.' || str[i] == ':' || str[i] == '=' || str[i] == '?' || str[i] == '!' || str[i] == ',')
        {
            to = i;
        }
        else break;
    }

    //return webphone_api.common.Trim(str);
    if((from <= 0 && to >= str.length) || to <= from) return str;
    return str.substring(from,to);
}

function Translate(str)
{
    if(webphone_api.stringres.getlang().length < 1) return str;
    if (typeof (str) === 'undefined' || str === null || str.length < 1) return '';

    var ret = TranslateInner(webphone_api.stringres.getlang(),str);

    if(ret.length < 1 && webphone_api.stringres.getlangshort() > 0) ret = TranslateInner(webphone_api.stringres.getlangshort(),str);
    if(ret.length < 1) // && str[str.length - 1] == '.'
    {
        var str2 = TrimEx(str);
        if(str2 !== str)
        {
            ret = TranslateInner(webphone_api.stringres.getlang(),str2);
            if(ret.length < 1 && webphone_api.stringres.getlangshort() > 0) ret = TranslateInner(webphone_api.stringres.getlangshort(),str2);
            if(ret.length > 0 && str.length > 3 && str[str.length-1] == '.' && str[str.length-2] == '.' && str[str.length-3] == '.') ret = ret + '...';
        }

        if(ret.length < 1)
        {
            if(str.indexOf('Registered. Credit') == 0) return Translate('Registered')+'. '+Translate('Credit')+str.substr(18);
            if(str.indexOf("Registered") >= 0) return str.replace("Registered",Translate('Registered'));
            if(str.indexOf("Call duration") >= 0) return str.replace("Call duration",Translate('Call duration'));
        }


    }

    if(ret.length < 1) return str;
    return ret;
}

/*


// old public members and methods
return {
	//old I NEW EXPORTS HERE (marker for MTranslate)
    TranslateInnerSpanish: TranslateInnerSpanish,
    TranslateInnerHun: TranslateInnerHun,
    TranslateInnerRus: TranslateInnerRus,
    TranslateInnerItalian: TranslateInnerItalian,
    TranslateInnerRo: TranslateInnerRo,
    TranslateInnerDe: TranslateInnerDe,
    TranslateInnerPr: TranslateInnerPr,
    TranslateInnerTr: TranslateInnerTr,
    TranslateInnerJp: TranslateInnerJp,
    TranslateInnerFr: TranslateInnerFr
};
*/
return {
    Translate: Translate
};
})();
//file modified by MTranslate at 11/13/2022 18:26:49 changed: 0
