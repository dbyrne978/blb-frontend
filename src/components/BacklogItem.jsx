import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TvIcon from '@mui/icons-material/Tv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PropTypes from 'prop-types'
import CompletionStatusDropdown from './CompletionStatusDropDown';

const BacklogItem = ({ backlogItem }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {backlogItem.format == 'Game' && <SportsEsportsIcon/>}
            {backlogItem.format == 'Book' && <AutoStoriesIcon/>}
            {backlogItem.format == 'TV Show' && <TvIcon/>}
            {backlogItem.format == 'Movie' && <LocalMoviesIcon/>}
          </Avatar>
        }
        action={
          <CompletionStatusDropdown backlogItem={backlogItem} />
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