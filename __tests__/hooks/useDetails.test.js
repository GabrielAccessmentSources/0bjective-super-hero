import { render, act } from "@testing-library/react-native";

import useDetails from "../../src/hooks/useDetails";
import marvel from "../../src/api/marvel";
import { ts, pubKey, hash } from "../../src/helpers/secrets";

jest.mock("../../src/api/marvel", () => {
   get: jest.fn();
});

describe('test useDetails hook', () => {
   let searchDetails, details, errorMessage;

   beforeEach(() => {
      // FIX ME - Don't know why it's crashing :eyes
      [searchDetails, details, errorMessage] = useDetails();
   });

   afterEach(() => {
      jest.resetAllMocks();
   });

   it("should set details successfully", async () => {
      const heroId = 121416;
      const response = {
         data: {
            data: {
               results: [
                  {
                     name: "Seether",
                  },
               ],
            },
         },
      };
      marvel.get.mockResolvedValue(response);

      await searchDetails({ heroId });

      expect(marvel.get).toHaveBeenCalledWith(`/characters/${heroId}`, {
         params: {
            ts: ts,
            apikey: pubKey,
            hash: hash,
         },
      });
      expect(details).toEqual(response.data.data.results[0]);
      expect(errorMessage).toBe("");
   });
});