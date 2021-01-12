var navBar = Vue.component('nav-bar',{
    name: 'nav-bar',
    data() {
        return {
        }
    },
    template: `
        <div fluid style="margin-bottom: 65px;">
            <b-navbar type="light" variant="light" fixed="top">
                <b-navbar-nav>
                    <b-nav-item href="#">
                        <b-button variant="light" v-b-toggle.sidebar.sidebar-1>
                            <b-icon icon="chevron-double-right"></b-icon>
                        </b-button>       
                    </b-nav-item>
                </b-navbar-nav>
                <b-navbar-brand>Mi Marca</b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">
                        <b-icon icon="person-circle"></b-icon>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
    `
})
