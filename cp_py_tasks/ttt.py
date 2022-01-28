game_still_going = True
winner = None
current_player = "X"
#board
board = ["-","-","-",
         "-","-","-",
         "-","-","-",]
#display board
def display_board():
    print(board[0]+"|"+board[1]+"|"+board[2])
    print(board[3]+"|"+board[4]+"|"+board[5])
    print(board[6]+"|"+board[7]+"|"+board[8])

#play game
def play_game():
    #display initial board
    display_board()

    while game_still_going:
        handle_turn(current_player)
        check_if_game_over()
        flip_player()

    if winner == "X" or winner == "O":
        print(winner + " is the winner")
    else:
        print("Tie")


#handle turn
def handle_turn(player):
    position = input("choose 1-9: ")
    valid = False
    while not valid:
        while position not in ["1","2","3","4","5","6","7","8","9"]:
            position = input("Invalid input, choose 1-9: ")
        position = int(position)-1
        if board[position] == "-":
            valid = True
        else:
            print("position already occupied")
            
    board[position] = player
    display_board()

def check_if_game_over():
    check_if_win()
    check_if_tie()

def check_if_win():
    global winner
    row_winner = check_rows()
    column_winner = check_columns()
    diagonal_winner = check_diagonals()
    if row_winner:
        winner = row_winner
    elif column_winner:
        winner = column_winner
    elif diagonal_winner:
        winner = diagonal_winner
    else:
        winner = None
    return winner

def check_if_tie():
    global game_still_going
    if "-" not in board:
        game_still_going = False
    return

def check_rows():
    global game_still_going
    #check if same values in any row
    row_1 = board[0] == board[1] == board[2] != "-"
    row_2 = board[3] == board[4] == board[5] != "-"
    row_3 = board[6] == board[7] == board[8] != "-"
    if row_1 or row_2 or row_3:
        game_still_going = False
        if row_1:
            return board[0]
        elif row_2:
            return board[3]
        else:
            return board[6]
    return

def check_columns():
    global game_still_going
    #check if same values in any column
    col_1 = board[0] == board[3] == board[6] != "-"
    col_2 = board[1] == board[4] == board[7] != "-"
    col_3 = board[2] == board[5] == board[8] != "-"
    if col_1 or col_2 or col_3:
        game_still_going = False
        if col_1:
            return board[0]
        elif col_2:
            return board[1]
        else:
            return board[2]
    return

def check_diagonals():
    global game_still_going
    #check if same values in any row
    diag_1 = board[0] == board[4] == board[8] != "-"
    diag_2 = board[6] == board[4] == board[2] != "-"
    if diag_1 or diag_2:
        game_still_going = False
        if diag_1:
            return board[0]
        else:
            return board[6]
    return


def flip_player():
    global current_player
    if current_player == "X":
        current_player = "O"
    else:
         current_player = "X"
    return

play_game()
