# Notes

My approach was to make everything as re-usable as possible as if this code were to be expanded upon we would not want
to have a bunch of repeat code to maintain. I separated each section of the dialog into a react component, and then created
a widget that combines them all to display a dialog box with an input field and a button.

No ui-tests were done as Jupyter is new to me, and I did not have the time to look into them.

I leveraged the existing CSS classes for dialog boxes that Jupyter has as I felt my time would be better spent working
on the optional tasks since in the real world I would use something like MUI to get a nice look with minimal CSS.

### Install

First start by installing [miniconda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)

Next, set up a dev env using miniconda and install NodeJS, JupyterLab, Copier, and Git
https://jupyterlab.readthedocs.io/en/stable/extension/extension_tutorial.html#set-up-a-development-environment

Then activate your new environment with the activate command:
`conda activate env-name`

Next install and build from within your new environment:

```bash
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Testing the extension

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm test
```

This will run Jest unit tests on the components and widgets.
