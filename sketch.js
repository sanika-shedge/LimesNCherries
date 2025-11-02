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
let cardX = 0, targetCardX = 0;
let animating = false;
let swipeStartX = null;
let started = false; // NEW: start screen flag

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Helvetica");
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  noStroke();
  document.addEventListener("touchmove", e => e.preventDefault(), { passive: false }); // iOS safe
}

function draw() {
  background("#2f2f2f"); // slate gray background

  if (!started) {
    // ---- Start screen ----
    fill(0);
    let cardMargin = width / 25;
    let cardWidth = width - cardMargin * 2;
    let cardHeight = height - cardMargin * 2;
    rect(cardMargin, cardMargin, cardWidth, cardHeight, 25);

    fill("#c00000");
    textAlign(CENTER, CENTER);
    textSize(width / 8);
    text("Swipe to Start", width / 2, height / 2);
    textAlign(LEFT, TOP);
    return;
  }

  // ---- Main card display ----
  cardX = lerp(cardX, targetCardX, 0.25);

  let cardMargin = width / 25;
  let cardWidth = width - cardMargin * 2;
  let cardHeight = height - cardMargin * 2;

  fill(0);
  rect(cardX + cardMargin, cardMargin, cardWidth, cardHeight, 25);

  // Dynamic text size
  let textSizeValue = width / 10;
  textSize(textSizeValue);

  fill("#c00000");
  let textMargin = cardMargin + width / 15;
  let textBoxWidth = cardWidth - width / 7;
  text(currentPhrase, cardX + textMargin, cardMargin + width / 10, textBoxWidth, cardHeight - width / 10);

  if (abs(cardX - targetCardX) < 1 && animating) {
    animating = false;
    cardX = 0;
    targetCardX = 0;
    pickRandomPhrase();
  }
}

// Swipe gesture
function touchStarted() {
  swipeStartX = mouseX;
}

function touchEnded() {
  if (swipeStartX === null) return;
  let delta = mouseX - swipeStartX;

  if (!started && abs(delta) > 50) {
    // Start the experience
    started = true;
    pickRandomPhrase();
    swipeStartX = null;
    return;
  }

  if (abs(delta) > 50 && !animating && started) {
    animating = true;
    targetCardX = delta > 0 ? width : -width;
  }

  swipeStartX = null;
}

// Desktop mouse equivalents so the Start screen works with a click/drag
function mousePressed() {
  swipeStartX = mouseX;
}

function mouseReleased() {
  if (swipeStartX === null) return;
  let delta = mouseX - swipeStartX;

  if (!started && abs(delta) > 50) {
    started = true;
    pickRandomPhrase();
    swipeStartX = null;
    return;
  }

  if (abs(delta) > 50 && !animating && started) {
    animating = true;
    targetCardX = delta > 0 ? width : -width;
  }

  swipeStartX = null;
}

// Allow a simple click/tap to start (useful for desktop and accessibility)
function mouseClicked() {
  if (!started) {
    started = true;
    pickRandomPhrase();
  }
}

// Utility
function pickRandomPhrase() {
  currentPhrase = random(phrases);
}

// Handle resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}