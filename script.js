var title = document.getElementsByClassName("contentbox")[0].innerText;
console.log(title);
var quizzes = ["Apollo Missions Trivia", "World Capitals Trivia", "Big Cats Trivia", "Ancient Egypt Trivia", "Eleventh Grade Vocabulary Trivia", 
"Ninth Grade Vocabulary Trivia", "Greek Mythology Trivia", "Famous Poets", "Famous World Leaders", "Heart Trivia"];
var t  =  quizzes.indexOf(title);
console.log(t);
var qa =[]; 
if(t == 0){
qa[0]={q:'In which mission did an astronaut perform a golf shot on the moon?', a:'Apollo 14'};
qa[1]={q:'This Apollo mission never launched and ended in tragedy, when a fire erupted in the command module during a test and killed three astronauts.', a:'Apollo 1'};
qa[2]={q:'Which astronaut was not present on the Apollo 11 mission?', a:'Cernan'};
qa[3]={q:'Which mission cancelled their landing on the moon due to technical problems?', a:'Apollo 13'};
qa[4]={q:'Which mission conducted the first manned flight test of the Lunar Module?', a:'Apollo 9'};
qa[5]={q:'Which mission had a SM oxygen tank explode, which caused many problems?', a:'Apollo 13'};
qa[6]={q:'Which mission had two lightning strikes to the spacecraft during launch?', a:'Apollo 12'};
qa[7]={q:'Which mission provided the first color video images from the surface of the moon?', a:'Apollo 14'};
qa[8]={q:'Which mission sent broadcasted some of the first live television pictures from space?', a:'Apollo 7'};
qa[9]={q:'Which mission used the Lunar RV for the first time?', a:'Apollo 15'};
qa[10]={q:'Which mission was considered a "dress rehearsal" for a lunar landing?', a:'Apollo 10'};
qa[11]={q:'Which mission was the first manned Apollo flight?', a:'Apollo 7'};
qa[12]={q:'Which mission was the first manned circumlunar flight?', a:'Apollo 8'};
qa[13]={q:'Which mission was the first manned landing on the moon?', a:'Apollo 11'};
qa[14]={q:'Which mission was the first night launch?', a:'Apollo 17'};
qa[15]={q:'Which was the last Apollo mission?', a:'Apollo 17'};
}
if(t == 1){
qa[0]={q:'What is the capital of Australia?', a:'Canberra'};
qa[1]={q:'What is the capital of Austria?', a:'Vienna'};
qa[2]={q:'What is the capital of Belgium?', a:'Brussels'};
qa[3]={q:'What is the capital of Brazil?', a:'Brasilia'};
qa[4]={q:'What is the capital of Canada?', a:'Ottawa'};
qa[5]={q:'What is the capital of China?', a:'Beijing'};
qa[6]={q:'What is the capital of Cuba?', a:'Havana'};
qa[7]={q:'What is the capital of Czech Republic?', a:'Prague'};
qa[8]={q:'What is the capital of Denmark?', a:'Copenhagen'};
qa[9]={q:'What is the capital of Egypt?', a:'Cairo'};
qa[10]={q:'What is the capital of Finland?', a:'Helsinki'};
qa[11]={q:'What is the capital of France?', a:'Paris'};
qa[12]={q:'What is the capital of Germany?', a:'Berlin'};
qa[13]={q:'What is the capital of Greece?', a:'Athens'};
qa[14]={q:'What is the capital of Hungary?', a:'Budapest'};
qa[15]={q:'What is the capital of India?', a:'New Delhi'};
qa[16]={q:'What is the capital of Italy?', a:'Rome'};
qa[17]={q:'What is the capital of Japan?', a:'Tokyo'};
qa[18]={q:'What is the capital of Mexico?', a:'Mexico City'};
qa[19]={q:'What is the capital of The Bahamas?', a:'Nassau'};
}
if(t == 2){
qa[0]={q:'A cheetah can run up to speeds of ____ miles an hour.', a:'70'};
qa[1]={q:'Big cats are ________.', a:'Carnivores'};
qa[2]={q:"How far can a lions's roar be heard from?", a:'5 miles'};
qa[3]={q:'One common way to determine what is considered a big cat, is a feline that can ________.', a:'Roar'};
qa[4]={q:'The main threats to big cats are ___________.', a:'poaching and habitat destruction'};
qa[5]={q:'Tigers are often poached for their parts, used in traditional _________ medicine.', a:'Chinese'};
qa[6]={q:'Which big cat is in the genus Acinonyx?', a:'Cheetah'};
qa[7]={q:'Which big cat is in the genus Puma?', a:'Cougar'};
qa[8]={q:'Which big cat is in the genus Uncia?', a:'Snow Leopard'};
qa[9]={q:'Which big cat is named from the Native American word meaning "he who kills with one leap"?', a:'Jaguar'};
qa[10]={q:'Which big cat is not in the genus Panthera?', a:'Cheetah'};
qa[11]={q:'Which is the best climber of all the big cats?', a:'Leopard'};
qa[12]={q:'Which is the most endangered big cat?', a:'Amur Leopard'};
qa[13]={q:'Which is the only big cat that lives in groups?', a:'Lion'};
qa[14]={q:'Which of the following is not a criteria for an accredited US Fish & Wildlife Service animal sanctuary?', a:'Must provide enrichment activities for big cats'};
qa[15]={q:'Which of the following is not considered a big cat?', a:'Bobcat'};
qa[16]={q:'Which of these big cats is an excellent swimmer who loves water?', a:'Tiger'};
qa[17]={q:'Which of these big cats purrs instead of roars?', a:'Cheetah'};
qa[18]={q:'Which of these lions are recently extinct?', a:'Barbary Lion'};
qa[19]={q:'Which type of tiger is extinct?', a:'Caspian Tiger'};
}
if(t == 3){
qa[0]={q:'A Pharaoh never let his ______ be seen.', a:'Hair'};
qa[1]={q:'Because they believed in ________, ancient Egyptians mummified bodies.', a:'the afterlife'};
qa[2]={q:'How many pyramids have been discovered in Egypt so far?', a:'Over 130'};
qa[3]={q:'Roughly how many different deities did the Ancient Egyptians believe in?', a:'More than 2,000'};
qa[4]={q:'The Ancient Egyptians were the first civilization to invent __________.', a:'Writing'};
qa[5]={q:'The Egyptian alphabet consisted of more than ______ hieroglyphs.', a:'700'};
qa[6]={q:'The famous Great Sphinx is missing what part?', a:'Nose'};
qa[7]={q:'What did Ancient Egyptians believe made the Nile River overflow every year?', a:'The tears of Isis'};
qa[8]={q:'What is the largest pyramid in Egypt?', a:'Pyramid of Khufu'};
qa[9]={q:'What is the name of the most popular board game developed by Ancient Egyptians?', a:'Senet'};
qa[10]={q:'What type of animal did Ancient Egypt not typically keep as a pet?', a:'Hippo'};
qa[11]={q:'When did the Ancient Egyptian Empire begin to weaken?', a:'700 BC'};
qa[12]={q:'Which empire was the first to conquer the Ancient Egyptians?', a:'Assyrian Empire'};
qa[13]={q:'Which is not considered a phase of the Ancient Egyptian society?', a:'Glorious Kingdom'};
qa[14]={q:'Which of the following was a calendar not followed by the Ancient Egyptians?', a:'Animal Calendar'};
qa[15]={q:'Which of these animals was considered sacred by Ancient Egyptians?', a:'Cat'};
qa[16]={q:'Who is considered to be the first Pharaoh of Egypt?', a:'King Menes'};
qa[17]={q:'Who is considered to be the most important Egyptian god?', a:'Ra'};
qa[18]={q:'Which of the following was not invented by the Ancient Egyptians?', a:'Horse saddles'};
}
if(t==4){
qa[0]={q:'Allegory', a:'a representation of an abstract or spiritual meaning through concrete or material forms'};
qa[1]={q:'Ambiguity', a:'doubtfulness or uncertainty of meaning or intention'};
qa[2]={q:'Anecdote', a:'a short account of a particular incident or event of an interesting or amusing nature, often biographical.'};
qa[3]={q:'Annotated', a:'supplied with or containing explanatory notes and textual comments'};
qa[4]={q:'Assuage', a:'to relieve or soothe'};
qa[5]={q:'Auspicious', a:'favorable, noteworthy'};
qa[6]={q:'Buoyancy', a:'the power to float or rise in a fluid, the upward pressure exerted by the fluid in which a body is immersed'};
qa[7]={q:'Conceit', a:"an excessively favorable opinion of one's own ability, importance or wit"};
qa[8]={q:'Conspicuous', a:'noticeable, obvious'};
qa[9]={q:'Denotation', a:'a word that names or signifies something specific'};
qa[10]={q:'Discern', a:'to regognize the diferrence'};
qa[11]={q:'Enigma', a:'a mystery'};
qa[12]={q:'Euphemism', a:'the substitution of a mild, indirect, or vague expression for one thought to be offensive, harsh, or blunt'};
qa[13]={q:'Principle', a:'a fundamental, primary, or general law or truth from which others are derived'};
qa[14]={q:'Procure', a:'to obtain'};
qa[15]={q:'Quandary', a:'a state of perplexity or uncertainty'};
}
if(t == 5){
qa[0]={q:'Abstract', a:'a concept or idea not associated with any specific instance'};
qa[1]={q:'Advocate', a:'a person who pleads for a cause or propounds an idea'};
qa[2]={q:'Belittle', a:'lessen the authority, dignity, or reputation of'};
qa[3]={q:'Censure', a:'harsh criticism or disapproval'};
qa[4]={q:'Comply', a:"act in accordance with someone's rules, commands, or wishes"};
qa[5]={q:'Deference', a:'a disposition or tendency to yield to the will of others'};
qa[6]={q:'Eccentric', a:'a person of a specified kind (usually with many eccentricities)'};
qa[7]={q:'Facilitate', a:'make easier'};
qa[8]={q:'Guile', a:'shrewdness as demonstrated by being skilled in deception'};
qa[9]={q:'Heed', a:'paying particular notice (as to children or helpless people)'};
qa[10]={q:'Inadvertent', a:'without intention (especially resulting from heedless action)'};
qa[11]={q:'Mar', a:"a mark or flaw that spoils the appearance of something (especially on a person's body)"};
qa[12]={q:'Parsimony', a:'extreme care in spending money'};
qa[13]={q:'Recalcitrant', a:'marked by stubborn resistance to authority'};
qa[14]={q:'Tangible', a:'possible to be treated as fact'};
qa[15]={q:'Verbose', a:'using or containing too many words'};
}
if(t == 6){
qa[0]={q:'Which Greek god is the god of fertility and wine?', a:'Dionysus'};
qa[1]={q:'Which Greek god is the god of fire and forge?', a:'Hephaestus'};
qa[2]={q:'Which Greek god is the god of flocks and shepherds?', a:'Pan'};
qa[3]={q:'Which Greek god is the god of love?', a:'Eros'};
qa[4]={q:'Which Greek god is the god of music, healing, light and truth?', a:'Apollo'};
qa[5]={q:'Which Greek god is the god of the sun?', a:'Helios'};
qa[6]={q:'Which Greek god is the god of war?', a:'Ares'};
qa[7]={q:'Which Greek god is the goddess of corn, grain and harvest?', a:'Demeter'};
qa[8]={q:'Which Greek god is the goddess of discord?', a:'Eris'};
qa[9]={q:'Which Greek god is the goddess of intelligence and the arts?', a:'Athena'};
qa[10]={q:'Which Greek god is the goddess of love, desire and beauty?', a:'Aphrodite'};
qa[11]={q:'Which Greek god is the goddess of marriage and childbirth?', a:'Hera'};
qa[12]={q:'Which Greek god is the goddess of springtime?', a:'Persephone'};
qa[13]={q:'Which Greek god is the goddess of youth?', a:'Hebe'};
qa[14]={q:'Which Greek god is the lord of the underworld?', a:'Hades'};
qa[15]={q:'Which Greek god is the personification of death?', a:'Thanatos'};
qa[16]={q:'Which Greek god is the protector of all waters?', a:'Poseidon'};
qa[17]={q:'Which Greek god is the ruler of the Olympian gods?', a:'Zeus'};
}
if(t == 7){
qa[0]={q:'Who wrote "A Dream Within A Dream"?', a:'Edgar Allan Poe'};
qa[1]={q:'Who wrote "A Girl"?', a:'Ezra Pound'};
qa[2]={q:'Who wrote "Do Not Go Gentle To That Good Night"?', a:'Dylan Thomas'};
qa[3]={q:'Who wrote "Funeral Blues"?', a:'W.H. Auden'};
qa[4]={q:'Who Wrote "I Carry Your Heart With Me"?', a:'E.E. Cummings'};
qa[5]={q:'Who wrote "If those I loved were lost"?', a:'Emily Dickinson'};
qa[6]={q:'Who Wrote "If You Forget Me"?', a:'Pablo Neruda'};
qa[7]={q:'Who wrote "Life is Fine"?', a:'Langston Hughes'};
qa[8]={q:'Who wrote "Messy Room"?', a:'Shel Silverstein'};
qa[9]={q:'Who wrote "Phenomenal Woman"?', a:'Maya Angelou'};
qa[10]={q:'Who wrote "Stopping by the Woods on a Snowy Evening"?', a:'Robert Frost'};
qa[11]={q:'Who wrote "The Road Not Taken"?', a:'Robert Frost'};
qa[12]={q:'Who wrote "There is Another Sky"?', a:'Emily Dickinson'};
qa[13]={q:'Who wrote "To You"?', a:'Walt Whitman'};
qa[14]={q:'Who wrote "Where the Sidewalk Ends"?', a:'Shel Silverstein'};
}
if(t == 8){
qa[0]={q:'Abraham Lincoln is most famous for _____________.', a:'Working to end slavery in America'};
qa[1]={q:'Akbar created a thriving empire through what modern country?', a:'India'};
qa[2]={q:'Alexander the Great created ____________________.', a:'One of the largest empires in the ancient world'};
qa[3]={q:'Chairman Mao led which government party to victory in China?', a:'Communism'};
qa[4]={q:'Henry VIII wanted to remarry, which contributed to the creation of which religion?', a:'The Church of England'};
qa[5]={q:'Joan of Arc fought bravely for what cause?', a:'French Independence'};
qa[6]={q:'Julius Caesar was key in the expansion of the ___________.', a:'Roman Empire'};
qa[7]={q:'King Henry VIII had how many wives?', a:'Six'};
qa[8]={q:'Mahatma Gandhi devoted his life to what?', a:'Indian independence'};
qa[9]={q:'Napoleon Bonaparte was the famous emperor of _______.', a:'France'};
qa[10]={q:'Nelson Mandela ___________________ before becoming the first President of democratic South Africa in 1994?', a:'spent over 20 years in jail'};
qa[11]={q:'Thomas Jefferson wrote which famous US document?', a:'The Declaration of Independence'};
qa[12]={q:"What was Julius Caesar's motto?', a:'I came, I saw, I conquered"};
qa[13]={q:'Who was Margaret Thatcher?', a:'British Prime Minister'};
}
if(t == 9){
qa[0]={q:'How many chambers does a human heart have?', a:'4'};
qa[1]={q:'The heart beats approximately ____________ times each day.', a:'100000'};
qa[2]={q:'What anatomical system is the heart a part of?', a:'Cardiovascular system'};
qa[3]={q:'What blood vessel carries oxygen-rich blood to the body?', a:'Artery'};
qa[4]={q:'What blood vessel returns oxygen-poor blood to the heart?', a:'Vein'};
qa[5]={q:'What does the heart do?', a:'Pumps blood throughout the body'};
qa[6]={q:'What does the heart pump?', a:'Blood'};
qa[7]={q:'What is a normal resting heart rate for adults over the age 18?', a:'60-100 bpm'};
qa[8]={q:'What is a normal resting heart rate range for children?', a:'70-100 bpm'};
qa[9]={q:'What is the name of the largest artery in the body?', a:'Aorta'};
qa[10]={q:'What tiny blood vessels transport blood from an artery to a vein?', a:'Capillaries'};
qa[11]={q:'Where is the heart located?', a:'Chest'};
qa[12]={q:'Which artery carries blood from the heart to the lungs?', a:'Pulmonary Artery'};
qa[13]={q:'Which atrium receives oxygen-poor blood from the body?', a:'Right atrium'};
qa[14]={q:'Which atrium receives oxygen-rich blood from the lungs?', a:'Left atrium'};
qa[15]={q:'Which of the following is not a systemic artery?', a:'Pulmonary Artery'};
qa[16]={q:'Which part of the heart allows blood to flow in only one direction?', a:'Valve'};
qa[17]={q:'Which vein carries oxygen-rich blood to the heart from the lungs?', a:'Pulmonary Veins'};
qa[18]={q:'Which ventricle pumps oxygen-rich blood to the body?', a:'Left ventricle'};
qa[19]={q:'Which ventricle pumps oxygen-poor blood to the lungs?', a:'Right ventricle'};
}
var answer  = qa[0].a; //sets the answer to the answer of the first question
var question  = document.getElementsByClassName("quizQuestion"); //gets the question
for(var i = 1; i<qa.length; i++){
	if(qa[i].q.includes(question[0].innerText)) answer  = qa[i].a; // question[0].innerText is the text of the question
}
console.log(question[0].innerText); // prints the question
console.log(answer); // prints the answer
var elements  = document.getElementsByClassName("largecheckbox");
var answerChoices  = document.getElementsByClassName("answerText");
var selectionIndex  = 0;
for(var i = 1; i<answerChoices.length; i++){
	if(answerChoices[i].innerText.includes(answer)) selectionIndex = i;
}
var selection = elements[selectionIndex];
selection.className = "largecheckboxselected"; // selects checkbox
selectQuizAnswer(selection);
setTimeout(function(){document.getElementById("nextQuestion").click()},1000);
/*var seeScoreButton  = document.getElementsByClassName("kiaccountsbuttonblue")[0]; // for selecting seeScoreButton and then claimRewardButton
seeScoreButton.click();
var claimReward  = document.getElementsByClassName("buttonsubmit")[0];
claimReward.click();
document.getElementsByClassName("kiaccountsbuttongreen")[0].click();

1. https://www.wizard101.com/quiz/trivia/game/apollo-missions-trivia
2. https://www.wizard101.com/quiz/trivia/game/world-capitals-trivia
3. https://www.wizard101.com/quiz/trivia/game/big-cats-trivia
4. https://www.wizard101.com/quiz/trivia/game/ancient-egypt-trivia
5. https://www.wizard101.com/quiz/trivia/game/eleventh-grade-vocabulary-trivia
6. https://www.wizard101.com/quiz/trivia/game/ninth-grade-vocabulary-trivia
7. https://www.wizard101.com/quiz/trivia/game/greek-mythology-trivia
8. https://www.wizard101.com/quiz/trivia/game/famous-poets
9. https://www.wizard101.com/quiz/trivia/game/famous-world-leaders
10.https://www.wizard101.com/quiz/trivia/game/heart-trivia


*/

