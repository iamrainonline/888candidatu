import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CasinoGames from "./CasinoGames";

// mock pentru fetch
const mockGames = [
  {
    id: "1",
    title: "Starburst",
    provider: "NetEnt",
    rtp: 96.1,
    imageUrl: "/starburst.jpg",
    categories: ["slots"],
    isPopular: true,
    isNew: false,
  },
  {
    id: "2",
    title: "Roulette",
    provider: "Evolution",
    rtp: 97.3,
    imageUrl: "/roulette.jpg",
    categories: ["table-games"],
    isPopular: false,
    isNew: true,
  },
];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ casinoGames: mockGames }),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("CasinoGames Page", () => {
  it("should show loading initially", () => {
    render(<CasinoGames />);
    expect(screen.getByText(/Loading Casino Games/i)).toBeInTheDocument();
  });

  it("should render games after fetch", async () => {
    render(<CasinoGames />);
    expect(await screen.findByText("Starburst")).toBeInTheDocument();
    expect(await screen.findByText("Roulette")).toBeInTheDocument();
  });

  it("should filter games by search", async () => {
    render(<CasinoGames />);
    await screen.findByText("Starburst"); // așteptăm să vină datele

    const searchInput = screen.getByPlaceholderText("Search games...");
    fireEvent.change(searchInput, { target: { value: "Roulette" } });

    expect(screen.queryByText("Starburst")).not.toBeInTheDocument();
    expect(screen.getByText("Roulette")).toBeInTheDocument();
  });
});
