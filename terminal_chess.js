/***** loop terminating variable****/
var game_status = true;
/***** Squares lol *****/
var white_top = "▒▒▒▒▒";
var white_middle_left = "▒▒";
var white_middle_right = "▒▒";
var black_top = "░░░░░";
var black_middle_left = "░░";
var black_middle_right = "░░";

/***** Pieces Unicodes  ******/
var rook_b = "\u2656";
var knight_b = "\u2658";
var bishop_b = "\u2657";
var queen_b = "\u2655";
var king_b = "\u2654";
var pawn_b = "\u2659";

var rook_w = "\u265C";
var knight_w = "\u265E";
var bishop_w = "\u265D";
var queen_w = "\u265B";
var king_w = "\u265A";
var pawn_w = "\u265F";

/***** rows of the board with/without chessmen ******/
var r_8 = [rook_b, knight_b, bishop_b, queen_b, king_b, bishop_b, knight_b, rook_b];
var r_7 = [pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b];
var r_6 = ["▒","░","▒","░","▒","░","▒","░"];
var r_5 = ["░","▒","░","▒","░","▒","░","▒"];
var r_4 = ["▒","░","▒","░","▒","░","▒","░"];
var r_3 = ["░","▒","░","▒","░","▒","░","▒"];
var r_2 =  [pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w];
var r_1 = [rook_w, knight_w, bishop_w, queen_w, king_w, bishop_w, knight_w, rook_w];

/**** captured chessmen ****/
var whites_captured_pieces = [];
var blacks_captured_pieces = [];


function drawRowW(pieces, row_num){ 
    //draws a row beginning with a white square
    console.log("   "+white_top+black_top+white_top+black_top+white_top+black_top+white_top+black_top);
    console.log(row_num+"  " + white_middle_left + pieces[0] + white_middle_right + black_middle_left + pieces[1] + black_middle_right + white_middle_left + pieces[2] + white_middle_right + black_middle_left + pieces[3] + black_middle_right + white_middle_left + pieces[4] + white_middle_right + black_middle_left + pieces[5] + black_middle_right + white_middle_left + pieces[6] + white_middle_right + black_middle_left + pieces[7] + black_middle_right);
    console.log("   " + white_top+black_top+white_top+black_top+white_top+black_top+white_top+black_top);
}

function drawRowB(pieces, row_num){
    //draws a row beginning with a black square
    console.log("   " +black_top+white_top+black_top+white_top+black_top+white_top+black_top+white_top);
    console.log(row_num + "  " + black_middle_left + pieces[0] + black_middle_right + white_middle_left + pieces[1] + white_middle_right + black_middle_left + pieces[2] + black_middle_right + white_middle_left + pieces[3] + white_middle_right + black_middle_left + pieces[4] + black_middle_right + white_middle_left + pieces[5] + white_middle_right + black_middle_left + pieces[6] + black_middle_right + white_middle_left + pieces[7] + white_middle_right);
    console.log("   " + black_top+white_top+black_top+white_top+black_top+white_top+black_top+white_top);
}

function drawBoard(pieces){
    console.log('                                                ');
    console.log('                ◈ THE WIZARD ◈       (HARD)              ');
    console.log('\u265B \u265B \u265B');//taken pieces
    drawRowW(r_8, 8);
    drawRowB(r_7, 7);
    drawRowW(r_6, 6);
    drawRowB(r_5, 5);
    drawRowW(r_4, 4);
    drawRowB(r_3, 3);
    drawRowW(r_2, 2);
    drawRowB(r_1, 1);
    console.log('     a    b    c    d    e    f    g    h      ');
    console.log('\u2659\u2659\u2659\u2659\u2659');//taken pieces
    console.log('   ▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩');
    console.log('                     MOVES                      ');
    console.log('   ▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩');
    console.log(' move command example: d2d3                                 ' + "\n"); //moves
}


function parseMove(text){
    var starting_file = text.charAt(0);
    var starting_row = text.charAt(1);

    var destination_file = text.charAt(2);
    var destination_row =  text.charAt(3);

    var start_row = convertRow(starting_row);
    var destine_row = convertRow(destination_row);
    console.log(start_row[convertFile(starting_file)]);

    function changeSquare(row_bin, location, action, new_piece){
        if(action == "from" && (location % 2 == 0)){
            row_bin.splice(location, 1, "░");
        }
        if(action == "from" && (location % 2 !== 0)){
            row_bin.splice(location, 1, "▒");
        }
        if(action == "to"){
            row_bin.splice(location, 1, new_piece);
        }
    }

    changeSquare(destine_row, convertFile(destination_file),"to", start_row[convertFile(starting_file)]);
    changeSquare(start_row, convertFile(starting_file), "from");
    drawBoard();

    function convertRow(str){
        switch (str){
            case "1":
                return r_1;
            case "2":
                return r_2;
            case "3":
                return r_3;
            case "4":
                return r_4;
            case "5":
                return r_5;
            case "6":
                return r_6;
            case "7":
                return r_7;
            case "8":
                return r_8;
        }
    }

    function convertFile(str){
        switch(str){
            case "a":
                return 0;
            case "b":
                return 1;
            case "c":
                return 2;
            case "d":
                return 3;
            case "e":
                return 4;
            case "f":
                return 5;
            case "g":
                return 6;
            case "h":
                return 7;
        }
    }
}

while(game_status){

    console.clear();
    drawBoard();

    var current_move = prompt('\nENTER MOVE >');

    parseMove(current_move);

    if(current_move == "exit"){
        game_status = false;
        break;
    }

}