import React from "react";
import { render, waitFor } from "@testing-library/react-native";

import { HeroDetailScreen } from "../../src/screens/HeroDetailScreen";

describe('tests hero detail screen', () => {
   const navigation = { getParam: jest.fn().mockReturnValue("123") };
   const useDetailsMock = jest.fn().mockReturnValue([jest.fn(), {}, ""]);

   beforeEach(() => {
      navigation.getParam.mockClear();
      useDetailsMock.mockClear();
   });


   it("should render an error message", async () => {
      const errorMessageMock = "Something went wrong";
      useDetailsMock.mockReturnValue([jest.fn(), {}, errorMessageMock]);

      const { getByText } = render(<HeroDetailScreen navigation={navigation} useDetails={useDetailsMock} />);
      await expect(() => expect(useDetailsMock).toHaveBeenCalled());

      expect(getByText(errorMessageMock)).toBeDefined();
   });
});