$(() => {
  let link = "https://swapi.dev/api/people/";
  let numOfImages = $(".carousel-images").children().length - 1;
  let currentImgIndex = 0;
  console.log(numOfImages);

  // NEXT BUTTON
  // when we click on the "next" button
  $(".next").on("click", () => {
    event.preventDefault();
    // hide the current image
    $(".carousel-images").children().eq(currentImgIndex).hide();
    // if the current image index is less than the number of images we have
    if (currentImgIndex < numOfImages) {
      // increment the image index
      currentImgIndex++;
    } else {
      // else set the image index back to 0
      currentImgIndex = 0;
    }

    // show the next image
    $(".carousel-images").children().eq(currentImgIndex).show();
  });
  // PREVIOUS BUTTON
  // When we click on the "previous" button
  $(".previous").on("click", () => {
    event.preventDefault();
    $(".carousel-images").children().eq(currentImgIndex).hide();
    if (currentImgIndex <= 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = 0;
    }
    $(".carousel-images").children().eq(currentImgIndex).show();
  });

  $.ajax({
    url: link,
    type: "GET",
    // linked API to app.js
  }).then((data) => {
    $("#card1").html(data.results[0].name).on("click", stats);
    $("#card2").html(data.results[9].name).on("click", stats);
    $("#card7").html(data.results[3].name).on("click", stats);
    $("#card3").html(data.results[4].name).on("click", stats);
  });
  $.get("https://swapi.dev/api/people/?page=2", (data) => {
    $("#card12").html(data.results[0].name).on("click", stats);
    $("#card4").html(data.results[8].name).on("click", stats);
    $("#card5").html(data.results[2].name).on("click", stats);
    $("#card6").html(data.results[3].name).on("click", stats);
    $("#card9").html(data.results[9].name).on("click", stats);
  });
  $.get("https://swapi.dev/api/people/?page=4", (data) => {
    // $('#card5').html(data.results[0].name).on('click', stats)
  });
  $.get("https://swapi.dev/api/people/?page=5", (data) => {
    $("#card8").html(data.results[2].name).on("click", stats);
  });
  $.get("https://swapi.dev/api/people/?page=7", (data) => {
    $("#card10").html(data.results[5].name).on("click", stats);
  });
  $.get("https://swapi.dev/api/people/?page=8", (data) => {
    $("#card11").html(data.results[7].name).on("click", stats);
  });

  // make a function that links the api data into card1 div

  const stats = () => {
    // because I gave the data name thats what is going to return
    const target = $(event.currentTarget).text();
    console.log(target);
    $.get("https://swapi.dev/api/people/?search=" + target, (data) => {
      const results = data.results[0];
      $("#name").text(results.name);
      $("#height").text("height: " + results.height + "cm");
      $("#mass").text("mass: " + results.mass + "kg");
      $("#birth").text("birth: " + results.birth_year);
    });
  };

  const gifs = () => {
    const target = $(event.currentTarget).append("src");
  };

  // made the modal so when you click on a card it pulls up a modal
  const $modal = $("#modal");
  const $close = $("#close");

  const openModal = () => {
    $modal.css("display", "block");
  };

  const close = () => {
    $modal.css("display", "none");
    event.preventDefault();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      close();
    }
  };

  $(".card").on("click", openModal);
  $("#close").on("click", close);
});

const library = {
  card1: {
    id: "Luke Skywalker",
    gif: "https://giphy.com/gifs/l1uguPc8TBNzHXTgc/html5",
  },
};

/* CODE GRAVEYARD








console.log(data.results)
//     for (let i = 0; i < data.results.length; i++) {
//     let $name = data.results[i].name
//     let $haircolor = data.results[i].height
//     let $mass = data.results[i].mass
//     let $birth = data.results[i].birth_year
//     console.log(data.results[i])
//
//     const $modName = $('<p>')
//     .text('name: ' + $name)
//     .appendTo($('.modal-body'))
//
//     const $modHair = $('<p>')
//     .text('haircolor: ' + $haircolor)
//     .appendTo($('.modal-body'))
// }

// $('.card').on('click', event => {

  // let getCard = $(event.target).attr('id')
  // console.log(getCard);

// const $modal = $('#modal')

//
// const openModal = () => {
//   $modal.css('display', 'block')
//   $('#card-name').text($(event.currentTarget).text())
// }
//

//
//
//

//   $closeModal.on('click', closeModal)
//   })
//
//
//
$('.card').on('click', openModal)
*/

/*
$(() => {



    let link = `https://swapi.dev/api/people/?page=1`

  $.ajax({
    url: link,
    type: 'GET',
  }).then(
    (data) => {







  // })

  const display = () => {
    const target = $(event.currentTarget).text()
    console.log(target);
    $.get('https://swapi.dev/api/people/?search=' + target, data => {
      const result = data.results[0]
      $('#name').text(result.name)
      $('#height').text('height: ' + result.height)
      $('#mass').text('mass: ' + result.mass)
      $('#birth').text('birth-year: ' + result.birth_year)
    })



    const $modal = $('#modal')

    const openModal = () => {
      $modal.css('display','block')
    }

    $('.card').on('click', openModal)

    const closeModal = () => {
      $modal.css('display', 'none')
    }

    const $closeModal = $('#close')

    window.onclick = function (event) {
        if (event.target == modal) {
          closeModal();
        }
      };
  }

*/
