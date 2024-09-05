import React from "react";
import { render, screen } from "@testing-library/react";

import SubjectPage from "../SubjectPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders subject page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SubjectPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("subject-datatable")).toBeInTheDocument();
    expect(screen.getByRole("subject-add-button")).toBeInTheDocument();
});
