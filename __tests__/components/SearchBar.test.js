import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { SearchBar, SearchBarStyles } from '../../src/components/molecules/SearchBar';

describe('renders the SearchBar Component',() => {
    test('renders search bar correctly', () => {
        const term = 'Spinnenmann';
        const onTermChange = jest.fn();
        const onTermSubmit = jest.fn();

        const { getByTestId, getByDisplayValue } = render(
            <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={onTermSubmit} />
        );

        const inputElement = getByTestId('search-bar-input');
        const displayedValue = getByDisplayValue(term);

        expect(inputElement).toBeTruthy();
        expect(displayedValue).toBeTruthy();
        expect(inputElement.props.style).toMatchObject(SearchBarStyles.inputStyle);
    });

    test('calls onTermChange when input changes', () => {
        const onTermChange = jest.fn();

        const { getByTestId } = render(<SearchBar onTermChange={onTermChange} />);

        const inputElement = getByTestId('search-bar-input');
        const mockText = 'Eisenmann';

        fireEvent.changeText(inputElement, mockText);

        expect(onTermChange).toHaveBeenCalled();
    });
});
