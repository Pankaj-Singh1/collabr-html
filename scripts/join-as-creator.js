const rand1imgs = [
  "https://img.freepik.com/free-photo/collage-people-using-reels_23-2149416508.jpg?w=360&t=st=1707405453~exp=1707406053~hmac=0ecd35236528a94f2169a4bae7ea1ae6d290653c862b31b262c5bb0660d01eef",
  "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg?w=740&t=st=1707405465~exp=1707406065~hmac=78b246cabd297873a9f84d276adff79a114d2a820b037b57953a730b5d8a3be3",
  "https://img.freepik.com/free-photo/attractive-girl-fashionable-outfit-creats-influence-content-shows-peace-sign-smartphone-front-camera-poses-selfie-smiles-gladfully-poses-urban-place-spends-vacation-big-city_273609-56229.jpg?w=740&t=st=1707405484~exp=1707406084~hmac=696b3e7099dc0b58bbde18fc5c55bc828b00e55c533183f55b53ca0cc9d3c270",
];

const rand2imgs = [
  "https://img.freepik.com/free-photo/influencer-marketing-job-concept_23-2150410521.jpg?w=740&t=st=1707405504~exp=1707406104~hmac=cc298b33d3e7ed25be842f159971374080c4c5ce192c3c4a943732c117fabe39",
  "https://img.freepik.com/free-photo/young-woman-watching-live-stream_53876-102030.jpg?w=900&t=st=1707405520~exp=1707406120~hmac=99e2ee62b4aaffc3140b1efe3fe15933169259ae97a8ab01c7cd44f9b1faec5b",
  "https://img.freepik.com/free-photo/smiling-female-influencer-talking-about-beauty-products-while-vlogging-from-home_637285-4353.jpg?w=740&t=st=1707405537~exp=1707406137~hmac=e17a38a2518d7ad1469b17eb29ee4f3b9a9072746bddc95241967e9f17049ffa",
];

const rand4imgs = [
  "https://img.freepik.com/free-photo/influencer-marketing-collage_23-2150851646.jpg?w=360&t=st=1707406480~exp=1707407080~hmac=ddd5e0697e3916c4fbfc45a036e7fa1f5b5e78a777853795a5c8370eec77905b",
  "https://img.freepik.com/free-photo/man-riding-his-bicycle-outdoors-city_23-2150816029.jpg?t=st=1707406521~exp=1707410121~hmac=6357cd1cc08c0c4b681e92d7d6e7e876c2ca2b74ff4cbcdbe3af7ce91a49ff32&w=740",
  "https://img.freepik.com/free-photo/blonde-woman-blogger-is-showing-how-make-up-use-cosmetics_496169-366.jpg?w=740&t=st=1707406495~exp=1707407095~hmac=e1e5f979d23f8abd9272500850be72653cf6d0b05a728effce5d72bf7a8e838d",
];
const rand3imgs = [
  "https://img.freepik.com/free-photo/medium-shot-woman-influencer-marketing_23-2150521889.jpg?w=740&t=st=1707406556~exp=1707407156~hmac=7446d06b78ca7b29645659c0466fea7b7eca13ac61107db6bf71cf598186fec7",
  "https://img.freepik.com/free-photo/young-adult-businessman-recording-studio-illuminated-generated-by-ai_188544-29255.jpg?t=st=1707406577~exp=1707410177~hmac=eeabfbf0ef5c2df17376fb6b3c9c3eff4e5fa79d9901fd588fd6099c8e342bd2&w=826",
  "https://img.freepik.com/free-photo/woman-stands-front-mobile-phone-camera-shoots-influence-video-blog-makes-selfie-uses-modern-technologies-dressed-casual-green-jumper_273609-55348.jpg?w=360&t=st=1707406597~exp=1707407197~hmac=254bd25ded6a540a7b0666233f2f30f2b392e2d8b6aa3373c31ea32cb54e3ed0",
];
const randNames1 = ["jamescole", "michaeljordan", "sylvester", "jennie"];
const randNames2 = ["temmy", "daniel", "jeremiah", "sandra"];
const randNames3 = ["emily", "jones", "gerald", "queen"];
const randNames4 = ["pearl_", "raymond", "festus", "johnson"];

// interval

// Get all Dom elements

// Images
const image1 = document.getElementById("image1");

const image2 = document.getElementById("image2");

const image3 = document.getElementById("image3");

const image4 = document.getElementById("image4");

// Names

const name1 = document.getElementById("name1");

const name2 = document.getElementById("name2");

const name3 = document.getElementById("name3");

const name4 = document.getElementById("name4");

// Followers

const followers1 = document.getElementById("followers1");

const followers2 = document.getElementById("followers2");

const followers3 = document.getElementById("followers3");

const followers4 = document.getElementById("followers4");

// --------------------------------------------------------

const intervalId = setInterval(() => {
  const newIndex = Math.floor(Math.random() * rand1imgs.length);
  image1.src = rand1imgs[newIndex];
  name1.textContent =
    "@" + randNames1[Math.floor(Math.random() * randNames1.length)];
  followers1.textContent = newIndex + 0.01 + newIndex + 1 + "Followers";
}, 3000);

const intervalId1 = setInterval(() => {
  const newIndex = Math.floor(Math.random() * rand2imgs.length);
  image2.src = rand2imgs[newIndex];
  name2.textContent =
    "@" + randNames2[Math.floor(Math.random() * randNames2.length)];
  followers2.textContent = newIndex + 0.01 + newIndex + 2 + "Followers";
}, 3000);

const intervalId2 = setInterval(() => {
  const newIndex = Math.floor(Math.random() * rand3imgs.length);
  image3.src = rand3imgs[newIndex];
  name3.textContent =
    "@" + randNames3[Math.floor(Math.random() * randNames3.length)];
  followers3.textContent = newIndex + 0.01 + newIndex + 2 + "Followers";
}, 3000);

const intervalId3 = setInterval(() => {
  const newIndex = Math.floor(Math.random() * rand4imgs.length);
  image4.src = rand4imgs[newIndex];
  name4.textContent =
    "@" + randNames4[Math.floor(Math.random() * randNames4.length)];
  followers4.textContent = newIndex + 0.01 + newIndex + 3 + "Followers";
}, 3000);

//
