describe('ShopSmart E2E testing', () => {
    it('Visits the ShopSmart Homepage and verifies elements', () => {
      // Simulate visiting the homepage
      cy.visit('http://localhost:5173');
      
      // Verify the title is correct
      cy.contains('ShopSmart');
      
      // Verify that mock products are displayed
      cy.contains('Featured Products');
      cy.contains('Wireless Headphones').should('be.visible');
      cy.contains('Smart Watch').should('be.visible');
  
      // Simulate an action - Add to Cart
      cy.get('.product-card').first().find('button').click();
    });
});
