import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe("Feedback Form", () => {
    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Make Your reservation");
        expect(headingElement).toBeInTheDocument();
    });
});