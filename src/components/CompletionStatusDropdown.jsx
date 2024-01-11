import * as React from 'react';
import { IconButton, ButtonGroup } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import PropTypes from 'prop-types';

const CompletionStatusDropdown = ({ backlogItem }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'completion-status-dropdown' : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        color='inherit'
        onClick={handleClick}
        sx={{
          '&:focus': { outline: 'none' },
          '&:hover': { backgroundColor: 'primary.600' }
        }}
      >
        {backlogItem.completionStatus == 'Playing' && <PlayArrowIcon/>}
        {backlogItem.completionStatus == 'Backlog' && <LibraryBooksIcon/>}
        {backlogItem.completionStatus == 'Complete' && <TaskAltIcon/>}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <ButtonGroup>
          <IconButton>
            <LibraryBooksIcon />
          </IconButton>
          <IconButton>
            <PlayArrowIcon />
          </IconButton>
          <IconButton>
            <TaskAltIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      </Popover>
    </div>
  );
}

CompletionStatusDropdown.propTypes = {
  backlogItem: PropTypes.object,
}

export default CompletionStatusDropdown