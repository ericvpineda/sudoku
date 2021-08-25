from random import randint, shuffle

class Sudoku:

    def __init__(self):
        self.board = []
        self.new_board = []

    def solve_board(self, board):
        self.__solver__(board)
        return self.board
        
    def __solver__(self, board, rand=False):

        row, col = self.__find_position__(board)

        if (row == None):
            self.board = board             
            return True

        nums = [x for x in range(1,10)]
        shuffle(nums)        

        for i in range(1,10):

            temp = None

            if rand:

                temp = nums[i - 1]                

            else:

                temp = str(i)

            if self.__valid_placement__(row, col, temp, board):

                board[row][col] = temp

                if self.__solver__(board, rand):

                    return True

            board[row][col] = '.'

        return False

    def __find_position__(self, board):

        for x in range(9):

            for y in range(9):

                if board[x][y] == '.':

                    return x, y

        return None, None

    def __valid_placement__(self, row, col, temp, board):

        for r in board[row]:

            if r == temp: 

                return False

        for c in board:

            if c[col] == temp:

                return False

        block_r = (row // 3) * 3
        block_c = (col // 3) * 3 

        for x in range(block_r, block_r + 3):

            for y in range(block_c, block_c + 3):

                if board[x][y] == temp:

                    return False

        return True

    def is_valid_sudoku(self, board):
            valid = set()
            valid_col = set()

            for i in range(9):

                for j in range(9):

                    row = board[i][j]
                    col = board[j][i]

                    if row != '.':

                        if row in valid:
                            return False

                        valid.add(row)

                    if col != '.':

                        if col in valid_col:
                            return False

                        valid_col.add(col)

                    if not (i % 3) and not (j % 3) and i != 9 and j != 9:
                        valid_block = set() 

                        for k in range(i, i + 3):

                            for m in range(j, j + 3):
                                block = board[k][m]

                                if block != '.':

                                    if block in valid_block:
                                        return False

                                    valid_block.add(block)

                        valid_block.clear()

                valid.clear()
                valid_col.clear()

            return True
        
    def create_board(self, level):

        self.new_board = [[".", ".", ".", ".", ".", ".", ".", ".", "."] for _ in range(9)]
        self.__solver__(self.new_board, True)
        self.__add_difficulty__(self.new_board, level)
        return self.new_board

    def __add_difficulty__(self, board, level):

        to_remove = 0

        if level == "easy":
            to_remove = 2
            
        elif level == "med":
            to_remove = 4
        
        else: 
            to_remove = 6            

        for row in board:
            for _ in range(to_remove):
                select_col = randint(0, 8)
                row[select_col] = ""

  

        


            





        





