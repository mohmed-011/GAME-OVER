export class Detail {
  displayGameDetails(id) {
    const Gurl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const Goptions = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "cb4bd21d44mshd95d045f05b9a74p1d61a3jsn2eabb64d6746",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      },
    };
    let gameData;
    try {
      fetch(Gurl, Goptions)
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          gameData = result;
          console.log(gameData);

          $("#GameDetails").removeClass("d-none");
          $("#mainSec").addClass("d-none");
          try {
            let Detail = `
    <div class="row gy-3">
          <div class=" col-md-6  wow slideInLeft" data-wow-duration="1s">
          <div class="inner2 p-3">
            <div class="image2">
              <img src="${gameData.thumbnail}" class="w-100 rounded-2" alt="" />
            </div>
            <div class="screenshots d-flex justify-content-evenly mb-4">
            <div class="image3">
              <img src="${gameData.screenshots[0].image}" class="w-100 rounded-2" alt="" />
            </div>
            <div class="image3">
              <img src="${gameData.screenshots[1].image}" class="w-100 rounded-2" alt="" />
            </div>
            <div class="image3">
              <img src="${gameData.screenshots[2].image}" class="w-100 rounded-2" alt="" />
            </div>
            </div>
            <div class="req px-2 pt-3">
              <h3 class="text-white">Minimum Requirements :</h3>
              <div class="graphics py-3 det  d-flex align-items-center"><i class="fa-solid fa-tv text-white pe-2 "></i> <p class="text-white m-0">graphics:</p> <span class="text-white m-0 ps-2">${gameData.minimum_system_requirements.graphics}</span></div>
              <div class="processor py-3 det  d-flex align-items-center"><i class="fa-solid fa-microchip text-white pe-2 "></i> <p class="text-white m-0">processor:</p> <span class="text-white m-0 ps-2">${gameData.minimum_system_requirements.processor}</span></div>
              <div class="os py-3 det  d-flex align-items-center"><i class="fa-brands fa-windows text-white pe-2 "></i> <p class="text-white m-0">os:</p> <span class="text-white m-0 ps-2">${gameData.minimum_system_requirements.os}</span></div>
              <div class="storage py-3 det  d-flex align-items-center"><i class="fa-solid fa-hard-drive text-white pe-2 "></i> <p class="text-white m-0">storage:</p> <span class="text-white m-0 ps-2">${gameData.minimum_system_requirements.storage}</span></div>
              <div class="memory py-3 det  d-flex align-items-center"><i class="fa-solid fa-memory text-white pe-2 "></i> <p class="text-white m-0">memory:</p> <span class="text-white m-0 ps-2">${gameData.minimum_system_requirements.memory}</span></div>
            </div>
          </div>
          </div>
          
          <div class=" col-md-6 wow slideInRight" data-wow-duration="1s">
          <div class="inner2 p-3 ">
            <div class="d-flex text-white mb-4">
              <h1>${gameData.title}</h1>
            </div>
            <div class="d-flex mb-4 ">
            <div >
            <p class="text-white det ">Category : <span class="badge badge-color ">${gameData.genre}</span></p>
            <p class="text-white det">publisher : <span class="badge badge-color ">${gameData.publisher}</span></p>
            <p class="text-white det">developer : <span class="badge badge-color ">${gameData.developer}</span></p>
            </div>
            <div class="ps-4" >
            <p class="text-white det">Platform : <span class="badge badge-color ">${gameData.platform}</span></p>
            <p class="text-white det">Status : <span class="badge badge-color ">${gameData.status}</span></p>
            <p class="text-white det">release_date : <span class="badge badge-color ">${gameData.release_date}</span></p>
            </div>
            </div>
            <p class="text-white description ">${gameData.description}</p>
            <a href="${gameData.game_url}" class="playGame"> Play Free
    <svg viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill-rule="evenodd"></path>
    </svg>
</a>
          </div>
          </div>         
        </div>
    `;
            document.getElementById("Details").innerHTML = Detail;
          } catch (error) {
            console.log(error);
           document.getElementById(
             "Details"
           ).innerHTML = `<h1 class="  text-white text-center "> Not available data </h1>`;
          }
     

          $("#bClose").on("click", function () {
            $("#GameDetails").addClass("d-none");
            $("#mainSec").removeClass("d-none");
          });
        })
        .then(() => {
          $(".image3 img").on("click", function () {
            let sr = this.getAttribute("src");
            let msrc = $(".image2 img").attr("src");
            console.log(sr);
            console.log(msrc);
            let temp = sr;
            sr = msrc;
            msrc = temp;
            this.setAttribute("src", sr);
            $(".image2 img").attr("src", msrc);
            $(".screenshots").addClass("justify-content-evenly");
          });
        });
    } catch (error) {
      console.error(error);
    }
  }
}
