describe('Flight details user flow', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  beforeEach(() => {
    cy.visit('https://www.flybreeze.com/booking/availability?origin=PVU&destination=CHS&beginDate=2022-11-17&endDate=2022-11-25&searchDestinationMacs=false&searchOriginMacs=false&passengers=%7B%22types%22:%5B%7B%22count%22:2,%22type%22:%22ADT%22%7D%5D%7D&infantCount=0')
    cy.wait(3000)
  })

  it('Should test that outbound selected details are correct', () => {
    cy.get(':nth-child(1) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > #ti-flight-details-date > :nth-child(2)').should('have.text', 'Nov 17, 2022')
    cy.get(':nth-child(1) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .selected-flight-banner-org-dst > :nth-child(1) > .station-name').should('have.text', ' Provo Municipal Airport (PVU) ')
    cy.get(':nth-child(1) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .selected-flight-banner-org-dst > .text-right > .station-name').should('have.text', ' Charleston International Airport (CHS) ')
    cy.get(':nth-child(1) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .flex-shrink-0 > .tc-flight-fare-details > app-price > .price').should('be.visible')
    cy.get(':nth-child(2) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .flex-shrink-0 > .tc-flight-fare-details > app-price > .price').should('be.visible')
  })

  it('Should test that inbound selected details are correct', () => {
    cy.get(':nth-child(2) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > #ti-flight-details-date > :nth-child(2)').should('have.text', 'Nov 25, 2022')
    cy.get(':nth-child(2) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .selected-flight-banner-org-dst > :nth-child(1) > .station-name').should('have.text', ' Charleston International Airport (CHS) ')
    cy.get(':nth-child(2) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .selected-flight-banner-org-dst > .text-right > .station-name').should('have.text', ' Provo Municipal Airport (PVU) ')
    cy.get(':nth-child(2) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .flex-shrink-0 > .tc-flight-fare-details > app-price > .price').should('be.visible')
    cy.get('#inboundFlightList > :nth-child(2) > .pb-md-4 > app-available-journey > :nth-child(1) > .flex-grow-1 > .h-100 > .align-items-center > .flight-number').should('be.visible')
  })

  it('Should test overview and final price', () => {
    cy.get('.mr-1 > :nth-child(1) > .font-lg').should('have.text', 'Overview')
    cy.get('#ti-overview-guest-count').should('have.text', ' 2 GUESTS ')
  })

  it('Should test selecting a different flight level', () => {
    cy.get(':nth-child(1) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .flex-shrink-0 > .tc-flight-fare-details > app-price > .price').should('be.visible')
    cy.get('#outbound-journey-0-BZU > .fare-family-card > .content > .fare-family-card-content > .fare-family-card-btn').click()
    cy.get(':nth-child(1) > app-flight-details-banner > .d-md-block > :nth-child(1) > .container > :nth-child(3) > .col-10 > .flex-shrink-0 > .tc-flight-fare-details > app-price > .price').should('not.contain', ' $  134  .00 ')
  })
})