package stepsdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomePageDef {
	WebDriver driver = Hooks.driver;
	
	@When("I search the  product as {string} and Add it to Cart")
	public void i_search_the_product_as(String ProductName) {
	    // Write code here that turns the phrase above into concrete actions
		String Prodxpath= "//div[text()='"+ ProductName +"']//following::button[1]";
		//String Prodxpath="//div[text()='Sauce Labs Backpack']//following::button[1]";
		WebElement ProductName1 = driver.findElement(By.xpath(Prodxpath));
		ProductName1.click();
	}



	@Then("Basket Number should be {int}")
	public void basket_Number_should_be(Integer int1) {
	    // Write code here that turns the phrase above into concrete actions
	    WebElement CartCount = driver.findElement(By.className("shopping_cart_badge"));
	    CartCount.getText().equals(int1);
	}

}
