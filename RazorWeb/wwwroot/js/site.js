//Chan's scripts will be included here
//for now vanilla javascript will be added and soon will be converted to angular's typescript code
console.log(" chan's script is now working...");

function toggleSidebar()
{    
    //toggle full sidebar
    $('#sidebar')
        .css({ transition: '.5s' })
        .toggleClass('sidebar-show', 300);

    //toggle title of each menu item
    if ($('#sidebar').hasClass('sidebar-show')) {
        $('span.sidebar-menu-title').css({display: 'inline-block'});
    }
    else
    {
        $('span.sidebar-menu-title').css({ display: 'none' });  
    }
}