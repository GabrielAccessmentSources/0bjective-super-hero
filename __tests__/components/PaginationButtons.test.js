import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { PaginationButtons } from "../../src/components/particles/PaginationButtons";

describe('test pagination buttons', () => {
    it('renders pagination buttons correctly', () => {
        const { getByTestId } = render(<PaginationButtons page={0} />);
        expect(getByTestId('pagination-buttons')).toBeDefined();
    });

    it('change value when button is pressed' , () => {
        const onPageChangeMock = jest.fn();

        const { getByTestId } = render(
            <PaginationButtons page={0} onPageChange={onPageChangeMock} />
        );

        fireEvent.press(getByTestId('pagination-forward'));
        expect(onPageChangeMock).toHaveBeenCalledWith(5);
    });
});