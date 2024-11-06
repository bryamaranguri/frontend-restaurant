describe('Página del Carrito', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Network Error')) {
        return false;
      }
    });
  });

  it('debe permitir al usuario agregar un elemento al carrito', () => {
    cy.visit('/');
    cy.get('.food-item-img-container .add').first().click(); // Cambia el selector según tu botón de agregar al carrito
    cy.get('.food-item-counter > p ').should('contain', '1'); // Cambia el selector según tu contador de elementos en el carrito
  });

  it('debe permitir al usuario eliminar un elemento del carrito', () => {
    cy.visit('/');
    cy.get('.food-item-img-container .add').first().click(); // Cambia el selector según tu botón de agregar al carrito
    cy.get('[src="/src/assets/remove_icon_red.png"]').first().click(); // Cambia el selector según tu botón de eliminar del carrito
    cy.get('.food-item-counter > p').should('not.exist'); // Verifica que el contador de elementos en el carrito desaparezca
  });

  it('debe permitir al usuario navegar a la página del carrito', () => {
    cy.visit('/');
    cy.get('.navbar-basket-icon > .basket-icon').should('be.visible').click(); // Verifica que el enlace esté visible antes de hacer clic
    cy.url().should('include', '/cart'); // Verifica que la URL incluya '/cart'
  });

  it('debe permitir al usuario navegar a la página de realizar pedido', () => {
    cy.visit('/cart');
    cy.get('.cart-total > button').should('be.visible').click(); // Verifica que el botón esté visible antes de hacer clic
    cy.url().should('include', '/order'); // Verifica que la URL incluya '/order'
  });
});
