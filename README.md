# Pokemon applicatie

# 1. Inleiding
De reden dat deze website tot stand is het volgende, ik wou een overzichtelijke en strakke manier voor het bekijken van pokemons. Daarvoor heb ik een eenvoudige tool waarmee je makkelijk pokemons kan opzoeken. De oplossing hiervoor is de tool die ik heb gemaakt, een overzicht van alle pokemons. Waarin je ook makkelijk een pokemon kan opzoeken door middel van de zoekfunctie. Daarnaast kan een gebruiker registreren als die daar behoefte aan heeft. Om vervolgens favorieten aan je account toe te kunnen voegen. De applicatie is ontwikkeld als eindopdracht voor de Frontend Leerlijn, op NOVI Hogeschool.

# 2. Screenshot

# 3. Benodigdheden 
Voor deze applicatie heb je een aantal dingen nodig om dit te kunnen laten werken. Om te beginnen kun je de link naar de Github Repository hier vinden. Daarnaast is er bij deze applicatie gebruik gemaakt van NOVI-backend om het inloggen en registreren te kunnen realiseren. De documentatie daarvoor kun je hier terug vinden. https://github.com/hogeschoolnovi/novi-educational-backend-documentation?tab=readme-ov-file#0-inloggen 

# 4. De applicatie draaien
Applicatie starten
Om te beginnen clone je het project vanuit Git naar jouw lokale machine (een IDE naar keuze). Let op dat je bij het kopiëren van de link voor "SSH" kiest. Daarnaast is er een stap die je niet over kan slaan, dat is namelijk het zorgen voor de installatie van Node.js & npm. Deze heb je namelijk nodig om de applicatie te kunnen runnen. Om de laatste versie hiervan te downloaden kun je het volgende commando uitvoeren in jouw terminal:

npm install -g npm
Weet je niet zeker meer dat jij dit al hebt geïnstalleerd, of wil je weten welke versie je ookal weer hebt? Gebruik dan de volgende commando's om dit te controleren:

node -v
npm -v
Top:} Dan kun je nu de benodigde packages uit de node_modules installeren. Dit kun je doen met het volgende commando:

npm install
Als je deze stap hebt gehad kun je beginnen met het runnen van de applicatie met behulp van het volgende commando:

npm run dev
Open http://localhost:5173/ om de pagina in de browser te kunnen bekijken. Elke keer als je het bestand op slaat kun je de wijzingen hier terug zien. Je kunt de Devtools in je browser ook nog gebruiken voor extra informatie.

# 5. Overige commando’s
Om verder te kunnen werken aan dit project en jouw werk op te slaan, is het belangrijk dat je eerst de huidige repository loskoppelt. Dit doe je met het volgende commando:

git remote remove origin
Vervolgens kun je op Git zelf een nieuwe respository aanmaken, deze koppelen aan jouw project. Werk je met meerdere mensen aan hetzelfde project? Dan is het verstandig om op een feature branch te werken. Deze kun je aanmaken met het volgende commando:

git checkout -b name-of-branch
Overige commando's die je veel zult gebruiken:

git init . om Git te initialiseren in jouw project. LET OP! Als je een project cloned gebeurd dit automatisch al.
git add . om alle wijzigen te stagen.
git status om de status van gestagede bestanden te zien.
git commit -m "description" om alle wijzigingen te committen en klaar te zetten voor de push.
git log om te zien welke commits er klaar staan voor de push.
git push origin name-of-branch om wijzigingen naar Git te pushen als je op een feature branch werkt.
git push origin main om wijzigingen naar Git te pushen als je op de main branch werkt.
