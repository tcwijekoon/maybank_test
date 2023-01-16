import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import PlacesAutocomplete from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { searchPlaces } from '../actions/search';

const SearchInput = () => {
    const [address, setAddress] = useState('');
  
    const handleChange = (address) => {
      setAddress(address);
    }
  
    return (
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
            </div>
      )}
    </PlacesAutocomplete>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchPlaces: (query) => dispatch(searchPlaces(query))
});

export default connect(null, mapDispatchToProps)(SearchInput);
