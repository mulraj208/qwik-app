import type {AuthConfig} from "~/auth/types";
import type Auth from "@salesforce/commerce-sdk-react/auth";
import {default as ClassAuth} from "@salesforce/commerce-sdk-react/auth";

let authInstance: Auth | null = null;
let cachedOptions: AuthConfig | null = null;

/**
 * Compare new options with cached options to determine if anything has changed
 * @param newOptions The new options to compare with cached ones
 * @returns true if the options have changed, false otherwise
 */
function optionsChanged(newOptions: AuthConfig): boolean {
    if (!cachedOptions) return true;

    return Object.keys(newOptions).some(
        (key) => (cachedOptions as any)[key] !== (newOptions as any)[key]
    );
}

/**
 * Get the Auth instance, reinitialize it if the options have changed.
 * @param newOptions The options to initialize Auth with
 * @returns The initialized or cached Auth instance
 */
export function getAuthInstance(newOptions: AuthConfig): Auth {
    if (!authInstance || optionsChanged(newOptions)) {
        // @ts-ignore - ESM and CommonJS Compatibility Issues while using vite
        authInstance = new ClassAuth.default(newOptions);
        cachedOptions = { ...newOptions }; // Cache the new options for future comparison
    }

    return <Auth>authInstance;
}
