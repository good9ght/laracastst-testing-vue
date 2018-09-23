import { mount } from '@vue/test-utils';
import expect from 'expect';
import moxios from 'moxios';
import Question from '../src/components/Question.vue';

describe('Question', () => {
    let wrapper;
    beforeEach(() => {
        moxios.install();
        wrapper = mount(Question, {
            propsData: {
                question: {
                    title: 'The Title',
                    body: 'The Body',
                }
            }
        });
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it ('presets the title and the body', () => {
        see('The Title');
        see('The Body');
    });

    it ('can be edited', () => {
        expect(wrapper.contains('input[name=title]')).toBe(false);
        
        click('#edit');

        expect(wrapper.find('input[name=title]').element.value).toBe('The Title');
        expect(wrapper.find('textarea[name=body]').element.value).toBe('The Body');
    });

    it ('hides the edit button during edit mode', () => {
        expect(wrapper.contains('#edit')).toBe(true);

        click('#edit');

        expect(wrapper.contains('#edit')).toBe(false);
    });

    it ('updates the the question after being edited', () => {
        click('#edit');

        type('Changed Title', 'input[name=title]');
        type('Changed Body', 'textarea[name=body]');

        moxios.stubRequest('/questions/1', {
            status: 200,
            response: {
                title: 'Changed title',
                body: 'Changed body',
            }
        });

        click('#update');

        see('Changed Title');
        see('Changed Body');
        
        // moxios.wait(() => {
        //     see('Changed Title');
        //     done();
        // });

    });
    
    it ('can cancel out of edit mode', () => {
        click('#edit');
        
        type('Changed Title', 'input[name=title]');

        click('#cancel');

        see('The Title');
    });

    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;
        expect(wrap.html()).toContain(text);
    }
    
    let type = (text, selector) => {
        let node = wrapper.find(selector);
        node.element.value = text;
        node.trigger('input');
    }
    
    let click = (selector) => {
        wrapper.find(selector).trigger('click');
    }

});