import PubSub from "pubsub-js";

export default function SubscribeEvents() {
  const setSubscription = (topic, data) => {
    PubSub.subscribe(topic, data);
  };

  return {
    setSubscription,
  };
}
