let companies = [];
let selected = [];

const addBtn = document.getElementById("addBtn");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("search");
const companyList = document.getElementById("companyList");
const selectedDiv = document.getElementById("selected");

fetch("/api/companies")
  .then(res => res.json())
  .then(data => {
    companies = data;
    renderMenu(companies);
    renderSelected();
  });

const logoMap = {
  "Google": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "Amazon": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "Apple": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "Meta": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Meta_Platforms_Inc._logo.svg",
  "Netflix": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "Tesla": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  "Adobe": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Corporate_Logo.png",
  "IBM": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "Intel": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
  "Oracle": "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "Salesforce": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  "Spotify": "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  "Uber": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  "Airbnb": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  "PayPal": "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  "Samsung": "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "Sony": "https://upload.wikimedia.org/wikipedia/commons/2/20/Sony_Logo.svg",
  "Dell": "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  "HP": "https://upload.wikimedia.org/wikipedia/commons/3/3a/HP_logo_2012.svg",
  "Twitter": "https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png",
  "Pinterest": "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
  "Snapchat": "https://upload.wikimedia.org/wikipedia/en/a/ad/Snapchat_logo.svg",
  "Dropbox": "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
  "Zoom": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
  "Slack": "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  "Reddit": "https://upload.wikimedia.org/wikipedia/en/8/82/Reddit_logo_and_wordmark.svg",
  "eBay": "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
  "LinkedIn": "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  "TikTok": "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
  "Nvidia": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  "AMD": "https://upload.wikimedia.org/wikipedia/commons/2/2e/AMD_Logo.svg",
  "Qualcomm": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Qualcomm-Logo.svg",
  "Cisco": "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
  "Xiaomi": "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  "LG": "https://upload.wikimedia.org/wikipedia/commons/0/0e/LG_logo_%282015%29.svg",
  "Motorola": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Motorola_logo.svg",
  "Asus": "https://upload.wikimedia.org/wikipedia/commons/0/0e/ASUS_Logo.svg",
  "Lenovo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_logo_2015.svg",
  "Toshiba": "https://upload.wikimedia.org/wikipedia/commons/0/09/Toshiba_logo.svg",
  "Siemens": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Siemens-logo.svg",
  "Philips": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Philips_logo.svg",
  "Panasonic": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Panasonic_logo.svg",
  "Foxconn": "https://upload.wikimedia.org/wikipedia/commons/7/71/Foxconn_logo.svg",
  "Alibaba": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Alibaba_Group_logo.svg",
  "Baidu": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Baidu_Logo.svg",
  "Tencent": "https://upload.wikimedia.org/wikipedia/commons/0/09/Tencent_Logo.svg",
  "Huawei": "https://upload.wikimedia.org/wikipedia/commons/0/08/Huawei_Standard_logo.svg",
  "ZTE": "https://upload.wikimedia.org/wikipedia/commons/f/fd/ZTE_new_logo.svg",
  "Vivo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Vivo_logo_2019.svg"

};

function getLogo(name) {
  return logoMap[name] || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
}

function renderMenu(list) {
  companyList.innerHTML = "";
  if (list.length === 0) {
    const div = document.createElement("div");
    div.textContent = "No companies found";
    div.style.color = "gray";
    companyList.appendChild(div);
    return;
  }
  list.forEach(name => {
    const card = document.createElement("div");
    card.className = "company-card";
    const img = document.createElement("img");
    img.src = getLogo(name);
    img.alt = name + " logo";
    img.style.width = "24px";
    img.style.height = "24px";
    img.style.marginRight = "8px";
    card.appendChild(img);
    const span = document.createElement("span");
    span.textContent = name;
    card.appendChild(span);

    if (selected.includes(name)) {
      card.classList.add("selected-card");
      card.style.pointerEvents = "none";
    } else {
      card.onclick = () => addCompany(name);
    }
    companyList.appendChild(card);
  });
}

// Load selected from localStorage if available
selected = JSON.parse(localStorage.getItem("selectedCompanies") || "[]");

function renderSelected() {
  selectedDiv.innerHTML = "";
  selected.forEach(name => {
    const div = document.createElement("div");
    div.className = "item";
    const img = document.createElement("img");
    img.src = getLogo(name);
    img.alt = name + " logo";
    img.style.width = "24px";
    img.style.height = "24px";
    img.style.marginRight = "8px";
    div.appendChild(img);
    const span = document.createElement("span");
    span.textContent = name;
    div.appendChild(span);

    div.onclick = () => removeCompany(name);
    selectedDiv.appendChild(div);
  });
  addBtn.disabled = selected.length >= 20;
  // Save to localStorage
  localStorage.setItem("selectedCompanies", JSON.stringify(selected));
}

function addCompany(name) {
  if (selected.length >= 20 || selected.includes(name)) return;
  selected.push(name);
  renderSelected();
  updateMenu();
}

function removeCompany(name) {
  selected = selected.filter(n => n !== name);
  renderSelected();
  updateMenu();
}

function updateMenu() {
  const q = searchInput.value.toLowerCase();
  const filtered = q
    ? companies.filter(c => c.toLowerCase().includes(q))
    : companies;
  renderMenu(filtered);
}

// events
addBtn.onclick = () => {
  menu.classList.toggle("hidden");
  addBtn.textContent = menu.classList.contains("hidden") ? "+" : "-";
  updateMenu();
};

searchInput.oninput = updateMenu;
