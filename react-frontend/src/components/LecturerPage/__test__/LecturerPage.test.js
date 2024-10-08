import React from "react";
import { render, screen } from "@testing-library/react";

import LecturerPage from "../LecturerPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders lecturer page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LecturerPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("lecturer-datatable")).toBeInTheDocument();
    expect(screen.getByRole("lecturer-add-button")).toBeInTheDocument();
});
