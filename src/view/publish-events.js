import PubSub from "pubsub-js";

export default function PublishEvents() {
  const setPublication = (topic, data) => {
    PubSub.publish(topic, data);
  };

  const setEventListenerPublication = (element, eventType, topic, data) => {
    element.addEventListener(eventType, () => {
      PubSub.publish(topic, data);
    });
  };

  return {
    setPublication,
    setEventListenerPublication,
  };
}
