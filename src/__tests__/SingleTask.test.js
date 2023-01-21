import { createContext, useContext, useState } from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import { renderWithContext, mockUseContext, mockContext } from "../utilities";
import SingleTask from "../components/SingleTask";
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

describe("Single Task", () => {
  describe("Success", () => {
    it("renders a Task Checkbox", () => {
      renderWithContext(
        <SingleTask task={{ task: "test", date: "01/04/2034" }} />
      );
      expect(screen.getByTestId("checkbox-action")).toBeTruthy();
    });
    it("renders a Task Name", () => {
      renderWithContext(
        <SingleTask task={{ task: "test name", date: "01/04/2034" }} />
      );
      expect(screen.getByText("test name")).toBeTruthy();
    });
    it("renders a Task Date", () => {
      renderWithContext(
        <SingleTask task={{ task: "test name", date: "01/04/2034" }} />
      );
      expect(screen.getByText("01/04/2034")).toBeTruthy();
    });

    it("click checkbox", () => {
      renderWithContext(
        <SingleTask task={{ task: "test name", date: "01/04/2034" }} />
      );

      fireEvent.click(screen.getByTestId("checkbox-action"));
    });

    it("click delete task", () => {
      renderWithContext(
        <SingleTask task={{ task: "test name", date: "01/04/2034" }} />
      );

      fireEvent.click(screen.getByTestId("action-delete"));
    });

    it("click edit task", () => {
      renderWithContext(
        <SingleTask task={{ task: "test name", date: "01/04/2034" }} />
      );

      fireEvent.click(screen.getByTestId("action-edit"));
    });

    // it("renders the task checkbox and accepts a onClick", () => {
    //   renderWithContext(<Checkbox task={{ taskName: "test" }} />);
    //   expect(screen.getByTestId("checkbox-action")).toBeTruthy();
    //   fireEvent.click(screen.getByTestId("checkbox-action"));
    // });
  });
});
