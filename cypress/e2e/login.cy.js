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
});
