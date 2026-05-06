// ─── DATA FIXA (estoques históricos MAR e ABR) ────────────────────────────────
const MAR={"BLACK LABEL":{cat:"WHISKY",est:3,salao:0},"RED LABEL":{cat:"WHISKY",est:1,salao:0},"BUFALO TRACE":{cat:"WHISKY",est:11,salao:0},"BULLEIT":{cat:"WHISKY",est:4,salao:1},"CHIVAS 12":{cat:"WHISKY",est:35,salao:1},"JACK DANIELS":{cat:"WHISKY",est:3,salao:0},"JAMESON":{cat:"WHISKY",est:22,salao:0},"SINGLETON":{cat:"WHISKY",est:10,salao:1},"3 LOBOS":{cat:"WHISKY",est:2,salao:1},"ROYAL SALUTE":{cat:"WHISKY",est:0,salao:1},"TALISKER":{cat:"WHISKY",est:0,salao:1},"BUCHANAN'S":{cat:"WHISKY",est:0,salao:1},"MARKER'S MARK":{cat:"WHISKY",est:0,salao:1},"GLENKÍNCHIE":{cat:"WHISKY",est:0,salao:0},"RARE BREED":{cat:"WHISKY",est:0,salao:0},"JIM BEAM":{cat:"WHISKY",est:0,salao:1},"LAMAS CALEDONIA":{cat:"WHISKY",est:0,salao:1},"THE GLENLIVET":{cat:"WHISKY",est:1,salao:0},"DEWAR'S 12 ANOS":{cat:"WHISKY",est:0,salao:1},"DEWAR'S 15 ANOS":{cat:"WHISKY",est:0,salao:1},"HIBIKI":{cat:"WHISKY",est:0,salao:1},"OUL PARR":{cat:"WHISKY",est:0,salao:0},"SARERAL RYE":{cat:"WHISKY",est:0,salao:1},"GIN BEEFEATER":{cat:"GIN",est:167,salao:0},"GIN BOMBAY":{cat:"GIN",est:9,salao:0},"GIN FORDS":{cat:"GIN",est:1,salao:0},"GIN HENDRICKS":{cat:"GIN",est:1,salao:0},"GIN MARTIN MILLER":{cat:"GIN",est:4,salao:6},"GIN MONKEY 47":{cat:"GIN",est:0,salao:1},"GIN NIB PERA":{cat:"GIN",est:0,salao:0},"GIN SPIRAL":{cat:"GIN",est:6,salao:0},"GIN TANQUERAY":{cat:"GIN",est:51,salao:0},"GIN YVY AR":{cat:"GIN",est:4,salao:0},"GIN YVY MAR":{cat:"GIN",est:0,salao:0},"GIN YVY MAR 200ML":{cat:"GIN",est:0,salao:0},"GIN ZURR":{cat:"GIN",est:3,salao:0},"GIN ROKU":{cat:"GIN",est:1,salao:0},"GIN VELVO DRY":{cat:"GIN",est:0,salao:0},"GIN VAN FALL":{cat:"GIN",est:0,salao:0},"GIN YVY CERRADO":{cat:"GIN",est:2,salao:0},"GIN YVY MATA ATLANTICA":{cat:"GIN",est:1,salao:0},"GIN VELVO ARTICE":{cat:"GIN",est:7,salao:0},"VODKA KETEL ONE":{cat:"VODKA",est:18,salao:2},"VODKA ABSOLUT":{cat:"VODKA",est:89,salao:0},"VODKA GREY GOOSE":{cat:"VODKA",est:16,salao:1},"VODKA HARUN":{cat:"VODKA",est:0,salao:2},"VODKA RCV":{cat:"VODKA",est:4,salao:1},"VODKA WYBOROWA":{cat:"VODKA",est:20,salao:0},"VODKA BELVEDERE":{cat:"VODKA",est:0,salao:2},"VODKA ROBERTO CAVALLI":{cat:"VODKA",est:1,salao:0},"VODKA ABSOLUT PESSEGO":{cat:"VODKA",est:0,salao:0},"VODKA STOLICHNAYA":{cat:"VODKA",est:0,salao:1},"VODKA SPIRAL":{cat:"VODKA",est:0,salao:1},"VODKA ELIT":{cat:"VODKA",est:0,salao:1},"VODKA CIROC":{cat:"VODKA",est:0,salao:0},"VODKA SKY":{cat:"VODKA",est:0,salao:0},"VODKA ABSOLUT ELIX":{cat:"VODKA",est:0,salao:1},"VODKA IMPERIAL GOLD":{cat:"VODKA",est:1,salao:0},"ANGOSTURA":{cat:"VERMUTE/BITTER",est:1,salao:4},"EMULSIFICANTE":{cat:"VERMUTE/BITTER",est:4,salao:0},"APEROL":{cat:"VERMUTE/BITTER",est:31,salao:1},"BITTER CHOCOLATE":{cat:"VERMUTE/BITTER",est:0,salao:0},"BITTER LARANJA":{cat:"VERMUTE/BITTER",est:2,salao:4},"CAMPARI":{cat:"VERMUTE/BITTER",est:20,salao:6},"CARPANO ROSSO":{cat:"VERMUTE/BITTER",est:14,salao:6},"CINZANO":{cat:"VERMUTE/BITTER",est:8,salao:1},"FERNET":{cat:"VERMUTE/BITTER",est:7,salao:1},"JAGERMEISTER":{cat:"VERMUTE/BITTER",est:3,salao:0},"AMAROGUTTA":{cat:"VERMUTE/BITTER",est:3,salao:0},"PUNT E MES":{cat:"VERMUTE/BITTER",est:3,salao:8},"PEYCHAUD'S":{cat:"VERMUTE/BITTER",est:0,salao:4},"1757":{cat:"VERMUTE/BITTER",est:1,salao:1},"CYNAR":{cat:"VERMUTE/BITTER",est:0,salao:1},"1796":{cat:"VERMUTE/BITTER",est:0,salao:1},"AUREAH ROSE":{cat:"VERMUTE/BITTER",est:0,salao:1},"ESPUMANTE 0%":{cat:"ESPUMANTES/VINHO",est:6,salao:0},"ESPUMANTE BRUT":{cat:"ESPUMANTES/VINHO",est:90,salao:0},"ESPUMANTE ROSE":{cat:"ESPUMANTES/VINHO",est:4,salao:0},"MANZA":{cat:"ESPUMANTES/VINHO",est:264,salao:7},"VINHO DO PORTO BRANCO":{cat:"ESPUMANTES/VINHO",est:6,salao:0},"FOSS MARAI ROSE":{cat:"ESPUMANTES/VINHO",est:0,salao:3},"FOSS MARAI":{cat:"ESPUMANTES/VINHO",est:0,salao:3},"DOMEC":{cat:"APERITIVOS/FORTIF.",est:2,salao:0},"LILLET":{cat:"APERITIVOS/FORTIF.",est:25,salao:1},"LILLET ROSE":{cat:"APERITIVOS/FORTIF.",est:0,salao:0},"RAMAZZOTTI AMARO":{cat:"APERITIVOS/FORTIF.",est:1,salao:1},"RAMAZZOTTI ROSATO":{cat:"APERITIVOS/FORTIF.",est:8,salao:0},"PISCO":{cat:"APERITIVOS/FORTIF.",est:4,salao:0},"SAQUE":{cat:"APERITIVOS/FORTIF.",est:2,salao:0},"NEGRONI ROMERO":{cat:"APERITIVOS/FORTIF.",est:12,salao:3},"BOULEVARDIER ROMERO":{cat:"APERITIVOS/FORTIF.",est:5,salao:3},"RUM HAVANA":{cat:"RUM",est:2,salao:0},"TEQUILA 1800 CRISTALINO":{cat:"TEQUILA",est:7,salao:3},"TEQUILA 1800 BLANCO":{cat:"TEQUILA",est:0,salao:1},"TEQUILA 1800 CRISTALINO AURORA":{cat:"TEQUILA",est:6,salao:0},"TEQUILA DON JULIO":{cat:"TEQUILA",est:2,salao:0},"TEQUILA JOSE CUERVO ESPECIAL":{cat:"TEQUILA",est:29,salao:4},"TEQUILA JOSE CUERVO TRADICIONAL":{cat:"TEQUILA",est:0,salao:0},"TEQUILA JOSE CUERVO RESERVA ANEJO":{cat:"TEQUILA",est:0,salao:1},"TEQUILA JOSE CUERVO RESERVA PLATINA":{cat:"TEQUILA",est:0,salao:1},"MAESTRO DOBEL":{cat:"TEQUILA",est:15,salao:3},"CACHACA SPIRAL":{cat:"CACHACA",est:19,salao:0},"CACHACA DONA PRETA":{cat:"CACHACA",est:0,salao:1},"ANAUE":{cat:"LICOR/SHOTS",est:1,salao:0},"ARTHURIUM":{cat:"LICOR/SHOTS",est:5,salao:0},"BALLENA COCO":{cat:"LICOR/SHOTS",est:1,salao:0},"BALLENA CARAMELO":{cat:"LICOR/SHOTS",est:0,salao:0},"BALLENA MORANGO":{cat:"LICOR/SHOTS",est:3,salao:0},"BANANINHA":{cat:"LICOR/SHOTS",est:0,salao:0},"CASSIS":{cat:"LICOR/SHOTS",est:2,salao:1},"COINTREAU":{cat:"LICOR/SHOTS",est:0,salao:0},"FIREBALL":{cat:"LICOR/SHOTS",est:9,salao:0},"FIREBALL 50ML":{cat:"LICOR/SHOTS",est:12,salao:24},"JACK FIRE":{cat:"LICOR/SHOTS",est:4,salao:0},"JAMBRUNA":{cat:"LICOR/SHOTS",est:3,salao:0},"LICOR 43":{cat:"LICOR/SHOTS",est:20,salao:4},"LICOR 43 BRULLE":{cat:"LICOR/SHOTS",est:0,salao:4},"LIMONCELLO":{cat:"LICOR/SHOTS",est:0,salao:0},"NIB SHOTS":{cat:"LICOR/SHOTS",est:40,salao:0},"PEACHTREE":{cat:"LICOR/SHOTS",est:7,salao:4},"TRIPLE SEC":{cat:"LICOR/SHOTS",est:2,salao:1},"FRAMBOESA":{cat:"XAROPE/PURE",est:12,salao:0},"PIMENTA":{cat:"XAROPE/PURE",est:5,salao:0},"ABACAXI XP":{cat:"XAROPE/PURE",est:5,salao:0},"AGAVE":{cat:"XAROPE/PURE",est:4,salao:0},"AMARENA":{cat:"XAROPE/PURE",est:7,salao:0},"AMARETO":{cat:"XAROPE/PURE",est:10,salao:0},"AMENDUAS":{cat:"XAROPE/PURE",est:3,salao:0},"AMORA":{cat:"XAROPE/PURE",est:4,salao:0},"BLUE CURACAO":{cat:"XAROPE/PURE",est:1,salao:0},"CARAMELO":{cat:"XAROPE/PURE",est:4,salao:0},"CARAMELO SALGADO":{cat:"XAROPE/PURE",est:3,salao:0},"CHICLETE":{cat:"XAROPE/PURE",est:0,salao:0},"COCO":{cat:"XAROPE/PURE",est:0,salao:0},"CRAMBERRY":{cat:"XAROPE/PURE",est:4,salao:0},"ENERGETICO":{cat:"XAROPE/PURE",est:14,salao:0},"FLOR DE SABUGUEIRO":{cat:"XAROPE/PURE",est:6,salao:0},"GENGIBRE":{cat:"XAROPE/PURE",est:0,salao:0},"POMEGRANATE ROMA":{cat:"XAROPE/PURE",est:0,salao:0},"GRENADINE":{cat:"XAROPE/PURE",est:6,salao:0},"IRIS CREAM":{cat:"XAROPE/PURE",est:0,salao:0},"LARANJA VERMELHA":{cat:"XAROPE/PURE",est:4,salao:0},"LICHIA":{cat:"XAROPE/PURE",est:12,salao:0},"LIMAO SICILIANO":{cat:"XAROPE/PURE",est:2,salao:0},"MACA VERDE":{cat:"XAROPE/PURE",est:5,salao:0},"MANGA":{cat:"XAROPE/PURE",est:0,salao:0},"MAPLE":{cat:"XAROPE/PURE",est:7,salao:0},"MARACUJA VERMELHO":{cat:"XAROPE/PURE",est:10,salao:0},"MARACUJA XP":{cat:"XAROPE/PURE",est:1,salao:0},"TONIC XP":{cat:"XAROPE/PURE",est:4,salao:0},"PESSEGO":{cat:"XAROPE/PURE",est:0,salao:0},"MELANCIA":{cat:"XAROPE/PURE",est:7,salao:0},"MEL":{cat:"XAROPE/PURE",est:4,salao:0},"MELON":{cat:"XAROPE/PURE",est:1,salao:0},"MENTA":{cat:"XAROPE/PURE",est:9,salao:0},"MENTA VERDE":{cat:"XAROPE/PURE",est:4,salao:0},"MORANGO XP":{cat:"XAROPE/PURE",est:5,salao:0},"PARAGON":{cat:"XAROPE/PURE",est:0,salao:0},"PEPINO":{cat:"XAROPE/PURE",est:8,salao:0},"PIPOCA":{cat:"XAROPE/PURE",est:10,salao:0},"PISTACHIO":{cat:"XAROPE/PURE",est:1,salao:0},"MANDARIN":{cat:"XAROPE/PURE",est:3,salao:0},"TANGERINA":{cat:"XAROPE/PURE",est:19,salao:0},"TRIPLE SEC XP":{cat:"XAROPE/PURE",est:0,salao:0},"VIOLETA":{cat:"XAROPE/PURE",est:0,salao:0},"PURE DE ABACAXI":{cat:"XAROPE/PURE",est:2,salao:0},"PURE DE BANANA":{cat:"XAROPE/PURE",est:12,salao:0},"PURE DE JABUTICABA":{cat:"XAROPE/PURE",est:2,salao:0},"PURE DE MACA":{cat:"XAROPE/PURE",est:3,salao:0},"PURE DE MARACUJA":{cat:"XAROPE/PURE",est:15,salao:0},"PURE DE PERA":{cat:"XAROPE/PURE",est:3,salao:0},"PURE DE YUZU":{cat:"XAROPE/PURE",est:4,salao:0},"PURE DE PESSEGO":{cat:"XAROPE/PURE",est:11,salao:0},"PURE DE TORANJA":{cat:"XAROPE/PURE",est:4,salao:0},"PURE DE MORANGO":{cat:"XAROPE/PURE",est:25,salao:0},"AGUA COM GAS":{cat:"SEM ALCOOL",est:95,salao:2},"AGUA COM GAS CAMBUQUIRA":{cat:"SEM ALCOOL",est:34,salao:5},"AGUA DE COCO":{cat:"SEM ALCOOL",est:0,salao:0},"AGUA SEM GAS 1.5LT":{cat:"SEM ALCOOL",est:180,salao:0},"AGUA SEM GAS 500ML":{cat:"SEM ALCOOL",est:36,salao:9},"AGUA TONICA":{cat:"SEM ALCOOL",est:254,salao:4},"CAFE SOLUVEL":{cat:"SEM ALCOOL",est:0,salao:0},"COMPOTA DE CAJU":{cat:"SEM ALCOOL",est:0,salao:0},"COMPOTA DE JABUTICABA":{cat:"SEM ALCOOL",est:2,salao:0},"MAT PESSEGO":{cat:"SEM ALCOOL",est:0,salao:0},"SUCO DE MACA":{cat:"SEM ALCOOL",est:8,salao:0},"SUCO DE MANGA":{cat:"SEM ALCOOL",est:0,salao:0},"SUCO DE PESSEGO":{cat:"SEM ALCOOL",est:8,salao:0},"SUCO LARANJA":{cat:"SEM ALCOOL",est:6,salao:0},"TABASCO":{cat:"SEM ALCOOL",est:0,salao:0},"SUCO DE MARACUJA":{cat:"SEM ALCOOL",est:2,salao:0},"SUCO DE CAJU":{cat:"SEM ALCOOL",est:0,salao:0},"CAJUINA":{cat:"SEM ALCOOL",est:6,salao:0},"ESPUMA DE BAUNILHA":{cat:"MIXING ARTESANAL",est:0,salao:0},"ESPUMA DE GENGIBRE":{cat:"MIXING ARTESANAL",est:5,salao:1},"ESPUMA DE JABUTICABA":{cat:"MIXING ARTESANAL",est:0,salao:0},"ESPUMA DE MACA":{cat:"MIXING ARTESANAL",est:0,salao:0},"ESPUMA DE SICILIANO":{cat:"MIXING ARTESANAL",est:5,salao:2},"ESPUMA DE TANGERINA":{cat:"MIXING ARTESANAL",est:3,salao:0},"GINGER ALE":{cat:"MIXING ARTESANAL",est:18,salao:0},"SODA DE GRAPEFRUIT":{cat:"MIXING ARTESANAL",est:27,salao:2},"XAROPE DE ACUCAR":{cat:"PRODUCAO",est:4,salao:0},"SUCO DE LIMAO":{cat:"PRODUCAO",est:0,salao:0},"PURE DE FRUTAS VERMELHAS":{cat:"PRODUCAO",est:13,salao:0},"MARACUJA PROD":{cat:"PRODUCAO",est:0,salao:0},"CANECA DE COBRE":{cat:"COPOS/TAÇAS",est:288,salao:9},"COPO BAIXO ELYSIA":{cat:"COPOS/TAÇAS",est:144,salao:4},"COPO BAIXO LISO (ENVY)":{cat:"COPOS/TAÇAS",est:207,salao:5},"COPO BAIXO REVEL":{cat:"COPOS/TAÇAS",est:24,salao:2},"COPO BAIXO TIMELEES":{cat:"COPOS/TAÇAS",est:306,salao:6},"COPO BAIXO XTRA":{cat:"COPOS/TAÇAS",est:360,salao:8},"COPO LONG ELYSIA":{cat:"COPOS/TAÇAS",est:95,salao:5},"COPO BAIXO PORCELANA":{cat:"COPOS/TAÇAS",est:85,salao:5},"COPO LONG REVEL":{cat:"COPOS/TAÇAS",est:39,salao:20},"COPO LONG LISO MODELO NOVO":{cat:"COPOS/TAÇAS",est:204,salao:0},"COPO LONG LISO MODELO VELHO":{cat:"COPOS/TAÇAS",est:95,salao:5},"COPO BOODY MARY":{cat:"COPOS/TAÇAS",est:96,salao:6},"COPO LONG XTRA":{cat:"COPOS/TAÇAS",est:270,salao:13},"TAÇA CALISE AMERICA (RECEPTIVO)":{cat:"COPOS/TAÇAS",est:107,salao:6},"TAÇA COUPE AMERICA":{cat:"COPOS/TAÇAS",est:75,salao:1},"TAÇA COUPE TIMELEES":{cat:"COPOS/TAÇAS",est:209,salao:12},"TAÇA DE VINHO BRUNELLO":{cat:"COPOS/TAÇAS",est:435,salao:5},"TAÇA DE VINHO BRUNELLO (LILLET)":{cat:"COPOS/TAÇAS",est:100,salao:21},"TAÇA DE VINHO XTRA":{cat:"COPOS/TAÇAS",est:465,salao:15},"TAÇA ESPUMANTE XTRA":{cat:"COPOS/TAÇAS",est:39,salao:6},"TAÇA HURACANE":{cat:"COPOS/TAÇAS",est:0,salao:2},"TAÇA MARTINI":{cat:"COPOS/TAÇAS",est:30,salao:5},"TAÇA BOEMIA":{cat:"COPOS/TAÇAS",est:57,salao:4},"TAÇA MARTINI GRANDE":{cat:"COPOS/TAÇAS",est:0,salao:7}};
const ABR={"BLACK LABEL":{cat:"WHISKY",est:3,salao:1},"RED LABEL":{cat:"WHISKY",est:1,salao:0},"BUFALO TRACE":{cat:"WHISKY",est:11,salao:0},"BULLEIT":{cat:"WHISKY",est:4,salao:1},"CHIVAS 12":{cat:"WHISKY",est:35,salao:0},"JACK DANIELS":{cat:"WHISKY",est:4,salao:1},"JAMESON":{cat:"WHISKY",est:30,salao:0},"SINGLETON":{cat:"WHISKY",est:11,salao:1},"3 LOBOS":{cat:"WHISKY",est:2,salao:1},"ROYAL SALUTE":{cat:"WHISKY",est:0,salao:1},"TALISKER":{cat:"WHISKY",est:0,salao:1},"BUCHANAN'S":{cat:"WHISKY",est:0,salao:1},"MARKER'S MARK":{cat:"WHISKY",est:0,salao:1},"GLENKÍNCHIE":{cat:"WHISKY",est:0,salao:0},"RARE BREED":{cat:"WHISKY",est:0,salao:0},"JIM BEAM":{cat:"WHISKY",est:0,salao:1},"LAMAS CALEDONIA":{cat:"WHISKY",est:0,salao:1},"THE GLENLIVET":{cat:"WHISKY",est:1,salao:1},"DEWAR'S 12 ANOS":{cat:"WHISKY",est:0,salao:1},"DEWAR'S 15 ANOS":{cat:"WHISKY",est:0,salao:1},"HIBIKI":{cat:"WHISKY",est:0,salao:1},"OUL PARR":{cat:"WHISKY",est:0,salao:1},"SARERAL RYE":{cat:"WHISKY",est:0,salao:1},"GIN BEEFEATER":{cat:"GIN",est:41,salao:0},"GIN BOMBAY":{cat:"GIN",est:9,salao:0},"GIN FORDS":{cat:"GIN",est:0,salao:1},"GIN HENDRICKS":{cat:"GIN",est:1,salao:0},"GIN MARTIN MILLER":{cat:"GIN",est:4,salao:7},"GIN MONKEY 47":{cat:"GIN",est:0,salao:1},"GIN NIB PERA":{cat:"GIN",est:0,salao:0},"GIN SPIRAL":{cat:"GIN",est:4,salao:0},"GIN TANQUERAY":{cat:"GIN",est:41,salao:0},"GIN YVY AR":{cat:"GIN",est:0,salao:0},"GIN YVY MAR":{cat:"GIN",est:0,salao:0},"GIN YVY MAR 200ML":{cat:"GIN",est:0,salao:0},"GIN ZURR":{cat:"GIN",est:3,salao:0},"GIN ROKU":{cat:"GIN",est:0,salao:0},"GIN VELVO DRY":{cat:"GIN",est:0,salao:0},"GIN VAN FALL":{cat:"GIN",est:0,salao:0},"GIN YVY CERRADO":{cat:"GIN",est:2,salao:0},"GIN YVY MATA ATLANTICA":{cat:"GIN",est:1,salao:0},"GIN VELVO ARTICE":{cat:"GIN",est:7,salao:0},"VODKA KETEL ONE":{cat:"VODKA",est:17,salao:1},"VODKA ABSOLUT":{cat:"VODKA",est:60,salao:0},"VODKA GREY GOOSE":{cat:"VODKA",est:16,salao:0},"VODKA HARUN":{cat:"VODKA",est:0,salao:2},"VODKA RCV":{cat:"VODKA",est:4,salao:1},"VODKA WYBOROWA":{cat:"VODKA",est:18,salao:0},"VODKA BELVEDERE":{cat:"VODKA",est:0,salao:2},"VODKA ROBERTO CAVALLI":{cat:"VODKA",est:1,salao:0},"VODKA ABSOLUT PESSEGO":{cat:"VODKA",est:0,salao:0},"VODKA STOLICHNAYA":{cat:"VODKA",est:0,salao:1},"VODKA SPIRAL":{cat:"VODKA",est:0,salao:0},"VODKA ELIT":{cat:"VODKA",est:0,salao:1},"VODKA CIROC":{cat:"VODKA",est:0,salao:1},"VODKA SKY":{cat:"VODKA",est:0,salao:0},"VODKA ABSOLUT ELIX":{cat:"VODKA",est:0,salao:1},"VODKA IMPERIAL GOLD":{cat:"VODKA",est:1,salao:0},"ANGOSTURA":{cat:"VERMUTE/BITTER",est:8,salao:1},"EMULSIFICANTE":{cat:"VERMUTE/BITTER",est:0,salao:0},"APEROL":{cat:"VERMUTE/BITTER",est:13,salao:1},"BITTER CHOCOLATE":{cat:"VERMUTE/BITTER",est:0,salao:0},"BITTER LARANJA":{cat:"VERMUTE/BITTER",est:2,salao:5},"CAMPARI":{cat:"VERMUTE/BITTER",est:15,salao:7},"CARPANO ROSSO":{cat:"VERMUTE/BITTER",est:12,salao:6},"CINZANO":{cat:"VERMUTE/BITTER",est:6,salao:0},"FERNET":{cat:"VERMUTE/BITTER",est:5,salao:1},"JAGERMEISTER":{cat:"VERMUTE/BITTER",est:3,salao:0},"AMAROGUTTA":{cat:"VERMUTE/BITTER",est:3,salao:0},"PUNT E MES":{cat:"VERMUTE/BITTER",est:1,salao:8},"PEYCHAUD'S":{cat:"VERMUTE/BITTER",est:0,salao:4},"1757":{cat:"VERMUTE/BITTER",est:1,salao:1},"CYNAR":{cat:"VERMUTE/BITTER",est:0,salao:0},"1796":{cat:"VERMUTE/BITTER",est:0,salao:0},"AUREAH ROSE":{cat:"VERMUTE/BITTER",est:0,salao:0},"ESPUMANTE 0%":{cat:"ESPUMANTES/VINHO",est:6,salao:0},"ESPUMANTE LE BLANC":{cat:"ESPUMANTES/VINHO",est:70,salao:0},"ESPUMANTE ROSE":{cat:"ESPUMANTES/VINHO",est:4,salao:0},"MANZA":{cat:"ESPUMANTES/VINHO",est:216,salao:17},"VINHO DO PORTO BRANCO":{cat:"ESPUMANTES/VINHO",est:6,salao:0},"FOSS MARAI ROSE":{cat:"ESPUMANTES/VINHO",est:0,salao:3},"FOSS MARAI":{cat:"ESPUMANTES/VINHO",est:0,salao:3},"DOMEC":{cat:"APERITIVOS/FORTIF.",est:2,salao:0},"LILLET":{cat:"APERITIVOS/FORTIF.",est:25,salao:0},"LILLET ROSE":{cat:"APERITIVOS/FORTIF.",est:0,salao:0},"RAMAZZOTTI AMARO":{cat:"APERITIVOS/FORTIF.",est:1,salao:0},"RAMAZZOTTI ROSATO":{cat:"APERITIVOS/FORTIF.",est:6,salao:0},"PISCO":{cat:"APERITIVOS/FORTIF.",est:4,salao:0},"SAQUE":{cat:"APERITIVOS/FORTIF.",est:15,salao:0},"NEGRONI ROMERO":{cat:"APERITIVOS/FORTIF.",est:8,salao:4},"BOULEVARDIER ROMERO":{cat:"APERITIVOS/FORTIF.",est:5,salao:3},"RUM HAVANA":{cat:"RUM",est:2,salao:0},"TEQUILA 1800 CRISTALINO":{cat:"TEQUILA",est:2,salao:3},"TEQUILA 1800 BLANCO":{cat:"TEQUILA",est:6,salao:1},"TEQUILA 1800 CRISTALINO AURORA":{cat:"TEQUILA",est:6,salao:0},"TEQUILA DON JULIO":{cat:"TEQUILA",est:2,salao:0},"TEQUILA JOSE CUERVO ESPECIAL":{cat:"TEQUILA",est:20,salao:4},"TEQUILA JOSE CUERVO TRADICIONAL":{cat:"TEQUILA",est:0,salao:0},"TEQUILA JOSE CUERVO RESERVA ANEJO":{cat:"TEQUILA",est:0,salao:1},"TEQUILA JOSE CUERVO RESERVA PLATINA":{cat:"TEQUILA",est:0,salao:1},"MAESTRO DOBEL":{cat:"TEQUILA",est:15,salao:3},"CACHACA SPIRAL":{cat:"CACHACA",est:17,salao:0},"CACHACA DONA PRETA":{cat:"CACHACA",est:0,salao:1},"ANAUE":{cat:"LICOR/SHOTS",est:0,salao:0},"ARTHURIUM":{cat:"LICOR/SHOTS",est:5,salao:0},"BALLENA COCO":{cat:"LICOR/SHOTS",est:1,salao:0},"BALLENA CARAMELO":{cat:"LICOR/SHOTS",est:0,salao:0},"BALLENA MORANGO":{cat:"LICOR/SHOTS",est:1,salao:0},"BANANINHA":{cat:"LICOR/SHOTS",est:4,salao:0},"CASSIS":{cat:"LICOR/SHOTS",est:1,salao:1},"COINTREAU":{cat:"LICOR/SHOTS",est:0,salao:0},"FIREBALL":{cat:"LICOR/SHOTS",est:11,salao:0},"FIREBALL 50ML":{cat:"LICOR/SHOTS",est:12,salao:12},"JACK FIRE":{cat:"LICOR/SHOTS",est:4,salao:1},"JAMBRUNA":{cat:"LICOR/SHOTS",est:2,salao:0},"LICOR 43":{cat:"LICOR/SHOTS",est:16,salao:4},"LICOR 43 BRULLE":{cat:"LICOR/SHOTS",est:0,salao:3},"LIMONCELLO":{cat:"LICOR/SHOTS",est:6,salao:0},"NIB SHOTS":{cat:"LICOR/SHOTS",est:40,salao:0},"PEACHTREE":{cat:"LICOR/SHOTS",est:7,salao:5},"TRIPLE SEC":{cat:"LICOR/SHOTS",est:5,salao:0},"FRAMBOESA":{cat:"XAROPE/PURE",est:10,salao:0},"PIMENTA":{cat:"XAROPE/PURE",est:5,salao:0},"ABACAXI XP":{cat:"XAROPE/PURE",est:5,salao:0},"AGAVE":{cat:"XAROPE/PURE",est:2,salao:0},"AMARENA":{cat:"XAROPE/PURE",est:7,salao:0},"AMARETO":{cat:"XAROPE/PURE",est:10,salao:0},"AMENDUAS":{cat:"XAROPE/PURE",est:2,salao:0},"AMORA":{cat:"XAROPE/PURE",est:2,salao:0},"BLUE CURACAO":{cat:"XAROPE/PURE",est:1,salao:0},"CARAMELO":{cat:"XAROPE/PURE",est:4,salao:0},"CARAMELO SALGADO":{cat:"XAROPE/PURE",est:3,salao:0},"CHICLETE":{cat:"XAROPE/PURE",est:0,salao:0},"COCO":{cat:"XAROPE/PURE",est:0,salao:0},"CRAMBERRY":{cat:"XAROPE/PURE",est:4,salao:0},"ENERGETICO":{cat:"XAROPE/PURE",est:12,salao:0},"FLOR DE SABUGUEIRO":{cat:"XAROPE/PURE",est:3,salao:0},"GENGIBRE":{cat:"XAROPE/PURE",est:1,salao:0},"POMEGRANATE ROMA":{cat:"XAROPE/PURE",est:3,salao:0},"GRENADINE":{cat:"XAROPE/PURE",est:5,salao:0},"IRIS CREAM":{cat:"XAROPE/PURE",est:1,salao:0},"LARANJA VERMELHA":{cat:"XAROPE/PURE",est:1,salao:0},"LICHIA":{cat:"XAROPE/PURE",est:2,salao:0},"LIMAO SICILIANO":{cat:"XAROPE/PURE",est:2,salao:0},"MACA VERDE":{cat:"XAROPE/PURE",est:4,salao:0},"MANGA":{cat:"XAROPE/PURE",est:0,salao:0},"MAPLE":{cat:"XAROPE/PURE",est:0,salao:0},"MARACUJA VERMELHO":{cat:"XAROPE/PURE",est:9,salao:0},"MARACUJA XP":{cat:"XAROPE/PURE",est:0,salao:0},"TONIC XP":{cat:"XAROPE/PURE",est:4,salao:0},"PESSEGO":{cat:"XAROPE/PURE",est:0,salao:0},"MELANCIA":{cat:"XAROPE/PURE",est:6,salao:0},"MEL":{cat:"XAROPE/PURE",est:4,salao:0},"MELON":{cat:"XAROPE/PURE",est:1,salao:0},"MENTA":{cat:"XAROPE/PURE",est:7,salao:0},"MENTA VERDE":{cat:"XAROPE/PURE",est:4,salao:0},"MORANGO XP":{cat:"XAROPE/PURE",est:1,salao:0},"PARAGON":{cat:"XAROPE/PURE",est:0,salao:0},"PEPINO":{cat:"XAROPE/PURE",est:6,salao:0},"PIPOCA":{cat:"XAROPE/PURE",est:10,salao:0},"PISTACHIO":{cat:"XAROPE/PURE",est:1,salao:0},"MANDARIN":{cat:"XAROPE/PURE",est:2,salao:0},"TANGERINA":{cat:"XAROPE/PURE",est:14,salao:0},"TRIPLE SEC XP":{cat:"XAROPE/PURE",est:1,salao:0},"VIOLETA":{cat:"XAROPE/PURE",est:2,salao:0},"PURE DE ABACAXI":{cat:"XAROPE/PURE",est:10,salao:0},"PURE DE BANANA":{cat:"XAROPE/PURE",est:2,salao:0},"PURE DE JABUTICABA":{cat:"XAROPE/PURE",est:3,salao:0},"PURE DE MACA":{cat:"XAROPE/PURE",est:8,salao:0},"PURE DE MARACUJA":{cat:"XAROPE/PURE",est:3,salao:0},"PURE DE PERA":{cat:"XAROPE/PURE",est:9,salao:0},"PURE DE YUZU":{cat:"XAROPE/PURE",est:4,salao:0},"PURE DE PESSEGO":{cat:"XAROPE/PURE",est:11,salao:0},"PURE DE TORANJA":{cat:"XAROPE/PURE",est:4,salao:0},"PURE DE MORANGO":{cat:"XAROPE/PURE",est:24,salao:0},"AGUA COM GAS":{cat:"SEM ALCOOL",est:470,salao:5},"AGUA COM GAS CAMBUQUIRA":{cat:"SEM ALCOOL",est:34,salao:3},"AGUA DE COCO":{cat:"SEM ALCOOL",est:0,salao:0},"AGUA SEM GAS 1.5LT":{cat:"SEM ALCOOL",est:165,salao:0},"AGUA SEM GAS 500ML":{cat:"SEM ALCOOL",est:23,salao:5},"AGUA TONICA":{cat:"SEM ALCOOL",est:21,salao:0},"CAFE SOLUVEL":{cat:"SEM ALCOOL",est:0,salao:0},"COMPOTA DE CAJU":{cat:"SEM ALCOOL",est:0,salao:0},"COMPOTA DE JABUTICABA":{cat:"SEM ALCOOL",est:2,salao:0},"MAT PESSEGO":{cat:"SEM ALCOOL",est:0,salao:0},"SUCO DE MACA":{cat:"SEM ALCOOL",est:8,salao:0},"SUCO DE MANGA":{cat:"SEM ALCOOL",est:0,salao:0},"SUCO DE PESSEGO":{cat:"SEM ALCOOL",est:7,salao:0},"SUCO LARANJA":{cat:"SEM ALCOOL",est:5,salao:0},"TABASCO":{cat:"SEM ALCOOL",est:0,salao:0},"SUCO DE MARACUJA":{cat:"SEM ALCOOL",est:1,salao:0},"SUCO DE CAJU":{cat:"SEM ALCOOL",est:0,salao:0},"CAJUINA":{cat:"SEM ALCOOL",est:6,salao:0},"ESPUMA DE BAUNILHA":{cat:"MIXING ARTESANAL",est:0,salao:0},"ESPUMA DE GENGIBRE":{cat:"MIXING ARTESANAL",est:7,salao:1},"ESPUMA DE JABUTICABA":{cat:"MIXING ARTESANAL",est:0,salao:0},"ESPUMA DE MACA":{cat:"MIXING ARTESANAL",est:0,salao:0},"ESPUMA DE SICILIANO":{cat:"MIXING ARTESANAL",est:3,salao:1},"ESPUMA DE TANGERINA":{cat:"MIXING ARTESANAL",est:2,salao:0},"GINGER ALE":{cat:"MIXING ARTESANAL",est:24,salao:1},"SODA DE GRAPEFRUIT":{cat:"MIXING ARTESANAL",est:22,salao:1},"XAROPE DE ACUCAR":{cat:"PRODUCAO",est:3,salao:0},"SUCO DE LIMAO":{cat:"PRODUCAO",est:1,salao:0},"PURE DE FRUTAS VERMELHAS":{cat:"PRODUCAO",est:16,salao:1},"MARACUJA PROD":{cat:"PRODUCAO",est:1,salao:1},"CANECA DE COBRE":{cat:"COPOS/TAÇAS",est:283,salao:9},"COPO BAIXO ELYSIA":{cat:"COPOS/TAÇAS",est:143,salao:4},"COPO BAIXO LISO (ENVY)":{cat:"COPOS/TAÇAS",est:195,salao:5},"COPO BAIXO REVEL":{cat:"COPOS/TAÇAS",est:28,salao:2},"COPO BAIXO TIMELEES":{cat:"COPOS/TAÇAS",est:278,salao:6},"COPO BAIXO XTRA":{cat:"COPOS/TAÇAS",est:342,salao:8},"COPO LONG ELYSIA":{cat:"COPOS/TAÇAS",est:89,salao:5},"COPO BAIXO PORCELANA":{cat:"COPOS/TAÇAS",est:96,salao:5},"COPO LONG REVEL":{cat:"COPOS/TAÇAS",est:62,salao:20},"COPO LONG LISO MODELO NOVO":{cat:"COPOS/TAÇAS",est:216,salao:0},"COPO LONG LISO MODELO VELHO":{cat:"COPOS/TAÇAS",est:95,salao:5},"COPO BOODY MARY":{cat:"COPOS/TAÇAS",est:96,salao:6},"COPO LONG XTRA":{cat:"COPOS/TAÇAS",est:285,salao:13},"TAÇA CALISE AMERICA (RECEPTIVO)":{cat:"COPOS/TAÇAS",est:106,salao:6},"TAÇA COUPE AMERICA":{cat:"COPOS/TAÇAS",est:75,salao:1},"TAÇA COUPE TIMELEES":{cat:"COPOS/TAÇAS",est:195,salao:12},"TAÇA DE VINHO BRUNELLO":{cat:"COPOS/TAÇAS",est:450,salao:5},"TAÇA DE VINHO BRUNELLO (LILLET)":{cat:"COPOS/TAÇAS",est:100,salao:21},"TAÇA DE VINHO XTRA":{cat:"COPOS/TAÇAS",est:415,salao:15},"TAÇA ESPUMANTE XTRA":{cat:"COPOS/TAÇAS",est:39,salao:6},"TAÇA HURACANE":{cat:"COPOS/TAÇAS",est:0,salao:2},"TAÇA MARTINI":{cat:"COPOS/TAÇAS",est:30,salao:0},"TAÇA BOEMIA":{cat:"COPOS/TAÇAS",est:57,salao:0},"TAÇA MARTINI GRANDE":{cat:"COPOS/TAÇAS",est:0,salao:0}};

