Feature:Expedia booking
  Scenario: As a user I want to search hotels in Expedia
    Given I am navigated to Expedia
    When I click on hotel booking tab
    And I provide hotel booking information
    Then I should be bale to view a list of hotel search result