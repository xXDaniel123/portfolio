'use strict'

var gProjects = [];
var gNextId = 0;

function createProjects() {
    gProjects.push(_createProject('mineSweeper', 'Mine Sweeper', 'interactive puzzle game'));
    gProjects.push(_createProject('bookShop', 'Book Store', 'Online Book Store'));
    gProjects.push(_createProject('pacman', 'Pacman', 'the amazing game remastered'));
}

function _createProject(name, title, desc) {

    var project = {
        url: 'item-img/' + gNextId + '.jpg',
        id: gNextId++,
        name: name,
        title: title,
        desc: desc,
        publishedAt: getCurrTime()
    }
    return project;
}

function getCurrTime() {
    return Date.now();
}

function getProjects() {
    return gProjects;
}