const SNAP={'mar':{label:'30/03/2025',labelFull:'30/03/2025 — Março',data:MAR},'abr':{label:'28/04/2025',labelFull:'28/04/2025 — Abril',data:ABR}};
const nomes=Object.keys(MAR);
const cats=[...new Set(nomes.map(n=>MAR[n].cat))].sort();

const QUEBRAS_EVENTO_PRELOAD=[{"id":"QE001","evento":"Casamento Ana Clara e Stian","data":"2026-04-04","local":"Palacio","total":930.0,"itens":[{"prod":"COPO BAIXO ELYSIA","qtd":3,"custo":30.0,"total":90.0},{"prod":"COPO BAIXO TIMELEES","qtd":19,"custo":30.0,"total":570.0},{"prod":"COPO LONG XTRA","qtd":2,"custo":35.0,"total":70.0},{"prod":"TAÇA DE VINHO XTRA","qtd":6,"custo":45.0,"total":270.0}]},{"id":"QE002","evento":"Bodas Renata e Claudio","data":"2026-04-04","local":"Espaço By Bia","total":90.0,"itens":[{"prod":"COPO BAIXO XTRA","qtd":2,"custo":45.0,"total":90.0}]},{"id":"QE003","evento":"Aniversário 15 anos - Chris Kalab","data":"2026-04-10","local":"Contemporâneo","total":390.0,"itens":[{"prod":"TAÇA COUPE TIMELEES","qtd":1,"custo":40.0,"total":40.0},{"prod":"CANECA DE COBRE","qtd":1,"custo":55.0,"total":55.0},{"prod":"TAÇA DE VINHO BRUNELLO","qtd":5,"custo":35.0,"total":175.0},{"prod":"COPO LONG XTRA","qtd":2,"custo":40.0,"total":80.0},{"prod":"COPO BAIXO ELYSIA","qtd":1,"custo":40.0,"total":40.0}]},{"id":"QE004","evento":"Aniversário 50 Anos - Lecult Cerimonial","data":"2026-04-11","local":"Nova Lima","total":0.0,"itens":[]},{"id":"QE005","evento":"Aniversário 23 Anos - Eduardo Guimaraes","data":"2026-04-11","local":"Serra dos Manacás","total":190.0,"itens":[{"prod":"CANECA DE COBRE","qtd":2,"custo":55.0,"total":110.0},{"prod":"COPO LONG LISO MODELO NOVO","qtd":2,"custo":40.0,"total":80.0}]},{"id":"QE006","evento":"Aniversário 11 Anos - Ana Laura","data":"2026-04-11","local":"Extremo Park","total":0.0,"itens":[]},{"id":"QE007","evento":"Casamento - Formato Cerimonial","data":"2026-04-11","local":"São Bento","total":960.0,"itens":[{"prod":"COPO LONG LISO MODELO NOVO","qtd":5,"custo":40.0,"total":200.0},{"prod":"TAÇA CALISE AMERICA (RECEPTIVO)","qtd":1,"custo":40.0,"total":40.0},{"prod":"TAÇA DE VINHO XTRA","qtd":10,"custo":40.0,"total":400.0},{"prod":"COPO BAIXO ELYSIA","qtd":3,"custo":40.0,"total":120.0},{"prod":"COPO BAIXO XTRA","qtd":3,"custo":40.0,"total":120.0}]},{"id":"QE008","evento":"Casamento Ana e Bruno","data":"2026-04-18","local":"Espaço Mariângela","total":1105.0,"itens":[{"prod":"TAÇA DE VINHO XTRA","qtd":10,"custo":50.0,"total":500.0},{"prod":"CANECA DE COBRE","qtd":3,"custo":55.0,"total":165.0},{"prod":"COPO BAIXO XTRA","qtd":4,"custo":40.0,"total":160.0},{"prod":"COPO BAIXO TIMELEES","qtd":5,"custo":40.0,"total":200.0}]},{"id":"QE009","evento":"Casamento Nina e Igor","data":"2026-04-18","local":"Automóvel Clube","total":335.0,"itens":[{"prod":"TAÇA DE VINHO XTRA","qtd":1,"custo":40.0,"total":40.0},{"prod":"CANECA DE COBRE","qtd":1,"custo":55.0,"total":55.0},{"prod":"COPO BAIXO ELYSIA","qtd":3,"custo":40.0,"total":120.0},{"prod":"COPO LONG ELYSIA","qtd":3,"custo":40.0,"total":120.0}]},{"id":"QE010","evento":"Aniversário 40 Anos - Fabi Lopes","data":"2026-04-18","local":"Vila Da Serra","total":0.0,"itens":[]}];
const QUEBRAS_PRELOAD=[{"prod":"COPO BAIXO ELYSIA","data":"2026-04-04","qtd":3,"motivo":"Quebra/Avaria","custo":30.0,"obs":"Casamento Ana Clara e Stian — Palacio"},{"prod":"COPO BAIXO TIMELEES","data":"2026-04-04","qtd":19,"motivo":"Quebra/Avaria","custo":30.0,"obs":"Casamento Ana Clara e Stian — Palacio"},{"prod":"COPO LONG XTRA","data":"2026-04-04","qtd":2,"motivo":"Quebra/Avaria","custo":35.0,"obs":"Casamento Ana Clara e Stian — Palacio"},{"prod":"TAÇA DE VINHO XTRA","data":"2026-04-04","qtd":6,"motivo":"Quebra/Avaria","custo":45.0,"obs":"Casamento Ana Clara e Stian — Palacio"},{"prod":"COPO BAIXO XTRA","data":"2026-04-04","qtd":2,"motivo":"Quebra/Avaria","custo":45.0,"obs":"Bodas Renata e Claudio — Espaço By Bia"},{"prod":"TAÇA COUPE TIMELEES","data":"2026-04-10","qtd":1,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Aniversário 15 anos - Chris Kalab — Contemporâneo"},{"prod":"CANECA DE COBRE","data":"2026-04-10","qtd":1,"motivo":"Quebra/Avaria","custo":55.0,"obs":"Aniversário 15 anos - Chris Kalab — Contemporâneo"},{"prod":"TAÇA DE VINHO BRUNELLO","data":"2026-04-10","qtd":5,"motivo":"Quebra/Avaria","custo":35.0,"obs":"Aniversário 15 anos - Chris Kalab — Contemporâneo"},{"prod":"COPO LONG XTRA","data":"2026-04-10","qtd":2,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Aniversário 15 anos - Chris Kalab — Contemporâneo"},{"prod":"COPO BAIXO ELYSIA","data":"2026-04-10","qtd":1,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Aniversário 15 anos - Chris Kalab — Contemporâneo"},{"prod":"CANECA DE COBRE","data":"2026-04-11","qtd":2,"motivo":"Quebra/Avaria","custo":55.0,"obs":"Aniversário 23 Anos - Eduardo Guimaraes — Serra dos Manacás"},{"prod":"COPO LONG LISO MODELO NOVO","data":"2026-04-11","qtd":2,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Aniversário 23 Anos - Eduardo Guimaraes — Serra dos Manacás"},{"prod":"COPO LONG LISO MODELO NOVO","data":"2026-04-11","qtd":5,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento - Formato Cerimonial — São Bento"},{"prod":"TAÇA CALISE AMERICA (RECEPTIVO)","data":"2026-04-11","qtd":1,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento - Formato Cerimonial — São Bento"},{"prod":"TAÇA DE VINHO XTRA","data":"2026-04-11","qtd":10,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento - Formato Cerimonial — São Bento"},{"prod":"COPO BAIXO ELYSIA","data":"2026-04-11","qtd":3,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento - Formato Cerimonial — São Bento"},{"prod":"COPO BAIXO XTRA","data":"2026-04-11","qtd":3,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento - Formato Cerimonial — São Bento"},{"prod":"TAÇA DE VINHO XTRA","data":"2026-04-18","qtd":10,"motivo":"Quebra/Avaria","custo":50.0,"obs":"Casamento Ana e Bruno — Espaço Mariângela"},{"prod":"CANECA DE COBRE","data":"2026-04-18","qtd":3,"motivo":"Quebra/Avaria","custo":55.0,"obs":"Casamento Ana e Bruno — Espaço Mariângela"},{"prod":"COPO BAIXO XTRA","data":"2026-04-18","qtd":4,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento Ana e Bruno — Espaço Mariângela"},{"prod":"COPO BAIXO TIMELEES","data":"2026-04-18","qtd":5,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento Ana e Bruno — Espaço Mariângela"},{"prod":"TAÇA DE VINHO XTRA","data":"2026-04-18","qtd":1,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento Nina e Igor — Automóvel Clube"},{"prod":"CANECA DE COBRE","data":"2026-04-18","qtd":1,"motivo":"Quebra/Avaria","custo":55.0,"obs":"Casamento Nina e Igor — Automóvel Clube"},{"prod":"COPO BAIXO ELYSIA","data":"2026-04-18","qtd":3,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento Nina e Igor — Automóvel Clube"},{"prod":"COPO LONG ELYSIA","data":"2026-04-18","qtd":3,"motivo":"Quebra/Avaria","custo":40.0,"obs":"Casamento Nina e Igor — Automóvel Clube"}];
const FESTAS_PRELOAD=[{"id":"F001","nome":"Casamento Ana Clara e Stian","data":"2026-04-04","local":"Palacio","resp":"","status":"encerrada","valor_total_evento":7800.9,"itens":[{"prod":"MANZA","qtd":12,"consumido":12,"retornado":0,"valor":216.0},{"prod":"VODKA ABSOLUT","qtd":2,"consumido":2,"retornado":0,"valor":171.8},{"prod":"GIN TANQUERAY","qtd":8,"consumido":8,"retornado":0,"valor":1000.0},{"prod":"APEROL","qtd":7,"consumido":7,"retornado":0,"valor":398.3},{"prod":"CAMPARI","qtd":1,"consumido":1,"retornado":0,"valor":60.0},{"prod":"CARPANO ROSSO","qtd":1,"consumido":1,"retornado":0,"valor":140.0},{"prod":"TEQUILA 1800 CRISTALINO","qtd":7,"consumido":7,"retornado":0,"valor":3010.0},{"prod":"LICOR 43","qtd":5,"consumido":5,"retornado":0,"valor":850.0},{"prod":"FIREBALL","qtd":2,"consumido":2,"retornado":0,"valor":219.8},{"prod":"BANANINHA","qtd":2,"consumido":2,"retornado":0,"valor":180.0},{"prod":"FERNET","qtd":2,"consumido":2,"retornado":0,"valor":360.0},{"prod":"CACHACA SPIRAL","qtd":3,"consumido":3,"retornado":0,"valor":195.0}]},{"id":"F002","nome":"Bodas Renata e Claudio","data":"2026-04-04","local":"Espaço By Bia","resp":"","status":"encerrada","valor_total_evento":0,"itens":[]},{"id":"F003","nome":"Casamento Ana e Bruno","data":"2026-04-18","local":"Espaço Mariângela","resp":"","status":"encerrada","valor_total_evento":7331.4,"itens":[{"prod":"APEROL","qtd":12,"consumido":12,"retornado":0,"valor":660.0},{"prod":"VODKA ABSOLUT","qtd":5,"consumido":5,"retornado":0,"valor":429.5},{"prod":"JAMESON","qtd":12,"consumido":12,"retornado":0,"valor":1188.0},{"prod":"GIN BEEFEATER","qtd":9,"consumido":9,"retornado":0,"valor":809.1},{"prod":"CAMPARI","qtd":2,"consumido":2,"retornado":0,"valor":130.0},{"prod":"CINZANO","qtd":2,"consumido":2,"retornado":0,"valor":110.0},{"prod":"FIREBALL","qtd":2,"consumido":2,"retornado":0,"valor":179.8}]},{"id":"F004","nome":"Aniversário 40 Anos - Fabi Lopes","data":"2026-04-18","local":"Vila Da Serra","resp":"","status":"encerrada","valor_total_evento":590.0,"itens":[{"prod":"ESPUMA DE GENGIBRE","qtd":1,"consumido":1,"retornado":0,"valor":75.0},{"prod":"ESPUMA DE SICILIANO","qtd":1,"consumido":1,"retornado":0,"valor":75.0},{"prod":"GINGER ALE","qtd":4,"consumido":4,"retornado":0,"valor":140.0},{"prod":"SODA DE GRAPEFRUIT","qtd":4,"consumido":4,"retornado":0,"valor":140.0}]},{"id":"F005","nome":"Casamento Nina e Igor","data":"2026-04-18","local":"Automóvel Clube","resp":"","status":"encerrada","valor_total_evento":3735.0,"itens":[]},{"id":"F006","nome":"Aniversário 50 Anos - Lecult Cerimonial","data":"2026-04-11","local":"Nova Lima","resp":"","status":"encerrada","valor_total_evento":9485.0,"itens":[]},{"id":"F007","nome":"Aniversário 23 Anos - Eduardo Guimaraes","data":"2026-04-11","local":"Serra dos Manacás","resp":"","status":"encerrada","valor_total_evento":0,"itens":[]},{"id":"F008","nome":"Aniversário 15 anos - Chris Kalab","data":"2026-04-10","local":"Contemporâneo","resp":"","status":"encerrada","valor_total_evento":0,"itens":[]},{"id":"F009","nome":"Casamento - Formato Cerimonial","data":"2026-04-11","local":"São Bento","resp":"","status":"encerrada","valor_total_evento":6682.88,"itens":[]},{"id":"F010","nome":"Aniversário 11 Anos - Ana Laura","data":"2026-04-11","local":"Extremo Park","resp":"","status":"encerrada","valor_total_evento":0.0,"itens":[]}];

// ─── DADOS DINÂMICOS (Firebase preenche isso) ─────────────────────────────────
const D={
  fornecedores:[],
  entradas:[],
  quebras:[],
  festas:[],
  contagens:[],   // ← NOVO: histórico de contagens semanais
  precos:{}       // ← NOVO: preços de custo e revenda por produto
};

function sv(k){if(window.svFirebase)window.svFirebase(k);}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function fN(n){return Number(n||0).toLocaleString('pt-BR')}
function fR(n){return n?'R$ '+Number(n).toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}
function td(){return new Date().toISOString().slice(0,10)}
function fd(d){return d?d.split('-').reverse().join('/'):'—'}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function rFechamento(){
  const allF=[...D.festas,...FESTAS_PRELOAD.filter(p=>!D.festas.find(f=>f.id===p.id))];
  const uso={};
  nomes.forEach(n=>uso[n]=0);
  allF.filter(f=>f.status==='encerrada').forEach(f=>{
    f.itens.forEach(i=>{if(uso[i.prod]!==undefined)uso[i.prod]+=(i.consumido||i.qtd||0);});
  });
  D.quebras.forEach(q=>{if(uso[q.prod]!==undefined)uso[q.prod]+=q.qtd;});

  const prodComMovimento=Object.keys(uso).filter(n=>uso[n]>0);
  const prodParado=nomes.filter(n=>{const m=MAR[n];return uso[n]===0&&(m.est+m.salao)>0&&m.cat!=='COPOS/TAÇAS';});
  const totalFat=allF.reduce((a,f)=>a+(f.valor_total_evento||f.itens.reduce((s,i)=>s+Number(i.valor||0),0)),0);
  const totalQbrVal=QUEBRAS_EVENTO_PRELOAD.reduce((a,ev)=>a+ev.total,0)+D.quebras.filter(q=>!QUEBRAS_PRELOAD.find(p=>p.prod===q.prod&&p.data===q.data&&p.qtd===q.qtd)).reduce((a,q)=>a+q.qtd*Number(q.custo||0),0);

  // Valor total do estoque com base na última contagem e preços cadastrados
  const ultimaContagem=D.contagens.length?D.contagens[D.contagens.length-1]:null;
  let valorEstoque=0, valorRevenda=0;
  if(ultimaContagem){
    ultimaContagem.itens.forEach(item=>{
      const preco=D.precos[item.prod]||{};
      const tot=(item.est||0)+(item.salao||0);
      valorEstoque+=tot*(preco.custo||0);
      valorRevenda+=tot*(preco.revenda||0);
    });
  }

  document.getElementById('dash-cards').innerHTML=`
    <div class="card blue"><div class="card-label">Produtos em movimento</div><div class="card-value">${prodComMovimento.length}</div><div class="card-sub">de ${nomes.length} no inventário</div></div>
    <div class="card red"><div class="card-label">Produtos parados</div><div class="card-value">${prodParado.length}</div><div class="card-sub">sem nenhuma saída</div></div>
    <div class="card green"><div class="card-label">Faturamento eventos</div><div class="card-value">R$ ${totalFat.toLocaleString('pt-BR',{minimumFractionDigits:0})}</div><div class="card-sub">${allF.length} eventos</div></div>
    <div class="card amber"><div class="card-label">Custo de quebras</div><div class="card-value">R$ ${totalQbrVal.toLocaleString('pt-BR',{minimumFractionDigits:0})}</div></div>
    ${valorEstoque>0?`<div class="card purple"><div class="card-label">💰 Valor em estoque</div><div class="card-value">R$ ${valorEstoque.toLocaleString('pt-BR',{minimumFractionDigits:0})}</div><div class="card-sub">${valorRevenda>0?'Revenda: R$ '+valorRevenda.toLocaleString('pt-BR',{minimumFractionDigits:0}):''}</div></div>`:''}
  `;

  // Top 10
  const top10=Object.entries(uso).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]).slice(0,10);
  const maxUso=top10[0]?.[1]||1;
  document.getElementById('dash-top10').innerHTML=top10.map(([nome,qtd])=>{
    const pct=Math.round((qtd/maxUso)*100);
    const cat=MAR[nome]?.cat||'';
    const isCopo=cat==='COPOS/TAÇAS';
    return`<div style="padding:6px 14px;border-bottom:1px solid var(--border)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:11px;font-weight:500;color:var(--text)">${nome}</span>
        <span style="font-family:var(--mono);font-size:11px;font-weight:600;color:${isCopo?'var(--red)':'var(--blue)'}">${fN(qtd)} un</span>
      </div>
      <div style="height:6px;background:var(--border);border-radius:3px">
        <div style="height:6px;width:${pct}%;background:${isCopo?'var(--red)':'var(--blue)'};border-radius:3px;transition:width .3s"></div>
      </div>
      <div style="font-size:9px;color:var(--text3);margin-top:2px">${cat}</div>
    </div>`;
  }).join('')||'<div style="padding:14px;font-size:12px;color:var(--text3)">Nenhum movimento registrado</div>';

  // Consumo por categoria
  const porcatF={};
  nomes.forEach(n=>{if(uso[n]>0){const cat=MAR[n]?.cat||'Outros';porcatF[cat]=(porcatF[cat]||0)+uso[n];}});
  const catSort=Object.entries(porcatF).sort((a,b)=>b[1]-a[1]);
  const maxCat=catSort[0]?.[1]||1;
  const totalCat=catSort.reduce((a,[,v])=>a+v,0);
  const catColors=['var(--blue)','var(--green)','var(--amber)','var(--red)','#8b5cf6','#06b6d4','#f97316','#84cc16','#ec4899','#14b8a6'];
  document.getElementById('dash-cat-chart').innerHTML=catSort.map(([cat,qtd],i)=>{
    const pct=Math.round((qtd/maxCat)*100);
    const pctTotal=totalCat>0?((qtd/totalCat)*100).toFixed(0):0;
    return`<div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;margin-bottom:3px">
        <span style="font-size:11px;color:var(--text2)">${cat}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--text3)">${fN(qtd)} un (${pctTotal}%)</span>
      </div>
      <div style="height:8px;background:var(--border);border-radius:4px">
        <div style="height:8px;width:${pct}%;background:${catColors[i%catColors.length]};border-radius:4px"></div>
      </div>
    </div>`;
  }).join('')||'<div style="font-size:12px;color:var(--text3)">Nenhum dado</div>';

  // Estoque parado
  document.getElementById('dash-parado').innerHTML=prodParado.length
    ?prodParado.sort((a,b)=>(MAR[b].est+MAR[b].salao)-(MAR[a].est+MAR[a].salao)).map(n=>{
        const tot=MAR[n].est+MAR[n].salao;
        return`<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 14px;border-bottom:1px solid var(--border)">
          <div><div style="font-size:11px;font-weight:500;color:var(--text)">${n}</div><div style="font-size:9px;color:var(--text3)">${MAR[n].cat}</div></div>
          <span style="font-family:var(--mono);font-size:11px;font-weight:600;color:var(--amber)">${fN(tot)} un</span>
        </div>`;
      }).join('')
    :'<div style="padding:14px;font-size:12px;color:var(--text3)">Nenhum produto parado 🎉</div>';

  // Quebras por evento
  const qbrEvt=QUEBRAS_EVENTO_PRELOAD.filter(ev=>ev.total>0).sort((a,b)=>b.total-a.total);
  const maxQbr=qbrEvt[0]?.total||1;
  document.getElementById('dash-qbr-chart').innerHTML=qbrEvt.map(ev=>{
    const pct=Math.round((ev.total/maxQbr)*100);
    const nomeEvt=ev.evento.length>35?ev.evento.slice(0,33)+'…':ev.evento;
    return`<div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;margin-bottom:3px">
        <span style="font-size:11px;color:var(--text2)">${nomeEvt}</span>
        <span style="font-family:var(--mono);font-size:11px;font-weight:600;color:var(--red)">R$ ${ev.total.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span>
      </div>
      <div style="height:8px;background:var(--border);border-radius:4px">
        <div style="height:8px;width:${pct}%;background:var(--red);border-radius:4px;opacity:${0.5+0.5*(ev.total/maxQbr)}"></div>
      </div>
      <div style="font-size:9px;color:var(--text3);margin-top:2px">${fd(ev.data)} · ${ev.itens.length} peça${ev.itens.length!==1?'s':''}</div>
    </div>`;
  }).join('')||'<div style="font-size:12px;color:var(--text3)">Nenhuma quebra registrada</div>';
}

