function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');

}

function increaseRankBy(n) {
    var ranks = document.querySelectorAll('ul.ranked-list');
    for (var i = 0; i < ranks.length; i++) {
        ranks[i].innerHTML = parseInt(ranks[i]) + n;
    }

}

function deepestChild() {
    var currentNode = document.querySelector('#grand-node');
    var nextNode = currentNode.children[0];
    while(nextNode) {
        currentNode = nextNode;
        nextNode = currentNode.children[0]
    }
    return currentNode;
}
