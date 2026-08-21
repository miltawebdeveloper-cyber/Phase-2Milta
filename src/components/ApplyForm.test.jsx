// @vitest-environment jsdom

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import ApplyForm from './ApplyForm';
import { submitApplicationForm } from '../api/client';

if (!URL.createObjectURL) {
  URL.createObjectURL = () => 'blob:mock-url';
}
if (!URL.revokeObjectURL) {
  URL.revokeObjectURL = () => {};
}

vi.mock('../api/client', () => ({
  submitApplicationForm: vi.fn(),
}));

describe('ApplyForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('closes the dialog after a successful application submission', async () => {
    const onClose = vi.fn();

    submitApplicationForm.mockResolvedValue({
      emailNotification: { success: true },
    });

    render(<ApplyForm variant="dialog" open onClose={onClose} />);

    await userEvent.type(screen.getByLabelText(/first name/i), 'Jane');
    await userEvent.type(screen.getByLabelText(/phone number/i), '1234567890');
    await userEvent.click(screen.getByRole('combobox', { name: /job type/i }));
    await userEvent.click(screen.getByRole('option', { name: 'Full Time' }));
    await userEvent.click(screen.getByRole('combobox', { name: /position/i }));
    await userEvent.click(screen.getByRole('option', { name: 'Virtual Assistant' }));
    await userEvent.type(screen.getByLabelText(/email id/i), 'jane@example.com');

    const file = new File(['resume content'], 'resume.pdf', { type: 'application/pdf' });
    const upload = document.querySelector('input[type="file"]');
    await userEvent.upload(upload, file);

    await userEvent.click(screen.getByRole('button', { name: /submit your application/i }));

    await waitFor(() => {
      expect(submitApplicationForm).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