// ─── ESTOQUES HISTÓRICOS (MAR / ABR) ──────────────────────────────────────────
function rEst(mes){
  const src=mes==='mar'?MAR:ABR;
  const b=(document.getElementById(mes==='mar'?'mbusca':'abusca').value||'').toLowerCase();
  const cat=document.getElementById(mes==='mar'?'mcat':'abcat').value;
  document.getElementById('tab-'+mes).innerHTML=Object.entries(src)
    .filter(([n,v])=>(!b||n.toLowerCase().includes(b))&&(!cat||v.cat===cat))
    .map(([n,v])=>`<tr>
      <td class="bold">${n}</td>
      <td><span class="badge b-blue" style="font-size:9px">${v.cat}</span></td>
      <td>${fN(v.est)}</td><td>${fN(v.salao)}</td>
      <td class="bold">${fN(v.est+v.salao)}</td>
    </tr>`).join('');
}

// ─── CONTAGENS SEMANAIS ───────────────────────────────────────────────────────
let contView='historico';
function setContView(v){
  contView=v;
  ['historico','nova','comparar'].forEach(x=>{
    const btn=document.getElementById('cv-'+x);
    if(btn)btn.classList.toggle('active',x===v);
    const view=document.getElementById('cview-'+x);
    if(view)view.style.display=x===v?'block':'none';
  });
  if(v==='historico')rContagens();
  if(v==='comparar')rCompararContagens();
}

