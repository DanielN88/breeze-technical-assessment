describe('Homepage selection user flow', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://www.flybreeze.com/home')
  })

  it.only('Should test user flow for selecting a flight', () => {
    cy.get('#ti-origin-select').click().type('utah')
    cy.get('.ng-option').eq(0).click()
    cy.get('.airport').should('have.text', ' Provo Municipal Airport (PVU) ')
    cy.get('#ti-destination-select').click()
    cy.get('.ng-option').eq(0).click()
    cy.get('#ti-destination-select > .station-input > .selected-station > .airport').should('have.text', ' Charleston International Airport (CHS) ')
    cy.get('booking-web-shared-ui-booking-passengers-card > .card > .card-body').click()
    cy.get('[role="region"][aria-label="add adult"] > .buttons > .plus').click()
    cy.get('.container > .pb-4').click()
    cy.wait(6000)
    cy.get('booking-web-shared-ui-booking-dates-card > .card > .card-body').click()
    cy.get('[style="left:0%"] > .mbsc-cal-table > :nth-child(3) > .mbsc-cal-day4 > .mbsc-cal-cell-i > .mbsc-cal-day-date').click()
    cy.get('[style="left:0%"] > .mbsc-cal-table > :nth-child(4) > .mbsc-cal-day5 > .mbsc-cal-cell-i > .mbsc-cal-day-date').click()
    cy.get('#search-flights > .card > .card-body').click()
  })

  it('Should display no stations message when user enters numbers into input', () => {
    cy.get('#ti-origin-select').click().type('1234')
    cy.get('.container > .font-lg').should('have.text', ' No Stations Found ')
    cy.get('.text-light-gray').should('have.text', ` Sorry, we’re only servicing select airports for now. Check back later to see if your desired city was added. `)
  })

  it('Should test titles are correct', () => {
    cy.get('.text-white').should('have.text', ` It's Seriously Nice™ to see you. `)
    cy.get('.col-12 > .text-secondary').should('have.text', ' Book your flight now through May 16, 2023. ')
  })

  it('Should test tc-promotion-banner exists', () => {
    cy.get('a > .d-none').should('exist')
  })

  it('Should test .svg is visible and includes the correct xmlns', () => {
    cy.get('.svg').should('be.visible')
    cy.get('.svg').should('have.attr', 'xmlns').should('include', 'http://www.w3.org/2000/svg')
  })
})