import $ from 'jquery';
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './css/style.css';

export class slickWrapper {

  constructor (selector = '.slick', config = false) {
    this.selector = selector;
    this.config = config;
  }

  // Methods ===============================
  setTemplate (html) {
    this.template = html;
    return this;
  }

  setConfig (json) {
    this.config = json;
    return this;
  }

  setSelector (selector) {
    this.config = selector;
    return this;
  }

  setAddTo (selector) {
    this.addTo = selector;
    return this;
  }

  append(selector = false) {
    let addTo = (selector || this.addTo);
    $(this.template).appendTo(addTo);
    return this;
  }

  prepend(selector = false) {
    let addTo = (selector || this.addTo);
    $(this.template).prependTo(addTo);
  }

  async loadPreset (presetName) {
    let tpl = await this.getFromFile (presetName + '/template.html');
    this.template = tpl;
    let cfg = await this.getFromFile (presetName + '/config.json');
    this.config = JSON.parse(cfg);
    return this;
  }
  show () {
    console.log('show', this)
    $(this.selector).slick(this.config);
  }

  // Helpers ===============================
  async getFromFile (file) {
    console.log('file: ', file);
    const response = await fetch('data/' + file);
    if (!response.ok) {
      return '';
    }
    return response.text();
  }
}