import React from 'react';
import { render } from '@testing-library/react-native';
import { getByTestId } from '@testing-library/dom';

import { PaginationNumber } from "../../src/components/atoms/PaginationNumber";

describe( 'tests the pagination number page',() => {
    test('renders the page', () => {
        const { getByText } = render(<PaginationNumber number={1} selected={false}/>);
        const textElement = getByText('1');
        expect(textElement).toBeTruthy();
    });

    test('renders the component according to the style', () => {
        const { getByText } = render(<PaginationNumber number={1} selected={true} />);
        const viewElement = getByTestId(document.body, 'selected-pagination-number-view');
        const textElement = getByText('1');

        expect(viewElement.props.style).toContainEqual(styles.selected);
        expect(textElement.props.style).toContainEqual(styles.selectedNumberStyle);
    });
});