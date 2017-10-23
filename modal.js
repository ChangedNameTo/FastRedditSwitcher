// Calls the initialize function
initialize();

// Resizes the modal on document load
$(document).ready(function(){
    resize_box();
});

// Sets up event handling and the autocomplete
function initialize()
{
    setup_keybinds();
}

function resize_box(){
    var x = $('body').width();
    var y = $('body').height();

    parent.$.fn.colorbox.resize({
        innerWidth  : x,
        innerHeight : y
    });
}

// Uses Mousetrap to setup keybinds for event handling
function setup_keybinds()
{
    $('#subreddit').keydown(function(e)
    {
        // Checks to make sure this was the enter key
        if( e.which == 13 )
        {
            go_to_subreddit();
        }
    });
}

function go_to_subreddit()
{
    // Grabs the subreddit name
    var subreddit = $('#subreddit').val();

    // Closes the modal
    $.colorbox.close();

    // Redirects us to the new subreddit
    window.location.href = "https://www.reddit.com/r/" + subreddit
}
