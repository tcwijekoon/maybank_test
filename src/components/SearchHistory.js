import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SearchHistory = ({ searchHistory }) => {
  return (
    <List>
      {searchHistory.map((history, index) => (
        <ListItem key={index}>
          <ListItemText primary={history} />
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  searchHistory: state.searchHistory
});

export default connect(mapStateToProps)(SearchHistory);
