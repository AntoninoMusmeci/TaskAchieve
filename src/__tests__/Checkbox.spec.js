import { createContext, useContext, useState } from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import Checkbox from "../components/Checkbox";

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

const TasksContext = createContext();
const mockTaskContext = TasksContext;
const mockUseContext = useContext;

const renderWithContext = (id) => {
  return render(
    <mockTaskContext.Provider value={{ editTask: () => {} }}>
      <Checkbox id={id} />
    </mockTaskContext.Provider>
  );
};

jest.mock("../context", () => ({
  useTasksValue: () => mockUseContext(mockTaskContext),
}));

describe("Checkbox", () => {
  describe("Success", () => {
    it("renders the Checkbox", () => {
      renderWithContext({ taskName: "test" });

      expect(screen.getByTestId("checkbox-action")).toBeTruthy();
    });

    it("renders the task checkbox and accepts a onClick", () => {
      renderWithContext({ taskName: "test" });
      expect(screen.getByTestId("checkbox-action")).toBeTruthy();
      fireEvent.click(screen.getByTestId("checkbox-action"));
    });
  });
});
