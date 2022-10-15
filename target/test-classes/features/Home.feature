Feature: Add Product to Cart Scenario

  Background: 
    Given I have launched the application
    When I enter the  username as "standard_user" and passowrd as "secret_sauce"
    Given I click on the Login Button
@regression
  Scenario Outline: This scenario is to add product to Cart
    When I search the  product as "<ProductName>" and Add it to Cart
    Then Basket Number should be 1

    Examples: 
      | ProductName              |
      | Sauce Labs Bolt T-Shirt  |
      | Sauce Labs Fleece Jacket |
