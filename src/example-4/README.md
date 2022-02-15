# Attach to a running server
	
- Check the presence of `/.vscode/launch.json` in the workspace

- Make sure `launch.json` is properly configured

  ```
  {
    "name": "Attach to Example 4 running server",
    "port": 9229,
    "request": "attach",
    "skipFiles": [
      "<node_internals>/**"
    ],
    "type": "pwa-node"
  }
  ```

  Sensitive configurations:

  - `request`: ask to attach to a running program
  - `port`: 9229 is the default, but you can change it

- Check that port 9229 is available

- Run the program from a terminal: `node --inspect src/example-4/index.js`

  `--inspect` is enough this time: you can place the break-points later.

- Execute the "Attach to Example 4 running server" from VS Code

- Debug