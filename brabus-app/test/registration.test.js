import { expect } from 'chai';
import fetch from 'node-fetch';
import { faker } from '@faker-js/faker';

describe('Registration API Tests', () => {
  const baseUrl = 'http://localhost:3000/api/auth/register';
  
  // Helper function to generate random user data
  const generateRandomUser = () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
    birthYear: faker.date.between({ from: '1950-01-01', to: '2005-12-31' }).toISOString(),
    country: faker.location.country()
  });

  // Helper function to register a user
  async function registerUser(userData) {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      
      const data = await response.json();
      return {
        status: response.status,
        data
      };
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  // Test registering 10 random users
  Array.from({ length: 10 }).forEach((_, index) => {
    it(`should successfully register random user ${index + 1}`, async () => {
      const userData = generateRandomUser();
      
      const result = await registerUser(userData);
      
      expect(result.status).to.equal(200);
      expect(result.data).to.have.property('message', 'User registered successfully');
      
      // Log the registered user data for verification
      console.log(`Successfully registered user ${index + 1}:`, {
        name: userData.name,
        email: userData.email,
        country: userData.country
      });
    }).timeout(10000); // Increase timeout to 10s for each test
  });
});