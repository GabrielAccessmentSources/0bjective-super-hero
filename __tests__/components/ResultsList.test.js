import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ResultsList } from "../../src/components/particles/ResultsList";

describe('render results component', () => {
    const results = [
        { id: 1, name: 'Spinnenmann', thumbnail: { path: 'http://blablabla/image1' } },
        { id: 2, name: 'Eisenmann', thumbnail: { path: 'http://blablabla/image2' } },
    ];

    const navigation = { navigate: jest.fn() };

    it('render the list of results', () => {
        const { getAllByTestId } = render(<ResultsList results={results} navigation={navigation} />);
        const resultItems = getAllByTestId('result-item');

        expect(resultItems).toHaveLength(2);
    });

    it('navigates to the detail screen', () => {
        const { getAllByTestId } = render(<ResultsList results={results} navigation={navigation} />);
        const resultItems = getAllByTestId('result-item');
        fireEvent.press(resultItems[0]);

        expect(navigation.navigate).toHaveBeenCalledWith('HeroDetail', { id: 1 });
    });
});