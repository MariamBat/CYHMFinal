Cypress.Commands.add('registerUser', (user) => {
  cy.visit('https://automationexercise.com');

  cy.get('img[alt="Website for automation practice"]').should('be.visible');

  cy.contains('Signup / Login').click();

  cy.get('input[data-qa="signup-name"]').type(user.name);
  cy.get('input[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.contains('Enter Account Information').should('be.visible');

  if (user.title === 'Mr') {
    cy.get('#id_gender1').check();
  } else if (user.title === 'Mrs') {
    cy.get('#id_gender2').check();
  }

  cy.get('#password').type(user.password);

  cy.get('#days').select(user.dob_day);
  cy.get('#months').select(user.dob_month);
  cy.get('#years').select('1995');
  cy.get('#newsletter').check();

  cy.get('#optin').check();

  cy.get('#first_name').type(user.first_name);
  cy.get('#last_name').type(user.last_name);
  cy.get('#company').type(user.company);
  cy.get('#address1').type(user.address1);
  cy.get('#address2').type(user.address2);
  cy.get('#country').select(user.country);
  cy.get('#state').type(user.state);
  cy.get('#city').type(user.city);
  cy.get('#zipcode').type(user.zipcode);
  cy.get('#mobile_number').type(user.mobile_number);

  cy.get('button[data-qa="create-account"]').click();

  cy.contains('Account Created!').should('be.visible');

  cy.get('a[data-qa="continue-button"]').click();

  cy.contains(`Logged in as ${user.name}`).should('be.visible');
});


//test case 2 Login User.
Cypress.Commands.add('loginUser', (user) => {
  cy.visit('https://automationexercise.com');
  cy.contains('Signup / Login').click();
  cy.get('input[data-qa="login-email"]').type(user.email);
  cy.get('input[data-qa="login-password"]').type(user.password);
  cy.get('button[data-qa="login-button"]').click();
  cy.contains(`Logged in as ${user.name}`).should('be.visible');
});

// Test Case 3: incorect email and password
Cypress.Commands.add('loginWithInvalidCredentials', (email, password) => {
  cy.visit('https://automationexercise.com');
  cy.contains('Signup / Login').click();
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
  cy.contains('Your email or password is incorrect!').should('be.visible');
});
