import React from "react";
import { GlobalCtx } from "../interfaces";
export declare const initialContext: {
    defaultInterval: number;
    width: string;
    height: number;
};
declare const GlobalContext: React.Context<GlobalCtx>;
export default GlobalContext;
