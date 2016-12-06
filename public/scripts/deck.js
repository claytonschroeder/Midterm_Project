gameState = {
  id: 0,
  host_id: 0,
  player_card: ""
}

var player_card = ""



function cardElement(cardObj) {
  const rank = cardObj.rank;
  const suit = cardObj.suit.toLowerCase();
  const suitInitial = suit.substr(0, 1).toUpperCase()

  return `
      <img  class="${rank}${suitInitial} card"
            data-rank="${rank}"
            data-suit="${suit}"
            data-cardid="${rank}${suitInitial}"
            src="/images/${rank}_of_${suit}.png" />

  `
}

function player(cards) {
  cards = cards.map(function(card) {
    var rank = card.slice(0,-1);
    var suit = card.slice(-1)

    var lookup = {
      "S": "spades",
      "D": "diamonds",
      "H": "hearts",
      "C": "clubs"
    }

    return { rank: rank, suit: lookup[suit] }
  });


  cards.forEach(function(card) {
    var player = cardElement(card)
    $('.player').append(player)
  });

}

function prize(cards) {
  cards = cards.map(function(card) {
    var rank = card.slice(0,-1);
    var suit = card.slice(-1)

    var lookup = {
      "S": "spades",
      "D": "diamonds",
      "H": "hearts",
      "C": "clubs"
    }
    return { rank: rank, suit: lookup[suit] }
  });

  cards.forEach(function(card) {
    var prize = cardElement(card)
    $('.prize').append(prize);
  });
};

function opponentCard(cards) {
  cards = cards.map(function(card) {
    var rank = card.slice(0,-1);
    var suit = card.slice(-1)

    var lookup = {
      "S": "spades",
      "D": "diamonds",
      "H": "hearts",
      "C": "clubs"
    }
    return { rank: rank, suit: lookup[suit] }
  });

  cards.forEach(function(card) {
    var opponentPlayed = cardElement(card)
    $('.opponentCard').append(opponentPlayed);
  });
};



function opponent(count) {
  var cards = [];

  for (var i = 1; i <= count; i += 1) {
    cards.push({ rank: i, suit: "back" });
  }

  cards.forEach(function(card) {
    var backs = cardElement(card);
    $('.opponent').append(backs);
  });
}


function render(data) {
  $('.player').empty();
  $('.opponent').empty();
  $('.prize').empty();
  $('.opponentCard').empty().text('7S');

  function sendCard() {
    var game_url = window.location.pathname

    $.ajax({

    type: 'POST',
    url: game_url,
    data: player_card,
    processData: false,
    success: function() {
      console.log("sent!")
    }
  });
};

  player(data.hand);
  opponent(data.opponent_card_count);
  prize(data.board.prize);
  $(document).on('click', '.player .card', function() {
    player_card = ($(this).data('cardid'))
    $('opponentCard').slideUp()
    sendCard();
    $(document).off('click', '.player .card')
    wait();
    function wait() {
      if (data.board.guest_card = 0) {
        data.board.guest_card = '7S'
        opponentCard;
      }
    }





  });

}

$(function() {


  function GetGame(url) {

    var game_url = window.location.pathname + "/state"



    $.ajax({

      url: game_url,
      method: "GET"}).done(
      function(data) {
        render(data);
      });
    }


    function refresh() {
      var game_url = window.location.pathname + "/state"


      $.ajax({

      url: game_url,
      method: "GET"}).done(
      function(data) {
        // debugger
        if (data.board.host_card === player_card) {
          return
        }
        if (data.board.guest_card != 0) {
          return
        }

        else {





          render(data)
          setTimeout(dealOpponentCard, 50);
          setTimeout(dealCards, 100);
          setTimeout(dealOpponentCards, 900);
          setTimeout(dealPrize, 2250);

          $(document).on('click', '.player .card', function() {
          $(this).css('left', '405px');
          $(this).css('top', '250px');
          gameState.player_card = ($(this).data('cardid'))
          setTimeout(dealOpponentCard, 50);
          $('.opponent .card').last().slideUp()
          $(document).off('click', '.player .card')
        });

        }
      });
        console.log('refreshed');


      setTimeout(refresh,8000);

      };








$(document).on('click', '.compose', function() {
    window.location.href='/';
});


  GetGame();
  refresh();
  setTimeout(dealCards, 100);
  setTimeout(dealOpponentCards, 900);
  setTimeout(dealPrize, 2250);

  $(document).on('click', '.player .card', function() {
    $(this).css('left', '405px');
    $(this).css('top', '250px');
    gameState.player_card = ($(this).data('cardid'))
    setTimeout(dealOpponentCard, 50);
    $('.opponent .card').last().slideUp()
    $(document).off('click', '.player .card')


  });





















function dealCards() {
  $('.player .card').each(function() {

    var distFromLeft = ($(this).data('rank') - 1) * ($(this).width() + 5);
    $(this).css('left', `${distFromLeft}px`);
  });

}

function dealOpponentCards() {
  $('.opponent .card').each(function() {

    var distFromLeft = ($(this).data('rank') - 1) * ($(this).width() + 5);
    $(this).css('left', `${distFromLeft}px`);
  });

}

function dealPrize() {
  $('.prize .card').each(function() {

    var distFromLeft = $(this).data('rank') * ($(this).width() -78) + 550
    $(this).css('left', `${distFromLeft}px`);
  });

}

function dealOpponentCard() {
  $('.opponentCard .card').each(function() {

    var distFromLeft = $(this).data('rank') * ($(this).width() -82) + 690
    $(this).css('left', `${distFromLeft}px`);
    $(this).css('top', '250px')
  });

}

});
