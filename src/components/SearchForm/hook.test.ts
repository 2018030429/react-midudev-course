import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./hook";

const INIITAL_STATE = { initialKeyword: 'chihuahua', initialRating: '' };

const setup = (params: typeof INIITAL_STATE) => renderHook(() => useForm(params))

test('should change keyword', () => {
  const { result } = setup(INIITAL_STATE);

  act(() => {
    result.current.updateKeyword('batman');
  });

  expect(result.current.keyword).toBe('batman');
});

test('should use initial values', () => {
  const { result } = setup(INIITAL_STATE);
  expect(result.current.keyword).toBe('chihuahua');
})

test('should update correctly times when used twice', () => {
  const { result } = setup(INIITAL_STATE);

  act(() => {
    result.current.updateKeyword('bat');
    result.current.updateKeyword('batman');
  });

  expect(result.current.times).toBe(2);
});

