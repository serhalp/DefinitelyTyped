import BaseComponent from './base-component';

declare class Alert extends BaseComponent {
    /**
     * Closes an alert by removing it from the DOM. If the .fade and .show
     * classes are present on the element, the alert will fade out before it
     * is removed.
     */
    close(): void;

    /**
     * Static method which allows you to get the alert instance associated to a
     * DOM element, you can use it like this: getInstance(alert)
     */
    static getInstance(element: Element): Alert;

    // static NAME: 'alert';
}

declare namespace Alert {
    enum Events {
        /**
         * Fires immediately when the close instance method is called.
         */
        close = 'close.bs.alert',

        /**
         * Fired when the alert has been closed and CSS transitions have
         * completed.
         */
        closed = 'closed.bs.alert',
    }

    type jQueryInterface = (config?: 'close' | 'dispose') => void;
}

export default Alert;
