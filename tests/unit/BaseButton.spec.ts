import { mount } from '@vue/test-utils';
import BaseButton from '@/components/atoms/BaseButton.vue';

describe('BaseButton.vue', () => {
  it('renders button', () => {
    const text = 'Following';
    const wrapper = mount(BaseButton, {
      slots: {
        default: text
      }
    });
    expect(wrapper.text()).toContain(text);
  });
});
