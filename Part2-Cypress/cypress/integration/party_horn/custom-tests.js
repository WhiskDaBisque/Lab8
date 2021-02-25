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
    cy.get('[id="radio-party-horn"]').check();
    cy.get('#sound-image').then( ($el) => { expect($el).to.have.attr('src', './assets/media/images/party-horn.svg')});
    cy.get('#horn-sound').then( ($el) => { expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')});
  });

  describe('volume image changes when increasing volumes', () => {
    it('test if volume-level-0 will display when volume 0', () => {
      cy.get('#volume-number').clear().type('0');
      cy.get('#volume-image').then( ($el) => { expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg')});
    });

    it('test if volume-level-1 will display when volume > 0 && < 34', () => {
      cy.get('#volume-number').clear().type('30');
      cy.get('#volume-image').then( ($el) => { expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg')});
    });

    it('test if volume-level-2 will display when volume > 33 && < 67', () => {
      cy.get('#volume-number').clear().type('50');
      cy.get('#volume-image').then( ($el) => { expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg')});
    });

    it('test if volume-level-3 will display when volume > 66', () => {
      cy.get('#volume-number').clear().type('80');
      cy.get('#volume-image').then( ($el) => { expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg')});
    });
  });

  describe('test if honk button is disabled when textbox input is empty or a non-number', () => {
    it('textbox input is empty', () => {
      cy.get('#volume-number').clear();
      cy.get('#honk-btn').should('be.disabled');
    });

    it('textbox input is non-number', () => {
      cy.get('#volume-number').clear().type('s');
      cy.get('#honk-btn').should('be.disabled');
    });
  });

  it('An error is thrown when a number is outside of the given range in volume textbox input', () => {
    cy.get('#volume-number').clear().type(102);
    cy.get('input:invalid').should('be.enabled');
  });
});