// Itens da nova contagem em andamento
let contItens={};

function iniciarNovaContagem(){
  // Pré-preenche com zeros para todos os produtos
  contItens={};
  nomes.forEach(n=>contItens[n]={est:0,salao:0});
  rNovaContagem();
}

function rNovaContagem(){
  const busca=(document.getElementById('nova-cont-busca')?.value||'').toLowerCase();
  const catFiltro=document.getElementById('nova-cont-cat')?.value||'';
  const container=document.getElementById('nova-cont-body');
  if(!container)return;

  const prodsFiltrados=nomes.filter(n=>{
    if(busca&&!n.toLowerCase().includes(busca))return false;
    if(catFiltro&&MAR[n].cat!==catFiltro)return false;
    return true;
  });

  container.innerHTML=`
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:0;background:var(--bg3);border-bottom:1px solid var(--border)">
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Produto</div>
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Categoria</div>
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;text-align:center">Depósito</div>
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;text-align:center">Salão</div>
    </div>`+
  prodsFiltrados.map(n=>`
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:0;border-bottom:1px solid var(--border);align-items:center">
      <div style="padding:8px 14px;font-size:12px;font-weight:500;color:var(--text)">${n}</div>
      <div style="padding:8px 14px"><span class="badge b-blue" style="font-size:9px">${MAR[n].cat}</span></div>
      <div style="padding:6px 10px;text-align:center">
        <input type="number" min="0" step="0.5"
          value="${contItens[n]?.est||0}"
          onchange="contItens['${n.replace(/'/g,"\\'")}'].est=Number(this.value)"
          style="width:70px;text-align:center;font-size:12px;padding:4px 6px;background:var(--bg3);border:1px solid var(--border2);color:var(--text);border-radius:var(--radius)">
      </div>
      <div style="padding:6px 10px;text-align:center">
        <input type="number" min="0" step="0.5"
          value="${contItens[n]?.salao||0}"
          onchange="contItens['${n.replace(/'/g,"\\'")}'].salao=Number(this.value)"
          style="width:70px;text-align:center;font-size:12px;padding:4px 6px;background:var(--bg3);border:1px solid var(--border2);color:var(--text);border-radius:var(--radius)">
      </div>
    </div>`).join('');
}

function salvarContagem(){
  const data=document.getElementById('cont-data')?.value;
  const label=document.getElementById('cont-label')?.value?.trim()||'Contagem '+fd(data);
  if(!data){alert2('Informe a data da contagem','error');return;}
  const itens=nomes.map(n=>({prod:n,est:contItens[n]?.est||0,salao:contItens[n]?.salao||0}));
  const novaContagem={id:'C'+Date.now(),data,label,itens};
  D.contagens.push(novaContagem);
  sv('contagens');
  alert2('Contagem salva com sucesso!');
  setContView('historico');
}

function rContagens(){
  const container=document.getElementById('cont-historico-body');
  if(!container)return;
  if(!D.contagens.length){
    container.innerHTML='<div style="padding:20px;font-size:12px;color:var(--text3);text-align:center">Nenhuma contagem lançada ainda.<br>Clique em "+ Nova Contagem" para começar.</div>';
    return;
  }
  const sorted=[...D.contagens].sort((a,b)=>b.data.localeCompare(a.data));
  container.innerHTML=sorted.map(c=>{
    const totalItens=c.itens.reduce((a,i)=>a+i.est+i.salao,0);
    // Calcular valor com base nos preços cadastrados
    let valorTotal=0;
    c.itens.forEach(i=>{
      const preco=D.precos[i.prod]||{};
      valorTotal+=(i.est+i.salao)*(preco.custo||0);
    });
    return`<div class="festa-card enc" style="margin:8px 16px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:14px;font-weight:600;color:var(--text)">${c.label}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">${fd(c.data)} · ${fN(totalItens)} unidades totais</div>
        </div>
        <div style="text-align:right">
          ${valorTotal>0?`<div style="font-size:14px;font-weight:600;font-family:var(--mono);color:var(--green)">R$ ${valorTotal.toLocaleString('pt-BR',{minimumFractionDigits:2})}</div><div style="font-size:10px;color:var(--text3)">valor em custo</div>`:'<div style="font-size:11px;color:var(--text3)">Sem preços cadastrados</div>'}
        </div>
      </div>
    </div>`;
  }).join('');
}

