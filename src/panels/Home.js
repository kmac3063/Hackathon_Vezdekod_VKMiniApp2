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

const Home = ({id, go, fetchedUser}) => {
    const START_SIZE = 8

    const [bitsSize, setBitsSize] = useState(START_SIZE)
    const [bitsInSecond, setBitsInSecond] = useState(Array.from({length: bitsSize}, (v, i) => 0))
    const [enable, setEnable] = useState(false)
    const [currentSecond, setCurrentSecond] = useState(0)
    const [myInterval, setMyInterval] = useState(null)

    const getString = (index) => {
        let i = index + 1
        if (i % 10 === 3) {
            return i + "-я секунда"
        }
        return i + "-ая секунда"
    }

    const getSecondOptions = () => {
        let res = []
        for (let i = 1; i <= 60; i++) {
            res.push({value: (i - 1), label: i + " сек."})
        }
        return res
    }

    const switchChange = (index, value) => {
        setEnable(false)
        stopPressed()
        bitsInSecond[index] = bitsInSecond[index] ^ 1
    }

    const startPressed = () => {
        if (myInterval !== null) {
            clearInterval(myInterval)
        }
        let sec = 1
        setCurrentSecond(1)
        console.log(bitsInSecond[sec - 1])
        bridge.send("VKWebAppFlashSetLevel", {"level": bitsInSecond[sec - 1]});
        let timerId = setInterval(() => {
            sec = 1 + (sec) % (bitsSize)
            setCurrentSecond(sec)
            console.log(bitsInSecond[sec - 1])
            bridge.send("VKWebAppFlashSetLevel", {"level": bitsInSecond[sec - 1]});
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
            <FormItem top="Количество секунд">
                <Select
                    placeholder="Выбрать"
                    options={getSecondOptions()}
                    value={bitsSize - 1}
                    onChange={(e) => {
                        setBitsSize(parseInt(e.target.value) + 1)
                        setBitsInSecond(Array.from({length: parseInt(e.target.value) + 1}, (v, i) => 0))
                        stopPressed()
                        setEnable(false)
                    }}
                />
            </FormItem>
            <Div style={{display: 'flex'}}>
                <Button size="l" stretched style={{marginRight: 8}} onClick={startPressed}>Начать</Button>
                <Button size="l" stretched mode="secondary" onClick={stopPressed}>Остановить</Button>
            </Div>
        </Group>
        <Group>
            <Header mode="secondary">Управление секундами</Header>
            {bitsInSecond.map((bool, index) => {
                return <SimpleCell key={index}
                   after={<Switch onChange={(e) => {switchChange(index, e.target.value); }}/>}
                    style={{backgroundColor: index + 1 === currentSecond? "#D7FDDB": "#FFFFFF"}}
                >
                    {getString(index)}
                </SimpleCell>
            })
            }
        </Group>
    </Panel>
}

export default Home;
