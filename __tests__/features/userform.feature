Feature: User Registration Form

Scenario: User submits the form with invalid data
    Given the user is on the registration form page
    When the user submits the form with invalid data:
         | Value |
         |       |
    Then the form should display an error message for the First Name field
    Scenario: User submits the form with valid data
        Given the user is on the registration form page
        When the user enters valid data:
            | Value      |
            | Srinivasu  |
        And the user submits the form
        Then the form should be submitted successfully

    
