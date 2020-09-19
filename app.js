function createTile(isFlipped, grid) {
    let tile = document.createElement("div");
    tile.classList.add(isFlipped ? "flipped" : "normal");

    grid.appendChild(tile);
}

function generateTiles() {
    const grid = document.getElementById("grid");
    const flippedTiles = getFlippedTiles(304, 1824);
    for(i = 0; i < 1824; i++) {
        createTile(flippedTiles.indexOf(i) !== -1, grid);
    }
}

function getFlippedTiles(flippedCount, totalCount) {
    let arr = [];
    while(arr.length < flippedCount){
        var r = Math.floor(Math.random() * totalCount) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}

function onTextChanged() {
    let stonesInARow = Number(document.getElementById("stones-in-a-row").value);
    if(stonesInARow > 0) {
        let root = document.documentElement;
        let tileWidth = 94/stonesInARow;
        let tileHeight = 88/(1824/stonesInARow);
        root.style.setProperty("--tile-width", tileWidth +"vw");
        root.style.setProperty("--tile-height", tileHeight +"vh");
        document.getElementById("grid").innerHTML='';
        generateTiles(stonesInARow);
    }
}

function onBorderCheckChanged() {
    let showBorder = document.getElementById("show-border").checked;
    let root = document.documentElement;
    root.style.setProperty("--border-width", showBorder ? "1px" : "0px");
}

(function() {
    document.getElementById("stones-in-a-row").addEventListener("input", onTextChanged);
    document.getElementById("show-border").addEventListener("change", onBorderCheckChanged);
    onTextChanged()
})()