import Counter from '../src/components/Counter';
import { shallowMount } from '@vue/test-utils';

describe('Counter', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    it('defaults to a count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it('increments the count when the button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it('presets the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.find('.count').html()).toContain(1);
    });
});
