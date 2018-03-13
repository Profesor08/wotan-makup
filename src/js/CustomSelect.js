export default class CustomSelect
{
  constructor(selector)
  {
    this.selector = selector;
    this.currentSelected = null;

    let customSelectElements = document.querySelectorAll(selector);

    for (let i = 0; i < customSelectElements.length; i++)
    {
      let select = customSelectElements[i].querySelector("select");
      let selected = document.createElement("div");
      selected.setAttribute("class", "selected-option");
      selected.innerHTML = select.options[select.selectedIndex].innerHTML;

      let listWrapper = document.createElement("div");
      listWrapper.setAttribute("class", "options-list-wrapper");

      let optionsList = document.createElement("div");
      optionsList.setAttribute("class", "options-list");

      for (let j = 0; j < select.length; j++)
      {
        let option = select[j];
        let optionItem = document.createElement("div");
        optionItem.setAttribute("class", "option-item");
        optionItem.innerHTML = option.innerHTML;

        if (option.disabled === true)
        {
          optionItem.classList.add("is-disabled");
        }
        else
        {
          optionItem.addEventListener("click", () => {
            selected.innerHTML = option.innerHTML;
            select.selectedIndex = j;
          });
        }

        optionsList.appendChild(optionItem);
      }

      customSelectElements[i].appendChild(selected);
      listWrapper.appendChild(optionsList);
      customSelectElements[i].appendChild(listWrapper);
      customSelectElements[i].addEventListener("click", (e) => {
        if (e.target.isSameNode(customSelectElements[i]) || e.target.isSameNode(selected))
        {
          this.currentSelected = customSelectElements[i];
          customSelectElements[i].classList.toggle("is-open");
        }
      });
    }

    document.addEventListener("click", () => {
      this.CloseAll();
    });
  }

  on(event, callback) {
    return this;
  }

  CloseAll()
  {
    let customSelectElements = document.querySelectorAll(this.selector);

    for (let i = 0; i < customSelectElements.length; i++)
    {
      if (customSelectElements[i].isSameNode(this.currentSelected) === false)
      {
        customSelectElements[i].classList.remove("is-open");
      }
      else
      {
        this.currentSelected = null;
      }
    }
  }

  static UpdateAll()
  {
    throw "CustomSelect.UpdateAll: Not implemented Exception";
  }
}