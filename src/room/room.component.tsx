import React, { Fragment, useEffect, useContext, useReducer } from 'react'
import Axios from 'axios'
import { Button } from 'antd'
import RoomContext from './room.context'
import { RoomReducer } from './room.reducer'
import Rooms from './room.interface'


const GetRequest = (id: number): Promise<Rooms> => {
    return Axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`
    }).then(response => {
        return { ...response.data };
    });
};

const RoomComponent: React.FC = () => {

    const room = useContext<any>(RoomContext)
    const [state, dispatch] = useReducer(RoomReducer, room)

    useEffect(() => {
        if (!state.hasExecuted) {
            GetRequest(11)
                .then((data: Rooms) => {
                    dispatch({
                        type: 'SET_ROOM',
                        payload: data
                    })
                })
        }
    }, [state.hasExecuted])
    
    return (
        <Fragment>
            <div>Name: {state.name}</div>
            <div>Floor: {state.floor}</div>
            <Button type="primary" onClick={() => {
                dispatch({
                    type: 'SET_ROOM',
                    payload: {
                        id: 'myId',
                        title: 'myFloor'
                    }
                })
            }}>Test</Button>
        </Fragment>
    )
}

export default RoomComponent