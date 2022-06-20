import { mount, flushPromises } from '@vue/test-utils'
import LoginView from '../../src/views/LoginView.vue'

test('Logout Test', () => {
    const $store = {
        
    }
    const wrapper = mount(LoginView)

    expect(wrapper.exists()).toBe(true);
})