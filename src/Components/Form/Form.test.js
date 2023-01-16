import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

test("change month selector", () => {
  const wrapper = render(<Form handleSubmit={() => {}} />);
  const input = wrapper.getByLabelText("input-Month")
  fireEvent.change(input, {target: {value: 1}})
  expect(input.value).toBe("1")
  expect(wrapper.queryByText("February")).toBeInTheDocument();
});

test("change Year selector", () => {
    const wrapper = render(<Form handleSubmit={() => {}} />);
    const input = wrapper.getByLabelText("input-Year")
    fireEvent.change(input, {target: {value: 2022}})
    expect(input.value).toBe("2022")
});

test("change num Month selector", () => {
    const wrapper = render(<Form handleSubmit={() => {}} />);
    const input = wrapper.getByLabelText("input-NumMonth")
    fireEvent.change(input, {target: {value: 4}})
    expect(input.value).toBe("4")
});

test("handle Submit", () => {
    const mock = jest.fn()
    const wrapper = render(<Form handleSubmit={mock} />);
    expect(mock).toHaveBeenCalledTimes(0)
    fireEvent.click(wrapper.queryByText("Submit"))
    expect(mock).toHaveBeenCalledTimes(1)
})
