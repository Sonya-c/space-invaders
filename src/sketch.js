let squid, crab, octopus, cannon;

function preload() {
  squid = loadAnimation(
    "src/img/squid_1.png",
    "src/img/squid_2.png"
  );
}

function setup() {
  createCanvas(400, 400);
  squid.frameDelay = 10;
}

function draw() {
  clear();
  animation(squid, 250, 80);
}
