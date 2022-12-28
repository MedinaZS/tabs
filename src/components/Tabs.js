import React from 'react'

const Tabs = ({ tabs, setTabs }) => {

    const handleClick = (e,item) => {
        let newTabs = [];

        //Quitar al que tiene active
        newTabs = tabs.map((tab) => {
            //Modificar el estado del tab clickeado a true
            if (tab.titulo === item.titulo) {
                console.log({ ...tab, estado: !tab.estado });
                return { ...tab, estado: !tab.estado };
            } else {
                //Modificar el estado del resto de tabs a false
                return { ...tab, estado: false };
            }
        });

        //Modificar el state tabs con newtabs
        setTabs([...newTabs]);

        //Alert de devolucion de llamada
        // alert("You clicked " + item.titulo);

    }

    return (
        <div className='row'>
            {/* Recorrer las pestañas */}
            {tabs.map((tab, i) =>
                <div
                    key={i}
                    className={'tabs ' + (tab.estado ? 'active' : '')}
                    //Devolucion de llamada
                    onClick={(e) => handleClick(e, tab) }> 

                    {tab.titulo}
                </div>
            )}
        </div>
    )
}

export default Tabs