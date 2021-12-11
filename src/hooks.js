import { useState } from "react"
import axios from 'axios'

function useFlip(initialState = true) {
    const [flipped, setFlipped] = useState(initialState)

    const flip = () => {
        setFlipped(isUp => !isUp)
    }

    return [flipped, flip]
}

function useAxios(url) {
    const [res, setRes] = useState([])

        const addCard = async (filter = data => data, restOfUrl = "") => {
            const response = await axios.get(`${url}${restOfUrl}`);
            setRes(data => [...data, filter(response.data)]);
        }

    return [ res, addCard ]
}

export { useFlip, useAxios }

