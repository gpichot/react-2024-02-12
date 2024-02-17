import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonForm from "./PokemonForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function myRender(ui: React.ReactNode) {
  const client = new QueryClient();
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>
  );
}

describe("PokemonForm", () => {
  it("is disabled by default", async () => {
    myRender(<PokemonForm />);

    const button = screen.getByRole("button", {
      name: /submit/i,
    });

    // screen.logTestingPlaygroundURL()
    expect(button).toBeDisabled();
  });

  it.todo("creates a pokemon in the api");
  it.todo("validates that height is greater than 10");

  it("submits the form", async () => {
    const user = userEvent.setup();
    myRender(<PokemonForm />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    await user.type(nameInput, "pikapika");

    const typeInput = screen.getByRole("textbox", {
      name: /type/i,
    });
    await user.type(typeInput, "electric");

    const button = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(button).toBeEnabled();
  });
});
