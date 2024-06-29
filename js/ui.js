import { Detail } from "./details.js";
let detail = new Detail();

export class UI {
  displayGames(Data) {
    let games = "";
    for (let i = 0; i < Data.length; i++) {
      let game = `<div class="col-xl-3 col-lg-4 col-md-6  bg-transparent">
              <div title="${i}" id="${
        Data[i].id
      }" class="inner border border-1 border-dark p-3 rounded wow flipInX " data-wow-offset="50" ">
                <div class="image">
                  <img src="${Data[i].thumbnail}" class="w-100 rounded" alt="">
                </div>
                <div class="block1 d-flex align-items-center justify-content-between pt-3">
                  <p class="m-0 text-white">${Data[i].title}</p>
                  <button class="btn btn-primary btnMade">Free</button>
                </div>
                <div class="block2 ">
                  <p class="m-0 w-100  parag py-4  text-light">${
                    Data[i].short_description
                      .substring(0, 45)
                      .toLocaleLowerCase() + "..."
                  }</p>
                </div>
                <div class="block3  border-top border-dark  d-flex justify-content-between  pt-3">
                  <p class="badge badge-color m-0 ">${Data[i].genre}</p>
                  <p class="badge badge-color m-0 ">${Data[i].platform}</p>
                </div>
                </div>
                
              </div>`;
      games += game;
    }
    document.getElementById("gamecont").innerHTML = games;
  }

  displayGamesCat(Category) {
    const Gurl = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`;
    const Goptions = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "cb4bd21d44mshd95d045f05b9a74p1d61a3jsn2eabb64d6746",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let category;
    try {
      fetch(Gurl, Goptions)
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          category = result;
          console.log(category);
          this.displayGames(category);
        })
        .then(() => {
          $(".inner").on("click", function (e) {
            let id = $(this).attr("id");
            detail.displayGameDetails(id);
            console.log(id);
          });
        });
    } catch (error) {
      console.error(error);
    }
  }
}
let ui = new UI();
