# Attach to an existing process
	
- Check the presence of `/.vscode/launch.json` in the workspace

- Make sure `launch.json` is properly configured

  ```
  {
    "name": "Attach to the already running Example 3",
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

- Run the program from a terminal: `node --inspect-brk src/example-3/index.js`

  Sensitive arg in this case is `--inspect-brk`: you need to break the program as soon as it starts.

- Execute the "Attach to the already running Example 3" from VS Code

- Debug