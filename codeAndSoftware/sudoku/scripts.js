var startTime = 0;
var tInterval;
var defaultGrid;
var currCellId = -1;
var menuSelectDigit = document.getElementById("menuSelectDigit");
var selectedValueByUser = -1;
dicCheck = {
    0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 45, 54, 63, 72, 10, 11, 19, 20],
    1: [0, 2, 3, 4, 5, 6, 7, 8, 10, 19, 28, 37, 46, 55, 64, 73, 9, 11, 18, 20],
    2: [0, 1, 3, 4, 5, 6, 7, 8, 11, 20, 29, 38, 47, 56, 65, 74, 9, 10, 18, 19],
    3: [0, 1, 2, 4, 5, 6, 7, 8, 12, 21, 30, 39, 48, 57, 66, 75, 13, 14, 22, 23],
    4: [0, 1, 2, 3, 5, 6, 7, 8, 13, 22, 31, 40, 49, 58, 67, 76, 12, 14, 21, 23],
    5: [0, 1, 2, 3, 4, 6, 7, 8, 14, 23, 32, 41, 50, 59, 68, 77, 12, 13, 21, 22],
    6: [0, 1, 2, 3, 4, 5, 7, 8, 15, 24, 33, 42, 51, 60, 69, 78, 16, 17, 25, 26],
    7: [0, 1, 2, 3, 4, 5, 6, 8, 16, 25, 34, 43, 52, 61, 70, 79, 15, 17, 24, 26],
    8: [0, 1, 2, 3, 4, 5, 6, 7, 17, 26, 35, 44, 53, 62, 71, 80, 15, 16, 24, 25],
    9: [10, 11, 12, 13, 14, 15, 16, 17, 0, 18, 27, 36, 45, 54, 63, 72, 1, 2, 19, 20],
    10: [9, 11, 12, 13, 14, 15, 16, 17, 1, 19, 28, 37, 46, 55, 64, 73, 0, 2, 18, 20],
    11: [9, 10, 12, 13, 14, 15, 16, 17, 2, 20, 29, 38, 47, 56, 65, 74, 0, 1, 18, 19],
    12: [9, 10, 11, 13, 14, 15, 16, 17, 3, 21, 30, 39, 48, 57, 66, 75, 4, 5, 22, 23],
    13: [9, 10, 11, 12, 14, 15, 16, 17, 4, 22, 31, 40, 49, 58, 67, 76, 3, 5, 21, 23],
    14: [9, 10, 11, 12, 13, 15, 16, 17, 5, 23, 32, 41, 50, 59, 68, 77, 3, 4, 21, 22],
    15: [9, 10, 11, 12, 13, 14, 16, 17, 6, 24, 33, 42, 51, 60, 69, 78, 7, 8, 25, 26],
    16: [9, 10, 11, 12, 13, 14, 15, 17, 7, 25, 34, 43, 52, 61, 70, 79, 6, 8, 24, 26],
    17: [9, 10, 11, 12, 13, 14, 15, 16, 8, 26, 35, 44, 53, 62, 71, 80, 6, 7, 24, 25],
    18: [19, 20, 21, 22, 23, 24, 25, 26, 0, 9, 27, 36, 45, 54, 63, 72, 1, 2, 10, 11],
    19: [18, 20, 21, 22, 23, 24, 25, 26, 1, 10, 28, 37, 46, 55, 64, 73, 0, 2, 9, 11],
    20: [18, 19, 21, 22, 23, 24, 25, 26, 2, 11, 29, 38, 47, 56, 65, 74, 0, 1, 9, 10],
    21: [18, 19, 20, 22, 23, 24, 25, 26, 3, 12, 30, 39, 48, 57, 66, 75, 4, 5, 13, 14],
    22: [18, 19, 20, 21, 23, 24, 25, 26, 4, 13, 31, 40, 49, 58, 67, 76, 3, 5, 12, 14],
    23: [18, 19, 20, 21, 22, 24, 25, 26, 5, 14, 32, 41, 50, 59, 68, 77, 3, 4, 12, 13],
    24: [18, 19, 20, 21, 22, 23, 25, 26, 6, 15, 33, 42, 51, 60, 69, 78, 7, 8, 16, 17],
    25: [18, 19, 20, 21, 22, 23, 24, 26, 7, 16, 34, 43, 52, 61, 70, 79, 6, 8, 15, 17],
    26: [18, 19, 20, 21, 22, 23, 24, 25, 8, 17, 35, 44, 53, 62, 71, 80, 6, 7, 15, 16],
    27: [28, 29, 30, 31, 32, 33, 34, 35, 0, 9, 18, 36, 45, 54, 63, 72, 37, 38, 46, 47],
    28: [27, 29, 30, 31, 32, 33, 34, 35, 1, 10, 19, 37, 46, 55, 64, 73, 36, 38, 45, 47],
    29: [27, 28, 30, 31, 32, 33, 34, 35, 2, 11, 20, 38, 47, 56, 65, 74, 36, 37, 45, 46],
    30: [27, 28, 29, 31, 32, 33, 34, 35, 3, 12, 21, 39, 48, 57, 66, 75, 40, 41, 49, 50],
    31: [27, 28, 29, 30, 32, 33, 34, 35, 4, 13, 22, 40, 49, 58, 67, 76, 39, 41, 48, 50],
    32: [27, 28, 29, 30, 31, 33, 34, 35, 5, 14, 23, 41, 50, 59, 68, 77, 39, 40, 48, 49],
    33: [27, 28, 29, 30, 31, 32, 34, 35, 6, 15, 24, 42, 51, 60, 69, 78, 43, 44, 52, 53],
    34: [27, 28, 29, 30, 31, 32, 33, 35, 7, 16, 25, 43, 52, 61, 70, 79, 42, 44, 51, 53],
    35: [27, 28, 29, 30, 31, 32, 33, 34, 8, 17, 26, 44, 53, 62, 71, 80, 42, 43, 51, 52],
    36: [37, 38, 39, 40, 41, 42, 43, 44, 0, 9, 18, 27, 45, 54, 63, 72, 28, 29, 46, 47],
    37: [36, 38, 39, 40, 41, 42, 43, 44, 1, 10, 19, 28, 46, 55, 64, 73, 27, 29, 45, 47],
    38: [36, 37, 39, 40, 41, 42, 43, 44, 2, 11, 20, 29, 47, 56, 65, 74, 27, 28, 45, 46],
    39: [36, 37, 38, 40, 41, 42, 43, 44, 3, 12, 21, 30, 48, 57, 66, 75, 31, 32, 49, 50],
    40: [36, 37, 38, 39, 41, 42, 43, 44, 4, 13, 22, 31, 49, 58, 67, 76, 30, 32, 48, 50],
    41: [36, 37, 38, 39, 40, 42, 43, 44, 5, 14, 23, 32, 50, 59, 68, 77, 30, 31, 48, 49],
    42: [36, 37, 38, 39, 40, 41, 43, 44, 6, 15, 24, 33, 51, 60, 69, 78, 34, 35, 52, 53],
    43: [36, 37, 38, 39, 40, 41, 42, 44, 7, 16, 25, 34, 52, 61, 70, 79, 33, 35, 51, 53],
    44: [36, 37, 38, 39, 40, 41, 42, 43, 8, 17, 26, 35, 53, 62, 71, 80, 33, 34, 51, 52],
    45: [46, 47, 48, 49, 50, 51, 52, 53, 0, 9, 18, 27, 36, 54, 63, 72, 28, 29, 37, 38],
    46: [45, 47, 48, 49, 50, 51, 52, 53, 1, 10, 19, 28, 37, 55, 64, 73, 27, 29, 36, 38],
    47: [45, 46, 48, 49, 50, 51, 52, 53, 2, 11, 20, 29, 38, 56, 65, 74, 27, 28, 36, 37],
    48: [45, 46, 47, 49, 50, 51, 52, 53, 3, 12, 21, 30, 39, 57, 66, 75, 31, 32, 40, 41],
    49: [45, 46, 47, 48, 50, 51, 52, 53, 4, 13, 22, 31, 40, 58, 67, 76, 30, 32, 39, 41],
    50: [45, 46, 47, 48, 49, 51, 52, 53, 5, 14, 23, 32, 41, 59, 68, 77, 30, 31, 39, 40],
    51: [45, 46, 47, 48, 49, 50, 52, 53, 6, 15, 24, 33, 42, 60, 69, 78, 34, 35, 43, 44],
    52: [45, 46, 47, 48, 49, 50, 51, 53, 7, 16, 25, 34, 43, 61, 70, 79, 33, 35, 42, 44],
    53: [45, 46, 47, 48, 49, 50, 51, 52, 8, 17, 26, 35, 44, 62, 71, 80, 33, 34, 42, 43],
    54: [55, 56, 57, 58, 59, 60, 61, 62, 0, 9, 18, 27, 36, 45, 63, 72, 64, 65, 73, 74],
    55: [54, 56, 57, 58, 59, 60, 61, 62, 1, 10, 19, 28, 37, 46, 64, 73, 63, 65, 72, 74],
    56: [54, 55, 57, 58, 59, 60, 61, 62, 2, 11, 20, 29, 38, 47, 65, 74, 63, 64, 72, 73],
    57: [54, 55, 56, 58, 59, 60, 61, 62, 3, 12, 21, 30, 39, 48, 66, 75, 67, 68, 76, 77],
    58: [54, 55, 56, 57, 59, 60, 61, 62, 4, 13, 22, 31, 40, 49, 67, 76, 66, 68, 75, 77],
    59: [54, 55, 56, 57, 58, 60, 61, 62, 5, 14, 23, 32, 41, 50, 68, 77, 66, 67, 75, 76],
    60: [54, 55, 56, 57, 58, 59, 61, 62, 6, 15, 24, 33, 42, 51, 69, 78, 70, 71, 79, 80],
    61: [54, 55, 56, 57, 58, 59, 60, 62, 7, 16, 25, 34, 43, 52, 70, 79, 69, 71, 78, 80],
    62: [54, 55, 56, 57, 58, 59, 60, 61, 8, 17, 26, 35, 44, 53, 71, 80, 69, 70, 78, 79],
    63: [64, 65, 66, 67, 68, 69, 70, 71, 0, 9, 18, 27, 36, 45, 54, 72, 55, 56, 73, 74],
    64: [63, 65, 66, 67, 68, 69, 70, 71, 1, 10, 19, 28, 37, 46, 55, 73, 54, 56, 72, 74],
    65: [63, 64, 66, 67, 68, 69, 70, 71, 2, 11, 20, 29, 38, 47, 56, 74, 54, 55, 72, 73],
    66: [63, 64, 65, 67, 68, 69, 70, 71, 3, 12, 21, 30, 39, 48, 57, 75, 58, 59, 76, 77],
    67: [63, 64, 65, 66, 68, 69, 70, 71, 4, 13, 22, 31, 40, 49, 58, 76, 57, 59, 75, 77],
    68: [63, 64, 65, 66, 67, 69, 70, 71, 5, 14, 23, 32, 41, 50, 59, 77, 57, 58, 75, 76],
    69: [63, 64, 65, 66, 67, 68, 70, 71, 6, 15, 24, 33, 42, 51, 60, 78, 61, 62, 79, 80],
    70: [63, 64, 65, 66, 67, 68, 69, 71, 7, 16, 25, 34, 43, 52, 61, 79, 60, 62, 78, 80],
    71: [63, 64, 65, 66, 67, 68, 69, 70, 8, 17, 26, 35, 44, 53, 62, 80, 60, 61, 78, 79],
    72: [73, 74, 75, 76, 77, 78, 79, 80, 0, 9, 18, 27, 36, 45, 54, 63, 55, 56, 64, 65],
    73: [72, 74, 75, 76, 77, 78, 79, 80, 1, 10, 19, 28, 37, 46, 55, 64, 54, 56, 63, 65],
    74: [72, 73, 75, 76, 77, 78, 79, 80, 2, 11, 20, 29, 38, 47, 56, 65, 54, 55, 63, 64],
    75: [72, 73, 74, 76, 77, 78, 79, 80, 3, 12, 21, 30, 39, 48, 57, 66, 58, 59, 67, 68],
    76: [72, 73, 74, 75, 77, 78, 79, 80, 4, 13, 22, 31, 40, 49, 58, 67, 57, 59, 66, 68],
    77: [72, 73, 74, 75, 76, 78, 79, 80, 5, 14, 23, 32, 41, 50, 59, 68, 57, 58, 66, 67],
    78: [72, 73, 74, 75, 76, 77, 79, 80, 6, 15, 24, 33, 42, 51, 60, 69, 61, 62, 70, 71],
    79: [72, 73, 74, 75, 76, 77, 78, 80, 7, 16, 25, 34, 43, 52, 61, 70, 60, 62, 69, 71],
    80: [72, 73, 74, 75, 76, 77, 78, 79, 8, 17, 26, 35, 44, 53, 62, 71, 60, 61, 69, 70]
}

