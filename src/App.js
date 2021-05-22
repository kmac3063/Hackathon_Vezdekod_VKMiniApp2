import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import WelcomeScreen from "./panels/WelcomeScreen";

const App = () => {
    const [activePanel, setActivePanel] = useState('WelcomeScreen');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });

        async function fetchData() {
            setPopout(null);
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
        }

        async function checkAvailable() {
            bridge.send("VKWebAppFlashGetInfo").then(
                (p) => {
                    if (!p.is_available) {
                        alert("Нет фонарика")
                    }
                }
            )
        }



        fetchData();
        checkAvailable()
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel={activePanel} popout={popout}>
                    <WelcomeScreen id='WelcomeScreen' fetchedUser={fetchedUser} go={go}/>
                    <Home id='Home' fetchedUser={fetchedUser} go={go}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;
