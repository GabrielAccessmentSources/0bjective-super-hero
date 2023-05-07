import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchScreen } from '../../src/screens/SearchScreen';


describe('SearchScreen', () => {
    it('should call the searchApi function when the user submits the search term', () => {
        const searchApi = jest.fn();
        //FIX ME With Navigation is crashing Search
        const { getByTestId } = render(<SearchScreen searchApi={searchApi} />);
        const searchBar = getByTestId('search-bar');

        fireEvent.changeText(searchBar, 'Iron Man');
        fireEvent(searchBar, 'submitEditing');

        expect(searchApi).toHaveBeenCalledWith({ searchHero: 'Iron Man' });
    });

    it('should update the page when the user clicks the pagination buttons', () => {
        const { getByTestId } = render(<SearchScreen />);
        const nextButton = getByTestId('next-button');
        const prevButton = getByTestId('prev-button');

        fireEvent.press(nextButton);
        fireEvent.press(prevButton);

        expect(nextButton.props.disabled).toBe(false);
        expect(prevButton.props.disabled).toBe(true);
    });
});