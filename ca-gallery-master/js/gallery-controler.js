'use strict'

function init() {
    createProjects();
    renderProjects();
}

function renderProjects() {

    var projects = getProjects();
    var strHTML = projects.map(function (project) {

        return `
        <div class="portfolio-item">
            <img class="img-fluid item-image" src="${project.url}" alt="" onclick="renderModal(${project.id})">
        <div class="portfolio-caption">
            <h4 class="item-header">${project.title}</h4>
            <p class="text-muted item-sub-header"">${project.desc}</p>
        </div>
      </div>`
    })

    document.querySelector('.projects-container').innerHTML += strHTML.join('');

}

function renderModal(id) {

    $('.modal-background').fadeToggle(300);
    $('.modal-container').fadeToggle(300);
    var currProject = getProjects();

    var strHTML = `
    <img class="modal-image" src="${currProject[id].url}" alt="">
    <div class="modal-details-container">
    <h2 class="modal-header">${currProject[id].title}</h2>
    <h6 class="modal-text">${currProject[id].desc}</h6>
    <button class="modal-link">go to project ${currProject[id].title}</button>
    </div>
    `

    document.querySelector('.modal-container').innerHTML = strHTML
}

function hideModal() {
    $('.modal-container').fadeToggle(200);
    $('.modal-background').fadeToggle(200);
}

function checkBG() {
    $('.modal-background').fadeToggle(300);
}