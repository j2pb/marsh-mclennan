import { render, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import SelectComponent from "../components/SelectComponent";

describe("SelectComponent", () => {
  const options = ["Washington", "California", "Florida"];
  const onChange = jest.fn();

  afterEach(() => {
    onChange.mockClear();
  });
//   it('should render correctly', () => {
//     const options = ["Washington", "California", "Florida"];
//     const value = 'California';
//     const onChange = jest.fn();

//     const wrapper = shallow(
//       <SelectComponent
//         options={options}
//         value={value}
//         onChange={onChange}
//       />
//     );

//     expect(wrapper).toMatchSnapshot();
//   });
  it('should render correctly', () => {
    const options = ["Washington", "California", "Florida"];
    const value = 'California';
    const onChange = jest.fn();
    const tree = renderer.create( <SelectComponent
               options={options}
               value={value}
               onChange={onChange}
             />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders with options", () => {
    const { getByDisplayValue, getByText } = render(
      <SelectComponent options={options} value={options[0]} onChange={onChange} />
    );

    expect(getByDisplayValue(options[0])).toBeInTheDocument();

    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it("calls onChange when an option is selected", () => {
    const { getByDisplayValue, getByText } = render(
      <SelectComponent options={options} value={options[0]} onChange={onChange} />
    );

    const select = getByDisplayValue(options[0]);
    fireEvent.change(select, { target: { value: options[1] } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(options[1]);
  });
});
