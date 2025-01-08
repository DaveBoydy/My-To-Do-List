import PubSub from 'pubsub-js';

/*
 ** Wraps PubSubJS.
 */

export default function PublishEvents() {
    const setPublication = (topic, data) => {
        PubSub.publish(topic, data);
    };

    const setEventListenerPublication = (element, eventType, topic, data) => {
        if (element.getAttribute('listener') !== 'true') {
            element.setAttribute('listener', true);
            element.addEventListener(eventType, () => {
                PubSub.publish(topic, data);
            });
        }
    };

    return {
        setPublication,
        setEventListenerPublication,
    };
}
