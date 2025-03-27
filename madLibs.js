console.log("JavaScript is connected!");

const timeOfNight = "stormy night";
const place = "haunted house";
const ghostType = "giant cat";
const objectSound = "creaking walls";
const emotion = "chills";

const mathResult = 10 - 7;

const isNightTime = timeOfNight.includes("night");

const ghost = {
    name: "Moose",
    eyeColor: "glowing yellow",
    age: 666
};

const story = `
On a ${timeOfNight}, I ventured into the ${place}.
The ${objectSound} seemed to whisper, sending ${emotion} down my spine.
Suddenly, a ${ghostType} named ${ghost.name} appeared, its ${ghost.eyeColor} eyes piercing through the darkness.
My heart raced as it floated silently toward me. 

Did you know 10 - 7 equals ${mathResult}? Spooky, right?

Was it night time? ${isNightTime ? "Yes" : "No"}.
`;

document.getElementById("madLibs-output").textContent = story;

console.log(story);