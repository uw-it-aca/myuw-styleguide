(function() {
    "use strict";

    function showSection(section) {
      visibleSections = document.querySelectorAll(".db");
      for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("db");
        sections[i].classList.add("dn");
      }
      section.classList.remove("dn");
      section.classList.add("db");
    }
})();
