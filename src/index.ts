/**
 * index.js: just export
 */
import { IDhcpOptions } from "./interfaces/i-pxe";
export default class dhcpd {
    constructor(opts: IDhcpOptions) {
        return new dhcpd(opts);
    }
}
//export { MessageTypes } from "./lib/packet/message-types";
//export { Options } from "./lib/packet/options";