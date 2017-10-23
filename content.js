// Calls initialization function
initialize();

// Calls all setup functions
function initialize()
{
    setup_keybinds();
}

// Uses Mousetrap to setup keybinds for event handling
function setup_keybinds()
{
    Mousetrap.bind( [ 'command+shift+k', 'ctrl+shift+k' ] , function(e)
    {
        open_switcher();
    });
}

// Sets up the modal
function open_switcher()
{
    $.colorbox(
        {
            href           : "chrome-extension://fldjllapecfnnpndcielfoofpejnpojj/switcher.html",
            iframe         : true,
            slideshow      : false,
            title          : false,
            closeButton    : false,
            slideshowStart : '',
            slideshowStop  : '',
            current        : '',
            previous       : '',
            next           : '',
        }
    );
}
