import DomCache from "./dom-cache";
import PublishEvents from "./publish-events";
import SubscribeEvents from "./subscribe-events";
import addCategoryInput from "../controller/category-component/add-category";

/*
 ** Execute logic after the DOM has loaded.
 */
addEventListener("load", () => {
  /*
   ** Publish event listeners VIA PubSubJS.
   */

  PublishEvents().setEventListenerPublication(
    DomCache().getAddCategory(),
    "click",
    "ADD CATEGORY",
    "Add or remove Category"
  );

  /*
   ** Subscribe to PubSubJS events.
   */
  SubscribeEvents().setSubscription("ADD CATEGORY", addCategoryInput);
});
