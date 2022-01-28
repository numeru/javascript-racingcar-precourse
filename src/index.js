import Model from './models/Model.js';
import View from './views/View.js';
import Controller from './controllers/Controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const model = new Model();
  const view = new View(model);

  new Controller(view, model);
});
