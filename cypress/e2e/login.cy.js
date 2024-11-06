describe('Página de Inicio', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Network Error')) {
        return false;
      }
    });
  });

  it('debe cargar correctamente', () => {
    cy.visit('/');
    cy.contains('Central'); // Cambia a algún texto que debería estar en tu página de inicio
  });

  it('debe mostrar el popup de login al hacer clic en el botón de login', () => {
    cy.visit('/');
    cy.get('button').contains('Ingresar').click(); // Cambia el selector según tu botón de login
    cy.get('.login-popup').should('be.visible'); // Cambia el selector según tu popup de login
  });

  it('debe permitir al usuario iniciar sesión', () => {
    cy.visit('/');
    cy.get('button').contains('Ingresar').click(); // Cambia el selector según tu botón de login
    cy.get('.login-popup').contains('Inicie sesión aquí').click(); // Cambia el selector según el texto del popup adicional
    cy.get('input[name="email"]').type('usuario@example.com'); // Cambia el selector según tu campo de email
    cy.get('input[name="password"]').type('contraseña'); // Cambia el selector según tu campo de contraseña
    cy.get('button').contains('Login').click(); // Cambia el selector según tu botón de submit
    // cy.contains('Bienvenido, usuario'); // Cambia el texto según lo que debería aparecer después de iniciar sesión
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