function isGridValid(grid, i) {
    for (k = 0; k < dicCheck[i].length; k++) {
        j = dicCheck[i][k]
        if (grid[i] == grid[j]) {
            return false
        }
    }
    return true
}

function fillGrid(grid) {
    defaultGrid = []
    for (i = 0; i < 81; i++) {
        var cell = document.getElementById("cell_" + i);

        if (grid[i] != 0) {
            defaultGrid.push(true);
            cell.style.color = "#333333";
        } else {
            defaultGrid.push(false);
            cell.style.color = "#4488ff";
        }
        if (grid[i] >= 1 && grid[i] <= 9) {
            cell.innerText = grid[i];
        } else if (grid[i] == 0) {
            cell.innerText = "";
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateRandomSudoku() {
    g = []
    perms = []
    idxs = []
    for (i = 0; i < 81; i++) {
        g.push(0)
        idxs.push(0)
        perm = []
        for (j = 1; j < 10; j++) {
            perm.push(j)
        }
        shuffleArray(perm)
        perms.push(perm)
    }
    idx = 0
    while (idx != 81) {
        if (idx < 0) {
            return
        }
        if (idxs[idx] < 9) {
            g[idx] = perms[idx][idxs[idx]]

            if (isGridValid(g, idx)) {
                idx += 1
            } else {
                idxs[idx] += 1
                g[idx] = 0
            }
        } else { // backtracking
            idxs[idx] = 0
            idx -= 1
            idxs[idx] += 1
        }
    }
    return g
}

function solveForward(g) {
    vals = []
    for (i = 0; i < 81; i++) {
        if (g[i] != 0) {
            vals.push(0) // already filled cell
        } else {
            vals.push(1)
        }
    }
    idx = 0
    backtrack = false
    while (idx != 81) {
        if (vals[idx] == 0) { // skip already filled cell
            if (backtrack) {
                idx -= 1
            } else {
                idx += 1
            }
        } else if (vals[idx] == 10) { // backtracking
            backtrack = true
            vals[idx] = 1
            g[idx] = 0
            idx -= 1
        } else { // between 1 and 9
            if (backtrack) {
                vals[idx] += 1
                backtrack = false
            } else {
                g[idx] = vals[idx]
                if (isGridValid(g, idx)) {
                    idx += 1
                } else {
                    vals[idx] += 1
                }
            }
        }
    }
    return g
}

function solveBackward(g) {
    vals = []
    for (i = 0; i < 81; i++) {
        if (g[i] != 0) {
            vals.push(10) // already filled cell
        } else {
            vals.push(9)
        }
    }
    idx = 0
    backtrack = false
    while (idx != 81) {
        if (vals[idx] == 10) { // skip already filled cell
            if (backtrack) {
                idx -= 1
            } else {
                idx += 1
            }
        } else if (vals[idx] == 0) { // backtracking
            backtrack = true
            vals[idx] = 9
            g[idx] = 0
            idx -= 1
        } else { // between 1 and 9
            if (backtrack) {
                vals[idx] -= 1
                backtrack = false
            } else {
                g[idx] = vals[idx]
                if (isGridValid(g, idx)) {
                    idx += 1
                } else {
                    vals[idx] -= 1
                }
            }
        }
    }
    return g
}

function gridHasUniqueSolution(g) {
    s1 = solveForward([...g]) // [...g] gives a copy of g
    s2 = solveBackward([...g])
    for (i = 0; i < 81; i++) {
        if (s1[i] != s2[i]) {
            return false
        }
    }
    return true
}

function generateGrid(n) { // with a minimum of n element filled among the 81
    g = generateRandomSudoku()
    perm = []
    for (i = 0; i < 81; i++) {
        perm.push(i)
    }
    shuffleArray(perm)
    remaining = 81
    for (m = 0; m < 81; m++) {
        nb = g[perm[m]]
        g[perm[m]] = 0
        if (gridHasUniqueSolution(g)) {
            remaining -= 1
        } else {
            g[perm[m]] = nb
        }
        if (remaining <= n) {
            break
        }
    }
    return g
}

function stopTimer() {
    clearInterval(tInterval);
}

function resetTimer() {
    stopTimer();
    document.getElementById('infoMenuTimerValue').innerHTML = "0:00:00";
}

function startTimer() {
    resetTimer()
    startTime = new Date().getTime();
    tInterval = setInterval(showTime, 1000);
}

function showTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById('infoMenuTimerValue').innerHTML = hours + ':' + minutes + ':' + seconds;
}

function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
    while (el) {
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}

function pressClickCell(e) {
    currCellId = e.target.id;
    var cell = document.getElementById(currCellId);
    if (defaultGrid[currCellId.split("_")[1]] == true) {
        return
    }
    cell.style.backgroundColor = "#eeeedd";
    var parentPosition = getPosition(document.getElementById("cell_0"));
    var parentPosition2 = getPosition(cell);
    var xPosition = parentPosition2.x - parentPosition.x - (menuSelectDigit.clientWidth / 5.7);
    var yPosition = parentPosition2.y - parentPosition.y + (menuSelectDigit.clientHeight / 1.37);
    menuSelectDigit.style.left = xPosition + "px";
    menuSelectDigit.style.top = yPosition + "px";
    var i = 0;
    var k = window.setInterval(function() { // Fade in the digit selector menu
        if (i == 11) {
            clearInterval(k);
        } else {
            menuSelectDigit.style.opacity = 0.1 * i;
            i++;
        }
    }, 20);
}

function releaseClickCell(e) {
    if (currCellId == -1) {
        return
    }
    cell = document.getElementById(currCellId)
    cell.style.backgroundColor = "";

    value = parseInt(selectedValueByUser);
    if (value == 0) {
        cell.innerText = "";
        cell.style.fontSize = "300%";
        cell.style.textAlign = "center";
    } else if (value >= 1 && value <= 9) {
        cell.innerText = "";
        cell.style.fontSize = "300%";
        cell.style.textAlign = "center";
        cell.innerText = selectedValueByUser;
    } else if (value <= -1 && value >= -9) {
        if (cell.style.fontSize == "100%") {
            oldString = cell.innerText;
        } else {
            oldString = "";
        }
        cell.style.fontSize = "100%";
        cell.style.textAlign = "left";

        newString = "&nbsp;&nbsp;";
        for (i = 1; i < 10; i++) {
            if ((oldString.includes(i.toString()) && value != i * (-1)) ||
                (!oldString.includes(i.toString()) && value == i * (-1))) {
                newString = newString.concat(i.toString(), "&nbsp;");
            } else {
                newString = newString.concat("&nbsp;&nbsp;&nbsp;");
            }
            if (i == 3 || i == 6) {
                newString = newString.concat("<br>&nbsp;&nbsp;");
            }
        }
        cell.innerHTML = newString;
    }

    var i = 10;
    var k = window.setInterval(function() { // Fade out the digit selector menu
        if (i == -1 || menuSelectDigit.style.opacity == 0) {
            clearInterval(k);
            menuSelectDigit.style.left = "0%";
            menuSelectDigit.style.top = "100%";
            g = []
            notFilled = 0
            for (m = 0; m < 81; m++) {
                cell = document.getElementById("cell_" + m);
                value = cell.innerText;
                if (value == "" || cell.style.fontSize == "100%") {
                    g.push(0);
                    notFilled++;
                } else {
                    g.push(parseInt(value))
                }
            }

            for (m = 0; m < 81; m++) {
                cell = document.getElementById("cell_" + m)
                cell.style.backgroundColor = "";
                if (!defaultGrid[m] && cell.innerText != "" && cell.style.fontSize != "100%" && !isGridValid(g, m)) {
                    cell.style.backgroundColor = "#ff8844";
                }
            }

            if (notFilled == 0 && isGridValid(g, currCellId.split("_")[1])) {
                stopTimer()
                alert("Congratulations, you have solved the puzzle")
            }

        } else {
            menuSelectDigit.style.opacity = i * 0.1;
            i--;
        }
    }, 20);
}

function selectValue(n) {
    selectedValueByUser = n;
}
document.getElementById("buttonEasy").addEventListener("click", function(event) {
    fillGrid(generateGrid(45));
    document.getElementById("infoMenuDifficultyName").innerText = "Easy";
    startTimer();
}, false);
document.getElementById("buttonMedium").addEventListener("click", function(event) {
    fillGrid(generateGrid(35));
    document.getElementById("infoMenuDifficultyName").innerText = "Medium";
    startTimer();
}, false);
document.getElementById("buttonHard").addEventListener("click", function(event) {
    fillGrid(generateGrid(20)); // will be around 24 on average
    document.getElementById("infoMenuDifficultyName").innerText = "Hard";
    startTimer();
}, false);
for (i = 0; i < 81; i++) {
    document.getElementById("cell_" + i).addEventListener("mousedown", pressClickCell, true)
}
document.getElementById("playWindow").addEventListener("mouseup", releaseClickCell, true);