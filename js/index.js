import { Games } from "./games.js";
let games = new Games();

$(".con").fadeOut(900, function () {
  $(".lodeing").fadeOut(900);
});

$(".nav-link").on("click",function(){
  games.changeAct();
})