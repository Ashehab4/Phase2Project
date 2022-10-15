Feature: Test Login scenarios

  Background: 
    Given I have launched the application

  @sanity
  Scenario: This scenario is to define the login happy path
    When I enter the  username as "standard_user" and passowrd as "secret_sauce"
    When I click on the Login Button
    Then I should land on the home page
	@regression
  Scenario Outline: This sceanrio is to define the failure path
    When I enter the  username as "<Name>" and passowrd as "<Pass>"
    When I click on the Login Button
    Then I should get the error message as "<ErrorMsg>"

    Examples: 
      | Name            | Pass           | ErrorMsg                                                                   |
      | standard_user   | secret_sauce44 | Epic sadface: Username and password do not match any user in this service. |
      | locked_out_user | secret_sauce   | Epic sadface: Sorry, this user has been locked out.                        |
