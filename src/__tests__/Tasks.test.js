import { createContext, useContext, useState } from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import { renderWithContext, mockUseContext, mockContext } from "../utilities";
import Tasks from "../components/Tasks";
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
  useProjectsValue: () => mockUseContext(mockContext),
}));

const tasks = [
  { id: "sffijs1", task: "test1", date: "01/01/3042" },
  { id: "sffijs2", task: "test2", date: "01/11/2012" },
  { id: "sffijs3", task: "test3", date: "01/12/2013" },
];

describe("Tasks", () => {
  describe("Success", () => {
    it("renders a Tasks Checkbox", () => {
      renderWithContext(<Tasks />, tasks);
      console.log(
        "leeeeeeeeeeeeen",
        screen.getAllByTestId("checkbox-action").length
      );
      expect(screen.getAllByTestId("checkbox-action").length).toBe(3);
      expect(screen.getAllByTestId("checkbox-action")).toBeTruthy();
    });
    it("renders a empty task List", () => {
      renderWithContext(<Tasks />, []);
      console.log(screen.queryAllByTestId("checkbox-action"))
      expect(screen.queryAllByTestId("checkbox-action")).toStrictEqual([]);
    });

    it("Test Render Task", () => {
  
      renderWithContext(<Tasks />, tasks);
      expect(screen.queryByText("test1")).toBeTruthy()
      expect(screen.queryByText("test2")).toBeTruthy()
      expect(screen.queryByText("test3")).toBeTruthy()
    });

    it("Test Click Add Task", () => {
  
      renderWithContext(<Tasks />, tasks);
      fireEvent.click(screen.getByText("Add Task"));
    });
  });
});
