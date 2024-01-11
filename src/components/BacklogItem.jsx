import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types'

const BacklogItem = ({ backlogItem }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {backlogItem.format}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={backlogItem.title}
        subheader={backlogItem.user.username}
      />
    </Card>
  );
}

BacklogItem.propTypes = {
  backlogItem: PropTypes.object
}

export default BacklogItem