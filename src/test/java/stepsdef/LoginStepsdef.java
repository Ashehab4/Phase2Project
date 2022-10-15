package stepsdef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginStepsdef {
	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
        Thread.sleep(3000);
	    
	}

	@When("I enter the  username as {string} and passowrd as {string}")
	public void i_enter_the_username_as_and_passowrd_as(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.id("user-name"));
        UserName.sendKeys(string);

        WebElement Password = driver.findElement(By.id("password"));
        Password.sendKeys(string2);
	    
	}

	@When("I click on the Login Button")
	public void i_click_on_the_Login_Button() {
		WebElement Login_button = driver.findElement(By.id("login-button"));
		Login_button.click();
		
	    
	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		driver.getCurrentUrl().contains("inventory.html");
	    
	}

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String string) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement ErrorMssg = driver.findElement(By.className("error-message-container"));
		ErrorMssg.getText().equalsIgnoreCase(string);
	}
	@Then("I should get the error message as\"<ErrorMsg>\"")
	public void i_should_get_the_error_message_as_ErrorMsg() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String string) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement ErrorMssg = driver.findElement(By.className("error-message-container"));
		ErrorMssg.getText().equalsIgnoreCase(string);
	}

//	@Then("I should get the error message as\"Valid\"")
//	public void i_should_get_the_error_message_as_Valid() {
//	    // Write code here that turns the phrase above into concrete actions
//	   
//	}
//
//	@Then("I should get the error message as\"Epic sadface: Username and password do not match any user in this service.\"")
//	public void i_should_get_the_error_message_as_Epic_sadface_Username_and_password_do_not_match_any_user_in_this_service(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//		WebElement ErrorMssg = driver.findElement(By.className("error-message-container"));
//		ErrorMssg.getText().equalsIgnoreCase("Epic sadface: Username and password do not match any user in this service.");
//	}
//
//	@Then("I should get the error message as\"Epic sadface: Sorry, this user has been locked out.\"")
//	public void i_should_get_the_error_message_as_Epic_sadface_Sorry_this_user_has_been_locked_out(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//		WebElement ErrorMssg = driver.findElement(By.className("error-message-container"));
//		ErrorMssg.getText().equalsIgnoreCase("Epic sadface: Sorry, this user has been locked out.");
//	}

}
