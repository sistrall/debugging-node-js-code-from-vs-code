# Debugging Node.js code from VS Code

When I started coding, debugging helped me a lot to understand what was going on. Then, for multiple reasons, I tended to use debugging less and less, e.g. leveraging unit tests. One of the reasons is that debugging requires a proper setting. In some ecosystems, debugging comes for free, usually with the IDE: XCode, Microsoft Visual Basic and Visual Studio, editors and IDEs for building iOS and Android apps all have debugging features ready to be used: click the ▶️ button and you're usually good to go.

Less integrated ecosystems make debugging more complex to setup. VS Code (an editor that would like to become an IDE) has support for debugging, but... it's a bit tricky: you have to align the stars! ✨⭐️💫

VS Code is part of the setup. The rest is the program you need to debug: you must massage it so that it's ready to be debugged. If we take Node.js apps, debugging is done in a curious way: when an app is launched in debug mode, Node.js starts a server that exposes info about the program.

So: this repo is an attampt to help you avoiding a certain amount of `console.log`!

## References

- https://mattmazzola.medium.com/how-to-debug-jest-tests-with-vscode-48f003c7cb41