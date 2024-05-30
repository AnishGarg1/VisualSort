import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Quick = () => {
    const dispatch = useDispatch();
    const { arr, size, sorting } = useSelector((state) => state.array);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const quickSort = () => {
        let currArr = [...arr];
    }

    useEffect(() => {
        if(sorting){
            quickSort();
        }
    }, [sorting])

  return (
    <></>
  )
}

export default Quick