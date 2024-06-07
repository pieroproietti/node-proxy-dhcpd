# node-dhcpd-proxy

Eggs use this DHCPD PROXY server to provide PXE boot information to the clients, it need the presence of a standard DHCPD server on the LAN, but You don't need to reconfigure it to add PXE fields.

This project started from the only working dhcpd proxy for nodejs I could find: FOG project [node-dhcproxy](https://github.com/FOGProject/node-dhcproxy).

After using it to implement a PXE server for eggs, I began to feel the need to have my own version and perhaps evolve it into a full PXE server.

So I decided to rewrite it in typescript, give a structure and start to use it for my project [penguins-eggs](https://github.com/pieroproietti/penguins-eggs).

There is still work to be done, though; it is functional but should undergo refactoring. In particular, I could not convert the main part - the proxy and server classes - into typescript.

You can find an example of use in the [pxe.ts](https://github.com/pieroproietti/penguins-eggs/blob/master/src/classes/pxe.ts) class of penguins-eggs. 

Note the lines:

```
// @ts-ignore
import etrick from 'etrick
```

And lines:
```
    /**
     *
     * @param dhcpOptions
     */
    dhcpStart(dhcpOptions: IDhcpOptions) {
      new etrick(dhcpOptions)
    }
```

The definition of types can be found in [i-pxe.ts](https://github.com/pieroproietti/penguins-eggs/blob/master/src/interfaces/i-pxe.ts)


Reference:
* [node-dhcproxy](https://github.com/FOGProject/node-dhcproxy) node-dhcproxy is based on [node-dhcpd](https://github.com/glaszig/node-dhcpd)

 