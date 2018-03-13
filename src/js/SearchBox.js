(function () {

  let $searchBoxes = $(".search-box");

  $searchBoxes.each(function () {
    let $searchBox = $(this);
    let $button = $searchBox.find(".search-button");
    let searchUrl = $searchBox.data("search-url");
    
    $button.on("click", function () {
      let data = {};

      $searchBox.find("[name]").each(function () {
        let $formControl = $(this);
        console.dir(this);
        data[$formControl.attr("name")] = this.value;
      });

      document.location.href = searchUrl + "?" + $.param(data);
    });
  });


})();