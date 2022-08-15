import { validateUser } from './validate-user';

describe('validate-user', () => {
  const validUser = {
    login: 'Nikname',
    password: 'Qwerty85134',
    age: 23
  };

  it('should return positive result with value === initialUser', () => {
    expect(validateUser({ ...validUser })).toEqual({ value: validUser });
  });
  it('should return error object because of too short Name', () => {
    expect(validateUser({ ...validUser, login: 'Lu' })?.error).toBeTruthy();
  });
  it('shouldn\'t return error object because 3 symbols Name', () => {
    expect(validateUser({ ...validUser, login: 'Lue' })?.error).toBeFalsy();
  });
  it('should return error object because of lack of numbers in password', () => {
    expect(validateUser({ ...validUser, password: 'qwertyuiop' })?.error).toBeTruthy();
  });
  it('should return error object because of lack of letters in password', () => {
    expect(validateUser({ ...validUser, password: '1234567789' })?.error).toBeTruthy();
  });
  it('should return error object because of password less then 8 symbols', () => {
    expect(validateUser({ ...validUser, password: 'Sym1234' })?.error).toBeTruthy();
  });
  it('shouldn\'t return error object because of password equal 8 symbols', () => {
    expect(validateUser({ ...validUser, password: 'Sym12345' })?.error).toBeFalsy();
  });
  it('should return error object because of age less then 4', () => {
    expect(validateUser({ ...validUser, age: 3 })?.error).toBeTruthy();
  });
  it('should return error object because of age more then 130', () => {
    expect(validateUser({ ...validUser, age: 133 })?.error).toBeTruthy();
  });
  it('shouldn\'t return error object because of age equal 130', () => {
    expect(validateUser({ ...validUser, age: 130 })?.error).toBeFalsy();
  });
  it('shouldn\'t return error object because of age equal 4', () => {
    expect(validateUser({ ...validUser, age: 4 })?.error).toBeFalsy();
  });
});
