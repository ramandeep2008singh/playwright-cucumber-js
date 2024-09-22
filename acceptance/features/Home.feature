Feature: Home Page

    As a user 
    I want to test all basic scenarios for Home Page
    
    Scenario: URL of Home page
      Given I am on the home screen
      Then I should be able to see the correct URL
  
    Scenario: login option on the home screen
      When I click on the login icon
      Then I should see a panel opened with input fields with email address, password, register and login buttons

    Scenario: Cancel the login screen
      Given I am on the home-login screen
      When I click on the x icon
      Then I should be able to close the login panel