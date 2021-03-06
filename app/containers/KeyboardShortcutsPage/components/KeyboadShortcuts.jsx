import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/KeyboadShortcuts';
import KbdRender from './KbdRender';

class KeyboadShortcuts extends PureComponent {
  render() {
    const { classes: styles } = this.props;

    return (
      <div className={styles.root}>
        <KbdRender styles={styles} />
      </div>
    );
  }
}

export default withStyles(styles)(KeyboadShortcuts);
