$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/ExpediaBooking.feature");
formatter.feature({
  "name": "Expedia booking",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I want to search hotels in Expedia",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am navigated to Expedia",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.iAmNavigatedToExpedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on hotel booking tab",
  "keyword": "When "
});
formatter.match({
  "location": "steps.HomeSteps.iClickOnHotelBookingTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide hotel booking information",
  "keyword": "And "
});
formatter.match({
  "location": "steps.HomeSteps.iProvideHotelBookingInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be bale to view a list of hotel search result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SerachResultSteps.iShouldBeBaleToViewAListOfHotelSearchResult()"
});
formatter.result({
  "status": "passed"
});
});