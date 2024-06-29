import { UI } from "./ui.js";
let ui = new UI();

export class Games {
    constructor(){
        ui.displayGamesCat("MMORPG");
    }
  changeAct = () => {
    $(".nav-link").on("click", function () {

        $(".lodeing").css({ display: "flex" });
        $(".con").css({ display: "block" });

        $(".con").fadeOut(400, function () {
            $(".lodeing").fadeOut(400);
        });

      let Categ = this.innerHTML;
      ui.displayGamesCat(Categ);

      $(".nav-link").removeClass("active");
      $(this).addClass("active");
      
    });
  };

}
