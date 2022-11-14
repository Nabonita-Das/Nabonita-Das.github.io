import { helloSpeaker } from "./SpeakHello.js";
import { goodbyeSpeaker } from "./SpeakGoodBye.js";

function myfunction () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var firstLetter ="j";
 
  for (var i = 0; i < names.length; i++) {
  
    var firstLetter = names[i].charAt(0).toLowerCase();
  
   
    if (firstLetter === 'j') {
      goodbyeSpeaker(names[i]);
    } else {
      helloSpeaker(names[i]);

  
    }
  }
  
  };

myfunction ();
