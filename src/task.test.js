import AllFunctions from "../__mocks__/addAndRemove";

const mainFunction = new AllFunctions();

describe('test add function', () => {
    mainFunction.add('microverse1', 0);
    mainFunction.add('microverse2', 1);
    mainFunction.add('microverse3', 9);
    mainFunction.add('microverse4', 2);
    mainFunction.add('microverse5', 4);
    mainFunction.add('microverse6', 6)
      test('Add new task', () => {
        expect(mainFunction.add('microverse7', 1)).toBe(7);
      });
      test('Add new task', () => {
        expect(mainFunction.add('microverse8', 2)).toBe(8);
      });
      test('Add new task', () => {
        expect(mainFunction.add('microverse9', 3)).toBe(9);
      });  
});

describe('Remove tasks', () => {
    test('remove one task', () => {
        expect(mainFunction.removeTask(5)).toBe(8);
    });
    test('remove one task', () => {
        expect(mainFunction.removeTask(5)).toBe(7);
    });
});

describe('select and remove tasks', () => {
    test('select 3 tasks and remove them', () => {
        mainFunction.check(1);
        mainFunction.check(5);
        mainFunction.check(6);
        expect(mainFunction.btnRemoveChecked()).toBe(4);
    });
    test('select 2 tasks and remove them', () => {
        mainFunction.check(1);
        mainFunction.check(3);
        expect(mainFunction.btnRemoveChecked()).toBe(2);
    });
});

describe('Update task', () => {
    test('update storage', () => {
        expect(mainFunction.updateInput('Just do it', 0)).toBe('Just do it');
    });
});