function rCompararContagens(){
  const container=document.getElementById('cont-comparar-body');
  if(!container)return;
  if(D.contagens.length<2){
    container.innerHTML='<div style="padding:20px;font-size:12px;color:var(--text3);text-align:center">Você precisa de pelo menos 2 contagens para comparar.</div>';
    return;
  }
  const sorted=[...D.contagens].sort((a,b)=>b.data.localeCompare(a.data));
  const atual=sorted[0];
  const anterior=sorted[1];

  // Monta select de contagens para o usuário escolher quais comparar
  const selectA=document.getElementById('comp-cont-a');
  const selectB=document.getElementById('comp-cont-b');
  if(selectA&&!selectA.dataset.populated){
    const opts=sorted.map(c=>`<option value="${c.id}">${c.label} (${fd(c.data)})</option>`).join('');
    selectA.innerHTML=opts;
    selectB.innerHTML=opts;
    if(sorted.length>=2)selectB.value=sorted[1].id;
    selectA.dataset.populated='1';
  }

  const idA=selectA?.value||atual.id;
  const idB=selectB?.value||anterior.id;
  const cA=D.contagens.find(c=>c.id===idA)||atual;
  const cB=D.contagens.find(c=>c.id===idB)||anterior;

  // Indexa itens por produto
  const mapA={},mapB={};
  cA.itens.forEach(i=>mapA[i.prod]={est:i.est,salao:i.salao});
  cB.itens.forEach(i=>mapB[i.prod]={est:i.est,salao:i.salao});

  const busca=(document.getElementById('comp-cont-busca')?.value||'').toLowerCase();
  const rows=nomes.filter(n=>!busca||n.toLowerCase().includes(busca)).map(n=>{
    const a=mapA[n]||{est:0,salao:0};
    const b=mapB[n]||{est:0,salao:0};
    const totA=a.est+a.salao;
    const totB=b.est+b.salao;
    const diff=totA-totB;
    return{nome:n,cat:MAR[n].cat,totA,totB,diff,estA:a.est,salaoA:a.salao,estB:b.est,salaoB:b.salao};
  });

  const totalDiff=rows.reduce((a,r)=>a+r.diff,0);
  const comDiff=rows.filter(r=>r.diff!==0).length;

  container.innerHTML=`
    <div class="cards" style="margin-bottom:14px">
      <div class="card blue"><div class="card-label">Produtos comparados</div><div class="card-value">${rows.length}</div></div>
      <div class="card ${totalDiff>0?'green':totalDiff<0?'red':'amber'}"><div class="card-label">Variação total</div><div class="card-value">${totalDiff>0?'+':''}${fN(totalDiff)} un</div><div class="card-sub">${comDiff} produto(s) com diferença</div></div>
    </div>
    <div class="sec">
      <div class="sec-head">
        <span class="sec-title">Comparativo: ${cA.label} vs ${cB.label}</span>
        <input type="text" id="comp-cont-busca" placeholder="Buscar..." oninput="rCompararContagens()" style="width:160px;font-size:11px;padding:5px 9px;border:1px solid var(--border2);background:var(--bg3);color:var(--text);border-radius:var(--radius)">
      </div>
      <table>
        <thead><tr>
          <th>Produto</th><th>Cat.</th>
          <th style="text-align:right">${cA.label}</th>
          <th style="text-align:right">${cB.label}</th>
          <th style="text-align:right">Diferença</th>
        </tr></thead>
        <tbody>
          ${rows.filter(r=>r.diff!==0||r.totA>0).map(r=>{
            const dc=r.diff===0?'neu':r.diff>0?'up':'dn';
            const dt=r.diff===0?'—':r.diff>0?'▲'+fN(r.diff):'▼'+fN(Math.abs(r.diff));
            return`<tr>
              <td class="bold">${r.nome}</td>
              <td><span class="badge b-blue" style="font-size:9px">${r.cat}</span></td>
              <td style="font-family:var(--mono);text-align:right">${fN(r.totA)}<span style="font-size:9px;color:var(--text3)"> (${fN(r.estA)}+${fN(r.salaoA)})</span></td>
              <td style="font-family:var(--mono);text-align:right">${fN(r.totB)}<span style="font-size:9px;color:var(--text3)"> (${fN(r.estB)}+${fN(r.salaoB)})</span></td>
              <td class="${dc}" style="text-align:right">${dt}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

// ─── PREÇOS (CUSTO E REVENDA) ──────────────────────────────────────────────────
let precosView='lista';
function setPrecosView(v){
  precosView=v;
  ['lista','editar'].forEach(x=>{
    const btn=document.getElementById('pv-'+x);
    if(btn)btn.classList.toggle('active',x===v);
    const view=document.getElementById('pview-'+x);
    if(view)view.style.display=x===v?'block':'none';
  });
  if(v==='lista')rPrecos();
  if(v==='editar')rEditarPrecos();
}

function rPrecos(){
  const container=document.getElementById('precos-lista-body');
  if(!container)return;
  const busca=(document.getElementById('precos-busca')?.value||'').toLowerCase();
  const catF=document.getElementById('precos-cat')?.value||'';

  const rows=nomes.filter(n=>{
    if(busca&&!n.toLowerCase().includes(busca))return false;
    if(catF&&MAR[n].cat!==catF)return false;
    return true;
  });

  const comPreco=rows.filter(n=>D.precos[n]?.custo||D.precos[n]?.revenda).length;

  container.innerHTML=`
    <div style="padding:8px 16px;font-size:11px;color:var(--text3);border-bottom:1px solid var(--border)">
      ${comPreco} de ${rows.length} produto(s) com preço cadastrado
    </div>
    <table>
      <thead><tr><th>Produto</th><th>Categoria</th><th style="text-align:right">Custo unit.</th><th style="text-align:right">Revenda unit.</th><th style="text-align:right">Margem</th></tr></thead>
      <tbody>
        ${rows.map(n=>{
          const p=D.precos[n]||{};
          const margem=p.custo&&p.revenda?((p.revenda-p.custo)/p.revenda*100).toFixed(0):null;
          return`<tr>
            <td class="bold">${n}</td>
            <td><span class="badge b-blue" style="font-size:9px">${MAR[n].cat}</span></td>
            <td style="font-family:var(--mono);text-align:right;color:${p.custo?'var(--text2)':'var(--text3)'}">${p.custo?fR(p.custo):'— a preencher'}</td>
            <td style="font-family:var(--mono);text-align:right;color:${p.revenda?'var(--green)':'var(--text3)'}">${p.revenda?fR(p.revenda):'— a preencher'}</td>
            <td style="font-family:var(--mono);text-align:right;color:${margem?Number(margem)>=30?'var(--green)':'var(--amber)':'var(--text3)'}">${margem?margem+'%':'—'}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>`;
}

function rEditarPrecos(){
  const container=document.getElementById('precos-editar-body');
  if(!container)return;
  const busca=(document.getElementById('precos-edit-busca')?.value||'').toLowerCase();
  const catF=document.getElementById('precos-edit-cat')?.value||'';

  const rows=nomes.filter(n=>{
    if(busca&&!n.toLowerCase().includes(busca))return false;
    if(catF&&MAR[n].cat!==catF)return false;
    return true;
  });

  container.innerHTML=`
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:0;background:var(--bg3);border-bottom:1px solid var(--border)">
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Produto</div>
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Categoria</div>
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;text-align:center">Custo unit. (R$)</div>
      <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;text-align:center">Revenda unit. (R$)</div>
    </div>`+
  rows.map(n=>{
    const p=D.precos[n]||{};
    return`<div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:0;border-bottom:1px solid var(--border);align-items:center">
      <div style="padding:8px 14px;font-size:12px;font-weight:500;color:var(--text)">${n}</div>
      <div style="padding:8px 14px"><span class="badge b-blue" style="font-size:9px">${MAR[n].cat}</span></div>
      <div style="padding:6px 10px;text-align:center">
        <input type="number" min="0" step="0.01" placeholder="0,00"
          value="${p.custo||''}"
          onchange="if(!D.precos['${n.replace(/'/g,"\\'")}'])D.precos['${n.replace(/'/g,"\\'")}']={};D.precos['${n.replace(/'/g,"\\'")}'].custo=this.value?Number(this.value):null"
          style="width:90px;text-align:center;font-size:12px;padding:4px 6px;background:var(--bg3);border:1px solid var(--border2);color:var(--text);border-radius:var(--radius)">
      </div>
      <div style="padding:6px 10px;text-align:center">
        <input type="number" min="0" step="0.01" placeholder="0,00"
          value="${p.revenda||''}"
          onchange="if(!D.precos['${n.replace(/'/g,"\\'")}'])D.precos['${n.replace(/'/g,"\\'")}']={};D.precos['${n.replace(/'/g,"\\'")}'].revenda=this.value?Number(this.value):null"
          style="width:90px;text-align:center;font-size:12px;padding:4px 6px;background:var(--bg3);border:1px solid var(--border2);color:var(--text);border-radius:var(--radius)">
      </div>
    </div>`;
  }).join('');
}

function salvarPrecos(){
  sv('precos');
  alert2('Preços salvos com sucesso!');
  setPrecosView('lista');
}

// ─── SELECTS ──────────────────────────────────────────────────────────────────
function populateSels(){
  const co=cats.map(c=>`<option>${c}</option>`).join('');
  ['fcat','mcat','abcat','nova-cont-cat','precos-cat','precos-edit-cat'].forEach(id=>{
    const el=document.getElementById(id);
    if(el&&el.options.length<=1)el.innerHTML+=(id.includes('precos')||id.includes('cont')?'<option value="">Todas</option>':'')+co;
  });
  const fornOpts=D.fornecedores.map(f=>`<option value="${f.nome}">${f.nome}</option>`).join('');
  ['eforn'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML='<option value="">Selecione ou deixe em branco</option>'+fornOpts;});
  const po=nomes.map(n=>`<option value="${n}">${n}</option>`).join('');
  ['eprod','qprod','fi-prod'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML='<option value="">Selecione...</option>'+po;});
}

// ─── ENTRADAS ────────────────────────────────────────────────────────────────
let nfEntItens=[];
function addIE(){
  const prod=document.getElementById('eprod').value;
  const qtd=Number(document.getElementById('eqtd').value);
  const custo=document.getElementById('ecusto').value;
  if(!prod||!qtd||qtd<=0){alert2('Selecione produto e informe a quantidade','error');return;}
  const ex=nfEntItens.find(i=>i.prod===prod);
  if(ex){ex.qtd+=qtd;}else{nfEntItens.push({prod,qtd,custo:custo?Number(custo):null});}
  document.getElementById('eqtd').value='';
  document.getElementById('ecusto').value='';
  document.getElementById('eprod').focus();
  rNFEntItens();
}
function rNFEntItens(){
  const c=document.getElementById('nf-ent-itens');
  const ct=document.getElementById('nf-ent-count');
  if(!nfEntItens.length){
    c.innerHTML='<div style="font-size:11px;color:var(--text3);padding:12px 14px">Nenhum produto adicionado</div>';
    if(ct)ct.textContent='';return;
  }
  const totalNF=nfEntItens.reduce((a,i)=>a+(i.custo?i.qtd*i.custo:0),0);
  c.innerHTML=`<div style="display:grid;grid-template-columns:1fr 80px 90px 28px;gap:8px;padding:8px 14px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--bg4);z-index:1">
    <span style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Produto</span>
    <span style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Qtd</span>
    <span style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Custo unit.</span>
    <span></span>
  </div>`+nfEntItens.map((i,idx)=>`
    <div style="display:grid;grid-template-columns:1fr 80px 90px 28px;gap:8px;align-items:center;padding:7px 14px;font-size:12px;border-bottom:1px solid var(--border)">
      <span style="color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i.prod}</span>
      <span style="font-weight:600;font-family:var(--mono);color:var(--green)">${fN(i.qtd)}</span>
      <span style="font-family:var(--mono);color:${i.custo?'var(--text2)':'var(--text3)'}">${i.custo?'R$ '+Number(i.custo).toFixed(2):'—'}</span>
      <span style="cursor:pointer;color:var(--red);font-size:16px;line-height:1;text-align:center" onclick="nfEntItens.splice(${idx},1);rNFEntItens()">×</span>
    </div>`).join('');
  if(ct){
    ct.textContent=nfEntItens.length+' produto'+(nfEntItens.length>1?'s':'')+' · '+(totalNF>0?'Total: R$ '+totalNF.toLocaleString('pt-BR',{minimumFractionDigits:2}):'sem valores');
  }
}
function limparNFEnt(){
  nfEntItens=[];
  ['enf','eobs'].forEach(id=>document.getElementById(id).value='');
  const ef=document.getElementById('eforn');if(ef)ef.value='';
  document.getElementById('edata').value=td();
  rNFEntItens();
}
function regEnt(){
  const nf=document.getElementById('enf').value.trim();
  const data=document.getElementById('edata').value;
  const obs=document.getElementById('eobs').value;
  if(!data){alert2('Informe a data','error');return;}
  if(!nfEntItens.length){alert2('Adicione pelo menos um produto','error');return;}
  const forn=document.getElementById('eforn').value;
  nfEntItens.forEach(i=>{D.entradas.push({prod:i.prod,data,qtd:i.qtd,custo:i.custo||'',nf,forn,obs});});
  sv('entradas');
  alert2(`${nfEntItens.length} produto(s) lançado(s) com sucesso!`);
  limparNFEnt();
  rEntradas();
}
function rEntradas(){
  const groups={};
  D.entradas.forEach((e,idx)=>{
    const key=(e.nf||'SEM NF')+'|'+e.data;
    if(!groups[key])groups[key]={nf:e.nf||'Sem NF',data:e.data,forn:e.forn||'',obs:e.obs,itens:[]};
    groups[key].itens.push({...e,idx});
  });
  const sorted=Object.values(groups).sort((a,b)=>b.data.localeCompare(a.data));
  const totalGeral=D.entradas.reduce((a,e)=>a+(e.custo?Number(e.qtd)*Number(e.custo):0),0);
  const totEl=document.getElementById('tot-ent');
  if(totEl)totEl.textContent=totalGeral>0?'Total: R$ '+totalGeral.toLocaleString('pt-BR',{minimumFractionDigits:2}):'';
  const container=document.getElementById('lista-entradas');
  if(!container)return;
  if(!sorted.length){container.innerHTML='<div style="font-size:12px;color:var(--text3);padding:14px">Nenhuma entrada lançada.</div>';return;}
  container.innerHTML=sorted.map(g=>{
    const totalNF=g.itens.reduce((a,i)=>a+(i.custo?Number(i.qtd)*Number(i.custo):0),0);
    const totalQtd=g.itens.reduce((a,i)=>a+Number(i.qtd),0);
    const itensHtml=g.itens.map(i=>`
      <div style="display:grid;grid-template-columns:1fr 60px 90px 80px;gap:8px;padding:5px 0;border-bottom:1px solid var(--border);font-size:11px;align-items:center">
        <span style="color:var(--text2)">${i.prod}</span>
        <span style="font-family:var(--mono);color:var(--green);font-weight:600">${fN(i.qtd)}</span>
        <span style="font-family:var(--mono);color:var(--text3)">${i.custo?'R$ '+Number(i.custo).toFixed(2):'—'}</span>
        <span style="font-family:var(--mono);font-weight:600;color:${i.custo?'var(--text2)':'var(--text3)'}">${i.custo?'R$ '+(Number(i.qtd)*Number(i.custo)).toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</span>
      </div>`).join('');
    return`<div class="festa-card enc" style="margin:8px 16px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <div>
          <div style="font-size:14px;font-weight:600;color:var(--text)">${g.nf}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">${fd(g.data)}${g.forn?' · '+g.forn:''}${g.obs?' · '+g.obs:''} · ${g.itens.length} produto(s)</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:16px;font-weight:600;font-family:var(--mono);color:var(--green)">${totalNF>0?'R$ '+totalNF.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</div>
          <div style="font-size:10px;color:var(--text3)">${fN(totalQtd)} unidades</div>
        </div>
      </div>
      <details>
        <summary style="font-size:11px;color:var(--text3);cursor:pointer;user-select:none;margin-bottom:6px">Ver produtos ▾</summary>
        <div style="margin-top:6px">
          <div style="display:grid;grid-template-columns:1fr 60px 90px 80px;gap:8px;padding:4px 0;border-bottom:1px solid var(--border);margin-bottom:2px">
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Produto</span>
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Qtd</span>
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Unit.</span>
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Total</span>
          </div>${itensHtml}
        </div>
      </details>
    </div>`;
  }).join('');
}

// ─── QUEBRAS ─────────────────────────────────────────────────────────────────
let qView='evento';
function setQView(v){
  qView=v;
  ['evento','lista','consolidado','nova'].forEach(x=>{
    const btn=document.getElementById('qv-'+x);if(btn)btn.classList.toggle('active',x===v);
    const view=document.getElementById('qview-'+x);if(view)view.style.display=x===v?'block':'none';
  });
  if(v==='evento')rQuebrasEvento();
  if(v==='lista')rQuebrasList();
  if(v==='consolidado')rQuebrasConsolidado();
}
function regQbr(){
  const prod=document.getElementById('qprod').value,qtd=document.getElementById('qqtd').value,data=document.getElementById('qdata').value;
  if(!prod||!qtd||!data){alert2('Preencha os campos','error');return;}
  D.quebras.push({prod,data,qtd:Number(qtd),motivo:document.getElementById('qmot').value,custo:document.getElementById('qcusto').value,obs:document.getElementById('qobs').value});
  sv('quebras');['qqtd','qcusto','qobs'].forEach(id=>document.getElementById(id).value='');
  rQuebrasEvento();alert2('Perda registrada!');setQView('lista');
}
function rQuebras(){rQuebrasEvento();}
function rQuebrasEvento(){
  const container=document.getElementById('lista-quebras-evento');if(!container)return;
  const allCards=[...QUEBRAS_EVENTO_PRELOAD];
  const manual=D.quebras.filter(q=>!QUEBRAS_PRELOAD.find(p=>p.prod===q.prod&&p.data===q.data&&p.qtd===q.qtd));
  const totalGeral=D.quebras.reduce((a,q)=>a+Number(q.qtd)*Number(q.custo||0),0);
  let html=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
    <div style="font-size:11px;color:var(--text3)">${allCards.length} eventos · ${D.quebras.length} itens de quebra</div>
    <div style="font-size:13px;font-weight:600;font-family:var(--mono);color:var(--red)">Total cobrado: R$ ${totalGeral.toLocaleString('pt-BR',{minimumFractionDigits:2})}</div>
  </div>`;
  allCards.sort((a,b)=>a.data.localeCompare(b.data));
  html+=allCards.map(qe=>{
    const totalEvento=qe.itens.reduce((a,i)=>a+i.total,0);
    const totalQtd=qe.itens.reduce((a,i)=>a+i.qtd,0);
    const temItens=qe.itens.length>0;
    const itensHtml=qe.itens.map(i=>`
      <div style="display:grid;grid-template-columns:1fr 50px 70px 80px;gap:8px;padding:5px 0;border-bottom:1px solid var(--border);font-size:11px;align-items:center">
        <span style="color:var(--text2)">${i.prod}</span>
        <span style="font-family:var(--mono);color:var(--text2)">${i.qtd} un</span>
        <span style="font-family:var(--mono);color:var(--text3)">R$ ${Number(i.custo).toFixed(2)}</span>
        <span style="font-family:var(--mono);font-weight:600;color:var(--red)">R$ ${Number(i.total).toFixed(2)}</span>
      </div>`).join('');
    return`<div class="festa-card enc" style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <div>
          <div style="font-size:14px;font-weight:600;color:var(--text)">${qe.evento}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">${fd(qe.data)}${qe.local?' · '+qe.local:''}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:16px;font-weight:600;font-family:var(--mono);color:${temItens?'var(--red)':'var(--text3)'}">${temItens?'R$ '+totalEvento.toLocaleString('pt-BR',{minimumFractionDigits:2}):'Sem quebras'}</div>
          ${temItens?`<div style="font-size:10px;color:var(--text3)">${totalQtd} itens quebrados</div>`:''}
        </div>
      </div>
      ${temItens?`<details><summary style="font-size:11px;color:var(--text3);cursor:pointer;user-select:none;margin-bottom:6px">Ver itens quebrados ▾</summary>
        <div style="margin-top:6px">
          <div style="display:grid;grid-template-columns:1fr 50px 70px 80px;gap:8px;padding:4px 0;border-bottom:1px solid var(--border);margin-bottom:2px">
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Item</span>
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Qtd</span>
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Unit.</span>
            <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Total</span>
          </div>${itensHtml}
        </div>
      </details>`:''}
    </div>`;
  }).join('');
  if(manual.length){
    html+=`<div style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin:16px 0 8px">Quebras avulsas</div>`;
    html+=manual.map(q=>`<div class="festa-card enc" style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between">
        <div><div style="font-weight:600">${q.prod}</div><div style="font-size:11px;color:var(--text3)">${fd(q.data)} · ${q.motivo}${q.obs?' · '+q.obs:''}</div></div>
        <div style="font-family:var(--mono);font-weight:600;color:var(--red)">${q.custo?'R$ '+(q.qtd*Number(q.custo)).toFixed(2):'—'}</div>
      </div>
    </div>`).join('');
  }
  container.innerHTML=html;
}
function rQuebrasList(){
  const tot=D.quebras.reduce((a,q)=>a+Number(q.qtd)*Number(q.custo||0),0);
  const el=document.getElementById('tot-prej');
  if(el)el.textContent=tot>0?'Total cobrado: R$ '+tot.toLocaleString('pt-BR',{minimumFractionDigits:2}):'';
  const mc={'Quebra/Avaria':'b-amber','Vencimento':'b-red','Furto/Desvio':'b-red','Diferença Inventário':'b-blue','Outro':'b-amber'};
  const el2=document.getElementById('tab-qbr');
  if(el2)el2.innerHTML=[...D.quebras].reverse().map(q=>`<tr><td>${fd(q.data)}</td><td class="bold">${q.prod}</td>
    <td><span class="badge ${mc[q.motivo]||'b-amber'}">${q.motivo}</span></td>
    <td>${fN(q.qtd)}</td><td>${q.custo?'R$ '+Number(q.custo).toFixed(2):'—'}</td>
    <td style="color:${q.custo?'var(--red)':'inherit'};font-weight:${q.custo?600:400};font-family:var(--mono)">${q.custo?'R$ '+(q.qtd*Number(q.custo)).toFixed(2):'—'}</td>
    <td style="font-size:10px;color:var(--text3)">${q.obs||'—'}</td></tr>`).join('');
}
function rQuebrasConsolidado(){
  const container=document.getElementById('qview-consolidado');if(!container)return;
  const allQbr=[...D.quebras];
  QUEBRAS_EVENTO_PRELOAD.forEach(ev=>{ev.itens.forEach(item=>{
    const jaExiste=D.quebras.find(q=>q.prod===item.prod&&q.obs&&q.obs.includes(ev.evento));
    if(!jaExiste)allQbr.push({prod:item.prod,qtd:item.qtd,custo:item.custo,data:ev.data,motivo:'Quebra/Avaria',obs:ev.evento+' — '+ev.local});
  });});
  const byProd={};
  allQbr.forEach(q=>{
    if(!byProd[q.prod])byProd[q.prod]={prod:q.prod,totalQtd:0,totalValor:0,eventos:[]};
    byProd[q.prod].totalQtd+=Number(q.qtd);
    byProd[q.prod].totalValor+=Number(q.qtd)*Number(q.custo||0);
    byProd[q.prod].eventos.push({data:q.data,obs:q.obs||'—',qtd:q.qtd,custo:q.custo});
  });
  const produtos=Object.values(byProd).sort((a,b)=>b.totalQtd-a.totalQtd);
  const totalGeral=produtos.reduce((a,p)=>a+p.totalValor,0);
  const totalPecas=produtos.reduce((a,p)=>a+p.totalQtd,0);
  container.innerHTML=`<div style="padding:14px 16px">
    <div class="cards" style="margin-bottom:16px">
      <div class="card red"><div class="card-label">Total de peças quebradas</div><div class="card-value">${fN(totalPecas)}</div><div class="card-sub">${produtos.length} tipos de peça</div></div>
      <div class="card amber"><div class="card-label">Prejuízo total</div><div class="card-value">R$ ${totalGeral.toLocaleString('pt-BR',{minimumFractionDigits:2})}</div><div class="card-sub">custo de reposição</div></div>
    </div>
    <div class="sec">
      <div class="sec-head"><span class="sec-title">Consolidado por peça — todas as quebras do período</span></div>
      <div style="display:grid;grid-template-columns:2fr 80px 100px 100px;gap:0;border-bottom:1px solid var(--border);background:var(--bg3)">
        <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Peça</div>
        <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Qtd total</div>
        <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Custo unit.</div>
        <div style="padding:8px 14px;font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Prejuízo</div>
      </div>
      ${produtos.map(p=>{
        const cuUnit=p.totalQtd>0?(p.totalValor/p.totalQtd).toFixed(2):null;
        const pct=totalGeral>0?((p.totalValor/totalGeral)*100).toFixed(0):0;
        return`<div>
          <div style="display:grid;grid-template-columns:2fr 80px 100px 100px;gap:0;border-bottom:1px solid var(--border);cursor:pointer" onclick="this.parentElement.querySelector('details').open=!this.parentElement.querySelector('details').open">
            <div style="padding:9px 14px;font-size:12px;font-weight:500;color:var(--text)">${p.prod}
              <div style="margin-top:4px;height:3px;width:100%;background:var(--bg3);border-radius:2px"><div style="height:3px;width:${pct}%;background:var(--red);border-radius:2px"></div></div>
            </div>
            <div style="padding:9px 14px;font-family:var(--mono);font-weight:600;color:var(--red)">${fN(p.totalQtd)}</div>
            <div style="padding:9px 14px;font-family:var(--mono);color:var(--text3)">${cuUnit?'R$ '+cuUnit:'—'}</div>
            <div style="padding:9px 14px;font-family:var(--mono);font-weight:600;color:var(--red)">${p.totalValor>0?'R$ '+p.totalValor.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</div>
          </div>
          <details style="border-bottom:1px solid var(--border)"><summary style="display:none"></summary>
            <div style="background:var(--bg3);padding:8px 14px">
              <div style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Ocorrências</div>
              ${p.eventos.map(ev=>`<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border);font-size:11px">
                <span style="color:var(--text2)">${fd(ev.data)} · ${ev.obs}</span>
                <span style="font-family:var(--mono);color:var(--red)">${fN(ev.qtd)} un${ev.custo?' · R$ '+(ev.qtd*Number(ev.custo)).toFixed(2):''}</span>
              </div>`).join('')}
            </div>
          </details>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ─── FESTAS ──────────────────────────────────────────────────────────────────
let nfItens=[];
function addIF(){
  const prod=document.getElementById('fi-prod').value;
  const qtd=Number(document.getElementById('fi-qtd').value);
  const val=document.getElementById('fi-val').value;
  if(!prod||!qtd||qtd<=0){alert2('Selecione produto e informe a quantidade','error');return;}
  const ex=nfItens.find(i=>i.prod===prod);
  if(ex){ex.qtd+=qtd;if(val)ex.valor=(Number(ex.valor||0)+Number(val));}
  else{nfItens.push({prod,qtd,consumido:qtd,valor:val?Number(val):null});}
  document.getElementById('fi-qtd').value='';
  document.getElementById('fi-val').value='';
  document.getElementById('fi-prod').focus();
  rNFItens();
}
function rNFItens(){
  const c=document.getElementById('nf-itens');
  const ct=document.getElementById('nf-count');
  if(!nfItens.length){c.innerHTML='<div style="font-size:11px;color:var(--text3);padding:12px 14px">Nenhum produto adicionado</div>';if(ct)ct.textContent='';return;}
  c.innerHTML=`<div style="display:grid;grid-template-columns:1fr 80px 100px 28px;gap:8px;padding:8px 14px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--bg4);z-index:1">
    <span style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Produto</span>
    <span style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Qtd</span>
    <span style="font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase">Valor</span>
    <span></span>
  </div>`+nfItens.map((i,idx)=>`
    <div style="display:grid;grid-template-columns:1fr 80px 100px 28px;gap:8px;align-items:center;padding:7px 14px;font-size:12px;border-bottom:1px solid var(--border)">
      <span style="color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${i.prod}">${i.prod}</span>
      <span style="font-weight:600;font-family:var(--mono);color:var(--blue)">${fN(i.qtd)}</span>
      <span style="font-family:var(--mono);color:${i.valor?'var(--green)':'var(--text3)'}">${i.valor?'R$ '+Number(i.valor).toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</span>
      <span style="cursor:pointer;color:var(--red);font-size:16px;line-height:1;text-align:center" onclick="nfItens.splice(${idx},1);rNFItens()">×</span>
    </div>`).join('');
  if(ct)ct.textContent=nfItens.length+' produto'+(nfItens.length>1?'s':'')+' adicionado'+(nfItens.length>1?'s':'');
}
function limparNF(){
  nfItens=[];
  ['fnome','flocal','fresp'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const fv=document.getElementById('fvalor');if(fv)fv.value='';
  const fd2=document.getElementById('fdata');if(fd2)fd2.value=td();
  rNFItens();
}
function criarFesta(){
  const nome=document.getElementById('fnome').value.trim();
  const data=document.getElementById('fdata').value;
  if(!nome||!data){alert2('Nome e data são obrigatórios','error');return;}
  const valor=Number(document.getElementById('fvalor')?.value||0);
  D.festas.push({id:'F'+Date.now(),nome,data,local:document.getElementById('flocal').value,resp:document.getElementById('fresp').value,status:'encerrada',valor_total_evento:valor||null,itens:nfItens.map(i=>({prod:i.prod,qtd:i.qtd,consumido:i.qtd,retornado:0,valor:i.valor||null}))});
  sv('festas');nfItens=[];limparNF();alert2('Evento salvo!');setFestaView('geral');
}
function _allFestas(){
  const editedIds=new Set(D.festas.map(f=>f.id));
  return [...D.festas,...FESTAS_PRELOAD.filter(p=>!editedIds.has(p.id))].sort((a,b)=>b.data.localeCompare(a.data));
}
function _qbrPorEvento(){
  const map={};
  QUEBRAS_EVENTO_PRELOAD.forEach(ev=>{
    if(!map[ev.evento])map[ev.evento]={total:0,itens:[],data:ev.data};
    ev.itens.forEach(i=>{map[ev.evento].itens.push(i);map[ev.evento].total+=i.total;});
  });
  return map;
}
function setFestaView(v){
  ['geral','produtos','quebras','novo'].forEach(x=>{
    const btn=document.getElementById('fv-'+x);if(btn)btn.classList.toggle('active',x===v);
    const view=document.getElementById('fview-'+x);if(view)view.style.display=x===v?'block':'none';
  });
  if(v==='geral')rFestas();
  if(v==='produtos')rFestaProdutos();
  if(v==='quebras')rFestaQuebras();
}
function rFestaQuebras(){
  const rows=[];
  QUEBRAS_EVENTO_PRELOAD.forEach(ev=>{ev.itens.forEach(i=>rows.push({evento:ev.evento,data:ev.data,prod:i.prod,qtd:i.qtd,custo:i.custo,total:i.total}));});
  D.quebras.filter(q=>q.obs&&!QUEBRAS_PRELOAD.find(p=>p.prod===q.prod&&p.data===q.data&&p.qtd===q.qtd)).forEach(q=>{rows.push({evento:q.obs,data:q.data,prod:q.prod,qtd:q.qtd,custo:q.custo,total:q.qtd*Number(q.custo||0)});});
  rows.sort((a,b)=>b.data.localeCompare(a.data));
  const totalVal=rows.reduce((a,r)=>a+Number(r.total||0),0);
  document.getElementById('tab-festa-qbr').innerHTML=rows.length
    ?rows.map(r=>`<tr><td style="font-size:11px">${r.evento}</td><td style="font-size:11px;color:var(--text3);white-space:nowrap">${fd(r.data)}</td><td class="bold">${r.prod}</td><td style="font-family:var(--mono);font-weight:600;color:var(--red)">${fN(r.qtd)}</td><td style="font-family:var(--mono);color:var(--text3)">${r.custo?'R$ '+Number(r.custo).toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</td><td style="font-family:var(--mono);font-weight:600;color:var(--red)">${r.total?'R$ '+Number(r.total).toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</td></tr>`).join('')+`<tr style="background:var(--bg4)"><td colspan="5" style="font-size:11px;font-weight:600;text-align:right;padding-right:16px">Total</td><td style="font-family:var(--mono);font-weight:700;color:var(--red)">R$ ${totalVal.toLocaleString('pt-BR',{minimumFractionDigits:2})}</td></tr>`
    :'<tr><td colspan="6" style="text-align:center;color:var(--text3);padding:16px">Nenhuma quebra registrada</td></tr>';
}
function rFestas(){
  const all=_allFestas();
  const qbrMap=_qbrPorEvento();
  const busca=(document.getElementById('festas-busca')?.value||'').toLowerCase();
  const totalValProd=all.reduce((a,f)=>a+(f.valor_total_evento||f.itens.reduce((s,i)=>s+Number(i.valor||0),0)),0);
  const totalValQbr=Object.values(qbrMap).reduce((a,v)=>a+v.total,0);
  document.getElementById('festas-cards').innerHTML=`
    <div class="card green"><div class="card-label">Eventos no período</div><div class="card-value">${all.length}</div></div>
    <div class="card blue"><div class="card-label">🍾 Val. produtos</div><div class="card-value">R$ ${totalValProd.toLocaleString('pt-BR',{minimumFractionDigits:0})}</div></div>
    <div class="card red"><div class="card-label">🥃 Val. quebras</div><div class="card-value">R$ ${totalValQbr.toLocaleString('pt-BR',{minimumFractionDigits:0})}</div></div>
    <div class="card amber"><div class="card-label">💰 Total geral</div><div class="card-value">R$ ${(totalValProd+totalValQbr).toLocaleString('pt-BR',{minimumFractionDigits:0})}</div></div>`;
  const rows=all.filter(f=>!busca||f.nome.toLowerCase().includes(busca)||(f.local&&f.local.toLowerCase().includes(busca)));
  document.getElementById('tab-festas').innerHTML=rows.map(f=>{
    const valProd=f.valor_total_evento||f.itens.reduce((a,i)=>a+Number(i.valor||0),0);
    const qbr=qbrMap[f.nome];const valQbr=qbr?qbr.total:0;const valTotal=valProd+valQbr;const uid='fe-'+f.id;
    const detailHeader=`<div style="display:grid;grid-template-columns:1fr 60px 100px 110px 110px;gap:8px;padding:5px 14px;background:var(--bg4);border-bottom:1px solid var(--border)">
      <span style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase">Item</span>
      <span style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;text-align:right">Qtd</span>
      <span style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;text-align:right">Val. unit.</span>
      <span style="font-size:10px;font-weight:700;color:var(--green);text-transform:uppercase;text-align:right">🍾 Produtos</span>
      <span style="font-size:10px;font-weight:700;color:var(--red);text-transform:uppercase;text-align:right">🥃 Quebras</span>
    </div>`;
    const prodLines=f.itens.map(i=>{const qtd=i.consumido||i.qtd||0;const vt=Number(i.valor||0);const vu=qtd>0&&vt>0?vt/qtd:null;
      return`<div style="display:grid;grid-template-columns:1fr 60px 100px 110px 110px;gap:8px;padding:6px 14px;border-bottom:1px solid var(--border);align-items:center;background:var(--bg3)">
        <span style="font-size:11px;color:var(--text2)">${i.prod}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--blue);text-align:right">${fN(qtd)}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--text3);text-align:right">${vu?'R$ '+vu.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--green);font-weight:600;text-align:right">${vt?'R$ '+vt.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--text3);text-align:right">—</span>
      </div>`;});
    const qbrLines=qbr?qbr.itens.map(i=>{const custo=Number(i.custo||0);const total=Number(i.total||0);
      return`<div style="display:grid;grid-template-columns:1fr 60px 100px 110px 110px;gap:8px;padding:6px 14px;border-bottom:1px solid var(--border);align-items:center;background:var(--bg3)">
        <span style="font-size:11px;color:var(--text2)">${i.prod}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--red);text-align:right">${fN(i.qtd)}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--text3);text-align:right">${custo?'R$ '+custo.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--text3);text-align:right">—</span>
        <span style="font-family:var(--mono);font-size:11px;color:var(--red);font-weight:600;text-align:right">${total?'R$ '+total.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</span>
      </div>`;}):[];
    const emptyLine=!prodLines.length&&!qbrLines.length?`<div style="padding:10px 14px;font-size:11px;color:var(--text3)">Nenhum produto lançado — clique em ✏️ Editar para adicionar</div>`:'';
    const detailContent=detailHeader+(prodLines.join('')||(!qbrLines.length?emptyLine:''))+qbrLines.join('');
    return`<tr style="cursor:pointer" onclick="toggleFesta('${uid}')">
      <td style="width:24px;font-size:12px;color:var(--text3);text-align:center;user-select:none" id="${uid}-arrow">▶</td>
      <td style="font-size:11px;color:var(--text3);white-space:nowrap">${fd(f.data)}</td>
      <td class="bold">${f.nome}${f.local?`<div style="font-size:10px;font-weight:400;color:var(--text3)">${f.local}</div>`:''}</td>
      <td style="font-size:10px;color:var(--text3)">${f.itens.length?f.itens.length+' produto'+(f.itens.length>1?'s':''):'—'}</td>
      <td style="font-family:var(--mono);color:${valProd?'var(--green)':'var(--text3)'};font-weight:${valProd?600:400}">${valProd?'R$ '+valProd.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</td>
      <td style="font-family:var(--mono);color:${valQbr?'var(--red)':'var(--text3)'};font-weight:${valQbr?600:400}">${valQbr?'R$ '+valQbr.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</td>
      <td style="font-family:var(--mono);color:${valTotal?'var(--text)':'var(--text3)'};font-weight:${valTotal?700:400}">${valTotal?'R$ '+valTotal.toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</td>
      <td onclick="event.stopPropagation()"><button class="btn btn-sm" onclick="editarFesta('${f.id}')" style="font-size:10px;white-space:nowrap">✏️ Editar</button></td>
    </tr>
    <tr id="${uid}-detail" style="display:none"><td colspan="8" style="padding:0;border-bottom:2px solid var(--border2)">${detailContent}</td></tr>`;
  }).join('')||'<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:16px">Nenhum evento encontrado</td></tr>';
}
function toggleFesta(uid){
  const detail=document.getElementById(uid+'-detail');const arrow=document.getElementById(uid+'-arrow');if(!detail)return;
  const open=detail.style.display==='none'||detail.style.display==='';
  detail.style.display=open?'table-row':'none';if(arrow)arrow.textContent=open?'▼':'▶';
}
function rFestaProdutos(){
  const all=_allFestas();const busca=(document.getElementById('fp-busca')?.value||'').toLowerCase();const rows=[];
  all.forEach(f=>{f.itens.forEach(i=>{if(!busca||i.prod.toLowerCase().includes(busca)||f.nome.toLowerCase().includes(busca)){rows.push({evento:f.nome,data:f.data,prod:i.prod,qtd:i.consumido||i.qtd||0,valor:i.valor});}});});
  document.getElementById('tab-festa-prods').innerHTML=rows.length?rows.map(r=>`<tr><td style="font-size:11px">${r.evento}</td><td style="font-size:11px;color:var(--text3);white-space:nowrap">${fd(r.data)}</td><td class="bold">${r.prod}</td><td style="font-family:var(--mono);font-weight:600;color:var(--blue)">${fN(r.qtd)}</td><td style="font-family:var(--mono);color:${r.valor?'var(--green)':'var(--text3)'}">${r.valor?'R$ '+Number(r.valor).toLocaleString('pt-BR',{minimumFractionDigits:2}):'—'}</td></tr>`).join(''):'<tr><td colspan="5" style="text-align:center;color:var(--text3);padding:16px">Nenhum produto encontrado</td></tr>';
}
function editarFesta(id){
  let f=D.festas.find(x=>x.id===id);
  if(!f){const pf=FESTAS_PRELOAD.find(x=>x.id===id);if(pf){f=JSON.parse(JSON.stringify(pf));D.festas.push(f);sv('festas');}}
  if(!f){alert2('Evento não encontrado','error');return;}
  document.getElementById('edit-id').value=id;
  document.getElementById('edit-nome').value=f.nome;
  document.getElementById('edit-data').value=f.data;
  document.getElementById('edit-local').value=f.local||'';
  document.getElementById('edit-resp').value=f.resp||'';
  editItens=f.itens.map(i=>({...i}));
  const ep=document.getElementById('edit-fi-prod');
  if(ep&&ep.options.length<=1){ep.innerHTML='<option value="">Adicionar produto...</option>'+nomes.map(n=>`<option value="${n}">${n}</option>`).join('');}
  rEditItens();openM('medit');
}
let editItens=[];
function addEditItem(){
  const prod=document.getElementById('edit-fi-prod').value;const qtd=Number(document.getElementById('edit-fi-qtd').value);const val=document.getElementById('edit-fi-val').value;
  if(!prod||!qtd||qtd<=0){alert2('Selecione produto e informe a quantidade','error');return;}
  const ex=editItens.find(i=>i.prod===prod);
  if(ex){ex.qtd+=qtd;ex.consumido+=qtd;if(val)ex.valor=(Number(ex.valor||0)+Number(val));}
  else{editItens.push({prod,qtd,consumido:qtd,valor:val?Number(val):null});}
  document.getElementById('edit-fi-qtd').value='';document.getElementById('edit-fi-val').value='';document.getElementById('edit-fi-prod').focus();rEditItens();
}
function rEditItens(){
  const c=document.getElementById('edit-itens');const ct=document.getElementById('edit-count');
  if(!editItens.length){c.innerHTML='<div style="font-size:12px;color:var(--text3);padding:14px 16px;text-align:center">Nenhum produto lançado ainda — adicione abaixo ↓</div>';if(ct)ct.textContent='';return;}
  c.innerHTML=`<div style="display:grid;grid-template-columns:1fr 80px 110px 28px;gap:8px;padding:7px 14px;border-bottom:2px solid var(--border);position:sticky;top:0;background:var(--bg4);z-index:1">
    <span style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase">Produto</span>
    <span style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase">Qtd</span>
    <span style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase">Valor (R$)</span>
    <span></span>
  </div>`+editItens.map((i,idx)=>`
    <div style="display:grid;grid-template-columns:1fr 80px 110px 28px;gap:8px;align-items:center;padding:7px 14px;font-size:12px;border-bottom:1px solid var(--border);background:${idx%2===0?'var(--bg3)':'var(--bg4)'}">
      <span style="color:var(--text);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${i.prod}">${i.prod}</span>
      <input type="number" value="${i.qtd}" step="0.01" style="font-size:11px;padding:4px 6px;font-weight:600;color:var(--blue)" onchange="editItens[${idx}].qtd=Number(this.value);editItens[${idx}].consumido=Number(this.value)">
      <input type="number" value="${i.valor||''}" step="0.01" placeholder="—" style="font-size:11px;padding:4px 6px" onchange="editItens[${idx}].valor=this.value?Number(this.value):null">
      <span style="cursor:pointer;color:var(--red);font-size:18px;line-height:1;text-align:center;font-weight:300" title="Remover" onclick="editItens.splice(${idx},1);rEditItens()">×</span>
    </div>`).join('');
  if(ct)ct.textContent=editItens.length+' produto'+(editItens.length>1?'s':'');
}
function salvarEdicao(){
  const id=document.getElementById('edit-id').value;const f=D.festas.find(x=>x.id===id);
  f.nome=document.getElementById('edit-nome').value.trim()||f.nome;
  f.data=document.getElementById('edit-data').value||f.data;
  f.local=document.getElementById('edit-local').value;
  f.resp=document.getElementById('edit-resp').value;
  // Empilha: mantém o que já existia e soma/adiciona o que foi editado
  const itensBase=f.itens?[...f.itens]:[];
  editItens.forEach(novo=>{
    const ex=itensBase.find(i=>i.prod===novo.prod);
    if(ex){
      // produto já existe: atualiza qtd e valor conforme o que está no editor
      ex.qtd=novo.qtd;ex.consumido=novo.consumido||novo.qtd;
      if(novo.valor!=null)ex.valor=novo.valor;
    } else {
      // produto novo: adiciona na lista
      itensBase.push({...novo});
    }
  });
  f.itens=itensBase;
  sv('festas');closeM('medit');rFestas();alert2('Evento atualizado!');
}

// ─── RELATÓRIO ───────────────────────────────────────────────────────────────
let relSort={col:'nome',dir:1};
let relFiltro='todos';
function setRelFiltro(f){
  relFiltro=f;
  document.querySelectorAll('[id^="rf-"]').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('rf-'+f);if(btn)btn.classList.add('active');
  rRelatorio();
}
function setRelSort(col){
  if(relSort.col===col)relSort.dir*=-1;else{relSort.col=col;relSort.dir=col==='nome'?1:-1;}
  rRelatorio();
}
function rRelatorio(){
  const allF=[...D.festas,...FESTAS_PRELOAD.filter(p=>!D.festas.find(f=>f.id===p.id))];
  const allQbrCopos=[];
  QUEBRAS_EVENTO_PRELOAD.forEach(ev=>ev.itens.forEach(item=>{
    const ja=allQbrCopos.find(x=>x.prod===item.prod);
    if(ja){ja.qtd+=item.qtd;ja.valor+=item.total;}else allQbrCopos.push({prod:item.prod,qtd:item.qtd,valor:item.total});
  }));
  D.quebras.filter(q=>!QUEBRAS_PRELOAD.find(p=>p.prod===q.prod&&p.data===q.data&&p.qtd===q.qtd)).forEach(q=>{
    const ja=allQbrCopos.find(x=>x.prod===q.prod);
    if(ja){ja.qtd+=q.qtd;ja.valor+=q.qtd*Number(q.custo||0);}else allQbrCopos.push({prod:q.prod,qtd:q.qtd,valor:q.qtd*Number(q.custo||0)});
  });
  const totalQbrPecas=allQbrCopos.reduce((a,c)=>a+c.qtd,0);
  const allRowsCards=nomes.map(nome=>{
    const m=MAR[nome],a=ABR[nome];if(!a)return null;
    const totM=m.est+m.salao,totA=a.est+a.salao;
    const isCopo=m.cat==='COPOS/TAÇAS';
    const ent=D.entradas.filter(e=>e.prod===nome).reduce((s,e)=>s+e.qtd,0);
    const fc=isCopo?0:allF.filter(f=>f.status==='encerrada').flatMap(f=>f.itens.filter(i=>i.prod===nome)).reduce((s,i)=>s+((i.consumido||i.qtd)||0),0);
    const qbr=isCopo?(allQbrCopos.find(x=>x.prod===nome)?.qtd||0):D.quebras.filter(q=>q.prod===nome).reduce((s,q)=>s+q.qtd,0);
    const esp=totM+ent-fc-qbr;const diff=totA-esp;
    return{nome,cat:m.cat,totM,ent,fc,qbr,esp,totA,diff,uso:fc+qbr};
  }).filter(Boolean);
  const tiposUsados=allRowsCards.filter(r=>r.uso>0).length;
  const totalTipos=allRowsCards.filter(r=>r.totM>0||r.totA>0).length;
  const diffNegativa=allRowsCards.filter(r=>r.diff<0).reduce((a,r)=>a+Math.abs(r.diff),0);
  const prodComDiffNeg=allRowsCards.filter(r=>r.diff<0).length;
  document.getElementById('rel-cards').innerHTML=`
    <div class="card blue"><div class="card-label">Entradas lançadas</div><div class="card-value">${D.entradas.length}</div></div>
    <div class="card green"><div class="card-label">Produtos utilizados</div><div class="card-value">${tiposUsados} <span style="font-size:14px;font-weight:400;color:var(--text3)">/ ${totalTipos}</span></div><div class="card-sub">tipos com saída no período</div></div>
    <div class="card amber"><div class="card-label">Peças quebradas</div><div class="card-value">${fN(totalQbrPecas)}</div><div class="card-sub">${allQbrCopos.length} tipos de peça</div></div>
    <div class="card red"><div class="card-label">⚠ Diferença não explicada</div><div class="card-value">${fN(diffNegativa)} un</div><div class="card-sub">${prodComDiffNeg} produto${prodComDiffNeg!==1?'s':''} — verificar</div></div>`;
  const relCatEl=document.getElementById('rel-cat');
  if(relCatEl&&relCatEl.options.length<=1){relCatEl.innerHTML='<option value="">Todas as categorias</option>'+[...new Set(nomes.map(n=>MAR[n].cat))].sort().map(c=>`<option value="${c}">${c}</option>`).join('');}
  const catF=relCatEl?relCatEl.value:'';
  const busca=(document.getElementById('rel-busca')?.value||'').toLowerCase();
  let rows=nomes.map(nome=>{
    const m=MAR[nome],a=ABR[nome];if(!a)return null;
    if(catF&&m.cat!==catF)return null;if(busca&&!nome.toLowerCase().includes(busca))return null;
    const totM=m.est+m.salao,totA=a.est+a.salao;const isCopo=m.cat==='COPOS/TAÇAS';
    const ent=D.entradas.filter(e=>e.prod===nome).reduce((s,e)=>s+e.qtd,0);
    const fc=isCopo?0:allF.filter(f=>f.status==='encerrada').flatMap(f=>f.itens.filter(i=>i.prod===nome)).reduce((s,i)=>s+((i.consumido||i.qtd)||0),0);
    const qbr=isCopo?(allQbrCopos.find(x=>x.prod===nome)?.qtd||0):D.quebras.filter(q=>q.prod===nome).reduce((s,q)=>s+q.qtd,0);
    const esp=totM+ent-fc-qbr;const diff=totA-esp;const uso=fc+qbr;
    return{nome,cat:m.cat,isCopo,totM,ent,fc,qbr,esp,totA,diff,uso};
  }).filter(Boolean);
  const filtrosSemSort=['diferenca','zerado','todos'];
  if(relFiltro==='mais-usado')rows=rows.filter(r=>r.uso>0).sort((a,b)=>b.uso-a.uso);
  else if(relFiltro==='menos-usado')rows=rows.filter(r=>r.totM>0||r.totA>0).sort((a,b)=>a.uso-b.uso);
  else if(relFiltro==='diferenca')rows=rows.filter(r=>r.diff!==0);
  else if(relFiltro==='positivo')rows=rows.filter(r=>r.diff>0).sort((a,b)=>b.diff-a.diff);
  else if(relFiltro==='negativo')rows=rows.filter(r=>r.diff<0).sort((a,b)=>a.diff-b.diff);
  else if(relFiltro==='zerado')rows=rows.filter(r=>r.uso===0&&r.ent===0);
  else rows=rows.filter(r=>r.totM>0||r.totA>0||r.ent>0||r.uso>0);
  if(filtrosSemSort.includes(relFiltro)){
    const sortMap={nome:'nome',inicial:'totM',entradas:'ent',quebras:'qbr',esperado:'esp',contado:'totA',diff:'diff'};
    const key=sortMap[relSort.col]||'nome';
    rows.sort((a,b)=>{const av=typeof a[key]==='string'?a[key]:Number(a[key]);const bv=typeof b[key]==='string'?b[key]:Number(b[key]);return av<bv?-relSort.dir:av>bv?relSort.dir:0;});
  }
  ['nome','inicial','entradas','quebras','esperado','contado','diff'].forEach(c=>{const el=document.getElementById('rs-'+c);if(el)el.textContent=relSort.col===c?(relSort.dir===1?' ▲':' ▼'):'';});
  document.getElementById('tab-rel').innerHTML=rows.map(r=>{
    const dc=r.diff===0?'neu':r.diff>0?'up':'dn';const dt=r.diff===0?'—':r.diff>0?'▲'+fN(r.diff):'▼'+fN(Math.abs(r.diff));
    const catBadge=r.isCopo?'b-purple':'b-blue';
    return`<tr><td class="bold">${r.nome}</td><td><span class="badge ${catBadge}" style="font-size:9px">${r.cat}</span></td><td>${fN(r.totM)}</td><td style="color:${r.ent?'var(--green)':'var(--text3)'}">${r.ent||'—'}</td><td style="color:${r.qbr?'var(--red)':'var(--text3)'}">${r.qbr||'—'}</td><td class="bold">${fN(r.esp)}</td><td class="bold">${fN(r.totA)}</td><td class="${dc}">${dt}</td></tr>`;
  }).join('')||'<tr><td colspan="8" style="color:var(--text3);text-align:center;padding:16px">Nenhum produto encontrado</td></tr>';
  const footerEl=document.getElementById('rel-footer');
  if(footerEl)footerEl.textContent=`${rows.length} produto${rows.length!==1?'s':''} exibido${rows.length!==1?'s':''}`;
}

// ─── FORNECEDORES ────────────────────────────────────────────────────────────
let fornView='lista';
function setFornView(v){
  fornView=v;
  ['lista','novo'].forEach(x=>{
    document.getElementById('forn-v-'+x).classList.toggle('active',x===v);
    document.getElementById('forn-view-'+x).style.display=x===v?'block':'none';
  });
  if(v==='lista')rFornecedores();
}
function salvarForn(){
  const nome=document.getElementById('fn-nome').value.trim();
  if(!nome){alert2('Nome é obrigatório','error');return;}
  if(D.fornecedores.find(f=>f.nome.toLowerCase()===nome.toLowerCase())){alert2('Fornecedor já cadastrado','error');return;}
  D.fornecedores.push({nome,tel:document.getElementById('fn-tel').value,contato:document.getElementById('fn-contato').value,obs:document.getElementById('fn-obs').value,criadoEm:td()});
  sv('fornecedores');['fn-nome','fn-tel','fn-contato','fn-obs'].forEach(id=>document.getElementById(id).value='');
  populateSels();alert2('Fornecedor cadastrado!');setFornView('lista');
}
function rFornecedores(){
  const ct=document.getElementById('forn-count');if(ct)ct.textContent=D.fornecedores.length+' cadastrado(s)';
  document.getElementById('tab-forn').innerHTML=D.fornecedores.map(f=>{
    const compras=D.entradas.filter(e=>e.forn===f.nome).length;
    return`<tr><td class="bold">${f.nome}</td><td style="color:var(--text2)">${f.contato||'—'}</td><td style="font-family:var(--mono);color:var(--text2)">${f.tel||'—'}</td><td><span class="badge b-blue">${compras} lançamento(s)</span></td><td style="color:var(--text3);font-size:10px">${f.obs||'—'}</td></tr>`;
  }).join('')||'<tr><td colspan="5" style="color:var(--text3);text-align:center;padding:16px">Nenhum fornecedor cadastrado</td></tr>';
}

// ─── COMPARATIVO DE PREÇOS ───────────────────────────────────────────────────
function rComparativo(){
  const busca=(document.getElementById('comp-busca')?.value||'').toLowerCase();
  const container=document.getElementById('comp-body');if(!container)return;
  const byProd={};
  D.entradas.forEach(e=>{
    if(!e.custo||!Number(e.custo))return;if(busca&&!e.prod.toLowerCase().includes(busca))return;
    if(!byProd[e.prod])byProd[e.prod]={prod:e.prod,compras:[]};
    byProd[e.prod].compras.push({data:e.data,forn:e.forn||e.nf||'Sem fornecedor',custo:Number(e.custo),qtd:Number(e.qtd),nf:e.nf||'—'});
  });
  const prods=Object.values(byProd).sort((a,b)=>a.prod.localeCompare(b.prod));
  if(!prods.length){container.innerHTML='<div style="padding:16px;font-size:12px;color:var(--text3)">Nenhuma entrada com valor lançada ainda. Lance entradas com custo unitário para ver o comparativo.</div>';return;}
  container.innerHTML=prods.map(p=>{
    const custos=p.compras.map(c=>c.custo);const minCusto=Math.min(...custos);const maxCusto=Math.max(...custos);const temVariacao=minCusto!==maxCusto;
    const economia=temVariacao?((maxCusto-minCusto)/maxCusto*100).toFixed(0):0;
    const comprasHtml=p.compras.sort((a,b)=>a.custo-b.custo).map(c=>{
      const isMelhor=c.custo===minCusto;const isPior=c.custo===maxCusto&&temVariacao;
      return`<div style="display:grid;grid-template-columns:1fr 120px 80px 80px 80px;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);font-size:11px;align-items:center">
        <span style="color:var(--text2)">${c.forn}</span><span style="font-size:10px;color:var(--text3)">${fd(c.data)} · NF ${c.nf}</span>
        <span style="font-family:var(--mono);color:var(--text2)">${fN(c.qtd)} un</span>
        <span style="font-family:var(--mono);font-weight:600;color:${isMelhor?'var(--green)':isPior?'var(--red)':'var(--text)'}">R$ ${c.custo.toFixed(2)}</span>
        <span>${isMelhor?'<span class="badge b-green">Melhor</span>':isPior?'<span class="badge b-red">Mais caro</span>':'<span class="badge b-neutral">—</span>'}</span>
      </div>`;}).join('');
    return`<div style="margin:8px 16px;border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden">
      <div style="padding:10px 14px;background:var(--bg3);display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:13px;font-weight:600;color:var(--text)">${p.prod}</div><div style="font-size:10px;color:var(--text3);margin-top:2px">${p.compras.length} compra(s) com preço registrado</div></div>
        ${temVariacao?`<div style="text-align:right"><div style="font-size:11px;color:var(--text3)">Variação de preço</div><div style="font-size:14px;font-weight:600;font-family:var(--mono);color:var(--amber)">${economia}% de diferença</div><div style="font-size:10px;color:var(--text3)">R$ ${minCusto.toFixed(2)} → R$ ${maxCusto.toFixed(2)}</div></div>`:`<span class="badge b-neutral">Preço estável</span>`}
      </div>
      <div style="padding:0 14px">
        <div style="display:grid;grid-template-columns:1fr 120px 80px 80px 80px;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Fornecedor</span>
          <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Data / NF</span>
          <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Quantidade</span>
          <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Custo unit.</span>
          <span style="font-size:9px;font-weight:600;color:var(--text3);text-transform:uppercase">Status</span>
        </div>${comprasHtml}
      </div>
    </div>`;}).join('');
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
const pageInfo={
  fechamento:['Dashboard','Visão geral de movimento, giro e inventário'],
  'est-mar':['Contagem 30/03/2025','Fechamento de março — 206 produtos'],
  'est-abr':['Contagem 28/04/2025','Fechamento de abril — 206 produtos'],
  contagens:['Contagens Semanais','Histórico e comparativo de contagens'],
  precos:['Preços','Custo e revenda por produto'],
  entrada:['Entrada de produtos','Registrar compras e reposições do período'],
  festas:['Festas / Eventos','Eventos realizados no período'],
  relatorio:['Relatório de conciliação','Esperado vs. contado — identifica diferenças'],
  contratos:['Contratos','Gerar contrato a partir da proposta PDF'],
  producao:['Produção','Folha de produção do evento'],
  agenda:['Agenda Operacional','Visão geral dos eventos por período'],
  financeiro:['Financeiro','Parcelas e status de pagamentos'],
};
const pageRenders={
  fechamento:rFechamento,
  'est-mar':()=>rEst('mar'),
  'est-abr':()=>rEst('abr'),
  contagens:()=>setContView('historico'),
  precos:()=>setPrecosView('lista'),
  entrada:rEntradas,
  festas:()=>setFestaView('geral'),
  relatorio:rRelatorio,
  contratos:()=>initContratos(),
  producao:()=>{},
  agenda:rAgenda,
  financeiro:rFinanceiro,
};
function go(page){
  if(page==='nova-festa'){go('festas');setFestaView('novo');return;}
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const pageEl=document.getElementById('page-'+page);if(!pageEl)return;
  pageEl.classList.add('active');
  const items=[...document.querySelectorAll('.nav-item')];
  const map={fechamento:0,'est-mar':1,'est-abr':2,contagens:3,precos:4,fornecedores:5,entrada:6,comparativo:7,festas:8,relatorio:9};
  if(items[map[page]])items[map[page]].classList.add('active');
  const[t,s]=pageInfo[page]||['',''];
  document.getElementById('ptitle').textContent=t;
  document.getElementById('psub').textContent=s;
  pageRenders[page]&&pageRenders[page]();
}
function alert2(msg,t='success'){
  const el=document.getElementById('alertbox');
  el.textContent=msg;el.className='alert alert-'+t;el.style.display='block';
  setTimeout(()=>el.style.display='none',3000);
}
function openM(id){document.getElementById(id).classList.add('open')}
function closeM(id){document.getElementById(id).classList.remove('open')}
function init(){
  const now=new Date();
  document.getElementById('tdate').textContent=now.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  document.getElementById('nav-date').textContent='v2.0 — '+now.getFullYear();
  ['edata','qdata','fdata','cont-data'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=td();});
}
function imprimirRelatorio(){
  const agora=new Date().toLocaleString('pt-BR');
  const catF=document.getElementById('rel-cat')?.value||'';
  const busca=document.getElementById('rel-busca')?.value||'';
  const filtroLabels={'todos':'Todos os produtos','mais-usado':'Mais usados','menos-usado':'Menos usados','diferenca':'Com diferença','positivo':'Sobra','negativo':'Falta','zerado':'Sem movimento'};
  const filtroLabel=filtroLabels[relFiltro]||'Todos';
  const tbody=document.getElementById('tab-rel');if(!tbody)return;
  const linhas=[...tbody.querySelectorAll('tr')].map(tr=>{
    const tds=[...tr.querySelectorAll('td')];if(!tds.length)return null;
    return{nome:tds[0]?.textContent?.trim()||'',cat:tds[1]?.textContent?.trim()||'',inicial:tds[2]?.textContent?.trim()||'',entradas:tds[3]?.textContent?.trim()||'',quebras:tds[4]?.textContent?.trim()||'',esperado:tds[5]?.textContent?.trim()||'',contado:tds[6]?.textContent?.trim()||'',diff:tds[7]?.textContent?.trim()||'',diffClass:tds[7]?.className||''};
  }).filter(Boolean);
  const infos=[`Filtro: ${filtroLabel}`,catF?`Categoria: ${catF}`:'',busca?`Busca: "${busca}"`:'',`${linhas.length} produto${linhas.length!==1?'s':''}`,`Impresso em: ${agora}`].filter(Boolean);
  const html=`<div class="print-title">Controle e Gestão — Relatório de Conciliação</div>
    <div class="print-sub">Contagem 30/03 → 28/04/2025</div>
    <div class="print-info">${infos.map(i=>`<span>${i}</span>`).join('')}</div>
    <table><thead><tr><th>Produto</th><th>Categoria</th><th>Inicial (Mar)</th><th>+ Entradas</th><th>- Quebras</th><th>Esperado</th><th>Contado (Abr)</th><th>Diferença</th></tr></thead>
    <tbody>${linhas.map(r=>`<tr><td><strong>${r.nome}</strong></td><td>${r.cat}</td><td>${r.inicial}</td><td>${r.entradas}</td><td>${r.quebras}</td><td><strong>${r.esperado}</strong></td><td><strong>${r.contado}</strong></td><td class="${r.diffClass}"><strong>${r.diff}</strong></td></tr>`).join('')}</tbody></table>`;
  document.getElementById('print-area').innerHTML=html;window.print();
}

// ═══════════════════════════════════════════════════════
// ─── LOGIN / AUTENTICAÇÃO ───────────────────────────────
// ═══════════════════════════════════════════════════════

const SENHAS = { '2002': 'admin', '0035': 'financeiro', '0040': 'operacional' };
const ACESSO = {
  admin:       ['estoque','contratos','producao','agenda','financeiro'],
  financeiro:  ['contratos','producao','agenda','financeiro'],
  operacional: ['contratos','producao','agenda']
};

let perfilAtual = null;

function tentarLogin() {
  const s = document.getElementById('login-senha').value.trim();
  const p = SENHAS[s];
  if (!p) { 
    document.getElementById('login-erro').textContent = 'Senha incorreta'; 
    return; 
  }
  perfilAtual = p;
  sessionStorage.setItem('perfil', p);
  document.getElementById('login-overlay').style.display = 'none';
  aplicarPerfil(p);
  go('fechamento');
}

function aplicarPerfil(p) {
  const ac = ACESSO[p] || [];
  // Mostrar/ocultar itens do menu
  document.querySelectorAll('[data-modulo]').forEach(el => {
    const m = el.getAttribute('data-modulo');
    el.style.display = (m === 'estoque' ? ac.includes('estoque') : ac.includes(m)) ? '' : 'none';
  });
  // Label do perfil
  const labels = { admin: 'Administrador', financeiro: 'Financeiro', operacional: 'Operacional' };
  const el = document.getElementById('perfil-label');
  if (el) el.textContent = labels[p] || p;
}

function fazerLogout() {
  sessionStorage.removeItem('perfil');
  perfilAtual = null;
  document.getElementById('login-senha').value = '';
  document.getElementById('login-erro').textContent = '';
  document.getElementById('login-overlay').style.display = 'flex';
}

// ═══════════════════════════════════════════════════════
// ─── CONTRATOS ─────────────────────────────────────────
// ═══════════════════════════════════════════════════════

let dadosContrato = {};
let ceremoniaAtiva = null;

function initContratos() {
  const zone = document.getElementById('contrato-upload-zone');
  if (!zone) return;
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => { e.preventDefault(); zone.classList.remove('drag-over'); if (e.dataTransfer.files[0]) processarPDF(e.dataTransfer.files[0]); });
}

function lerPDFContrato(input) { if (input.files[0]) processarPDF(input.files[0]); }

async function processarPDF(file) {
  try {
    document.getElementById('contrato-status').textContent = 'Lendo PDF…';
    const ab = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: ab }).promise;
    let txt = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const pg = await pdf.getPage(i);
      const tc = await pg.getTextContent();
      txt += tc.items.map(it => it.str).join(' ') + '\n';
    }
    extrairDadosContrato(txt);
    document.getElementById('contrato-status').textContent = 'PDF lido com sucesso ✓';
    document.getElementById('contrato-form').style.display = 'block';
  } catch (e) {
    document.getElementById('contrato-status').textContent = 'Erro ao ler PDF: ' + e.message;
  }
}

function extrairDadosContrato(txt) {
  const linhas = txt.split('\n').map(l => l.trim()).filter(Boolean);
  dadosContrato = {};

  // Tipo de evento
  if (/casamento/i.test(txt)) dadosContrato.tipo = 'Casamento';
  else if (/aniversário|aniversario/i.test(txt)) dadosContrato.tipo = 'Aniversário';
  else if (/15 anos/i.test(txt)) dadosContrato.tipo = '15 Anos';
  else if (/formatura/i.test(txt)) dadosContrato.tipo = 'Formatura';
  else dadosContrato.tipo = 'Evento';

  // Data
  const mData = txt.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/);
  if (mData) dadosContrato.data = `${mData[3].length === 2 ? '20'+mData[3] : mData[3]}-${mData[2].padStart(2,'0')}-${mData[1].padStart(2,'0')}`;

  // Convidados
  const mConv = txt.match(/(\d+)\s*(convidados?|pessoas?|pax)/i);
  if (mConv) dadosContrato.convidados = mConv[1];

  // Local
  const mLocal = txt.match(/(?:local|espaço|venue)[:\s]+([^\n,\.]+)/i);
  if (mLocal) dadosContrato.local = mLocal[1].trim();

  // Valores opções
  const mOp1 = txt.match(/opção\s*1[:\s]*R\$\s*([\d\.,]+)/i);
  const mOp2 = txt.match(/opção\s*2[:\s]*R\$\s*([\d\.,]+)/i);
  if (mOp1) dadosContrato.opcao1 = mOp1[1];
  if (mOp2) dadosContrato.opcao2 = mOp2[1];

  // Equipe
  const mEq = txt.match(/(\d+)\s*(colaboradores?|bartenders?|pessoas? equipe)/i);
  if (mEq) dadosContrato.equipe = mEq[1];

  // Duração
  const mDur = txt.match(/(\d+)h?\s*(de\s+)?festa/i);
  if (mDur) dadosContrato.duracao = mDur[1];

  mostrarExtraidosContrato();
}

function mostrarExtraidosContrato() {
  const d = dadosContrato;
  const set = (id, v) => { const el = document.getElementById(id); if (el && v) el.value = v; };
  set('c-tipo', d.tipo);
  set('c-data', d.data);
  set('c-convidados', d.convidados);
  set('c-local', d.local);
  set('c-opcao', d.opcao1);

  // Mostrar/ocultar cerimônia se casamento
  const isCas = d.tipo === 'Casamento';
  const elCer = document.getElementById('c-cerimonia-row');
  if (elCer) elCer.style.display = isCas ? '' : 'none';
}

function setOpcaoContrato(op) {
  const val = op === 1 ? dadosContrato.opcao1 : dadosContrato.opcao2;
  if (val) document.getElementById('c-opcao').value = val;
  document.querySelectorAll('.btn-opcao').forEach((b, i) => b.classList.toggle('active', i + 1 === op));
}

async function gerarContratoDocx() {
  const nome     = document.getElementById('c-nome')?.value?.trim();
  const cpf      = document.getElementById('c-cpf')?.value?.trim();
  const endereco = document.getElementById('c-endereco')?.value?.trim();
  const tipo     = document.getElementById('c-tipo')?.value?.trim() || dadosContrato.tipo || '';
  const data     = document.getElementById('c-data')?.value?.trim();
  const conv     = document.getElementById('c-convidados')?.value?.trim();
  const local    = document.getElementById('c-local')?.value?.trim();
  const hrIni    = document.getElementById('c-hora-inicio')?.value?.trim();
  const opcao    = document.getElementById('c-opcao')?.value?.trim();
  const cer      = document.getElementById('c-cerimonia')?.value?.trim();

  if (!nome || !cpf) { alert('Preencha pelo menos Nome e CPF.'); return; }

  const btnGerar = document.getElementById('btn-gerar-contrato');
  if (btnGerar) { btnGerar.disabled = true; btnGerar.textContent = 'Gerando…'; }

  try {
    // Formatar data
    const dtObj = data ? new Date(data + 'T12:00:00') : null;
    const dtFormatada = dtObj ? dtObj.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '';
    const dtSimples   = dtObj ? dtObj.toLocaleDateString('pt-BR') : '';

    // Calcular hora fim
    let hrFim = '';
    if (hrIni && dadosContrato.duracao) {
      const [h, m] = hrIni.split(':').map(Number);
      const dur = parseInt(dadosContrato.duracao);
      const fim = new Date(); fim.setHours(h + dur, m);
      hrFim = `${String(fim.getHours()).padStart(2,'0')}:${String(fim.getMinutes()).padStart(2,'0')}`;
    }

    // Calcular parcelas
    const valorNum = parseFloat((opcao||'0').replace(/[^\d,]/g,'').replace(',','.')) || 0;
    const parc1 = (valorNum * 0.2).toLocaleString('pt-BR', {minimumFractionDigits:2});
    const parc2 = (valorNum * 0.8).toLocaleString('pt-BR', {minimumFractionDigits:2});

    // Ler template
    const b64 = await getTemplatB64();
    const templateBytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));

    const { PizZip, Docxtemplater } = await importDocxLibs();
    const zip = new PizZip(templateBytes);
    const docx = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    const dados = {
      NOME_CONTRATANTE: nome,
      CPF_CONTRATANTE: cpf,
      ENDERECO_CONTRATANTE: endereco || '',
      TIPO_EVENTO: tipo,
      DATA_EVENTO: dtFormatada || dtSimples || data || '',
      DATA_SIMPLES: dtSimples || data || '',
      NUMERO_CONVIDADOS: conv || '',
      LOCAL_EVENTO: local || '',
      HORARIO_INICIO: hrIni || '',
      HORARIO_FIM: hrFim || '',
      DURACAO: (dadosContrato.duracao || '') + 'h',
      VALOR_TOTAL: opcao || '',
      VALOR_PARCELA1: 'R$ ' + parc1,
      VALOR_PARCELA2: 'R$ ' + parc2,
      CERIMONIA: cer || '',
      EQUIPE: dadosContrato.equipe || '',
      DATA_ASSINATURA: new Date().toLocaleDateString('pt-BR'),
    };

    docx.setData(dados);
    docx.render();

    const outBuf = docx.getZip().generate({ type: 'arraybuffer' });
    const blob = new Blob([outBuf], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `Contrato_${nome.split(' ')[0]}_${dtSimples?.replace(/\//g,'-') || ''}.docx`;
    a.click(); URL.revokeObjectURL(url);

    // Registrar na agenda e financeiro
    registrarEventoNaAgenda({ nome, data, local, tipo, conv, hrIni, hrFim, equipe: dadosContrato.equipe });
    registrarParcelasFinanceiro({ nome, data, opcao, valorNum, parc1, parc2 });

    alert('Contrato gerado! Evento adicionado à agenda e parcelas ao financeiro.');
  } catch (e) {
    console.error(e);
    alert('Erro ao gerar contrato: ' + e.message);
  } finally {
    if (btnGerar) { btnGerar.disabled = false; btnGerar.textContent = 'Gerar Contrato (.docx)'; }
  }
}

