var sidebar = Vue.component('sidebar',{
    name: 'sidebar',
    data() {
        return {
        }
    },
    template: `
        <div>
            <b-sidebar 
                id="sidebar-1"
                title="Vistas"
                bg-variant="light"
                text-variant="dark"
                shadow
            >
                <div>
                    <b-list-group>
                        <b-list-group-item button>General</b-list-group-item>
                        <b-list-group-item button>Evolución de Precios</b-list-group-item>
                        <b-list-group-item button>Posicionamiento</b-list-group-item>
                        <b-list-group-item button>Estadísticas</b-list-group-item>
                    </b-list-group>
                </div>
            </b-sidebar>
        </div>
    `
})
