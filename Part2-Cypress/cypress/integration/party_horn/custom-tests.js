describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Lab8/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when input volume changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( ($el) => { expect($el).to.have.value(75) });
  });

  it('Input volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-number').then( ($el) => { expect($el).to.have.value(33) });
  });

  it('volume of <audio> changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#horn-sound').then( ($el) => { expect($el).to.have.prop('volume',0.33) });
  });

  it('image and sound source change when party horn radio button is selected', () => {
    cy.get('#audio-selection [type="radio"]').find(['radio-party-horn']).check();
    cy.get('#sound-image').then( ($el) => { expect($el).to.have.attr('src', './assets/media/images/party.svg')});
    cy.get('#horn-sound').then( ($el) => { expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')});
  });

  it('test if volume-level-0 will display when volume is < ', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then( ($el) => { expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg')});
  });
/*
  it('test if volume-level-1 will display when volume is > 0 but < 34', () => {
    cy.get('#volume-number').clear().type('2');
    cy.get('#volume-image').then( ($el) => { expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg')});
  });
*/
});
