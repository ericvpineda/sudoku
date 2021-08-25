from django.http.response import HttpResponse
from django.shortcuts import render
import django_eel as eel
from .utils.sudoku import *

eel.init('sudoku/templates/sudoku')

# eel.start('sudoku/main', size=(300,200))
@eel.expose
def build_sudoku():
    level = eel.get_difficulty()
    board = Sudoku().create_board(level())
    eel.generate(board)
    eel.check()

@eel.expose 
def validate(board):
    result = Sudoku().is_valid_sudoku(board)
    eel.validation_msg(result)

@eel.expose
def solve(board):
    solution = Sudoku().solve_board(board)
    eel.fill_board(solution)
    eel.disable_buttons()

@eel.expose
def new_game():
    eel.clear_board()
    build_sudoku()
    eel.enable_buttons()

@eel.expose
def reset():
    eel.reset()

# Create your views here.
def main(requests):

    # global count

    return render(requests, "sudoku/main.html")