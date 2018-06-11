var accessToken = "xx14d94118-01b3-4784-9722-c1d044484bdc";

var fieldName = "@clickableuri";
var fieldValue = location.href;
var itemType = "Web Page";

function getUserName() {
  // Implementation…
};

function getUserQuest() {
  // Implementation…
};

function getUserFavoriteColor() {
  // Implementation...
};

coveoua("init", accessToken);
coveoua("send", "pageview", {
  contentIdKey: fieldName,
  contentIdValue: fieldValue,
  contentType: itemType,
  // Optionally, to allow Coveo ML to take advantage of contextual information, you can pass any number of custom context key-value pairs.
  context_userName: getUserName(),
  context_userQuest: getUserQuest(),
  context_userFavoriteColor: getUserFavoriteColor() // ...
});
