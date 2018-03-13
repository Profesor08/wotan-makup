(function () {

  let $timelineList = $(".timeline");

  $timelineList.each(function () {
    let $timeline = $(this);
    let $anchors = $timeline.find(".anchor");
    let $interactiveAnchors = $timeline.find(".anchor:not(:first-child)");
    let $lineBar = $timeline.find(".line-bar");

    function reset()
    {
      $anchors.removeClass("active");
      $lineBar.css({
        width: 0
      });
    }

    function toggleCompact()
    {
      if ($timeline.width() / $anchors.length < 20) {
        $timeline.addClass("extended");
      }
      else {
        $timeline.removeClass("extended");
      }
    }

    $interactiveAnchors.on("mouseenter", function () {
      reset();
      $(this).addClass("active");
      $lineBar.css({
        width: $timeline.width() - $(this).position().left - 8
      });
    });

    $timeline.on("mouseleave", function () {
      reset();
    });

    window.addEventListener("resize", function () {
      toggleCompact();
    });

    toggleCompact();

  });

})();