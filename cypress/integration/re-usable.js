

const experienceLevelFilter = '.filter-control-container';
const applyButton ='.apply-filter'

export function getFilterToggle(el)
{
    cy.get(experienceLevelFilter).each((el, index) => {
        if (el.text === 'Experience level' )
        {
         cy.contains('Experience level').click();
         cy.get(applyButton).contains('Select').should('be.visible').click();
        }
        else if (el.text === 'Employment type' )
        {
            cy.contains('Employment type').click();
            cy.get(applyButton).contains('Select').should('be.visible').click();   

        }
        else if (el.text === 'Office location' )
        {
            cy.contains('Office location').click();   
            cy.get(applyButton).contains('Select').should('be.visible').click();

        }
    })
}
