import PubSub from 'pubsub-js';

/*
 ** Wraps PubSubJS.
 */

export default function SubscribeEvents() {
    const setSubscription = (topic, data) => {
        PubSub.subscribe(topic, data);
    };

    return {
        setSubscription,
    };
}
