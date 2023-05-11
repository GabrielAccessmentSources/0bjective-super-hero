import React from 'react';
import { render } from '@testing-library/react-native';

import { HeroDetailHeader, heroDetailHeaderStyles } from "../../src/components/molecules/HeroDetailHeader";

describe('renders HeroDetailHeader component', () => {
    test('renders component with title and image', () => {
        const name = 'Sabriel Gavian';
        const imageUrl = 'https://example.com/spiderman';

        const { getByText, getByTestId } = render(<HeroDetailHeader name={name} imageUrl={imageUrl} />);

        const nameElement = getByText(name);
        const imageElement = getByTestId('hero-image');

        expect(nameElement).toBeTruthy();
        expect(imageElement).toBeTruthy();

        expect(imageElement.props.source.uri).toBe(`${imageUrl}/portrait_medium.jpg`);
        expect(nameElement.props.style).toMatchObject(heroDetailHeaderStyles.h1Text);
    });
});