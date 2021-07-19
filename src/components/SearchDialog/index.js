import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useTheme } from '@material-ui/core/styles';
import SearchBox from '../Search';

export default function ResponsiveDialog({ isVisible = false, handleClose }) {
  return (
    <Dialog open={isVisible} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
      <SearchBox />
    </Dialog>
  );
}
