var options = [
    'I dag släpper jag mina gamla vanor och tar upp nya mer positiva. Det enda konstanta är förändring. Du gör nya val hela tiden även när du inte är medveten om det. Att inte förändra eller ta ett nytt steg är också ett val.',
    'I dag är jag fylld av energi och glädje. Det är jag som kan välja och påverka hur jag ska känna och må. Glädje börjar inifrån och inte utanför dig själv. Du väljer vilka känslor du ska ha.',
    'Det goda livet är en process, inte ett tillstånd av att vara. Det är en riktning, inte en destination.',
    'Framgång är summan av små ansträngningar som upprepas dag ut och dag in.',
    'Dröm som om du kommer leva för alltid, Lev som om du kommer dö idag. Tänk att dagen idag är en gåva, njut av den och ta vara på den. Och fortsätt drömma om dagarna som kommer.',
    'Ju mer du berömmer och firar ditt liv, desto mer finns det i livet att fira. Det finns alltid något att fira och genom att fira så visar du dig själv att det du gör är bra och värt att uppmärksammas',
    'Gå ut på din väg, eftersom den bara existerar genom din vandring. Vi alla har en bok att skriva och det är endast du själv som kan hålla i pennan och skriva den, oavsett hur krokig, gropig, spikrak, eller krånglig den må vara. Ge dig ut och trampa upp din stig!',
    'Livet är det som händer dig medan du är upptagen med att planera andra saker.',
    'Låt inte det du inte kan göra stoppa dig från att göra det du faktiskt kan göra.',
    'Omge dig med människor som bara kommer att göra dig bättre och som stöttar dig genom vått och torrt.',
    'Istället för att tänka på vad du saknar, försök att tänka på vad du har, som alla andra saknar.',
    'Människan är inget annat än summan av sina tankar. Det hon tänker det blir hon.',
    'Det finns en liten skillnad mellan människor, men den lilla skillnaden gör en stor skillnad. Den lilla skillnaden är attityd. Den stora skillnaden är om den är positiv eller negativ.',
    'Pessimisten ser svårigheten i varje möjlighet. Optimisten ser möjligheten i varje svårighet. Vem är du?',
    'Det bästa sättet att komma igång är att sluta prata och börja göra. ',
    'Skillnaden mellan vanligt och extraordinärt är det lilla extra.',
    'Vi skapar rädslor medan vi sitter. Vi övervinner dem genom handling.',
    'Andas. Det är bara en dålig dag, inte ett dåligt liv.',
    'Du misslyckas aldrig förrän du slutar försöka.',
    'Misslyckande är framgång om vi lär oss av det.',
    'Att vinna betyder inte alltid att vara först. Att vinna betyder att du gör det bättre än du har gjort förut.',
    'Kampen du är i idag utvecklar den styrka du behöver i morgon.'
];

function help() {
    
    var randOptionNum = Math.floor(Math.random() * options.length);

    document.getElementById("text").innerHTML = '';
    document.getElementById("text").innerHTML = options[randOptionNum];
}