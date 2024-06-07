/**
 * index.js: just export
 */
import { IDhcpOptions } from "./interfaces/i-pxe";
import dhcpd from "./classes/dhcpd";

export const MessageTypes = require("./lib/packet/message-types").default
export const Options = require("./lib/packet/options").default;
export default dhcpd;

const dhcpOptions: IDhcpOptions = {
  subnet: "24",
  host: "192.168.1.120",
  tftpserver: "192.168.1.120",
  bios_filename: "lpxelinux.0",
  efi32_filename: "ipxe32.efi",
  efi64_filename: "ipxe.efi",
};