async function getTemplatB64() {
  // Template embutido — carregado do script de contratos
  return window.TEMPLATE_B64_GLOBAL || '';
}

async function importDocxLibs() {
  // Usar PizZip e Docxtemplater via CDN (já carregados no HTML)
  return { PizZip: window.PizZip, Docxtemplater: window.Docxtemplater };
}

function novoContrato() {
  dadosContrato = {};
  ceremoniaAtiva = null;
  document.getElementById('contrato-form').style.display = 'none';
  document.getElementById('contrato-status').textContent = '';
  document.getElementById('c-nome').value = '';
  document.getElementById('c-cpf').value = '';
  document.getElementById('c-endereco').value = '';
  document.getElementById('c-hora-inicio').value = '';
}

// ═══════════════════════════════════════════════════════
// ─── AGENDA ────────────────────────────────────────────
// ═══════════════════════════════════════════════════════

function registrarEventoNaAgenda(ev) {
  if (!D.agenda) D.agenda = [];
  const id = 'AG' + Date.now();
  D.agenda.push({
    id, nome: ev.nome, data: ev.data, tipo: ev.tipo,
    local: ev.local, convidados: ev.conv,
    hrInicio: ev.hrIni, hrFim: ev.hrFim,
    equipe: ev.equipe, fonte: 'contrato'
  });
  sv('agenda');
}

