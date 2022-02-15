# Launch and and debug in VS Code 
	
- Check the presence of `/.vscode/launch.json` in the workspace

- Make sure `launch.json` is properly configured

  ```
  {
    "cwd": "${workspaceRoot}",
    "runtimeVersion": "16.13.1",
    "type": "pwa-node",
    "request": "launch",
    "name": "Launch Example 2",
    "skipFiles": [
      "<node_internals>/**"
    ],
    "program": "${workspaceFolder}/src/example-2/index.js"
  }
  ```

  Sensitive configurations:

  - `runtimeVersion`: check to have the same `.nvmrc` version
  - `request`: ask to launch the program
  - `program`: define the program to launch

- Place a break-point

- Launch and debug