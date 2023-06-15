import { JupyterFrontEnd } from '@jupyterlab/application';
import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import { reactIcon } from '@jupyterlab/ui-components';
import { InputDialogBoxWidget } from './widgets/InputDialogBoxWidget';

namespace CommandIDs {
  export const open = 'plotly-extension:open-dialog';
}

const extension = {
  id: 'plotly-extension:open-dialog',
  autoStart: true,
  requires: [ICommandPalette],
  optional: [ILauncher],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    launcher: ILauncher
  ) => {
    const { commands } = app;

    const command = CommandIDs.open;
    commands.addCommand(command, {
      caption: 'Open a Dialog Box',
      label: 'Open Dialog',
      icon: reactIcon,
      execute: () => {
        const content = new InputDialogBoxWidget();
        const widget = new MainAreaWidget({ content });
        widget.title.label = 'Open Dialog';
        app.shell.add(widget, 'main');
      }
    });

    // Add the command to the launcher
    if (launcher) {
      launcher.add({
        command
      });
    }

    //Add the command to the palette
    palette.addItem({ command, category: 'Other' });
  }
};

export default extension;
