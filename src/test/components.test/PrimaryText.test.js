import { PrimaryText } from "../../components/PrimaryText";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Primary Text', () => {
	test("output msg", () => {
		const msg = "Hello World";
		render(<PrimaryText>{msg}</PrimaryText>);
		const element = screen.getByText(msg);
		expect(element).toBeInTheDocument();
	});
	test("msg of number", () => {
		const msg = 123;
		render(<PrimaryText>{msg}</PrimaryText>);
		const element = screen.getByText(msg);
		expect(element).toBeInTheDocument();
	});
	test("msg of boolean", () => {
		const msg = "true";
		render(<PrimaryText>{msg}</PrimaryText>);
		const element = screen.getByText(msg);
		expect(element).toBeInTheDocument();
	});
})

