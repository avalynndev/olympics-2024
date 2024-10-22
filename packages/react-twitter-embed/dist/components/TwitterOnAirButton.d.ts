import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
interface JSONObject {
    [k: string]: any;
}
export interface TwitterOnAirButtonProps {
    /**
     * Username for which you require periscope on air button
     */
    username: string;
    /**
     * Additional options for overriding config.
     */
    options?: JSONObject;
    /**
     * Placeholder while tweet is loading
     */
    placeholder?: string | React.ReactNode;
    /**
     * Function to execute after load, return html element
     */
    onLoad?: (element: any) => void;
}
declare const TwitterOnAirButton: (props: TwitterOnAirButtonProps) => any;
export default TwitterOnAirButton;
