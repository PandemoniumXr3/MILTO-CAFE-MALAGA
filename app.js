const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

  reveals.forEach(el => {

    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 80){
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const menuData = {

  en: [
    {
      title: "Coffee",
      items: [
        ["Espresso", "€2.20", ""],
        ["Flat White", "€3.00", ""],
        ["Cappuccino", "€2.80", ""],
        ["Iced Latte", "€3.50", ""],
        ["Matcha Latte", "€3.20", ""]
      ]
    },

    {
      title: "Brunch",
      items: [
        ["Açaí Bowl", "€9.50", "Fresh fruit and granola."],
        ["Protein Pancakes", "€10.00", "Banana, cacao and fruit."],
        ["Avocado Toast", "€8.70", "Sourdough and avocado."]
      ]
    }
  ],

  es: [
    {
      title: "Café",
      items: [
        ["Espresso", "€2.20", ""],
        ["Flat White", "€3.00", ""],
        ["Cappuccino", "€2.80", ""],
        ["Iced Latte", "€3.50", ""],
        ["Matcha Latte", "€3.20", ""]
      ]
    },

    {
      title: "Brunch",
      items: [
        ["Açaí Bowl", "€9.50", "Fruta fresca y granola."],
        ["Pancakes Proteicos", "€10.00", "Banana y fruta."],
        ["Tosta de Aguacate", "€8.70", "Pan masa madre y aguacate."]
      ]
    }
  ]

};

function renderMenu(lang){

  const container = document.getElementById("menuContent");

  container.innerHTML = "";

  menuData[lang].forEach(category => {

    const card = document.createElement("div");

    card.className = "menu-card";

    card.innerHTML = `
      <h3>${category.title}</h3>

      ${category.items.map(item => `

      <div class="item">

        <div>

          <div class="item-name">
            ${item[0]}
            <span class="food-tag">Vegan</span>
          </div>

          <div class="item-desc">
            ${item[2]}
          </div>

        </div>

        <div class="price">
          ${item[1]}
        </div>

      </div>

      `).join("")}
    `;

    container.appendChild(card);

  });

}

function setLang(lang, button){

  document.querySelectorAll(".lang-switch button")
  .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");

  renderMenu(lang);

}

renderMenu("en");