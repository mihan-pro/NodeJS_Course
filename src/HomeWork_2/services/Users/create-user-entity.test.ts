import { createUserEntity } from './create-user-entity';
import { User } from '../../models/users';

jest.mock('uuid', () => ({
  v4: () => 'descendingID'
}));

describe('create-user-entity', () => {
  it(
    'should throw error according to lack of login', () => {
      expect(() => createUserEntity('', 'qwerty', 18)).toThrow('There is a lack of params');
    });
  it('should throw error according to lack of password', () => {
    expect(() => createUserEntity('Mathew', '', 18)).toThrow('There is a lack of params');
  });
  it('should throw error according to lack of age', () => {
    expect(() => createUserEntity('Mathew', 'qwerty', 0)).toThrow('There is a lack of params');
  });
  it('should expected user entity', () => {
    const expectedResult: User = {
      id: 'descendingID',
      age: 18,
      password: 'qwerty',
      login: 'Mathew',
      is_deleted: false
    };
    expect(createUserEntity('Mathew', 'qwerty', 18)).toEqual(expectedResult);
  });
});
