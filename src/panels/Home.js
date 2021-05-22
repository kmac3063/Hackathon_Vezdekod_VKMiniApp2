import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {
    Panel,
    PanelHeader,
    Header,
    Button,
    Group,
    Cell,
    Div,
    Avatar,
    SimpleCell,
    Switch,
    FormItem, Select
} from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";

const Home = ({id, go, fetchedUser, scheme}) => {
    const START_SIZE = 8

    const [bitsSize, setBitsSize] = useState(START_SIZE)
    const [bitsInSecond, setBitsInSecond] = useState(Array.from({length: bitsSize}, (v, i) => 0))
    const [currentSecond, setCurrentSecond] = useState(0)
    const [myInterval, setMyInterval] = useState(null)

    const switchChange = (index, value) => {
        stopPressed()
        bitsInSecond[index] = bitsInSecond[index] ^ 1
    }

    const startPressed = (bits) => {
        if (myInterval !== null) {
            clearInterval(myInterval)
        }
        let sec = 0
        setCurrentSecond(1)
        console.log(bits[0])
        bridge.send("VKWebAppFlashSetLevel", {"level": bits[0]});
        let timerId = setInterval(() => {
            sec = (sec + 1) % (bitsSize)
            setCurrentSecond(sec + 1)
            console.log(bits[sec])
            bridge.send("VKWebAppFlashSetLevel", {"level": bits[sec]});
        }, 1000);
        setMyInterval(timerId)
    }

    const stopPressed = () => {
        clearInterval(myInterval)
        setCurrentSecond(0)
        console.log("Stop!")
        bridge.send("VKWebAppFlashSetLevel", {"level": 0});
    }

    return <Panel id={id}>
        <PanelHeader>Один-ноль фонарик</PanelHeader>
        <Group>
            <Div style={{display: 'flex'}}>
                <Button size="l" stretched style={{marginRight: 8}} onClick={
                    () => {startPressed(bitsInSecond)}}>Начать</Button>
                <Button size="l" stretched mode="secondary" onClick={stopPressed}>Остановить</Button>
            </Div>
        </Group>
        <Group>
            <Header mode="secondary">Управление секундами</Header>
            <Div style={{display: "flex", justifyContent:"space-between", overflow:"auto"}}>
                {bitsInSecond.map((bool, index) => {
                    return <Div key={index} style={{padding:"0", backgroundColor: index + 1 === currentSecond? "#D7FDDB": "#FFFFFF"}}>
                        <Div style={{padding:"0"}}>{index + 1} сек</Div>
                        <Switch  onChange={(e) => {switchChange(index, e.target.value); }}/>
                    </Div>
                })
                }
            </Div>
        </Group>
    </Panel>
}

export default Home;
