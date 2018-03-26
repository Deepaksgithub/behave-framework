Feature: Open Bord gais website and rigister the details

  Scenario: User can register in the website
    Given I attempt to register in with valid details
    Then I proceed to register
    Then I opt to register as a residential customer
    And I enter the details of my account