package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomeSteps {
    @Given("I am navigated to Expedia")
    public void iAmNavigatedToExpedia() {
    System.out.print("----I am navigated to Expedia ----");
    }

    @When("I click on hotel booking tab")
    public void iClickOnHotelBookingTab() {
    }

    @And("I provide hotel booking information")
    public void iProvideHotelBookingInformation() {

    }

}
