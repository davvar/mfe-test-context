host {
     remotes: {
        library: 'library@http://localhost:8081/remoteEntry.js',
        uns: 'uns@http://localhost:8082/remoteEntry.js',
      },
      exposes: {
        './service': './src/exposed/index.ts',
      },
}


-------------------------------------------------------------------


uns  {
    remotes: {
        library: 'library@http://localhost:8081/remoteEntry.js',
        host: 'host@http://localhost:8080/remoteEntry.js',
    },
    exposes: {
      './src': './src/App.tsx',
    },
}


-------------------------------------------------------------------


library {
      remotes: {},
      exposes: {
        "./components": "./src/components",
      },
}
