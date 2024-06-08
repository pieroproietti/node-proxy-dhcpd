import { IPacket, IDhcpOptions } from '../interfaces/i-pxe.ts'

// Path: src/classes/dhcpd.t
export declare class dhcpd {
    constructor(opts: IDhcpOptions);
    pre_init: (pkt: IPacket) => void;
    discover: (pkt: IPacket) => void;
    request: (pkt: IPacket) => void;
    inform: (pkt: IPacket) => void;
    proxy_request: (pkt: IPacket) => IPacket;
}
