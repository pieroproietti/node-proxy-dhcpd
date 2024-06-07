import { IDhcpOptions } from "../interfaces/i-pxe";

declare module 'dhcpd' {
    export class dhcpd {
      constructor(opts: IDhcpOptions);
      // definisci i metodi e le proprietà qui
    }
  
    // esporta qualsiasi altra cosa necessaria qui
  }