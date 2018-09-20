import { shallowMount } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue';

describe('Counter.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    it('defaults to a count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it('increments the count when the increment button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('.increment').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it('descrements the count when the decrement button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.setData({ count: 5 });
        wrapper.find('.decrement').trigger('click'); // 4
        expect(wrapper.vm.count).toBe(4);
    });

    it('never goes below 0', () => {
        expect(wrapper.vm.count).toBe(0);
        // expect(wrapper.find('.decrement').element.style.display).toBe('none');
        expect(wrapper.find('.decrement').isVisible()).toBe(false);
        wrapper.setData({ count: 1 });
        expect(wrapper.find('.decrement').isVisible()).toBe(true);
    });

    it('presets the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.find('.count').html()).toContain(1);
    });
});
