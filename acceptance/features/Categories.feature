Feature: Categories

    As a user 
    I want to test for Categories
  
    Scenario: Select three categories from the menu
      Given I land on the homepage
      When I open the side menu
      When I select three different categories
      When I Select product from the side menu
      Then I should be able to see the selected categories 
