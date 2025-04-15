describe('Test Case 1: Register User', () => {
    beforeEach(() => {
      cy.fixture('user').as('userData');
    });
  
    it('should register a new user successfully', function () {
      cy.registerUser(this.userData);
    });
  });

  // Test Case 2: Login User
  describe('Test Case 2: Login User with correct email and password', () => {
    beforeEach(() => {
      cy.fixture('user').as('userData');
    });
  
    it('should login successfully with correct credentials', function () {
      cy.loginUser(this.userData);
    });
  });

  // Test Case 3: Incorrect email and password
  describe('Test Case 3: Login User with incorrect email and password', () => {
    it('should display error message with invalid credentials', () => {
      const invalidEmail = 'racxaEmail@example.com';
      const invalidPassword = 'mshia1234';
      cy.loginWithInvalidCredentials(invalidEmail, invalidPassword);
    });
  });
