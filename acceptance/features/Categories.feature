Feature: Categories

    As a user 
    I want to test for Categories
    
    Scenario: URL of Home page
      Given I am on the home screen
      Then I should be able to see the correct URL
  
   Scenario: Select three categories from the menu
    Given I land on the homepage
    When I open the side menu
    And I select three different categories
    Then I should be able to see the selected categories 
