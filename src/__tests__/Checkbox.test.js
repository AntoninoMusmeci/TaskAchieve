import { createContext, useContext, useState } from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import Checkbox from "../components/Checkbox";
import { renderWithContext, mockUseContext, mockContext } from "../utilities";
beforeEach(cleanup);

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collections: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn(),
        })),
      })),
    })),
  },
}));



jest.mock("../context", () => ({
  useTasksValue: () => mockUseContext(mockContext),
}));


describe("Checkbox", () => {
  describe("Success", () => {
    it("renders the Checkbox", () => {
      renderWithContext(<Checkbox task={{ taskName: "test" }} />);

      expect(screen.getByTestId("checkbox-action")).toBeTruthy();
    });

    it("renders the task checkbox and accepts a onClick", () => {
      renderWithContext(<Checkbox task={{ taskName: "test" }} />);
      expect(screen.getByTestId("checkbox-action")).toBeTruthy();
      fireEvent.click(screen.getByTestId("checkbox-action"));
    });
  });
});