function rAgenda() {
  const ag = D.agenda || [];
  const filtroI = document.getElementById('ag-data-ini')?.value;
  const filtroF = document.getElementById('ag-data-fim')?.value;
  const tbody = document.getElementById('ag-body');
  if (!tbody) return;

  const lista = ag
    .filter(ev => {
      if (filtroI && ev.data < filtroI) return false;
      if (filtroF && ev.data > filtroF) return false;
      return true;
    })
    .sort((a, b) => (a.data || '').localeCompare(b.data || ''));

  tbody.innerHTML = '';
  if (!lista.length) {
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;color:#8B91A8;padding:24px">Nenhum evento no período</td></tr>';
    document.getElementById('ag-total-colab').textContent = '—';
    return;
  }

  let totalColab = 0;
  lista.forEach(ev => {
    const eq = parseInt(ev.equipe || 0);
    totalColab += eq;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${fd(ev.data)}</td>
      <td><strong>${ev.nome || '—'}</strong></td>
      <td>${ev.tipo || '—'}</td>
      <td>${ev.convidados || '—'}</td>
      <td>${ev.local || '—'}</td>
      <td>${ev.hrInicio || '—'}</td>
      <td>${ev.hrFim || '—'}</td>
      <td>${ev.hrInicio && ev.hrFim ? calcDuracao(ev.hrInicio, ev.hrFim) : '—'}</td>
      <td>${ev.equipe || '—'}</td>
    `;
    tbody.appendChild(tr);
  });
  document.getElementById('ag-total-colab').textContent = totalColab;
}

function calcDuracao(ini, fim) {
  try {
    const [hi, mi] = ini.split(':').map(Number);
    const [hf, mf] = fim.split(':').map(Number);
    const diff = (hf * 60 + mf) - (hi * 60 + mi);
    if (diff <= 0) return '—';
    return `${Math.floor(diff/60)}h${diff%60 ? (diff%60)+'min' : ''}`;
  } catch { return '—'; }
}

function adicionarEventoManual() {
  const nome = document.getElementById('ag-m-nome')?.value?.trim();
  const data = document.getElementById('ag-m-data')?.value;
  if (!nome || !data) { alert('Preencha ao menos nome e data.'); return; }
  const ev = {
    nome, data,
    tipo: document.getElementById('ag-m-tipo')?.value || '',
    local: document.getElementById('ag-m-local')?.value?.trim() || '',
    convidados: document.getElementById('ag-m-conv')?.value?.trim() || '',
    hrInicio: document.getElementById('ag-m-ini')?.value || '',
    hrFim: document.getElementById('ag-m-fim')?.value || '',
    equipe: document.getElementById('ag-m-equipe')?.value?.trim() || '',
    fonte: 'manual'
  };
  registrarEventoNaAgenda(ev);
  rAgenda();
  // Limpar
  ['ag-m-nome','ag-m-data','ag-m-local','ag-m-conv','ag-m-ini','ag-m-fim','ag-m-equipe'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  alert('Evento adicionado!');
}

function excluirEventoAgenda(id) {
  if (!confirm('Excluir este evento?')) return;
  D.agenda = (D.agenda || []).filter(e => e.id !== id);
  sv('agenda');
  rAgenda();
}

// ═══════════════════════════════════════════════════════
// ─── FINANCEIRO ────────────────────────────────────────
// ═══════════════════════════════════════════════════════

function registrarParcelasFinanceiro(info) {
  if (!D.financeiro) D.financeiro = [];
  const id = 'FIN' + Date.now();
  // Parcela 1: 20% na assinatura (hoje)
  D.financeiro.push({
    id: id + 'A', contrato: info.nome, data: info.data, evento: info.nome,
    descricao: '20% — Assinatura do contrato',
    valor: 'R$ ' + info.parc1,
    valorNum: info.valorNum * 0.2,
    vencimento: new Date().toISOString().slice(0,10),
    status: 'pendente'
  });
  // Parcela 2: 80% 7 dias antes do evento
  const dtEvento = info.data ? new Date(info.data + 'T12:00:00') : null;
  let venc2 = '';
  if (dtEvento) {
    dtEvento.setDate(dtEvento.getDate() - 7);
    venc2 = dtEvento.toISOString().slice(0,10);
  }
  D.financeiro.push({
    id: id + 'B', contrato: info.nome, data: info.data, evento: info.nome,
    descricao: '80% — 7 dias antes do evento',
    valor: 'R$ ' + info.parc2,
    valorNum: info.valorNum * 0.8,
    vencimento: venc2,
    status: 'pendente'
  });
  sv('financeiro');
}

function rFinanceiro() {
  const fin = D.financeiro || [];
  const tbody = document.getElementById('fin-body');
  if (!tbody) return;

  const pendentes = fin.filter(f => f.status === 'pendente');
  const pagos     = fin.filter(f => f.status === 'pago');
  const totPend   = pendentes.reduce((a,f) => a + (f.valorNum||0), 0);
  const totPago   = pagos.reduce((a,f) => a + (f.valorNum||0), 0);

  if (document.getElementById('fin-total-pend')) document.getElementById('fin-total-pend').textContent = fR(totPend);
  if (document.getElementById('fin-total-pago')) document.getElementById('fin-total-pago').textContent = fR(totPago);
  if (document.getElementById('fin-total-geral')) document.getElementById('fin-total-geral').textContent = fR(totPend + totPago);

  const filtro = document.getElementById('fin-filtro')?.value || 'todos';
  const lista = fin.filter(f => filtro === 'todos' || f.status === filtro)
    .sort((a,b) => (a.vencimento||'').localeCompare(b.vencimento||''));

  tbody.innerHTML = '';
  if (!lista.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:#8B91A8;padding:24px">Nenhum lançamento</td></tr>';
    return;
  }

  const hoje = new Date().toISOString().slice(0,10);
  lista.forEach(f => {
    const atrasado = f.status === 'pendente' && f.vencimento && f.vencimento < hoje;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${fd(f.vencimento)}</td>
      <td><strong>${f.evento || f.contrato || '—'}</strong></td>
      <td>${fd(f.data)}</td>
      <td>${f.descricao || '—'}</td>
      <td><strong>${f.valor || '—'}</strong></td>
      <td>
        <span class="tag ${f.status === 'pago' ? 'tag-green' : atrasado ? 'tag-red' : 'tag-yellow'}">
          ${f.status === 'pago' ? 'Pago' : atrasado ? 'Atrasado' : 'Pendente'}
        </span>
      </td>
      <td>
        ${f.status === 'pendente'
          ? `<button class="btn-sm btn-green" onclick="marcarPago('${f.id}')">Marcar pago</button>`
          : `<button class="btn-sm btn-red" onclick="marcarPendente('${f.id}')">Desfazer</button>`
        }
        <button class="btn-sm" onclick="excluirFinanceiro('${f.id}')">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function marcarPago(id) {
  const f = (D.financeiro||[]).find(f => f.id === id);
  if (f) { f.status = 'pago'; sv('financeiro'); rFinanceiro(); }
}
function marcarPendente(id) {
  const f = (D.financeiro||[]).find(f => f.id === id);
  if (f) { f.status = 'pendente'; sv('financeiro'); rFinanceiro(); }
}
function excluirFinanceiro(id) {
  if (!confirm('Excluir este lançamento?')) return;
  D.financeiro = (D.financeiro||[]).filter(f => f.id !== id);
  sv('financeiro'); rFinanceiro();
}

// ═══════════════════════════════════════════════════════
// ─── EXTENSÃO DO svFirebase PARA NOVOS CAMPOS ──────────
// ═══════════════════════════════════════════════════════

// Garantir que D.agenda e D.financeiro existam
if (!D.agenda) D.agenda = [];
if (!D.financeiro) D.financeiro = [];
