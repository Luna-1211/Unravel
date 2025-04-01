function Confirm() {
  document.getElementById("leave_warning").style.display = "block";
}

function Stay() {
  document.getElementById("leave_warning").style.display = "none";
}

function Acad(){
  
}

function Library(){
  
}

function RF(){
  
}

function Store(){
  
}

function Cshop(){
  
}

const preloaderTexts = [
{
title: "Caster Ambrose",
description: "A young competative learner from the house of the wealthy family of the Grand Ambrose. Rumor has it that she will be the next head of the family instead of her older brother Frederick Ambrose."
},
{
title: "The Kairosphere",
description: "A powerful machine capable of jumping to different rifts of time. Though it may be useful to understand things that existed in ancient times, Dr. Cire seems to have a different use of this machinery."
},
{
title: "STEEAMY",
description: "Dr. Cire little metal assistant. While everyone is curious on how he functions, he seems to be also interested on knowing how human beings live their life everyday and hopes that he can experience it aswell."
},
{
title: "Dr. Cire",
description: "A pure genius and a well-known philosopher, popular for his books and teaching capabilities. He prioritises knowledge over everything, even family. Dr. Cire has made works of art that brought benefits to the human race, and one of his most recent works is a time-travelling machine that he named The Kairosphere."
},
{
title: "The Event Rift",
description: "These are massive holes that randomly appear when time travelling, Dr. Cire conludes that these are real danger to any time travellers. He theorizes that anything that gets suck into it will be erased out of existance and never to return. Though no one knows if this is true, no one also wants verify it."
}
];

const preloaderTextElement = document.getElementById("preloader-text");

const randomIndex = Math.floor(Math.random() * preloaderTexts.length);
const selectedText = preloaderTexts[randomIndex];

preloaderTextElement.innerHTML = `<h1>${selectedText.title}</h1><p>${selectedText.description}</p>`;

setTimeout(function() {
const preloaderElement = document.getElementById("preloader");
preloaderElement.style.display = "none";
}, 6000);

function Play() {
  window.location.replace('/Scene 1/scene_1.html');
}