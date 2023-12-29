import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe("Feedback Form", () => {

    const availableTimes = ["17.00", "17.30", "18.00", "18.30"];
    const dispatch = ()=> {

    };
    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch}/>);
        const headingElement = screen.getByText("Make Your reservation");
        expect(headingElement).toBeInTheDocument();
    });

    test('should display the correct number of options', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch}/>)
        const selectElement = screen.getByTestId("res-time");
        expect(selectElement.options.length).toBe(4);
      });
});