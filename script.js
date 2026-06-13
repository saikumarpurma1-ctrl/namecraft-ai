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

        while (generated.length < 30) {

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

        while (generated.length < 30) {

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

            <span>${name}</span>

            <button
                class="copy-btn"
                onclick="copyName('${name}')">

                Copy

            </button>

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