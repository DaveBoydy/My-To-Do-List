import PubSub from 'pubsub-js';

/*
 ** Wraps PubSubJS.
 */

export default function SubscribeEvents() {
    const setSubscription = (topic, subscriber) => {
        PubSub.subscribe(topic, subscriber);
    };

    return {
        setSubscription,
    };
}
