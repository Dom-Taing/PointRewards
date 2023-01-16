import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";

test("should render header", () => {
  const wrapper = render(<Table headers={["hello"]} />);
  expect(wrapper.queryByText("hello")).toBeInTheDocument();
});

test("should render displayData", () => {
  const wrapper = render(<Table displayData={[{0: "hello", 1: "world", 2:"!"}]} displayOrder={[0, 1, 2]} idKey={0}/>);
  expect(wrapper.queryByText("hello")).toBeInTheDocument();
  expect(wrapper.queryByText("world")).toBeInTheDocument();
  expect(wrapper.queryByText("!")).toBeInTheDocument();
});

test("render data should follow displayOrder", () => {
  const wrapper = render(<Table displayData={[{0: "hello", 1: "world", 2:"!"}]} displayOrder={[0, 2]} idKey={0}/>);
  expect(wrapper.queryByText("hello")).toBeInTheDocument();
  expect(wrapper.queryByText("world")).not.toBeInTheDocument();
  expect(wrapper.queryByText("!")).toBeInTheDocument();
});

