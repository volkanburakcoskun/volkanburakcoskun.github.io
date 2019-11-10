window.onscroll = function() {
  scrollFunction();
};
function myFunction() {
  var x = document.getElementById("navbar-right");
  if (x.id === "navbar-right") {
    if (x.className == "") {
      x.className += " responsive";
      y = document.getElementById("navbar");
      if (y.className == "") {
        y.className += "responsive";
      } else y.className = "";
    } else x.className = "";
  } else {
    x.className = "";
  }
}
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px ";
  } else {
    document.getElementById("navbar").style.padding = "30px";
  }
}
$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function() {
  // Tells the function to wait to preform until everything on the page has loaded.
  $(window).scroll(function() {
    // Says this function is preformed continuisly while scrolling.
    var Scroll = $(window).scrollTop() + 250, // This variable finds the distance you have scrolled from the top.
      SectionOneOffset = $("#sec-intro").offset().top,
      SectionTwoOffset = $("#sec-about").offset().top,
      SectionThreeOffset = $("#sec-experience").offset().top,
      SectionFourOffset = $("#sec-contact").offset().top;

    if (SectionTwoOffset > Scroll >= SectionOneOffset) {
      $("#sec-int").addClass("active");
      $("#sec-abo").removeClass("active");
      $("#sec-exp").removeClass("active");
      $("#sec-con").removeClass("active");
    }
    if (Scroll >= SectionTwoOffset) {
      $("#sec-int").removeClass("active");
      $("#sec-abo").addClass("active");
      $("#sec-exp").removeClass("active");
      $("#sec-con").removeClass("active");
    }
    if (Scroll >= SectionThreeOffset) {
      $("#sec-int").removeClass("active");
      $("#sec-abo").removeClass("active");
      $("#sec-exp").addClass("active");
      $("#sec-con").removeClass("active");
    }
    if (Scroll >= SectionFourOffset) {
      $("#sec-int").removeClass("active");
      $("#sec-abo").removeClass("active");
      $("#sec-exp").removeClass("active");
      $("#sec-con").addClass("active");
    }
  });
});
