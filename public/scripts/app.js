// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/games"
//   }).done((games) => {
//     console.log(games);
//     for(game of games) {
//       createGameElement(game).appendTo($("#games-container"));
//     }
//   });;
// });



// function createGameElement(game) {
//    //create variabled for gameer data,
//    //used to append to html elements

//    var userID = 1;

//    var name = game.type;
//    var turnID = game.whose_turn;
//    var hostID = game.host_id;
//    var guestID = game.guest_id;
//    var hostName = game.host_name;
//    var guestName = game.guest_name;

//    var avatar = "/images/suits.png";


//    var playingAgainst;

//    if (userID === hostID){
//     playingAgainst = guestName;
//    } else if (userID === guestID){
//     playingAgainst = hostName;
//    } else {
//     playingAgainst = "nobody";
//    }

//    var turnName;

//    if (turnID === hostID) {
//     turnName = hostName;
//    } else if (turnID === guestID) {
//     turnName = guestName;
//    } else {
//     turnName = "nobody"; //should never come in here
//    }

//    var turnMessage = (turnID === userID) ? "It's your turn!" : "Waiting for "+ turnName +"\'s turn";



//    //to be appended to #game-container
//    var $game = $("<article>").addClass("game");//.append(gameData.context.text);
//    //to be appended to $game
//    var $header = $("<header>");
//    // var $body = $("<p>");
//    // var $footer = $("<footer>");
//    //to be appended to $header
//    var $avatar = $("<img>").attr("src", avatar);  //.addClass("img").append(gameData.user.avatars);
//    var $name = $("<text>").append(name);
//    var $player = $("<text>").append("against ", playingAgainst);
//    var $turn = $("<text>").append(turnMessage);
//    //to be appended to $footer
//    //footer children appended to footer
//    //header children appended to
//    ($avatar).appendTo($header);
//    ($name).appendTo($header);
//    $('<br>').appendTo($header);
//    ($player).appendTo($header);
//    $('<br>').appendTo($header);

//    ($turn).appendTo($header);

//    //append header to game article
//    ($header).appendTo($game);
//    // ($body).appendTo($game);
//    // ($footer).appendTo($game);

//    return $game;
//  };

