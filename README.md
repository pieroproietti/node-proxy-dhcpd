# node-dhcpd-proxy

Eggs use this DHCPD PROXY server to provide PXE boot information to the clients, it need the presence of a standard DHCPD server on the LAN, but You don't need to reconfigure it to add PXE fields.

This project started from the only working dhcpd proxy for nodejs I could find: FOG project [node-dhcproxy](https://github.com/FOGProject/node-dhcproxy).

After using it to implement a PXE server for eggs, I began to feel the need to have my own version and perhaps evolve it into a full PXE server.

So I decided to rewrite it in typescript, give a structure and start to use it for my project [penguins-eggs](https://github.com/pieroproietti/penguins-eggs).

There is still work to be done, though; it is functional but should undergo refactoring. In particular, I could not convert the main part - the proxy and server classes - into typescript.

You can find an example of use in the [pxe.ts](https://github.com/pieroproietti/penguins-eggs/blob/master/src/classes/pxe.ts) class of penguins-eggs. 


Reference:
* [node-dhcproxy](https://github.com/FOGProject/node-dhcproxy) 

 
# Working tsconfig.json
```
{
  "compilerOptions": {
    "allowJs": true,
    "importHelpers": true,
    "esModuleInterop": true,
    "module": "ES2020", // utilizza i moduli ES6
    "moduleResolution": "node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "lib": [
      "ES2020", // utilizza le funzionalità ES6
      "DOM"
    ],
    "target": "ES2020", // compila per ES6
    "resolveJsonModule": true,
    "baseUrl": ".", // aggiunto per supportare la risoluzione dei moduli
    "paths": { // aggiunto per supportare la risoluzione dei moduli
      "*": [
        "node_modules/*",
        "src/types/*"
      ]
    },
  },
  "include": [
    "src/**/*",
  ]
}
```