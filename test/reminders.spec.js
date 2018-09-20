import { shallowMount } from '@vue/test-utils';
import expect from 'expect';
import Reminders from '../src/components/Reminders.vue'

describe ('Reminders.vue', () => {
    it ('hides the reminders list if there are none', () => {
        let wrapper = shallowMount(Reminders);
        expect(wrapper.contains('ul')).toBe(false);
    });
});