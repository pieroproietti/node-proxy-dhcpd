/**
 * index.ts: just export
 */
import { IDhcpOptions } from './interfaces/i-pxe.js';

export class dhcpd {
    constructor(public opts: IDhcpOptions) { }
    /*
    pre_init: (pkt: IPacket) => void;
    discover: (pkt: IPacket) => void;
    request: (pkt: IPacket) => void;
    inform: (pkt: IPacket) => void;
    proxy_request: (pkt: IPacket) => IPacket;
    */
}
