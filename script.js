const businessSuffix = [
"Craft","Works","Solutions","Labs","Forge",
"Hub","Vision","Systems","Global","Tech"
];

const youtubeSuffix = [
"TV","Tube","Show","Nation","Studio",
"Media","Live","Channel","Zone","Hub"
];

const instagramSuffix = [
"Vibes","Daily","World","Buzz","Spot",
"Gram","Verse","Trend","Feed","Style"
];

const startupSuffix = [
"AI","X","Labs","Forge","Flow",
"Spark","Next","Nova","Cloud","IQ"
];

const shopSuffix = [
"Store","Mart","Bazaar","Cart","Market",
"Shop","Outlet","Corner","Deals","Express"
];

function generateNames() {

    let keyword =
    document.getElementById("keyword").value.trim();

    let category =
    document.getElementById("category").value;

    if(keyword === "") {
        alert("Please enter a keyword");
        return;
    }

    let suffixes = [];

    if(category === "Business")
        suffixes = businessSuffix;

    else if(category === "YouTube")
        suffixes = youtubeSuffix;

    else if(category === "Instagram")
        suffixes = instagramSuffix;

    else if(category === "Startup")
        suffixes = startupSuffix;

    else
        suffixes = shopSuffix;

    let html = "";

    suffixes.forEach(name => {

        let result =
        keyword + name;

        html += `
        <div class="name-card">

            <span>${result}</span>

            <button class="copy-btn"
            onclick="copyName('${result}')">

            Copy

            </button>

        </div>
        `;

    });

    document.getElementById("results")
    .innerHTML = html;
}

function copyName(name){

    navigator.clipboard.writeText(name);

    alert("Copied: " + name);

}