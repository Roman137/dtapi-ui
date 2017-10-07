import {WelcomePipe} from './welcome.pipe';

describe('WelcomePipe', () => {

  const pipe = new WelcomePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "Welcome, " | null to "Welcome, "', () => {
    expect(pipe.transform('Welcome, ', null)).toBe('Welcome, mortal');
  });

  it('transforms "Welcome, " | "" to "Welcome, "', () => {
    expect(pipe.transform('Welcome, ', '')).toBe('Welcome, ');
  });

  it('transforms "Welcome, " | user to "Welcome, user"', () => {
    expect(pipe.transform('Welcome, ', 'user')).toBe('Welcome, user');
  });
});
