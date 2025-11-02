// Basic "random phrase on click" sketch
// Replace the example phrases with your own list

let phrases = [
  "Kiss your partners neck but the can't touch you",
  "Use each other as a human plate, peanut butter, chocolate sauce, whatever takes your fancy! ",
  "Take a shot on their body, place salt on the neck, lime slice in their mouth and pour a little drink on their belly and shoot your way up. Or remove a piece of your clothing",
  "Draw something on your partners body, but with hickeys",
  "Give your partner a lap dance",
  "Feed your partner using only your mouth",
  "Perform a sexy pole dance with a broom or a mop",
  "Remove a piece of clothing from your partners body using only your mouth, no touching",
  "Blind fold and tease your partner by rubbing ice cubes over their body. Circle the ice cubes around their nipples, belly, inner thighs and wherever you like",
  "Turn on some sensual music and give your partner a striptease for at least a minute",
  "Put molten, chocolate or anything on the navel and eat/lick it",
  "Ask your partner to kiss their favorite part of your body.",
  "Spell the alphabet with your tongue somewhere on their body and ask them to guess it",
  "Describe how you masturbate or how an orgasm feels or remove a piece of your clothing",
  "Whisper naughty fantasies in your partner’s ear, with most seductive tone you can",
  "Stand against the wall and let your partner search your body",
  "Give your partner a hickey in a private place",
  "Do 5 push-ups on top of your partner",
  "Unzip your partner’s pants without using your hands or remove a piece of your clothing",
  "Lick and kiss your partner’s inner thighs",
  "Tie your partner’s hands and tease them orally",
  "Go to bathroom/bedroom and send your naughty pic to your partner",
  "Using you fingers, find a way to give your partner goosebumps",
  "Give your partner a sensual massage, starting from feet work your way up",
  "Demonstrate a move on your partner that you saw and liked while watching porn",
  "For next 60 seconds touch your partner like you'd like them to touch you.",
  "For next 60 seconds touch yourself like you'd like your partner to touch you",
  "Go into the other room and dab perfume or cologne somewhere on your body. Your partner have to sniff everywhere until they figure out where u put it on.",
  "Ask your partner to put a trail of sugar from back of your neck down to waist. Now ask them to lick it off",
  "Take off the bra using your mouth only, no touching",
  "Tie your partners wrist together above their head. Touch them slowly, no kissing allowed.",
  "Put on a timer and act out as many sexual positions as you can with your clothes on",
  "Reenact the a kiss scene from a movie. For inspo, you could try spiderman, Notebook",
  "Touch your partner, but with their underpants on",
  "Do something to your partner that you have been fantasizing about",
  "Find something sweet to swipe across their lips and give them a passionate kiss",
  "Play with their hair. hold it harder as you kiss them",
  "Simulate two part their body at one, use hands on one and lips on another",
  "Using your mouth make your way from wrist to their ear. Take your time!",
  "Kiss a part of their body you don't usually kiss",
  "Use your hand and put it on a part of their body they'd like u to pay more attention to. Ask them to guide you and show how they want to be touched",
  "Nibble on to their nipples "
];

let currentPhrase = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  fill("#c00000");
  pickRandomPhrase(); // pick first phrase
  noLoop(); // we’ll redraw manually
  displayPhrase();
}

function draw() {
  // left empty (we use displayPhrase() instead)
}

function displayPhrase() {
  background(0);
  textSize(windowWidth / 10); // scales text size to screen width
  let margin = width * 0.05;
  let boxWidth = width - margin * 2;
  text(currentPhrase, margin, margin, boxWidth, height); // auto-wrap text
}

function mousePressed() {
  pickRandomPhrase();
  displayPhrase();
}

function pickRandomPhrase() {
  currentPhrase = random(phrases);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  displayPhrase();
}