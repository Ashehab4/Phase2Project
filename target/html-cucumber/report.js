$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Home.feature");
formatter.feature({
  "name": "Add Product to Cart Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "This scenario is to add product to Cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I search the  product as \"\u003cProductName\u003e\" and Add it to Cart",
  "keyword": "When "
});
formatter.step({
  "name": "Basket Number should be 1",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ProductName"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the  username as \"standard_user\" and passowrd as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_enter_the_username_as_and_passowrd_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to add product to Cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I search the  product as \"Sauce Labs Bolt T-Shirt\" and Add it to Cart",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.HomePageDef.i_search_the_product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Basket Number should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdef.HomePageDef.basket_Number_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the  username as \"standard_user\" and passowrd as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_enter_the_username_as_and_passowrd_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to add product to Cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I search the  product as \"Sauce Labs Fleece Jacket\" and Add it to Cart",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.HomePageDef.i_search_the_product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Basket Number should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdef.HomePageDef.basket_Number_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Test Login scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the login happy path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the  username as \"standard_user\" and passowrd as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_enter_the_username_as_and_passowrd_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "This sceanrio is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the  username as \"\u003cName\u003e\" and passowrd as \"\u003cPass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the error message as \"\u003cErrorMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Pass",
        "ErrorMsg"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce44",
        "Epic sadface: Username and password do not match any user in this service."
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This sceanrio is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the  username as \"standard_user\" and passowrd as \"secret_sauce44\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_enter_the_username_as_and_passowrd_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This sceanrio is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the  username as \"locked_out_user\" and passowrd as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_enter_the_username_as_and_passowrd_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdef.LoginStepsdef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});