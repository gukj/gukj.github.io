// Included and modified from http://stackoverflow.com/a/9381645

$('.navbar-nav a').click(function(e) {
    $('.navbar-nav a.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});
