const valid_nums = ["1","2","3","4","5","6","7","8","9"]

// INIT 

eel.build_sudoku()  
check()


// EEL FUNCTIONS

eel.expose(generate)
function generate(board) {

    var row_num = 0
    for (let row of board) {
        $curr_row = $(`.row-${row_num}`);
        
        var col_num = 0

        for (col of row) {
            var $cell = null
            if (col === "") {
                $cell = $('<input>').attr({
                    'type' : "number",
                    'min' : 1,
                    'max' : 9,
                    'oninput' : "validate_input(this)",
                })
                $cell.css("text-align", "center")
                $cell.addClass(`column-${col_num} col form-control input`)
            } else {
                $cell = $('<div>').css("caret-color", "transparent")
                $cell.html(col)
                $cell.addClass(`column-${col_num} col base`)
            }
            $curr_row.append($cell)
            col_num += 1
        }
        row_num += 1;
        col_num = 0
    }
}

eel.expose(get_difficulty)
function get_difficulty() {
    return $('#level').val()
}

eel.expose(clear_board)
function clear_board() {
    $('.row').each(function() {

        $(this).children().each(function () {
                $(this).remove()
        })
    })
}

eel.expose(reset)
function reset() {
    $('.row').each(function() {

        $(this).children().each(function () {
            if ($(this).is("input")) {
                $(this).val("")
            } 
        })
    })
}

eel.expose(check)
function check() {
    setTimeout(function () {
        $("input").focusin(function () {
            remove_color($(this))

            $curr_cell = $(this)

            $('.grid').children().each(function () {
                
                $(this).click(function () {
                
                    var input = $(this).text()
                    $curr_cell.val(input)
                
                })
            })
        }).focusout(function () {
            add_color($(this))
        })
    }, 500)
}

eel.expose(validation_msg)
function validation_msg(result){
    if (result) {
        $('#success_msg').removeClass('off')
        $('#success_msg').addClass('on')
        $("#success_msg").fadeTo(2000, 500).slideUp(500, function(){
            $("#success_msg").slideUp(500);
        });
    } else {
        $('#failure_msg').removeClass('off')
        $('#failure_msg').addClass('on')
        $("#failure_msg").fadeTo(2000, 500).slideUp(500, function(){
            $("#failure_msg").slideUp(500);
        });
    }
}

eel.expose(fill_board)
function fill_board(board) {
    var row = 0;
    $('.row').each(function() {
        var col = 0;
        $(this).children().each(function () {
            if ($(this).is("input")) {
                $(this).val(board[row][col])
                $(this).attr('disabled', 'disabled')
            } 
            col += 1;
        })
        row += 1
    })
}

eel.expose(disable_buttons)
function disable_buttons() {
    $('#check').prop("disabled", true)
    $('#solve').prop("disabled", true)
    $('#reset').prop("disabled", true)
}

eel.expose(enable_buttons)
function enable_buttons() {
    $('#check').prop("disabled", false)
    $('#solve').prop("disabled", false)
    $('#reset').prop("disabled", false)
}


// BUTTONS 

$('#check').click(function() {
    board = current_board()
    console.log(board)
    eel.validate(board)
})

$('#solve').click(function () {
    board = current_board(true)
    eel.solve(board)
})

$('#new_game').click(function () {
    eel.new_game()
})

$('#reset').click(function () {
    eel.reset()
})

// note: remove stay focused effect 
$('button').on('click', function (e) {
    $(this).blur()
})


// MAIN FUNCTIONS

function validate_input(cell) {
    if (!valid_nums.includes(cell.value)) {
        cell.value = null
    }
}

function current_board(solve=false) {
    var test_output = []
    $('.row').each(function() {
        var row = []
        $(this).children().each(function () {
            if ($(this).is("div")) {
                row.push($(this).text())
            } else if (solve) {
                row.push(".")
            } else {
                row.push($(this).val())
            }
        })
        test_output.push(row)
    })
    return test_output
}

function remove_color($cell) {
    const cell_class = `${$cell.attr('class')}`.slice(0,8)
    $(`.${cell_class}`).removeClass('base').addClass('highlight')
    $cell.removeClass('highlight').addClass('highlight_cell')
    $('input').each(function () {
        if ($(this).hasClass('highlight')) {
        $(this).removeClass('highlight').addClass('highlight_cell')
        }
    })
    $cell.parent().children().each(function () {
        if ($(this).is("input")) {
            $(this).removeClass('base').addClass('highlight_cell')
        } else {
            $(this).removeClass('base').addClass('highlight')
        }
    })
}

function add_color($cell) {
    const cell_class = `${$cell.attr('class')}`.slice(0,8)
    $(`.${cell_class}`).removeClass('highlight').addClass('base')
    $('input').each(function () {
        if ($(this).hasClass('base')) {
          $(this).removeClass('base').addClass('input')
        }
        if ($(this).hasClass('highlight_cell')) {
          $(this).removeClass('highlight_cell').addClass('input')
        }
    })
    $cell.parent().children().each(function () {
        if ($(this).is("input")) {
            $(this).removeClass('base').addClass('input')
        } else {
            $(this).removeClass('highlight').addClass('base')
        }
    })
}




