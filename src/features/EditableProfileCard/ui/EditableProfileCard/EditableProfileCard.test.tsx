import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import IMG from '../../../../shared/assets/test/avatar.png';
import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profileMock = {
  id: '1',
  first: 'Yana',
  lastname: 'Pranko',
  age: 34,
  currency: 'USD' as Currency,
  country: 'Belarus' as Country,
  city: 'Minsk',
  username: 'admin',
  avatar: IMG,
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profileMock,
      form: profileMock,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard.test', () => {
  beforeEach(() => {
    jest.spyOn($api, 'get').mockReturnValue(Promise.resolve({ data: profileMock }));
  });

  test('Render EditableProfileCard', () => {
    componentRender(<EditableProfileCard />, options);
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  test('Should appear Save and Edit btns after click on Edit btn', async () => {
    const userEv = userEvent.setup();
    componentRender(<EditableProfileCard />, options);

    await userEv.click(screen.getByTestId('EditableProfileCard.EditBtn'));
    expect(screen.getByTestId('EditableProfileCard.SaveBtn')).toBeInTheDocument();
    expect(screen.getByTestId('EditableProfileCard.CancelBtn')).toBeInTheDocument();
  });

  test('Should cancel change of inputs after click on Cancel btn', async () => {
    const userEv = userEvent.setup();
    componentRender(<EditableProfileCard />, options);

    await userEv.click(screen.getByTestId('EditableProfileCard.EditBtn'));
    expect(screen.getByTestId('EditableProfileCard.SaveBtn')).toBeInTheDocument();
    expect(screen.getByTestId('EditableProfileCard.CancelBtn')).toBeInTheDocument();

    await userEv.clear(screen.getByLabelText(/lastname/i));
    await userEv.clear(screen.getByLabelText(/first-name>/i));

    await userEv.type(screen.getByLabelText(/lastname/i), 'Pupkin');
    expect(screen.getByLabelText(/lastname/i)).toHaveValue('Pupkin');
    await userEv.type(screen.getByLabelText(/first-name>/i), 'Vasia');
    expect(screen.getByLabelText(/first-name>/i)).toHaveValue('Vasia');

    await userEv.click(screen.getByTestId('EditableProfileCard.CancelBtn'));
    expect(screen.getByLabelText(/first-name>/i)).toHaveValue('Yana');
    expect(screen.getByLabelText(/lastname/i)).toHaveValue('Pranko');
  });

  test('Should appear error text after invalid input', async () => {
    const userEv = userEvent.setup();
    componentRender(<EditableProfileCard />, options);

    await userEv.click(screen.getByTestId('EditableProfileCard.EditBtn'));
    expect(screen.getByTestId('EditableProfileCard.SaveBtn')).toBeInTheDocument();
    expect(screen.getByTestId('EditableProfileCard.CancelBtn')).toBeInTheDocument();

    await userEv.clear(screen.getByLabelText(/lastname/i));
    await userEv.clear(screen.getByLabelText(/first-name>/i));

    expect(screen.getByLabelText(/lastname/i)).toHaveValue('');
    expect(screen.getByLabelText(/first-name>/i)).toHaveValue('');

    await userEv.click(screen.getByTestId('EditableProfileCard.SaveBtn'));
    expect(screen.getByText(/incorrect user data/i)).toBeInTheDocument();
  });

  test('Should send put request to server', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    const userEv = userEvent.setup();
    componentRender(<EditableProfileCard />, options);

    await userEv.click(screen.getByTestId('EditableProfileCard.EditBtn'));
    expect(screen.getByTestId('EditableProfileCard.SaveBtn')).toBeInTheDocument();
    expect(screen.getByTestId('EditableProfileCard.CancelBtn')).toBeInTheDocument();

    await userEv.clear(screen.getByLabelText(/lastname/i));
    await userEv.type(screen.getByLabelText(/lastname/i), 'Pupkin');

    await userEv.click(screen.getByTestId('EditableProfileCard.SaveBtn'));
    expect(mockPutReq).toHaveBeenCalled();
  });
});
