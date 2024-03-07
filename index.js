const harry = { name: "Harry Potter", hair: "black" };
const hermoine = { name: "Hermoine Granger", hair: "brown" };
const ron = { name: "Ron Weasly", hair: "red" };

const wizardsArray = [];
wizardsArray.push(harry, hermoine, ron);

const renderWizardLi = (wizards) => {
  wizards.forEach((singleWizard) => {
    const ul = document.getElementById("wiz");
    const li = document.createElement("li");
    const { name, hair } = singleWizard;
    li.textContent = `${name}`;
    li.style.cssText = `color: ${hair}`;
    ul.appendChild(li);
  });
};

const add = document.querySelector("#btn-add");
const remove = document.querySelector("#btn-remove");
const reset = document.querySelector("#btn-reset");

add.addEventListener("click", () => {
  renderWizardLi(wizardsArray);
});

remove.addEventListener("click", () => {
  const itemToRemove = document.querySelector("li");
  if (itemToRemove) {
    itemToRemove.parentNode.removeChild(itemToRemove);
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});

renderWizardLi(wizardsArray);
