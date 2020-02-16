const allSections = Array.prototype.slice.call(document.getElementsByClassName('datapane'));

function hideAll() {
    allSections.forEach(function (infoDiv) {
        console.log(infoDiv);
        infoDiv.style.display = 'none';
    });
}



hideAll();
var pagetype = window.location.hash.split('#')[0];

if (pagetype != null && pagetype == '') {
    document.getElementById('wind').style.display = 'block';
} else {
    document.getElementById(pagetype).style.display = 'block';
}


$('.click').click(function (e) {
    // get the contents of the link that was clicked
    var tooShow = $(this).attr("data-id")
    var image = $(this).children('img')[0];
    $(".imageNav-photo").removeClass('active');
    
    hideAll();
    document.getElementById(tooShow).style.display = 'block';
    $("img[data-image='" + tooShow +"']").addClass('active');
    // cancel the default action of the link by returning false
    return false;
});



