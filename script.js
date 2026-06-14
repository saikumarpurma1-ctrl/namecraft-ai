const taglines = [

"Future-ready brand",
"Perfect for startups",
"Great SaaS company name",
"Modern tech identity",
"Ideal business brand",
"Unique digital brand"

];
// =========================
// GLOBAL BRAND NAME DATA
// =========================

const brandStarts = [
    "Nova", "Velo", "Lumi", "Aura", "Nex",
    "Zen", "Flux", "Aero", "Axi", "Brio",
    "Vent", "Orion", "Altro", "Lyra", "Viva",
    "Kyro", "Zyra", "Aure", "Niro", "Xeno"
];

const brandEnds = [
    "ra", "va", "xa", "na", "ro",
    "on", "ly", "io", "ia", "ora",
    "ica", "ium", "ify", "verse", "flow"
];

// =========================
// CATEGORY DATA
// =========================

const categoryWords = {

    Business: [
        "Solutions",
        "Works",
        "Vision",
        "Group",
        "Hub",
        "Global",
        "Partners",
        "Enterprise",
        "Consulting",
        "Industries"
    ],

    Startup: [
        "AI",
        "Labs",
        "Forge",
        "Flow",
        "Cloud",
        "Spark",
        "Next",
        "Nova",
        "Tech",
        "X"
    ],

    YouTube: [
        "TV",
        "Studio",
        "Nation",
        "Tube",
        "Show",
        "Media",
        "Live",
        "Channel",
        "Zone",
        "Network"
    ],

    Instagram: [
        "Vibes",
        "Buzz",
        "Daily",
        "Style",
        "Gram",
        "Feed",
        "Trend",
        "World",
        "Life",
        "Verse"
    ],

    Shop: [
        "Store",
        "Mart",
        "Bazaar",
        "Outlet",
        "Market",
        "Cart",
        "Deals",
        "Shop",
        "Express",
        "Corner"
    ]
};

const startupNames = [

"Novexa",
"Velora",
"Lumina",
"Aureon",
"Zenova",
"Nexora",
"Fluxio",
"Axiora",
"Ventiq",
"Orivex",
"Zentro",
"Kairox",
"Lunexa",
"Verion",
"Noviq"

];

const industryNames = {

Coffee: [
"BrewNest",
"Roastly",
"Beanora",
"CafeNova",
"AromaHub",
"MochaFlow",
"BeanCraft",
"RoastForge",
"CoffeeVerse",
"BrewSphere"
],

Fitness: [
"FitNova",
"PowerForge",
"PulsePeak",
"FlexCore",
"BodyFlow",
"FitSphere",
"MuscleNest",
"Trainify",
"PeakMotion",
"VitalForge"
],

Tech: [
"Novexa",
"Nexora",
"Axiora",
"Fluxio",
"CloudForge",
"TechNest",
"QuantumFlow",
"LogicLabs",
"CodeSphere",
"ByteNova"
],

Fashion: [
"StyleAura",
"Trendora",
"ModaNest",
"VogueFlow",
"StyleSphere",
"Fashionly",
"LuxeCraft",
"ChicNova",
"GlowStyle",
"UrbanModa"
]

};

const stars =
["⭐⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐"];

// =========================
// GENERATE NAMES
// =========================

function generateNames() {

    const mode =
        document.getElementById("mode").value;

    const keyword =
        document.getElementById("keyword").value.trim();

    let results = "";

    let generated = [];

    // =========================
    // GLOBAL BRAND MODE
    // =========================

    if (mode === "brand") {

        while (generated.length < 50) {

            let start =
                brandStarts[Math.floor(Math.random() * brandStarts.length)];

            let end =
                brandEnds[Math.floor(Math.random() * brandEnds.length)];

            let name = start + end;

            if (!generated.includes(name)) {
                generated.push(name);
            }
        }
    }

    // =========================
    // KEYWORD MODE
    // =========================

    else {

        if (keyword === "") {

            alert("Please enter a keyword");

            return;
        }

        const category =
            document.getElementById("category").value;

        const words =
            categoryWords[category];

        while (generated.length < 50) {

            let word =
                words[Math.floor(Math.random() * words.length)];

            let formats = [

                keyword + word,

                word + keyword,

                keyword + "-" + word,

                keyword + " " + word,

                word + " " + keyword

            ];

            let name =
                formats[Math.floor(Math.random() * formats.length)];

            if (!generated.includes(name)) {

                generated.push(name);
            }
        }
    }

    // =========================
    // DISPLAY RESULTS
    // =========================

    generated.forEach(name => {

        results += `
        <div class="name-card">

            <div class="name-info">

            <h3>${name}</h3>

            <small>

            ${taglines[
            Math.floor(
            Math.random()*taglines.length
            )]}

            </small>

        </div>

        <div class="action-buttons">

            <button
            class="fav-btn"
            onclick="saveFavorite('${name}')">
            ❤️
            </button>

            <button
            class="copy-btn"
            onclick="copyName('${name}')">
            📋
            </button>

        </div>

    </div>
    `;
    });

    document.getElementById("results").innerHTML =
        results;
}

// =========================
// COPY NAME
// =========================

function copyName(name) {

    navigator.clipboard.writeText(name);

    alert("Copied: " + name);
}

// =========================
// MODE SWITCHING
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const mode =
        document.getElementById("mode");

    const keyword =
        document.getElementById("keyword");

    mode.addEventListener("change", function () {

        if (this.value === "brand") {

            keyword.disabled = true;

            keyword.placeholder =
                "Keyword not required in Global Brand Mode";

            keyword.value = "";

        } else {

            keyword.disabled = false;

            keyword.placeholder =
                "Enter keyword (Coffee, Fitness, Tech)";
        }
    });

    // Default state

    keyword.disabled = true;

    keyword.placeholder =
        "Keyword not required in Global Brand Mode";
});

document.addEventListener(
"DOMContentLoaded",
function(){

    document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
        "click",
        function(){

            document
            .querySelectorAll(".category-card")
            .forEach(c =>
            c.classList.remove("active"));

            this.classList.add("active");

            document
            .getElementById("category")
            .value =
            this.dataset.category;

        });

    });

});
function saveFavorite(name){

    let favorites =
    JSON.parse(
    localStorage.getItem("favorites")
    ) || [];

    if(!favorites.includes(name)){

        favorites.push(name);

        localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
        );

        alert(name + " saved!");
    }
}

function loadFavorites(){

    let favorites =
    JSON.parse(
    localStorage.getItem("favorites")
    ) || [];

    let html = "";

    favorites.forEach(name => {

        html += `
        <div class="name-card">
            <span>${name}</span>
        </div>
        `;

    });

    const container =
    document.getElementById("favorites");

    if(container){

        container.innerHTML = html;
    }
}

window.onload = function(){

    loadFavorites();

};

function copyAllNames(){

    let names = [];

    document
    .querySelectorAll(".name-card span")
    .forEach(item => {

        names.push(item.innerText);

    });

    navigator.clipboard.writeText(
    names.join("\n")
    );

    alert("All names copied!");
}

function checkDomain(name){

window.open(
"https://www.google.com/search?q=" +
name + ".com"
);

}