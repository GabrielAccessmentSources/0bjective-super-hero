import React from 'react';
import { render } from '@testing-library/react-native';

import { HeroDetailBody, heroBodyStyles } from "../../src/components/molecules/HeroDetailBody";

describe('renders hero body component', () => {
    test('renders the component with the description', () => {
       const description = 'I am a cool and strong hero.';
       const { getByText } = render(<HeroDetailBody description={description} />);

        const subheaderElement = getByText('Description');
        const descriptionElement = getByText(description);

        expect(subheaderElement).toBeDefined();
        expect(descriptionElement).toBeDefined();
        expect(subheaderElement.props.style).toMatchObject(heroBodyStyles.subheaderText);
        expect(descriptionElement.props.style).toMatchObject(heroBodyStyles.textStyle);
    });
});
