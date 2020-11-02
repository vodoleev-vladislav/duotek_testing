(function () {
  function addDropdownsAutoclose() {
    const menus = document.querySelectorAll(".kebab-menu");
    menus.forEach((menu) => {
      const icon = menu.querySelector(".kebab-menu__icon");
      const list = menu.querySelector(".kebab-menu__list");

      icon.addEventListener("click", (e) => {
        list.classList.toggle("kebab-menu__list--active");
        e.stopPropagation();
      });

      document.addEventListener("click", (e) => {
        if (
          !e.target.classList.contains("kebab-menu__link") &&
          list.classList.contains("kebab-menu__list--active")
        ) {
          list.classList.toggle("kebab-menu__list--active");
        }
      });
    });
  }

  function addTabSwitch() {
    const tabsLinks = document.querySelectorAll(".tabs__link");
    tabsLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (!link.classList.contains("tabs__link--selected")) {
          tabsLinks.forEach(link => link.classList.contains("tabs__link--selected") && link.classList.toggle("tabs__link--selected"));
          link.classList.toggle("tabs__link--selected");
        }
      });
    });
  }

  addDropdownsAutoclose();
  addTabSwitch();
})();
