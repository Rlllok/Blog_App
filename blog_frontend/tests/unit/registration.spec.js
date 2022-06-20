import { shallowMount, mount, flushPromises } from '@vue/test-utils'
import RegistrationView from '../../src/views/RegistrationView.vue'

describe('RegistrationView.vue Test.', () => {

    let wrapper = null

    it('initializes with correct elements', () => {
        wrapper = shallowMount(RegistrationView, {
            data() {
                return{
                    email: '',
                    username: '',
                    password: '',
                    full_name: '',
                    birth_date: '',
                    bior: '',
                    errors: '',
                }
            }
        })

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.vm.email).toBe('')
        expect(wrapper.vm.username).toBe('')
        expect(wrapper.vm.password).toBe('')
        expect(wrapper.vm.full_name).toBe('')
        expect(wrapper.vm.birth_date).toBe('')
        expect(wrapper.vm.bio).toBe('')
        expect(wrapper.vm.errors).toBe('')
    })

    it('initializes with error message', () => {
        // render the component
        wrapper = shallowMount(RegistrationView, {
            data() {
                return{
                email: 'user@mail.com',
                username: 'user',
                password: 'notuserpassword',
                full_name: 'user',
                birth_date: 'xxxxx',
                bio: 'K',
                errors: 'error1',
                }
            }
        })

        expect(wrapper.exists()).toBe(true);

        // check that each element of the user
        expect(wrapper.vm.email).toBe('user@mail.com')
        expect(wrapper.vm.username).toBe('user')
        expect(wrapper.vm.password).toBe('notuserpassword')
        expect(wrapper.vm.full_name).toBe('user')
        expect(wrapper.vm.birth_date).toBe('xxxxx')
        expect(wrapper.vm.bio).toBe('K')
        expect(wrapper.vm.errors).toBe('error1')
    })


    it('initializes with success message', () => {
    // render the component
    wrapper = shallowMount(RegistrationView, {
        data() {
            return{
            email: 'user@mail.com',
            username: 'user',
            password: 'notuserpassword',
            full_name: 'user',
            birth_date: '2005-02-04',
            bio: 'M',
            errors: '',
            }
        }
    })

    expect(wrapper.exists()).toBe(true);

    // check that each element of the user
    expect(wrapper.vm.email).toBe('user@mail.com')
    expect(wrapper.vm.username).toBe('user')
    expect(wrapper.vm.password).toBe('notuserpassword')
    expect(wrapper.vm.full_name).toBe('user')
    expect(wrapper.vm.birth_date).toBe('2005-02-04')
    expect(wrapper.vm.bio).toBe('M')
    expect(wrapper.vm.errors).toBe('')
    })







    test('Registration input test.', async() => {
        const wrapper = mount(RegistrationView)

        expect(wrapper.exists()).toBe(true)

        
        const email = wrapper.find('input')
        await email.setValue('test@mail.com')
        expect(email.element.value).toBe('test@mail.com')


        
        const password = wrapper.find('input')
        await password.setValue("password")
        expect(password.element.value).toBe("password")

        const fullname = wrapper.find('input')
        await fullname.setValue("fullname")
        expect(fullname.element.value).toBe("fullname")

        const birthdate = wrapper.find('input')
        await birthdate.setValue("2018-07-22")
        expect(birthdate.element.value).toBe("2018-07-22")

        const bio = wrapper.find('input')
        await bio.setValue("M")
        expect(bio.element.value).toBe("M")


        const username =  wrapper.find('input')
        await username.setValue("username")
        expect(username.element.value).toBe("username")
    })
    


    
})

test('Registration input test.', async() => {
    const wrapper = mount(RegistrationView)

    expect(wrapper.exists()).toBe(true)

    const email = wrapper.find(".registration-email")
    const username =  wrapper.find(".registration-username")
    const password = wrapper.find(".registration-password")
    const fullname = wrapper.find(".registration-fullname")
    const birthdate = wrapper.find(".registration-birthdate")
    const bio = wrapper.find(".registration-bio")

    await email.setValue("test@mail.com")
    await username.setValue("username")
    await password.setValue("password")
    await fullname.setValue("fullname")
    await birthdate.setValue("2018-07-22")
    await bio.setValue("bio")

    expect(email.element.value).toBe("test@mail.com")
    expect(username.element.value).toBe("username")
    expect(password.element.value).toBe("password")
    expect(fullname.element.value).toBe("fullname")
    expect(birthdate.element.value).toBe("2018-07-22")
    expect(bio.element.value).toBe("bio")
})