(function () {

  document.addEventListener("scroll", function () {

    if (window.pageYOffset > 84) {
      if (document.body.classList.contains("floating-header") === false)
      {
        document.body.classList.add("floating-header");
      }
    }
    else {
      if (document.body.classList.contains("floating-header") === true)
      {
        document.body.classList.remove("floating-header");
      }
    }

  });

})();