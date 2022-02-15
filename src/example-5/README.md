# Attach to a running server... on Docker
	
- Check the presence of `/.vscode/launch.json` in the workspace

- Make sure `launch.json` is properly configured

  ```
  {
    "name": "Attach to Example 5: server running on Docker",
    "port": 9339,
    "request": "attach",
    "skipFiles": [
      "<node_internals>/**"
    ],
    "type": "node",
    "remoteRoot": "/usr/src/app" 
  }
  ```

  Sensitive configurations:

  - `request`: ask to attach to a running program
  - `port`: default port not always available, check or change it

- Run container from a terminal: `docker run --rm -it -p 3000:3000 -p 9339:9339 $(docker build --quiet .) bash`

  Declare the port mapping!

- Run the app in the container: `node --inspect=0.0.0.0:9339 src/example-5/index.js`

  `--inspect` is *not* enough this time: you have to declare the port.

- Execute the "Attach to Example 5: server running on Docker" from VS Code

- Debug