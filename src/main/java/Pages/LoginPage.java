package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver driver;
	@FindBy(id="user-name")
	WebElement UserName;
	
	@FindBy(id = "password")
	WebElement Password;
	
	@FindBy(id="login-button")
	WebElement LoginButton;
	
	@FindBy(className="error-message-container")
	WebElement MessageAlert;
	
	@FindBy(className="peek")
	WebElement BotImage;
	
	

	public WebElement getUserName() {
		return UserName;
	}

	public void setUserName(WebElement userName) {
		UserName = userName;
	}

	public WebElement getPassword() {
		return Password;
	}

	public void setPassword(WebElement password) {
		Password = password;
	}

	public WebElement getLoginButton() {
		return LoginButton;
	}

	public void setLoginButton(WebElement loginButton) {
		LoginButton = loginButton;
	}

	public WebElement getMessageAlert() {
		return MessageAlert;
	}

	public void setMessageAlert(WebElement messageAlert) {
		MessageAlert = messageAlert;
	}

	public LoginPage(WebDriver BaseDriver) {
		
		this.driver = BaseDriver;
		PageFactory.initElements(BaseDriver, this);
		// TODO Auto-generated constructor stub
	}
	
	public void login(String UserNameval , String PasswordVal) {
		
		UserName.sendKeys(UserNameval);
		Password.sendKeys(PasswordVal);
		LoginButton.click();
		
	}
	
	public boolean ErrorMessageIsDisplayed() {
		if (MessageAlert.isDisplayed()) {
			return true;
		}
		else {
			return false;}
			
		}
		
		public boolean ImageValidationIsDisplayed() {
			if (BotImage.isDisplayed()) {
				return true;
			}
			else {
				return false;
				
			}
		
		
		
	}

}
