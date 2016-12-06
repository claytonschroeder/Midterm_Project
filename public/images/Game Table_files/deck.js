// var spades = [ {rank: "ace", suit: "spades"}, {rank: "2", suit: "spades"},{rank: "3", suit: "spades"},{rank: "4", suit: "spades"},{rank: "5", suit: "spades"},{rank: "6", suit: "spades"},{rank: "7", suit: "spades"},{rank: "8", suit: "spades"},{rank: "9", suit: "spades"},{rank: "10", suit: "spades"},{rank: "jack", suit: "spades"},{rank: "queen", suit: "spades"},{rank: "king", suit: "spades"}]

function cardElement(cardObj) {
  const rank = cardObj.rank;
  const suit = cardObj.suit.toLowerCase();
  const suitInitial = suit.substr(0, 1).toUpperCase()

  return `
      <img  class="${rank}${suitInitial} card"
            data-rank="${rank}"
            data-suit="${suit}"
            src="/images/${rank}_of_${suit}.png" />

  `
}

function player(cards) {
  cards = cards.map(function(card) {
    var info = card.split(":");
    var rank = info[0];
    var suit = info[1];

    var lookup = {
      "S": "spades",
      "D": "diamonds",
      "H": "hearts",
      "C": "clubs"
    }

    return { rank: rank, suit: lookup[suit] }
  });


  cards.forEach (function(card) {
    var player = cardElement(card)
    $('.player').append(player)
  });

}
function prize (cards) {
  cards = cards.map(function(card) {
    var info = card.split(":");
    var rank = info[0];
    var suit = info[1];

    var lookup = {
      "S": "spades",
      "D": "diamonds",
      "H": "hearts",
      "C": "clubs"
    }
    return { rank: rank, suit: lookup[suit] }
  });

cards.forEach (function(card) {
    var prize = cardElement(card)
    $('.prize').append(prize);
  });
};






function opponent(count) {
  var cards = [];

  for(var i = 0; i < count + 1; i += 1) {
    cards.push({rank: i, suit: "back"});
  }

  cards.forEach (function(card) {
    var backs = cardElement(card);
    $('.opponent').append(backs);
  });
}


function render(data) {
  $('.player').empty();
  $('.opponent').empty();
  $('.prize').empty();

  player(data.hand);
  opponent(data.opponent_card_count);
  prize(data.board.prize);
}

$(function() {

  // remove when api is available
  // GET /games/:id

  function getData() {
    var hand = [];
    var prize = [];

    for(var i = 1; i < 14; i += 1) {
      hand.push(i + ":S");
    }
    for(var j = 1; j < 2; j += 1) {
      prize.push(j + ":D");
    }

    return {
      opponent_card_count: 13, // contain the number of cards that the opponent has
      hand: hand, // contain only the local players cards as an array
      board: {
        prize: prize,
        host_card: '',
        guest_card: ''
      }
    }
  }

  // $.ajax({
  //   url: "/games/:game_id",
  //   method: "GET"
  // }).success(function(data) {
  //   render(data);
  // })

  render(getData());
  setTimeout(dealCards,100);
  setTimeout(dealOpponentCards,1000);

  $('.card').click(function() {
    // $('.card').slideUp();
    // $('.card').animate({right: "-=375px"});
    // $('.card').animate({top: "+=113px"});
    // $('.card').slideDown();
    console.log("cardeventhander");
  });




});


function dealCards() {
  $('.player .card').each(function () {

    var distFromLeft = ($(this).data('rank') - 1) * ($(this).width() + 5);
    $(this).css('left',`${distFromLeft}px`);
  });

}

function dealOpponentCards() {
  $('.opponent .card').each(function () {

    var distFromLeft = ($(this).data('rank') - 1) * ($(this).width() + 5);
    $(this).css('left',`${distFromLeft}px`);
  });

}










    // $('.2S').click(function() {
    //   $('.2S').slideUp();
    //   $('.2S').animate({right: "-=290px"});
    //   $('.2S').animate({top: "+=113px"});
    //   $('.2S').slideDown();
    //     });
    // $('.3S').click(function() {
    //   $('.3S').slideUp();
    //   $('.3S').animate({right: "-=200px"});
    //   $('.3S').animate({top: "+=113px"});
    //   $('.3S').slideDown();
    //     });
    // $('.4S').click(function() {
    //   $('.4S').slideUp();
    //   $('.4S').animate({right: "-=110px"});
    //   $('.4S').animate({top: "+=113px"});
    //   $('.4S').slideDown();
    //     });
    // $('.5S').click(function() {
    //   $('.5S').slideUp();
    //   $('.5S').animate({right: "-=20px"});
    //   $('.5S').animate({top: "+=113px"});
    //   $('.5S').slideDown();
    //     });
    // $('.6S').click(function() {
    //   $('.6S').slideUp();
    //   $('.6S').animate({right: "+=70px"});
    //   $('.6S').animate({top: "+=113px"});
    //   $('.6S').slideDown();
    //     });
    // $('.7S').click(function() {
    //   $('.7S').slideUp();
    //   $('.7S').animate({right: "+=160px"});
    //   $('.7S').animate({top: "+=113px"});
    //   $('.7S').slideDown();
    //     });
    // $('.8S').click(function() {
    //   $('.8S').slideUp();
    //   $('.8S').animate({right: "+=150px"});
    //   $('.8S').animate({top: "+=113px"});
    //   $('.8S').slideDown();
    //     });
