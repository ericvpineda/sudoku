import $ from 'jquery'


function get_difficulty() {
    const level = $('#level').val()
    if (level === undefined) {
        return "easy"
    }
    return level;
}

function clear_board() {
    $('.row').each(function() {
        $(this).children().each(function () {
            $(this).val("")
            $(this).removeClass('form-control input base') 
        })
    })
}

function reset() {
    $('.row').each(function() {
        $(this).children().each(function () {
            if ($(this).hasClass("input")) {
                $(this).val("")
            } 
        })
    })
}

function highlight() {
    setTimeout(function () {
        $(".input").on("focus", function (event) {
            
            remove_color($(this))
            // var $curr_cell = $(this)

            // $('.grid').children().each(function () {
                
            //     $(this).on('click', function () {
                
            //         var input = $(this).text()

            //         if ($curr_cell != null) {
            //             $curr_cell.val(input)
            //             $curr_cell = null
            //         }

            //         // console.log($curr_cell)
            //     })

            // })
            
            
        }).on('focusout', function () {
            add_color($(this))
        })
    }, 500)
}

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

function fill_board(board, solution) {
    var row = 0;
    
    $('.row').each(function() {
        var col = 0;
        $(this).children().each(function () {

            var value = board[row][col]
            $(this).val(value)

            if (!solution) {
                if (value === "") {
                    $(this).addClass('form-control input')
                } else {
                    $(this).addClass('base')
                }
                $(this).removeAttr('disabled')
            } else {
                $(this).attr('disabled', 'disabled')
            }
            col += 1;
        })
        row += 1
    })
}

function disable_buttons() {
    $('#check').prop("disabled", true)
    $('#solve').prop("disabled", true)
    $('#reset').prop("disabled", true)
}

function enable_buttons() {
    $('#check').prop("disabled", false)
    $('#solve').prop("disabled", false)
    $('#reset').prop("disabled", false)
}




// // MAIN FUNCTIONS

function remove_color($cell) {
    const cell_class = `${$cell.attr('class')}`.slice(0,8)
    
    $(`.${cell_class}`).removeClass('base').addClass('highlight')
    
    $cell.removeClass('highlight').addClass('highlight_cell')
    
    $('.input').each(function () {
        if ($(this).hasClass('highlight')) {
        $(this).removeClass('highlight').addClass('highlight_cell')
        }
    })
    
    $cell.parent().children().each(function () {
        if ($(this).hasClass("input")) {
            $(this).removeClass('base').addClass('highlight_cell')
        } else {
            $(this).removeClass('base').addClass('highlight')
        }
    })
}

function add_color($cell) {
    const cell_class = `${$cell.attr('class')}`.slice(0,8)
    $(`.${cell_class}`).removeClass('highlight').addClass('base')
    
    $('.input').each(function () {
        if ($(this).hasClass('base')) {
          $(this).removeClass('base').addClass('input')
        }
        if ($(this).hasClass('highlight_cell')) {
          $(this).removeClass('highlight_cell').addClass('input')
        }
    })
    $cell.parent().children().each(function () {
        if ($(this).hasClass("input")) {
            $(this).removeClass('base').addClass('input')
        } else {
            $(this).removeClass('highlight').addClass('base')
        }
    })
}

export {highlight, get_difficulty, validation_msg, fill_board, clear_board, 
disable_buttons, enable_buttons, reset};


