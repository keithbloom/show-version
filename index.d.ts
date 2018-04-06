// Type definitions for show-version 
// Project: https://github.com/keithbloom/show-version.git  
// Definitions by: Keith Bloom 

export as namespace ShowVersion;
export = ShowVersion;

declare namespace ShowVersion {
    export function show() : void;
    export function getVersionMessage() : string;
}
